#!/bin/bash

echo -e "\n---	Generating private key	---\n"

openssl genrsa -f4 -out private.pem 4096

echo -e "\n---	Converting to pkcs8	---\n"

openssl pkcs8 -topk8 -inform pem -in private.pem -outform PEM -nocrypt -out private-key.pem

echo -e "\n---	Exporting publix x.509	---\n"

openssl rsa -in private-key.pem -outform PEM -pubout -out public-key.pem