import mysql from "mysql2/promise";
import connectDB from "./connectDB";

const executeQuery = async ({ query, values }) => {
  let db;
  try {
    console.log("Connecting to the database...");
    
    db = await connectDB(); // Establish the connection

    if (!db) {
      throw new Error("Failed to establish a database connection.");
    }

    console.log("Connected to the database.");

    if (db.connection.state === 'disconnected') {
      throw new Error("Connection is in a closed state.");
    }

    const [result] = await db.execute(query, values); // Execute the query with proper values

    console.log("Query executed successfully.");

    return result;
  } catch (error) {
    console.error("Error executing query:", error);
    return null;
  } finally {
    if (db) {
      try {
        await db.end();
        console.log("Database connection closed.");
      } catch (closeError) {
        console.error("Error closing the connection:", closeError);
      }
    }
  }
};

export default executeQuery;
