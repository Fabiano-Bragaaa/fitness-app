import { openAiAdapter } from "./OpenAIAdapter";
import { openAiApi } from "./OpenAIApi";
import { OpenAi } from "./OpenAITypes";

async function openAi(message: string): Promise<OpenAi> {
  const response = await openAiApi.OpenAi(message);

  return openAiAdapter.toPost(response);
}

export const openAiService = {
  openAi,
};
