import React, { useEffect, useRef, useState } from 'react';
import styles from './VideoCall.module.css';

interface VideoCallProps {
  roomName: string;
  userName: string;
  onDisconnect?: () => void;
}

const VideoCall: React.FC<VideoCallProps> = ({ roomName, userName, onDisconnect }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeJitsi = async () => {
      try {
        setIsLoading(true);
        
        // Cargar el script de Jitsi
        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
          if (containerRef.current && (window as any).JitsiMeetExternalAPI) {
            const domain = 'meet.jit.si';
            const options = {
              roomName: roomName,
              parentNode: containerRef.current,
              configOverwrite: {
                startWithAudioMuted: false,
                startWithVideoMuted: false,
                disableSimulcast: false,
              },
              interfaceConfigOverwrite: {
                LANG_DETECTION: false,
                DEFAULT_LANGUAGE: 'es',
                SHOW_JITSI_WATERMARK: false,
                TOOLBAR_BUTTONS: [
                  'microphone',
                  'camera',
                  'closedcaptions',
                  'desktop',
                  'fullscreen',
                  'hangup',
                  'info',
                  'chat',
                  'settings',
                  'raisehand',
                  'videoquality',
                  'filmstrip',
                  'invite',
                  'feedback',
                  'stats',
                  'shortcuts',
                  'tileview',
                ],
              },
              userInfo: {
                displayName: userName,
              },
            };

            const api = new (window as any).JitsiMeetExternalAPI(domain, options);

            api.addEventListener('videoConferenceLeft', () => {
              if (onDisconnect) {
                onDisconnect();
              }
            });

            api.addEventListener('readyToClose', () => {
              if (onDisconnect) {
                onDisconnect();
              }
            });

            setIsLoading(false);
          }
        };

        script.onerror = () => {
          setError('No se pudo cargar el servicio de videollamadas');
          setIsLoading(false);
        };
      } catch (err) {
        setError('Error al inicializar la videollamada');
        setIsLoading(false);
      }
    };

    initializeJitsi();
  }, [roomName, userName, onDisconnect]);

  return (
    <div className={styles.container}>
      {isLoading && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Cargando videollamada...</p>
        </div>
      )}
      {error && (
        <div className={styles.error}>
          <p>❌ {error}</p>
          <p>Por favor, intenta de nuevo más tarde.</p>
        </div>
      )}
      <div ref={containerRef} className={styles.jitsiContainer} />
    </div>
  );
};

export default VideoCall;
