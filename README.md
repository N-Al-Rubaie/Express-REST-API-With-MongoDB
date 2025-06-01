
# Simple Express REST API with MongoDB

This is a basic RESTful API built using **Express.js** and **MongoDB** (via Mongoose). The API supports creating, reading, updating, and deleting (CRUD) posts. It also includes a simple user route placeholder.

---

## Features

- Create, Read, Update, and Delete posts
- Uses MongoDB for data storage
- Modular routing with Express Router
- Middleware support with JSON body parsing
- Environment variables for sensitive data (MongoDB connection)
- Easy to extend for additional resources/routes

---

## Prerequisites

- Node.js and npm installed
- MongoDB database (local or cloud, e.g., MongoDB Atlas)
- Basic knowledge of JavaScript and Node.js

---

## Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-folder>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:

   ```env
   DB_CONNECTION=<your-mongodb-connection-string>
   ```

---

## Usage

Start the server:

```bash
npm start
```

The server will start on port 3000.

---


## Testing the API with Postman and MongoDB

You can easily test the API endpoints using Postman, a popular tool for testing HTTP APIs.

### Setup Postman

1. Open Postman.
2. Create a new request.
3. Use the  HTTP methods and URLs below to test the API

---

### Example Requests

**Get all posts**

- Method: GET  
- URL: `http://localhost:3000/posts`

---

**Create a new post**

- Method: POST  
- URL: `http://localhost:3000/posts`  
- Body: (select raw and JSON format)

```json
{
  "title": "My first post",
  "description": "This is a test description"
}
```

---

**Get a specific post**

- Method: GET  
- URL: `http://localhost:3000/posts/<postId>`

Replace `<postId>` with the actual ID from MongoDB.

---

**Update a post**

- Method: PATCH  
- URL: `http://localhost:3000/posts/<postId>`  
- Body: (select raw and JSON format)

```json
{
  "title": "Updated title",
  "description": "Updated description"
}
```

---

**Delete a post**

- Method: DELETE  
- URL: `http://localhost:3000/posts/<postId>`

---

## MongoDB

- Make sure your MongoDB database is running and accessible via the connection string in your `.env` file.
- You can use MongoDB Atlas for a free cloud database or run a local MongoDB instance.
- Use tools like MongoDB Compass to visually inspect your database contents.

---

## Available routes

### Home route:

```http
GET /
```

Response: `"I'm inside the home"`

### Posts routes:

```http
GET /posts
POST /posts
GET /posts/:postId
PATCH /posts/:postId
DELETE /posts/:postId
```

### User routes (placeholder):

```http
GET /user
GET /user/specific
```

---

## API Endpoints Detail

| Method | Endpoint           | Description               | Request Body                         |
|--------|--------------------|---------------------------|------------------------------------|
| GET    | /posts             | Retrieve all posts         | None                               |
| POST   | /posts             | Create a new post          | `{ "title": "string", "description": "string" }` |
| GET    | /posts/:postId     | Get a specific post by ID  | None                               |
| PATCH  | /posts/:postId     | Update a specific post by ID | `{ "title": "string", "description": "string" }` |
| DELETE | /posts/:postId     | Delete a post by ID        | None                               |

| Method | Endpoint          | Description                 |
|--------|-------------------|-----------------------------|
| GET    | /user             | Basic user route            |
| GET    | /user/specific    | Specific user route placeholder |

---


## Tips

- When creating or updating posts, ensure the request body is in JSON format.
- Check the response status codes and body in Postman to confirm the API is working correctly.

---

## Code Structure

```bash
├── app.js          # Main application entry point
├── model
│   └── Post.js     # Mongoose schema for posts
├── routes
│   ├── posts.js    # Routes related to posts
│   └── user.js     # Routes related to user (placeholder)
├── package.json    # Project dependencies and scripts
└── .env            # Environment variables (not committed)
```

---

## Note
- The user route is minimal and can be expanded as needed.

---


