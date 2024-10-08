import formidable from "formidable";
import fs from "fs";
import path from "path";

// Disable the body parser to handle file uploads with formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    const form = new formidable.IncomingForm();
    const uploadDir = path.join(process.cwd(), "public/assets/serviceImages");

    // Ensure that the upload directory exists
    fs.mkdirSync(uploadDir, { recursive: true });

    const result = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
        }
        const file = files.file;
        const newFilePath = path.join(uploadDir, file.originalFilename);

        // Move the file to the designated directory
        fs.renameSync(file.filepath, newFilePath);

        resolve({ filePath: `/assets/serviceImages/${file.originalFilename}` });
      });
    });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
