import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise'; // Use promise-based mysql2 for async/await
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { getConnection } from '@/utils/executeQuery';


// Ensure that the content_images directory exists
const contentImagesPath = path.join(process.cwd(), 'public', 'assets', 'content_images');
if (!fs.existsSync(contentImagesPath)) {
  fs.mkdirSync(contentImagesPath, { recursive: true });
}

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, contentImagesPath); // Save files to the public/assets/content_images folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Generate unique file names
  },
});

const upload = multer({ storage });

// Disable Next.js built-in body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to run Multer as a middleware in async/await style
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// POST API function to handle the form submission
export async function POST(req) {
  const res = NextResponse;

  // Use Multer to handle file uploads
  await runMiddleware(req, res, upload.fields([
    { name: 'slider_image', maxCount: 1 },
    { name: 'images', maxCount: 10 }, // Allow multiple service images
  ]));

  // Extract form fields from req.body and handle possible undefined values
  const { menu_item_id, content, is_active } = req.body;

  const sliderImage = req.files?.slider_image?.[0]?.filename || null;
  const images = req.files?.images?.map(file => file.filename) || [];
  console.log(menu_item_id, content, sliderImage, images, is_active);
  return NextResponse.json({ message: 'Content added successfully' }, { status: 200 });

//   try {
//     const pool = await getConnection();
//     // Insert content data into the content table
//     const [contentResult] = await pool.execute(
//       `INSERT INTO content (menu_item_id, content, slider_image, images, is_active) VALUES (?, ?, ?, ?, ?)`,
//       [menu_item_id, content, sliderImage, JSON.stringify(images), is_active ? 1 : 0]
//     );

//     return NextResponse.json({ message: 'Content added successfully', contentId: contentResult.insertId }, { status: 200 });
//   } catch (error) {
//     console.error('Error inserting into database:', error);
//     return NextResponse.json({ error: 'Database error' }, { status: 500 });
//   }
}
