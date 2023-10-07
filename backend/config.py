from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    api_url: str
    api_key: str
    model_config = SettingsConfigDict(env_file=".env")