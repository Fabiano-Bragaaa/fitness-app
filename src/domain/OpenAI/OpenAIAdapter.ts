import { OpenAi, OpenAiApi } from "./OpenAITypes";

function toPost(openAiAPI: OpenAiApi): OpenAi {
  return {
    id: openAiAPI.id,
    message: openAiAPI.choices[0].message.content,
    from: "other",
  };
}

export const openAiAdapter = {
  toPost,
};
