from fastapi.testclient import TestClient
from main import app, get_settings
import pytest, test_helpers

client = TestClient(app)

@pytest.fixture
def override_settings():
    yield test_helpers.override_settings

def test_override_settings(override_settings):
    settings = get_settings()
    assert settings.api_key is not None and settings.api_key != ''

    with override_settings(api_url=''):
        assert settings.api_url == ''

    assert settings.api_key is not None and settings.api_key != ''

    # Make sure first valid params are reverted to their original values
    with pytest.raises(AttributeError, match="'Settings' object has no attribute 'not_existant'"):
        with override_settings(api_url='', not_existant=True):
            pass

    assert settings.api_key is not None and settings.api_key != ''

@test_helpers.override_settings(api_url='')
def test_override_settings_decorator():
    settings = get_settings()

    assert settings.api_url == ''

def test_settings():
    settings = get_settings()

    assert settings.api_key is not None and settings.api_key != ''
    assert settings.api_url is not None and settings.api_url != ''

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to Image Generator Tool"}

def test_convert_text_to_image_no_payload():
    response = client.post("/convert_text_to_image")
    assert response.status_code == 422

def test_convert_text_to_image_empty_string_in_payload():
    response = client.post("/convert_text_to_image", json={"text": ""})
    assert response.status_code == 422

def test_convert_text_to_image_success_case():
    response = client.post("/convert_text_to_image", json={"text": "cat in a basket"})
    assert response.status_code == 200
    assert response.headers and response.headers.get('content-type') == "application/octet-stream"


