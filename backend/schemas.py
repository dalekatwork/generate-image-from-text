from pydantic import BaseModel

class TextToImage(BaseModel):
    text: str
