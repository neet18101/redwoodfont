import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { getConnection } from "@/utils/executeQuery";

export async function POST(req) {
  try {
    const data = await req.formData();
    const uploadsDir = path.resolve("./public/uploads");
    await mkdir(uploadsDir, { recursive: true });

    let singleImagePath = null;
    const multipleImagePaths = []; 

    // Handle the single file upload
    const singleFile = data.get("singleFile");
    if (singleFile) {
      const singleFileBuffer = Buffer.from(await singleFile.arrayBuffer());
      const singleFilePath = path.join(uploadsDir, singleFile.name);
      await writeFile(singleFilePath, singleFileBuffer);
      singleImagePath = `/uploads/${singleFile.name}`;
    }
    for (const [key, value] of data.entries()) {
      if (key.startsWith("multipleFile")) {
        const fileBuffer = Buffer.from(await value.arrayBuffer());
        const filePath = path.join(uploadsDir, value.name);
        await writeFile(filePath, fileBuffer);
        multipleImagePaths.push(`/uploads/${value.name}`);
      }
    }
    const selectedMenu = data.get("selectedMenu");
    const selectedSubMenu = data.get("selectedSubMenu");
    const textAreaValue = data.get("textAreaValue");
    const serviceSlider = JSON.stringify(multipleImagePaths);
    const db = await getConnection();

    const query = `
      INSERT INTO menu_content (menu_id, sub_menu_id, service_wallpaper, content, service_slider, is_active, created_at, updated_at)
      VALUES (?,?, ?, ?, ?, 1, NOW(), NOW());
    `;
    await db.execute(query, [
      selectedMenu,
      selectedSubMenu,
      singleImagePath,
      textAreaValue,
      serviceSlider,
    ]);
    await db.end();

    return NextResponse.json(
      {
        success: true,
        message: "Form data processed successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing the form data:", error);
    return NextResponse.json(
      { error: "Failed to process the form data", success: false },
      { status: 500 }
    );
  }
}
