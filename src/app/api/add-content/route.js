
import multer from 'multer';
import { NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';
import { getConnection } from '@/utils/executeQuery';

// Configure multer for handling file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: async function (req, file, cb) {
      const uploadDir = join(process.cwd(), 'public/assets/uploads');
      await fs.mkdir(uploadDir, { recursive: true });  // Ensure the directory exists
      cb(null, uploadDir);  // Save files in the uploadDir
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);  // Avoid filename collisions
    },
  }),
});

// Middleware to handle multipart form-data
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export const POST = async (req) => {
  const res = {};
  try {
    // Handle form-data and file upload using multer
    await runMiddleware(req, res, upload.fields([
      { name: 'sliderImage', maxCount: 1 },
      { name: 'serviceImages', maxCount: 10 }
    ]));

    // Check if the file fields are populated
    const sliderImage = req.files?.['sliderImage']?.[0]?.filename || null;  // Safely access sliderImage
    const serviceImages = req.files?.['serviceImages']?.map(file => file.filename) || [];  // Safely access serviceImages

    // Access form fields that were sent with the file upload
    const formData = req.formData();  // Multer automatically populates req.body with form fields
    const parentMenu = formData.parentMenu;
    const subMenu = formData.subMenu;
    const serviceContent = formData.serviceContent;

    console.log(formData.subMenu);

    // Save the form data and file paths in the database
    const connection = await getConnection();
    // const [result] = await connection.execute(
    //   `INSERT INTO menu (parent_id, name, menuContent, sliderImage, is_active, date_time) VALUES (?, ?, ?, ?, ?, NOW())`,
    //   [parentMenu, subMenu, serviceContent, sliderImage, 1]
    // );

    // // Save service images if available
    // if (serviceImages.length > 0) {
    //   const imageValues = serviceImages.map(image => [result.insertId, `/assets/uploads/${image}`]);
    //   await connection.query(
    //     `INSERT INTO menu_images (menu_id, image_url) VALUES ?`,
    //     [imageValues]
    //   );
    // }

    // Close the connection
    await connection.end();

    // Send success response
    return NextResponse.json({ message: 'Menu item created successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
};
