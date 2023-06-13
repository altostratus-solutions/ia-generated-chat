from fastapi import FastAPI, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from typing_extensions import Annotated
from services import get_settings, predict_large_language_model_sample
import logging
import config
from data.firestore import db

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


PARAMETERS = {
    "temperature": 0.2,
    "max_output_tokens": 256,
    "top_p": 0.8,
    "top_k": 40,
}

METADATA = {
    "project_id": "ia-generated-chat-demo",
    "model_name": "chat-bison@001",
    "location": "us-central1",
}

@app.post("/")
async def read_root(req: Request, settings: Annotated[config.Settings, Depends(get_settings)]):

    request_json = await req.json()
    logging.info(request_json)

    CHAT = predict_large_language_model_sample(**PARAMETERS,**METADATA,
                                        context=settings.model_context, examples=settings.model_examples_json
                                               )

    return { 
        "text":  CHAT.send_message(request_json['message']['text']) .text
    }

@app.get("/")
async def get_chatbots():
    chatbots_ref = db.collection(u'Test')
    docs = chatbots_ref.stream()
    return [doc.to_dict() for doc in docs]


@app.post("/model/test")
async def test_model(req: Request):
    request_json = await req.json()
    logging.info(request_json)
    
    CHAT = predict_large_language_model_sample(**PARAMETERS,**METADATA,
                                        context=request_json['context'], examples=request_json['examples']
                                               )

    return { 
        "text":  CHAT.send_message(request_json['message']['text']) .text
    }
    