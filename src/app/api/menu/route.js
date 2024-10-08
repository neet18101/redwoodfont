import { getConnection } from "@/utils/executeQuery";

export async function GET(req) {
  const db = await getConnection();

  try {
    const [menuItems] = await db.query("SELECT * FROM menu_items");
    return new Response(JSON.stringify(menuItems), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch menu items" }),
      { status: 500 }
    );
  }
}

// Handle POST requests (Add a new menu item)
export async function POST(req) {
  const db = await getConnection();
  const { menuName, parentMenuId } = await req.json(); // Parse the incoming request body

  try {
    // Insert the new menu item (category or subcategory)
    await db.query("INSERT INTO menu_items (name, parent_id) VALUES (?, ?)", [
      menuName,
      parentMenuId || null, // Set null if no parent is selected
    ]);
    return new Response(
      JSON.stringify({ message: "Menu item added successfully" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to add menu item" }), {
      status: 500,
    });
  }
}
