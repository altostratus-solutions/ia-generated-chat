from fastapi import FastAPI,Depends
from functools import lru_cache
from typing_extensions import Annotated
import config
app = FastAPI()


@lru_cache()
def get_settings():
    return config.Settings()

@app.get("/")
def read_root(settings: Annotated[config.Settings, Depends(get_settings)]):
    return {
      "context":  settings.model_context,
      "examples": settings.model_examples_json
    }