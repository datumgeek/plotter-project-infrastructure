CREATE DATABASE DemoData;
GO
USE DemoData
GO
CREATE TABLE Products (ID int, ProductName nvarchar(max));
GO
RESTORE DATABASE Northwnd
	FROM DISK = '/usr/src/app/Northwind.bak'
	WITH
		MOVE 'Northwind' TO '/usr/src/app/NORTHWND.mdf',
		MOVE 'Northwind_log' TO '/usr/src/app/NORTHWND.ldf';
GO