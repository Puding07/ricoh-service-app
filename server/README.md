# 🕵️‍♂️ RSA - API Szerver 🕵️‍♂️

A szerver köti össze az adatbázist a cliens alkalmazással

## Kulcs pár generálása

A **keys** mappában le kell futtatni a **generate-key.sh** bash kódot.

## Manuális kezelés

### Konténer Image létrehozása ➕

```
yarn build
```

### Letrehozott Konténer Image Futtatása 🚀

```
yarn start
```

### Szerver reakciójának ellenörzése ✔️

```
localhost:3010/api/
```

### Szerver log olvasása 👁️‍🗨️

```
docker ps
```

> - CONTAINER ID fog kelleni Fontos, hogy az rsa-server-hez tartozót másold ki

```
docker logs CONTAINER_ID
```

> - itt megjeleníti majd a LOG-ot az appnak
