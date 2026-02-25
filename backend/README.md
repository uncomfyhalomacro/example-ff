# Endpoints

- `/register`
- `/login`

# Database

The `users` schema is based on [`./models/UserModel.js`](./models/UserModel.js).

It's a Postgres database. A user or role should be granted with ownership to a table.

## Mock

To generate user data with faker.js, run `npm run mock`.
