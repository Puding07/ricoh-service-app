# 👨‍💻 RSA-Kliens 👨‍💻

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

### Leírás

A kliens egy **PWA** web alkalmazás ami böngészőben fut, illetve telepíthető egy különálló alkalmazásként. A telepítés nem mást jelent mint, hogy létrehoz egy **ikon-t** az asztalra vagy az alkalmazások között, és a **web alkalmazás** kódját letölti és tárolja. A telepített **PWA app-ot** egy böngésző fogja megnyitni külön ablakban. Az alkalmazás frissítésekor automatikusan frissíti magát a **PWA app**.

Az alkalmazás megfelelő működéséhez biztosítani kell az **SSL** (**https**) kapcsolatot.

Az alkalmazás könnyebb elérhetőségéhez **DNS szerver** segítségével **Domain** nevet kell adni.

### Beállítás

A szerverhez való **csatlakozáshoz** **.env** fájlba be kell írni az **API=**-be a szerver **domain** nevét vagy **IP** címét

### Frissítés

Ha **frissítés** jelenik meg akkor az **alkalmazás újraindításakor** töltődik be friss verzió, **ha mégsem** menne végbe, akkor a **CTRL+R** billentyű kombinációval, majd az **ismételt újraindítással** már elérhető a legújabb verzió.

### Használat

Az alkalmazás hsználható **teljes képernyős** módban is az **F11** billentyű lenyomásával.

A kliens **Cookie-kat** használ, ezek elengedhetetlenek az alkalmazás használatához, hiszen az **API szerver** ebből olvassa ki, hogy a felhasználó bejelentkezett. A **Cookie-k** élettartama **8 óra**, lejárta után automatikusan törlődnek, ezután az app újra bejelentkezést igényel.

Az alkalmazás használat közben **Socket-ek** segítségével **élőben frissíti** az adatokat.

A friss adatok használatához a **szerver-t** a **kliens rendszernek** el kell tudnia érni a **hálózaton**!

## Fejlesztéshez:

### Start 🚀

```
yarn start
```

### Teszt környezet HOT Loaderrel 🔥

```
yarn dev
```

### Tesztelés 🔍

```
yarn test
```
