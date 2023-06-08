from pydantic import BaseModel

class InputOutputTextPair(BaseModel):
    input_text: str
    output_text: str
    
