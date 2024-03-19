import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.count',
  appName: 'count',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
