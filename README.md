# User API

User API is a server application, which provides REST API only for  one entity, user.

## Installing / Getting started

### 1. Download & extract or clone the repository
### 2. Install and run MongoDB
* Should listen on default port (27017)

### 3. Open project directory to install the dependencies

```sh
    nvm use
    npm install
    npm install --only-dev
``` 

### 4. Run the app

```sh
    npm start
``` 
## API description

* Create user
```sh
    POST /api/user
    Headers: { Content-Type: 'application/json'}
    Body:
    {
        "email": "string"
        "givenName": "string",
        "familyName": "string"
    }
```


* Get user by ID
```sh
    GET api/user/{userId}
```

* Get all users
```sh
    GET api/user/
```

* Update user
```sh
    PUT /api/user/{userId}
    Headers: { Content-Type: 'application/json'}
    Body:
    {
        "givenName": "string",
        "familyName": "string",
    }
```

Delete user
```sh
    DELETE /api/user/{userId}
```

## API Postman collection description
```sh
    ./UserAPI.postman_collection.json
```

## Used Technologies
* NodeJS
* ExpressJS
* Ramda
* Mongoose
* MongoDb
