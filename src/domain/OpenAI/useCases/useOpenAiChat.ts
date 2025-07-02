import { useMutation } from "@tanstack/react-query";
import { MutationOptions } from "@types";

import { openAiService } from "../OpenAIService";
import { OpenAi } from "../OpenAITypes";

export function useOpenAiChat(options?: MutationOptions<OpenAi>) {
  const mutation = useMutation<OpenAi, Error, { message: string }>({
    mutationFn: ({ message }) => openAiService.openAi(message),
    retry: false,
    onSuccess: (openAi) => {
      if (options?.onSuccess) {
        options.onSuccess(openAi);
      }
    },
    onError: (error) => {
      if (options?.onError) {
        options.onError(error.message);
      }
      throw new Error(error.message);
    },
  });

  return {
    isLoading: mutation.isPending,
    chatOpenAi: (message: string) => mutation.mutate({ message }),
  };
}
