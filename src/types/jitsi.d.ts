interface JitsiMeetExternalAPIOptions {
  roomName: string;
  parentNode: HTMLElement;
  configOverwrite?: Record<string, any>;
  interfaceConfigOverwrite?: Record<string, any>;
  userInfo?: {
    displayName: string;
  };
}

interface JitsiMeetExternalAPI {
  addEventListener: (event: string, callback: () => void) => void;
  removeEventListener: (event: string, callback: () => void) => void;
  dispose: () => void;
}

declare global {
  interface Window {
    JitsiMeetExternalAPI: new (domain: string, options: JitsiMeetExternalAPIOptions) => JitsiMeetExternalAPI;
  }
}

export {};
