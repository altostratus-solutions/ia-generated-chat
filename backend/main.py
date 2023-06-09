from fastapi import FastAPI, Depends, Request
from typing_extensions import Annotated
from services import get_settings, predict_large_language_model_sample
import logging
import config


app = FastAPI()


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

    CHAT = predict_large_language_model_sample(**PARAMETERS,**METADATA, context=settings.model_context, examples=settings.model_examples_json
                                               )

    return {
        "text":  CHAT.send_message(request_json['message']['text'], **PARAMETERS) .text
    }
