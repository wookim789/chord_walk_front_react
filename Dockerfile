FROM node:12.2.0-alpine

# 작업 폴더를 만들고 npm 설치
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@3.0.1 -g

# 소스를 작업폴더로 복사하고 앱 실행
COPY . /app
CMD ["npm", "install"]
CMD ["npm", "start"]