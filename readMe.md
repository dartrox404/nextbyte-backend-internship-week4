![Week 4 Banner](https://capsule-render.vercel.app/api?type=rounded&color=0:0F2027,100:2C5364&height=190&section=header&text=MongoDB%20%26%20CRUD%20APIs&fontSize=34&fontColor=ffffff&animation=fadeIn&desc=Week%2004%20%E2%80%94%20Backend%20Development&descSize=15&descAlignY=75)

<div align="center">

# 🚀 Week 4 — MongoDB & Database Integration

**Building Database-Driven REST APIs with Node.js, Express & MongoDB**

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![REST API](https://img.shields.io/badge/REST-API-blue?style=for-the-badge)

![Progress](https://img.shields.io/badge/Progress-CRUD%20Implemented-success?style=for-the-badge)

</div>

---

## 📌 Overview

This project focuses on integrating MongoDB with a Node.js and Express.js backend using Mongoose.

The main objective is to understand database connectivity, schema creation, model-based operations, and implementing CRUD functionality through REST API endpoints.

Unlike previous weeks, this project uses a real MongoDB database to store and manage user records.

## 🛠️ Tech Stack

<div align="center">

![Tech Stack](https://skillicons.dev/icons?i=nodejs,express,mongodb,js,postman,vscode,git&theme=dark)

</div>

## ✨ Features

- MongoDB database integration.
- Mongoose schema and model creation.
- Create new users.
- Retrieve all users.
- Update existing users.
- Delete users using MongoDB ObjectId.
- Duplicate username checking.
- Basic request validation.
- Environment variable configuration.
- Database connection error handling.
- Structured JSON responses.

## 📂 Project Structure

```text
week-04/
│
├── app/
│   └── app.js
│
├── config/
│   ├── db.js
│   └── joi.js
│
├── controller/
│   └── app_controller.js
│
├── model/
│   └── app_model.js
│
├── routes/
│   └── app_route.js
│
├── server/
│   └── server.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🗄️ Database Configuration

This project uses MongoDB with Mongoose for database operations.

### User Schema

| Field  | Type   | Validation                       |
| ------ | ------ | -------------------------------- |
| `name` | String | Minimum 3, maximum 15 characters |
| `age`  | Number | Minimum 0, maximum 60            |

Additional schema configuration:

- `trim: true` for name.
- Mongoose model: `userModel`.

## 🔗 API Endpoints

**Base URL:**

```text
http://localhost:4040/api/v2/test
```

| Method | Endpoint | Description        |
| ------ | -------- | ------------------ |
| GET    | `/`      | Retrieve all users |
| POST   | `/`      | Create a new user  |
| PATCH  | `/:id`   | Update a user      |
| DELETE | `/:id`   | Delete a user      |

## 📡 API Documentation

### 1. POST — Create User

Creates a new user in MongoDB.

**Endpoint:**

```http
POST /api/v2/test
```

**Request Body:**

```json
{
  "name": "Arslan",
  "age": 20
}
```

**Success Response:**

```json
{
  "success": true,
  "message": "User has been created successfully",
  "context": {
    "_id": "674abc123456789012345678",
    "name": "Arslan",
    "age": 20
  }
}
```

**Status Code:** `201 Created`

**Possible Errors:**

| Status | Description             |
| ------ | ----------------------- |
| 400    | Missing required fields |
| 409    | User already exists     |
| 500    | Internal server error   |

### 2. GET — Retrieve All Users

Retrieves all users from MongoDB, sorted by newest first.

**Endpoint:**

```http
GET /api/v2/test
```

**Success Response:**

```json
{
  "success": true,
  "message": "User has been fetched successfully",
  "context": [
    {
      "_id": "674abc123456789012345678",
      "name": "Arslan",
      "age": 20
    }
  ]
}
```

**Intended Status Code:** `200 OK`

### 3. PATCH — Update User

Updates a user using their MongoDB ObjectId.

**Endpoint:**

```http
PATCH /api/v2/test/:id
```

**Request Body:**

```json
{
  "name": "Arslan Javed",
  "age": 21
}
```

**Success Response:**

```json
{
  "success": true,
  "message": "User has been updated successfully",
  "context": {
    "_id": "674abc123456789012345678",
    "name": "Arslan Javed",
    "age": 21
  }
}
```

**Status Code:** `200 OK`

### 4. DELETE — Remove User

Deletes a user using their MongoDB ObjectId.

**Endpoint:**

```http
DELETE /api/v2/test/:id
```

**Success Response:**

```json
{
  "success": true,
  "message": "User has been removed successfully",
  "context": {
    "_id": "674abc123456789012345678",
    "name": "Arslan Javed",
    "age": 21
  }
}
```

**Status Code:** `200 OK`

## ⚙️ Environment Configuration

Create a `.env` file in the project root.

```env
PORT=4040
BASE_URL=http://localhost:4040
DB_URL=mongodb://127.0.0.1:27017/week4
```

For MongoDB Atlas, use your own connection string instead of the local MongoDB URL.

**Important:** Never upload your `.env` file or database credentials to GitHub.

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git https://github.com/dartrox404/nextbyte-backend-internship-week4.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create `.env` and add your MongoDB connection URL.

### 4. Start the server

```bash
node server/server.js
```

The application connects to MongoDB before starting the Express server.

### 5. Test API endpoints

Use Postman or Thunder Client.

```text
http://localhost:4040
```

## 🧠 Key Learnings

- Connecting MongoDB with Node.js.
- Understanding Mongoose.
- Creating database schemas and models.
- Performing CRUD operations.
- Using `find()`, `findOne()`, and `create()`.
- Using `findByIdAndUpdate()`.
- Using `findByIdAndDelete()`.
- Handling duplicate records.
- Configuring environment variables with Joi.
- Managing database connection errors.
- Understanding MongoDB ObjectIds.
- Separating controllers, models, routes, and configuration.

<div align="center">

**Learning Backend Development — One Week at a Time.**

⭐ Thanks for checking out this project!

</div>
