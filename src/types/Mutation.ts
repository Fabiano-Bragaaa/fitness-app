export type MutationOptions<TData> = {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
};
