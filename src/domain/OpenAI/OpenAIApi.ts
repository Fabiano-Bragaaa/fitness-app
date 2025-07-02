import { api } from "@api";

import { OpenAiApi } from "./OpenAITypes";

async function OpenAi(message: string): Promise<OpenAiApi> {
  const { data } = await api.post<OpenAiApi>("/openai/chatCompletion", {
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });

  return data;
}

export const openAiApi = {
  OpenAi,
};
