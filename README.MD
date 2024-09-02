# 🐦 **Twitter Bot**

Bienvenido al repositorio de mi **Twitter Bot**. Este bot permite publicar tweets en Twitter usando la API de Twitter. Aquí encontrarás toda la información que necesitas para entender y utilizar el código.

---

## 🧩 **¿Qué hace el bot?**

El bot tiene la capacidad de:
- 🚀 Publicar tweets en tu cuenta de Twitter.
- 🔄 Utilizar la API de Twitter para interactuar con tu cuenta.

---

## ⚙️ **Configuración del Entorno**

1. **Clona el Repositorio**

   ```bash
   git clone https://github.com/tu_usuario/twitter-bot.git
   cd twitter-bot
   

2. **Instala las Dependencias**
    ```bash
    npm install
    

## Configura el Archivo de Variables de Entorno

Crea un archivo .env en la raíz del proyecto y agrega tus credenciales de Twitter:

TWITTER_API_KEY='tu_api_key'
TWITTER_API_SECRET_KEY='tu_api_secret_key'
TWITTER_ACCESS_TOKEN='tu_access_token'
TWITTER_ACCESS_TOKEN_SECRET='tu_access_token_secret'

**Ejecuta el bot**
    ```bash
    npx ts-node bot.ts


# 📝 Explicación del Código

## Instalación de Dependencias

El bot utiliza las siguientes dependencias:

twitter-api-v2: Para interactuar con la API de Twitter.

dotenv: Para cargar variables de entorno desde el archivo .env.

# 🔧 Errores Comunes y Soluciones

Error 403: Invalid consumer tokens

Solución: Asegúrate de que todos los tokens y claves en el archivo .env sean correctos y que tu aplicación tenga los permisos necesarios.
Error 403: Unsupported Authentication

Solución: Verifica que estás utilizando OAuth 2.0 User Context y no OAuth 2.0 Application-Only.


# 📜 Licencia
Este proyecto está licenciado bajo la Licencia MIT.

# 🌟 Contribuye
¡Las contribuciones son bienvenidas! Si tienes sugerencias o mejoras, por favor abre un issue o envía un pull request.

# 📬 Contacto
Para cualquier duda o consulta, puedes contactarme en mi correo: [nicolasleyvah@outlook.com](mailto:nicolasleyvah@outlook.com)

