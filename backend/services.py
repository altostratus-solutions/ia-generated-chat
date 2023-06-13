import vertexai
import config
from functools import lru_cache
from vertexai.preview.language_models import InputOutputTextPair, ChatModel
import json


@lru_cache()
def get_settings():
    return config.Settings()


def parse_json_examples(examples: list[object]) -> list[InputOutputTextPair] | None:
    try:
        parsed_examples = [InputOutputTextPair(example["inputText"],example["outputText"]) for example in examples]
        return parsed_examples
    except Exception as e:
        raise ValueError(f"Invalid JSON: {e}")


def predict_large_language_model_sample(
    project_id: str,
    model_name: str,
    temperature: float,
    max_output_tokens: int,
    top_p: float,
    top_k: int,
    context: str,
    examples: list[object],
    location: str = "us-central1",
):
    """Predict using a Large Language Model."""
    vertexai.init(project=project_id, location=location)

    chat_model = ChatModel.from_pretrained(model_name)
    parameters = {
        "temperature": temperature,
        "max_output_tokens": max_output_tokens,
        "top_p": top_p,
        "top_k": top_k,
    }
    parsed_examples = parse_json_examples(examples)
    chat = chat_model.start_chat(
        context=context, examples=parsed_examples, **parameters)
    return chat
