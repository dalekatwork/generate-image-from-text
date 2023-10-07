import TextToImage from "@/types";
import axios, { AxiosError } from "axios";

const API_URL = 'http://127.0.0.1:8000'

export default async function generateImage(payload: TextToImage) {
  const response = await axios.post(API_URL + "/convert_text_to_image", payload)
    .catch((error: AxiosError) => {
      if (error instanceof Error) {
        console.error(
          "Error with fetching ..., details: ",
          error
        );
      }
    });
  return response;
}
