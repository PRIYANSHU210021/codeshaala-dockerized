

## 🐳 Docker Setup Guide

This project supports both individual container builds and multi-container orchestration using **Docker Compose**.
Follow the steps below to run the application smoothly.

---

###  **For Individual Build & Run**

####  **Build Docker Image**

```bash
docker build -t <image-name> .
```

####  **Run Docker Container**

```bash
docker run -it --name <container-name> -p <host_port>:<container_port> <image-name>
```

> Example:
>
> ```bash
> docker build -t codeshaala-backend .
> docker run -it --name backend-container -p 4000:4000 codeshaala-backend
> ```

---

###  **For Docker Compose Setup**

####  **Start All Services**

```bash
docker compose up --build
```

####  **Stop All Services**

```bash
docker compose down
```

####  **Rebuild Containers (if needed)**

```bash
docker compose up --build --force-recreate
```

---

###  **Project Services Overview**

| Service              | Port (Container → Host) | Description                              |
| -------------------- | ----------------------- | ---------------------------------------- |
| 🖥️ Server (Backend) | `3000 → 3000`           | Handles APIs and business logic          |
| 💻 Client (Frontend) | `3000 → 5173`           | Renders UI and communicates with backend |
| 🌐 Network           | `fullstack-net`         | Custom bridge network for communication  |

---

###  **Notes**

* Both containers share the same custom Docker network for seamless communication.
* The `restart: unless-stopped` policy ensures containers automatically restart on crash or system reboot.
* You can visualize running containers using:

  ```bash
  docker ps
  ```
* Logs for a specific service can be viewed via:

  ```bash
  docker logs <container-name>
  ```

---
