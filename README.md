# 📹 Videollamadas Privadas - Video Call App

Aplicación de videollamadas privadas e individuales en español, construida con React, Next.js y Jitsi Meet.

## ✨ Características

- ✅ **Videollamadas privadas** - Llamadas seguras y cifradas
- ✅ **Sin costo** - Completamente gratuito, sin publicidades
- ✅ **Sin registro** - No requiere cuenta o instalación
- ✅ **Rápido** - Conexión instantánea
- ✅ **Interfaz en español** - Totalmente traducida
- ✅ **Responsive** - Funciona en desktop, tablet y móvil
- ✅ **Open Source** - Usa Jitsi Meet (open source)
- ✅ **Sin instalación** - Funciona directamente en el navegador

## 🚀 Inicio Rápido

### Requisitos previos
- Node.js 16.x o superior
- npm o yarn

### Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/jonymixe25/video-call-app.git
cd video-call-app
```

2. **Instala las dependencias**
```bash
npm install
# o
yarn install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abre tu navegador**
Ve a `http://localhost:3000/videocall`

## 📝 Cómo Usar

1. Ingresa tu nombre en el formulario
2. Crea un nombre único para tu sala de videollamada
3. Comparte el nombre de la sala con la otra persona
4. ¡Listo! Podrán conectarse cuando ambos estén en la sala

### Ejemplo
- **Tu nombre:** Juan
- **Nombre de sala:** reunion-confidencial-123
- Comparte "reunion-confidencial-123" con la otra persona
- Cuando ambos entren a esa sala, se conectarán automáticamente

## 🏗️ Estructura del Proyecto

```
video-call-app/
├── src/
│   ├── components/
│   │   ├── VideoCall.tsx          # Componente principal de videollamada
│   │   └── VideoCall.module.css   # Estilos del componente
│   ├── pages/
│   │   ├── videocall.tsx          # Página principal
│   │   └── _app.tsx               # App wrapper
│   ├── styles/
│   │   ├── videocall.module.css   # Estilos de la página
│   │   └── globals.css            # Estilos globales
│   └── types/
│       └── jitsi.d.ts             # Tipos para Jitsi
├── public/                         # Archivos estáticos
├── next.config.js                  # Configuración de Next.js
├── tsconfig.json                   # Configuración de TypeScript
├── package.json                    # Dependencias
└── README.md                        # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework React para producción
- **React 18** - Librería de UI
- **TypeScript** - Lenguaje con tipado estático
- **Jitsi Meet** - Engine de videollamadas open source
- **CSS Modules** - Estilos scoped
- **WebRTC** - Protocolo de comunicación en tiempo real

## 🔒 Seguridad

- Las videollamadas están cifradas end-to-end
- No se requiere registro o login
- Los servidores de Jitsi no almacenan datos de las llamadas
- Los datos se transmiten directamente entre los participantes

## 📦 Construcción para Producción

1. **Build optimizado**
```bash
npm run build
# o
yarn build
```

2. **Inicia el servidor de producción**
```bash
npm run start
# o
yarn start
```

## 🌐 Despliegue

### En Vercel (Recomendado)
1. Crea una cuenta en [Vercel](https://vercel.com)
2. Importa este repositorio
3. Vercel desplegará automáticamente

### En otros servicios
La aplicación es compatible con:
- Netlify
- GitHub Pages
- AWS
- Google Cloud
- DigitalOcean
- Heroku

## 🐛 Solución de Problemas

### La videollamada no carga
- Verifica tu conexión a internet
- Asegúrate de que tu navegador permite acceso a cámara y micrófono
- Intenta en un navegador diferente

### No puedo acceder a cámara/micrófono
- Revisa los permisos del navegador
- Asegúrate de que no hay otra aplicación usando los dispositivos
- Reinicia el navegador

### Problemas de conexión
- Verifica tu conexión a Internet
- Si usas VPN, intenta desactivarla
- Cierra otras pestañas con videollamadas

## 📚 Documentación Adicional

- [Documentación de Jitsi Meet](https://jitsi.org/user-faq/)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de React](https://react.dev)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios mayores:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la MIT License - ver el archivo LICENSE para detalles.

## ✉️ Contacto

- **GitHub:** [@jonymixe25](https://github.com/jonymixe25)
- **Reporte de bugs:** [Issues](https://github.com/jonymixe25/video-call-app/issues)

## 🎯 Roadmap Futuro

- [ ] Videollamadas de grupo
- [ ] Grabación de llamadas
- [ ] Compartir pantalla mejorado
- [ ] Chat de texto
- [ ] Historial de llamadas
- [ ] Temas personalizables
- [ ] Modo oscuro/claro
- [ ] Notificaciones de llamada entrante

## ⭐ Agradecimientos

- [Jitsi](https://jitsi.org/) - Por el excelente engine de videollamadas
- [Next.js](https://nextjs.org/) - Por el framework
- Todos los contribuidores

---

Hecho con ❤️ por [jonymixe25](https://github.com/jonymixe25)
