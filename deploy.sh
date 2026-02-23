#!/bin/bash

docker compose up --build --remove-orphans

docker login

sudo docker push errohit07/frontend:v1
sudo docker push errohit07/backend:v2


