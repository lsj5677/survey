# FROM origin
ARG DOCKER_NAME=survey-client-origin
FROM 420829132772.dkr.ecr.ap-northeast-2.amazonaws.com/${DOCKER_NAME}:latest

# Copy Project
# ec2안에 있는 경로
WORKDIR /usr/src/survey-client
COPY . .

# Build Project
RUN rm -rf node_modules
RUN rm -rf package-lock.json
RUN npm run genFirebaseConfig
RUN npm install
RUN npm run build
RUN npm run pm2-next

# Start Script
# COPY start.sh /root/start.sh
# RUN ["chmod", "+x", "/root/start.sh"]
# ENTRYPOINT /root/start.sh

RUN echo 안녕하세요

# 포트 열기
EXPOSE 3000