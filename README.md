# Disney API

Esta aplicación es un desafío de programación de la organización [Alkemy](https://campus.alkemy.org/challenges/21428).Que esta en desarrollo  en la cual actualmente se esta trabajando, para poder llegar al final del proyecto.




# Instalación

```bash
npm install

```

# Configuración

Cree la base de datos principal, via remota en https://remotemysql.com/, una para la aplicación. Falta aun crear la BD para los test.
El nombre de la base de datos de pruebas será el nombre de la base de datos principal + `test`.
Por ejemplo, si la base de datos de la aplicación se llama `disneyapi`, la base de datos para ejecutar los tests se llamará `disneyapitest`



Haga una copia del archivo `.env.example`. A continuación, ingrese los valores de configuración en el archivo `.env`

```
cp .env.example .env
```



# Uso


Ejecutar la aplicación

```
npm run dev 
```

Finalmente, navegar a http://localhost:3000
