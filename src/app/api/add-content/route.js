import { NextResponse } from "next/server";
import multer from "multer";
import path from "path";
import { promises as fs } from "fs";
import { getConnection } from "@/utils/executeQuery";
// Ensure that the uploads folder exists
const uploadDir = path.join(process.cwd(), "public/assets/service_images");

// Use multer to handle file uploads
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    // Create the folder if it doesn't exist
    await fs.mkdir(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Save the file with a unique name (timestamp + original name)
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Middleware for parsing multipart/form-data (for file uploads)
export const config = {
  api: {
    bodyParser: false, // Disable Next.js's built-in body parsing so Multer can handle it
  },
};

// File upload handler
export async function POST(req) {
  try {
    // Use multer to handle form data, including files
    const form = new Promise((resolve, reject) => {
      upload.any()(req, {}, (err) => {
        if (err) {
          reject(err);
        }
        resolve(req);
      });
    });

    // Wait for the form to be processed
    await form;

    // Collect uploaded file data (slider images and service images)
    const sliderImages = [];
    const serviceImages = [];

    // Identify slider and service images
    req.files.forEach((file) => {
      if (file.fieldname.startsWith("sliderImage")) {
        sliderImages.push(`/assets/service_images/${file.filename}`);
      } else if (file.fieldname.startsWith("serviceImages")) {
        serviceImages.push(`/assets/service_images/${file.filename}`);
      }
    });

    // Extract fields from the form data
    const { menu_name, parent_id } = req.body;
    const contentSections = [];

    // Extract content sections from the body (assuming req.body contains content data)
    Object.keys(req.body).forEach((key) => {
      if (key.startsWith("content_")) {
        contentSections.push(req.body[key]);
      }
    });

    // Insert the data into your database
    const dateTime = new Date().toISOString(); // Get the current date and time

    const query = `
      INSERT INTO menu_items (menu_name, parent_id, content, slider_image, images, is_active, date_time)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      menu_name,
      parent_id || null,
      JSON.stringify(contentSections), // Save content sections as JSON
      sliderImages.length > 0 ? sliderImages[0] : null, // Assuming you're storing one slider image for simplicity
      JSON.stringify(serviceImages), // Save service images as JSON
      true, // Assuming you want to mark the item as active by default
      dateTime,
    ];
    const db = await getConnection();

    // Execute the query
    await db.query(query, values);

    // Respond with success
    return NextResponse.json({ message: "Menu item added successfully!" });
  } catch (error) {
    // Handle errors
    return NextResponse.json(
      { error: "File upload failed", details: error.message },
      { status: 500 }
    );
  }
}
