import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Initialize Capacitor plugins if available
const initCapacitor = async () => {
  try {
    // Check if running in Capacitor
    const { Capacitor } = await import('@capacitor/core');
    
    if (Capacitor.isNativePlatform()) {
      // Import and configure StatusBar
      const { StatusBar, Style } = await import('@capacitor/status-bar');
      await StatusBar.setStyle({ style: Style.Dark });
      await StatusBar.setBackgroundColor({ color: '#0f172a' });
      
      // Import and hide SplashScreen after app is ready
      const { SplashScreen } = await import('@capacitor/splash-screen');
      await SplashScreen.hide();
    }
  } catch (e) {
    // Not running in Capacitor or plugins not available
    console.log('Running in browser mode');
  }
};

// Register service worker for PWA
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered');
    } catch (e) {
      console.log('Service Worker registration failed');
    }
  }
};

// Initialize app
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Initialize Capacitor and PWA
initCapacitor();
registerServiceWorker();
