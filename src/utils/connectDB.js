import mysql from "mysql2/promise";
let connection;
export default async function connectDB() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "redwood_font",
    });
  }
}
