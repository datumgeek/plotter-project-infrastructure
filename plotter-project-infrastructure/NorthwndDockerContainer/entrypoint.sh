#start SQL Server and start the script to restore the database backup
/opt/mssql/bin/sqlservr.sh & /usr/src/app/import-data.sh

#hack to keep sql server container from exiting
while true; do sleep 10s; done