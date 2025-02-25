import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { Navigation } from './navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PaperProvider, MD3DarkTheme as DefaultTheme} from 'react-native-paper';

import 'setimmediate';

Asset.loadAsync([
  ...NavigationAssets
]);

const theme = {
  ...DefaultTheme
}

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <Navigation
          linking={{
            enabled: 'auto',
            prefixes: [
              // Change the scheme to match your app's scheme defined in app.json
              'helloworld://',
            ],
          }}
          onReady={() => {
            SplashScreen.hideAsync();
          }}
        />
      </PaperProvider>
    </QueryClientProvider>
  );
}
