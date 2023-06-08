from pydantic import BaseSettings


class Settings(BaseSettings):
    model_context: str
    model_examples_json: str

    class Config:
        env_file = ".env"