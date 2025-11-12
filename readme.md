#Frontend / #Backend

for build image
    docker build -t <image-name> .

for build container 
    docker run -it --name <name-of-container> -p host_port : container_port <image_name>

#For Compose file:
    docker compose up
    docker run 