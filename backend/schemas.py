from pydantic import BaseModel, constr

class TextToImage(BaseModel):
    text: constr(min_length=3)
