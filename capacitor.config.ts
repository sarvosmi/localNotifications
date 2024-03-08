import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'localNotifications',
  webDir: 'www',
  bundledWebRuntime: false,

  plugins: {
    LocalNotifications: {      
      iconColor: "#FF7F50",
      sound: "birds.wav",
    },
  },
 
};

export default config;
