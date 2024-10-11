import { executeQuery, getConnection } from "@/utils/executeQuery";
import { NextResponse } from "next/server";

// Handle GET requests (Fetch all menu items)
export async function GET() {
  try {
    const query = "SELECT * FROM menu_items";
    const menuItems = await executeQuery({ query, values: [] });
    return NextResponse.json(menuItems, { status: 200 });
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return NextResponse.json(
      { error: "Failed to fetch menu items" },
      { status: 500 }
    );
  }
}
export async function POST(req) {
  let db;
  try {
    db = await getConnection();
    const { menuName, menuUrl, parentMenuId } = await req.json();
    const query = "INSERT INTO menu_items (name, url, parent_id) VALUES (?, ?, ?)";
    const values = [menuName, menuUrl, parentMenuId || null];
    await db.query(query, values);
    return NextResponse.json(
      { message: "Menu item added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding menu item:", error);
    return NextResponse.json(
      { error: "Failed to add menu item" },
      { status: 500 }
    );
  } finally {
    if (db) {
      db.end();
    }
  }
}
