# 💾 RSA - Adatbázis (Mongo) 💾

## Leírás

Az adatbázis nem relációs tehát noSQL-en alapul, a **Mongo** nevezetű szoftveren fut.

Az adatbázis adatait a **Docker** tárolja úgynevezett **meghajtókon** (későbbiekben **Volumes**). Ha bármi okból új szerver gépre kellene áthelyezni az alkalmazást, akkor a **Docker Volumes-ból** ki lehet exportálni azt és, majd az újba beimportálni az adatvesztést elkerülve.

A **Mongo adatbázishoz** (későbbiekben **DB**) tartozik egy **konzolos CLI (Command Line Interface)** interfész. A **CLI-ben** írni és olvasni is lehet az adatokat. A **Mongo-n** belül az adatszerkezetek felépítése egymás alá ágyazott. Példaként itt a lenti "ábra".

> - Databases (Adatbázisok) pl.: admin, local, gls
> - Collections (Gyűjtemények) pl.: users, rhu, rau
> - Data (Adatok) pl.: {"\_id":{"$oid":"6171bc92b76ef82f57e1108b"},"name":"user123","role":"user","email":"","phone":"","pw":"","performance":[]}

Fontos, hogy bizonyos adatok titkosítottak pl.: jelszavak. Az adatok titkosításához a **Szerver API** ad lehetőséget.

## Manuális indítás, leállítás:

### Start 🚀

```
docker-compose up -d
```

### Stop 🛑

```
docker-compose down
```

## Adatbázi kezelése:

### Futás ellenörzése ✔️

```
docker ps
```

### CLI megnyitása 📄

```
docker exec -it gls-db mongo
```

### CLI parancsok segítsége ❓

```
help
```

### Create user for db Authentication ➕

```
db.createUser({user: "admin", pwd: "admin123", roles: ["readWrite"]})
```

### Adatbázisok listázása

```
show dbs
```

### Adatbázis kiválasztása

```
use test
```

### Keresés a gyüjteményeken belül 🔍

```
db."collection".find()
```

### Hozzáadás ➕

```
db."collection".insert({item: "name"})
```

### Törlés ➖

```
db."collection".remove({})
```
