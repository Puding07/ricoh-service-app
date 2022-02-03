#!/bin/bash

echo "\n---			  Creating replsets				       ---\n"
/usr/bin/mongod --fork --syslog --bind_ip_all --journal --replSet rsamongo

echo "\n---		  Executing initialize script			   ---\n"
mongo mongodb://localhost:27017 /mongo/init.js

sleep 2

echo "\n---				Creating DB 			           ---\n"
mongo mongodb://localhost:27017 /mongo/init-db.js

while true
do
	echo "."
	sleep 10000
done
