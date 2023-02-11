import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {MainApp} from './src/index';
import {MovieProvider} from '@context/movie';
import {UserProvider} from '@context/user';

// React Query config
const queryClient = new QueryClient();

const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <MovieProvider>
          <UserProvider>
            <MainApp />
          </UserProvider>
        </MovieProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
