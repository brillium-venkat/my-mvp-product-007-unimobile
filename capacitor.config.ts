import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.mycompany.myproduct.myunimobileapp",
  appName: "My MVP Product 007 Unimobile",
  webDir: "www",
  bundledWebRuntime: false,
  server: {
    hostname: "localhost",
    cleartext: true,
  },
  cordova: {
    preferences: {
      ScrollEnabled: "false",
      "android-minSdkVersion": "26",
      BackupWebStorage: "none",
      SplashMaintainAspectRatio: "true",
      FadeSplashScreenDuration: "300",
      SplashShowOnlyFirstTime: "false",
      SplashScreen: "screen",
      SplashScreenDelay: "3000",
    },
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};
export default config;
