import { ReactNode } from 'react';
import { UserContextProvider } from '@/modules/user-context';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

type AppProvidersProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        {children}
      </UserContextProvider>
    </QueryClientProvider>
  );
};
