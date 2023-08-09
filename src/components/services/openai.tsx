import axios from "axios";
import { OpenAIResponse } from "../../types";

export async function postData(prompt: string): Promise<OpenAIResponse> {
  const OPENAI_ENDPOINT = "https://api.openai.com/v1/chat/completions";

  try {
    const response = await axios.post<OpenAIResponse>(
      OPENAI_ENDPOINT,
      {
        prompt: prompt,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }
  } catch (e: any) {
    throw new Error(`Failed to fetch from OpenAI: ${e.message}`);
  }
}
