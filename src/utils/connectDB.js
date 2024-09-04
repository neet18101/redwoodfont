import mysql from "mysql2/promise";

const executeQuery = async (query, data) => {
  try {
    console.log("Connecting to the database...");

    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log("Connected to the database.");

    const [result] = await db.execute(query, data);

    console.log("Query executed successfully.");

    return result;
  } catch (error) {
    console.error("Error executing query:", error);
    return null;
  }
};

export default executeQuery;
