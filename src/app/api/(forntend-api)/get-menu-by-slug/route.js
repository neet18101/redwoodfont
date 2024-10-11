import { executeQuery } from "@/utils/executeQuery";
import { NextResponse } from "next/server";

// Handle GET requests to fetch content based on the slug parameter
export async function GET(req) {
  try {
    // Extract the 'slug' parameter from the request URL
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        { error: "Slug parameter is required" },
        { status: 400 }
      );
    }

    // Remove leading/trailing slashes and split the slug into segments
    const slugSegments = slug.replace(/^\/|\/$/g, "").split("/");

    if (slugSegments.length === 0) {
      return NextResponse.json(
        { error: "Invalid slug format" },
        { status: 400 }
      );
    }

    // Define the base query to fetch data
    let query = `
      SELECT 
        mc.*,
        mi.name AS menu_name,
        mi.url AS menu_url
      FROM 
        menu_content mc
      JOIN 
        menu_items mi ON mc.menu_id = mi.id
      WHERE 
        mi.url = ?
    `;
    let values = [slugSegments[0]]; // Set the initial value as the parent URL

    // Check if there is a sub-menu specified in the slug
    if (slugSegments.length > 1) {
      query += ` AND mc.sub_menu_id = (
        SELECT id FROM menu_items WHERE url = ? AND parent_id = mi.id
      )`;
      values.push(slugSegments[1]); // Add the sub-menu to the query parameters
    }

    const result = await executeQuery({ query, values });

    if (result.length === 0) {
      return NextResponse.json(
        { message: "No content found for the provided slug" },
        { status: 404 }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error fetching content by slug:", error);
    return NextResponse.json(
      { error: "Failed to fetch content by slug" },
      { status: 500 }
    );
  }
}
