# Challenge PIPR1

## API

### Introduction - The Project's Aim

This API lets you create, an user.
It has a login with JWT so in order to create or get the list of products you must sign in.

### Technologies
- Node JS
- Nest JS (with Typescript)
- Mongo DB

### How to run this App ?

To run the API you have to change some environment variables

```
PORT: this is the port where API runs.

MONGO_URL: url of the mongo database. (for example if you run this in your local machine you can use this url mongodb://localhost/<name_of_database>)

TOKEN_SECRETO: secret token to use on login with JWT.

EXPIRES_IN: expires token time, by default in env is in 180000ms.
```

Then you have to install dependencies using the command.

```
npm install
```
or
```
yarn install
```

To run the API use the command.

```
npm run dev
```
or
```
yarn dev
```

### Notes

Inside api folder you have postman_collection where it has two files:

- PIPR1.postman_collection.json: The collection with endpoints and extra settings like token in headers.

- Node JS - Localhost.postman_environment: The collection with the two environmental variables that use the api, url and token.

You can import to your postman in order to use in the project.

---

## WEB

### Technologies
- React JS
- React Hooks
- Tailwind CSS

### How to run this App ?

You have to install dependencies using the command.

```
npm install
```
or
```
yarn install
```

To run the API use the command.

```
npm start
```
or
```
yarn dev
```