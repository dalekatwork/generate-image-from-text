import TextToImage from "@/types";
import axios from "axios";

const API_URL = 'http://127.0.0.1:8000'

export default async function generateImage(payload: TextToImage) {
  return await axios.post(API_URL + "/convert_text_to_image", payload);
}
