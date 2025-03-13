# Zylentrix Backend Assignment

The Zylentrix Backend Assignment is a Node.js backend project designed to manage users. It uses Express.js for handling HTTP requests, Mongoose for interacting with a MongoDB database, and Joi for request validation. The project includes features for CRUD operations on users. It also includes error handling middleware and utility classes for API responses and errors.

## Prerequisites

Ensure you have the following installed before proceeding:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Setup Instructions

1. Clone the repository:

   ```sh
   git clone https://github.com/LalatenduR/ZylentrixBackendAssignment.git
   ```

2. Navigate to the project directory:

   ```sh
   cd ZylentrixBackendAssignment
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Configure environment variables:

   - Copy `.env.example` to `.env`
   - Update necessary values (e.g., MongoDB URI, PORT, etc.)

5. Start the development server:

   ```sh
   npm run dev
   ```

   Or for production:

   ```sh
   npm start
   ```

## Project Structure

```
project-name/
│-- src/
│   │-- controllers/
│   │-- db/
│   │-- middleware/
│   │-- models/
│   │-- routes/
│   │-- utils/
│   │-- app.js
│   │-- constant.js
│   │-- index.js
│-- .env
│-- .gitignore
│-- .prettierrc
│-- .prettierignore
│-- package.json
│-- package-lock.json
│-- README.md
```

## Features

- **Centralized Error Handling**: Middleware for consistent error responses.
- **Joi Validation**: Schema-based validation for user input.
- **Prettier Code Formatting**: Ensures consistent coding style.

## API Endpoints Documentation

### User Management

#### Create User

- **Endpoint:** `POST /api/v1/user/create`
- **Request Body:**
  ```json
  {
    "name": "John",
    "email": "john@example.com",
    "age":"33"
  }
  ```
- **Response:**
  ```json
  {
    "status": 201,
    "message": "User Created!!",
    "data": {
        "name": "John",
        "email": "john@example.com",
        "age": 33,
        "_id": "67d1feec19bc2b92b26fe70c",
        "createdAt": "2025-03-12T21:38:52.838Z",
        "updatedAt": "2025-03-12T21:38:52.838Z",
        "__v": 0
    },
    "success": true
  }
  ```

#### Get All Users

- **Endpoint:** `GET /api/v1/user/`
- **Response:**
  ```json
  {
    "status": 200,
    "message": "All Users",
    "data": [
        {
            "_id": "67d1feec19bc2b92b26fe70c",
            "name": "John",
            "email": "john@example.com",
            "age": 22,
            "createdAt": "2025-03-12T21:38:52.838Z",
            "updatedAt": "2025-03-12T21:38:52.838Z",
            "__v": 0
        }
    ],
    "success": true
  }
  ```

#### Get One User

- **Endpoint:** `GET /api/v1/user/:id`
- **Response:**
  ```json
  {
      "status": 200,
      "message": "User",
      "data": {
          "_id": "67d1e51aaf3ee016352e4be4",
          "name": "Joe",
          "email": "joe@gmail.com",
          "age": 29,
          "createdAt": "2025-03-12T19:48:42.688Z",
          "updatedAt": "2025-03-12T19:48:42.688Z",
          "__v": 0
      },
      "success": true
  }
  ```

#### Update User

- **Endpoint:** `PUT /api/v1/user/update/:id`
- **Request Body:**
  ```json
  {
      "email":"joem@gmail.com"
  }
  ```
- **Response:**
  ```json
  {
      "status": 200,
      "message": "User Updated",
      "data": {
          "_id": "67d1e51aaf3ee016352e4be4",
          "name": "Joe",
          "email": "joem@gmail.com",
          "age": 29,
          "createdAt": "2025-03-12T19:48:42.688Z",
          "updatedAt": "2025-03-13T03:05:39.660Z",
          "__v": 0
      },
      "success": true
  }
  ```

#### Delete User

- **Endpoint:** `DELETE /api/v1/user/delete/:id`
- **Response:**
  ```json
  {
      "status": 200,
      "message": "User Deleted",
      "data": {
          "_id": "67d1e51aaf3ee016352e4be4",
          "name": "Joe",
          "email": "joem@gmail.com",
          "age": 29,
          "createdAt": "2025-03-12T19:48:42.688Z",
          "updatedAt": "2025-03-13T03:05:39.660Z",
          "__v": 0
      },
      "success": true
  }
  ```

## Sample Requests (Using cURL)

### Create a User

```sh
curl -X POST http://localhost:8080/api/v1/user/create \
-H "Content-Type: application/json" \
-d '{"name": "exampleUser", "email": "user@example.com", "age": 22}'
```

### Get All Users

```sh
curl -X GET http://localhost:8080/api/v1/user/
```

### Get One User

```sh
curl -X GET http://localhost:8080/api/v1/user/abc123
```

### Update a User

```sh
curl -X PUT http://localhost:8080/api/v1/user/update/abc123 \
-H "Content-Type: application/json" \
-d '{"name": "updatedUser", "email": "updated@example.com", "age":18}'
```

### Delete a User

```sh
curl -X DELETE http://localhost:8080/api/v1/user/delete/abc123
```

## Running Tests

To run unit tests:

```sh
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

