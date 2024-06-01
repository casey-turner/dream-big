FROM node:18 

#install pnpm globally
RUN npm install -g pnpm

#specify the working directory
WORKDIR /usr/src/app 

#copy the package.json and package-lock.json files into the root of the working directory
COPY package.json pnpm-lock.yaml ./

#install the dependencies using pnpm with the frozen-lockfile flag to ensure that the dependencies are locked
RUN pnpm install --frozen-lockfile

#copy the rest of the files into the working directory
COPY . .

#expose the port that the application will run on
EXPOSE 8080

#run the application
CMD ["pnpm", "start"]
