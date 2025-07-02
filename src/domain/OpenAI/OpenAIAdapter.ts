import { OpenAi, OpenAiApi } from "./OpenAITypes";

function toPost(openAiAPI: OpenAiApi): OpenAi {
  const choice = openAiAPI.choices?.[0];

  if (!choice?.message?.content) {
    throw new Error("Resposta inválida do modelo OpenAI.");
  }

  return {
    id: openAiAPI.id,
    message: choice.message.content,
    from: "other",
  };
}

export const openAiAdapter = {
  toPost,
};
