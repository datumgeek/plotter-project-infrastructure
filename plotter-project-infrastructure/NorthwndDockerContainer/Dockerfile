FROM microsoft/mssql-server-linux:latest

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy the sql scripts
COPY . /usr/src/app

# get the dos2unix utility to convert scripts
RUN apt-get update && apt-get install -y dos2unix
RUN dos2unix entrypoint.sh
RUN dos2unix import-data.sh
RUN dos2unix Products.csv
RUN dos2unix setup.sql

# grant permission for the import data script to be executable
RUN chmod +x /usr/src/app/import-data.sh

EXPOSE 1433

CMD /bin/bash ./entrypoint.sh
