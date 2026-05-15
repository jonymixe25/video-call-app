import React, { useState } from 'react';
import VideoCall from '../components/VideoCall';
import styles from '../styles/videocall.module.css';

export default function VideoCallPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');

  const handleStartCall = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (userName.trim() && roomName.trim()) {
      setIsConnected(true);
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setUserName('');
    setRoomName('');
  };

  if (isConnected) {
    return <VideoCall roomName={roomName} userName={userName} onDisconnect={handleDisconnect} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h1>📹 Videollamadas Privadas</h1>
            <p>Conecta con alguien de forma segura y privada</p>
          </div>

          <form onSubmit={handleStartCall} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="userName">Tu Nombre</label>
              <input
                id="userName"
                type="text"
                placeholder="Ingresa tu nombre"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                maxLength={50}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="roomName">Nombre de la Sala</label>
              <input
                id="roomName"
                type="text"
                placeholder="Ej: reunion-confidencial-123"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                required
                maxLength={100}
              />
              <small>Comparte este nombre con la otra persona</small>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Iniciar Videollamada
            </button>
          </form>

          <div className={styles.features}>
            <h2>✨ Características</h2>
            <ul>
              <li>✅ Videollamadas privadas y seguras</li>
              <li>✅ Sin registro ni instalación</li>
              <li>✅ Completamente gratis</li>
              <li>✅ Cifrado end-to-end</li>
              <li>✅ Funciona en cualquier navegador</li>
              <li>✅ Interfaz en español</li>
            </ul>
          </div>

          <div className={styles.instructions}>
            <h2>📝 Cómo Usar</h2>
            <ol>
              <li>Ingresa tu nombre</li>
              <li>Crea un nombre único para la sala</li>
              <li>Comparte el nombre de la sala con la otra persona</li>
              <li>¡Cuando ambos entren, se conectarán automáticamente!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
