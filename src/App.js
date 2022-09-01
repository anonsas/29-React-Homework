import './App.scss';
import Main from './8-useRef/Main';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Main />
        <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
      </QueryClientProvider>
    </>
  );
}

export default App;
