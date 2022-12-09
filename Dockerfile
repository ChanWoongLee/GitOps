FROM node:10

COPY . /app

# WORKDIR /app/frontend
# RUN yarn install
# RUN yarn build


WORKDIR /app/backend
RUN yarn install



