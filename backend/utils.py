from fastapi.responses import Response
import requests, config
from schemas import TextToImage

def util_convert_text_to_image(settings: config.Settings, payload: TextToImage):

    url = settings.api_url
    body = {
        "steps": 40,
        "width": 1024,
        "height": 1024,
        "seed": 0,
        "cfg_scale": 5,
        "samples": 1,
        "text_prompts": [
            {
                "text": payload.text,
                "weight": 1
            },
        ],
    }
    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer {}".format(settings.api_key),
    }

    response = requests.post(
        url,
        headers=headers,
        json=body,
    )

    if response.status_code != 200:
        raise Exception("Non-200 response: " + str(response.text))
    data = response.json()
    result_image = data["artifacts"][0]
    
    return Response(content=result_image["base64"], media_type="application/octet-stream")