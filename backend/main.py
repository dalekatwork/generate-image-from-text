from functools import lru_cache

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from typing_extensions import Annotated

from schemas import TextToImage
from utils import util_convert_text_to_image

import config

@lru_cache()
def get_settings():
    return config.Settings()

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/convert_text_to_image",responses = { 200: { "content": {"application/octet-stream": {}} }})
async def convert_text_to_image(payload: TextToImage, settings: Annotated[config.Settings, Depends(get_settings)]):
    return util_convert_text_to_image(settings, payload)