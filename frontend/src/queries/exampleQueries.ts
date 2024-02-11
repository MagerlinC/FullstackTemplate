import { PostExampleRequest } from '@abstractions/ExampleDomain/Post';
import { getExamples, postExample } from '../services/exampleService';
import { useQuery, useMutation, QueryClient } from '@tanstack/react-query';
import { ExampleDTO } from '@abstractions/ExampleDomain/DTO';

const exampleQueryKeys = {
  all: ['all'],
};

export const useExamples = (initialData: ExampleDTO[]) => {
  return useQuery({
    queryKey: exampleQueryKeys.all,
    initialData: initialData,
    queryFn: () => {
      return getExamples();
    },
  });
};

export const useCreateExample = (queryClient: QueryClient) => {
  return useMutation({
    mutationFn: (request: PostExampleRequest) => {
      return postExample(request);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: exampleQueryKeys.all });
    },
  });
};
