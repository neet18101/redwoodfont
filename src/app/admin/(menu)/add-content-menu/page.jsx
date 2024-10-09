'use client';
import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import RootLayout from '../../layout';
import AdminHeader from '../../components_admin/AdminHeader';
import Sidebar from '../../components_admin/Sidebar';

export default function Page() {
    const [menuName, setMenuName] = useState('');
    const [selectedParent, setSelectedParent] = useState('');
    const [selectedSubMenu, setSelectedSubMenu] = useState(''); // New state for selected subcategory
    const [menuItems, setMenuItems] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [subMenu, setSubMenu] = useState([]);
    const [sections, setSections] = useState([
        { sliderImage: null, content: '', serviceImages: [] },
    ]);

    // Fetch existing menu items
    const fetchMenuItems = async () => {
        try {
            const response = await fetch("/api/menu", {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setMenuItems(data); // Populate menu items for dropdown
        } catch (error) {
            console.error("Error fetching menu items:", error);
        }
    };

    useEffect(() => {
        fetchMenuItems();
    }, []);

    // Handle slider image change
    const handleSliderImageChange = (index, e) => {
        const newSections = [...sections];
        newSections[index].sliderImage = e.target.files[0];
        setSections(newSections);
    };

    // Handle TinyMCE content change
    const handleContentChange = (index, value) => {
        const newSections = [...sections];
        newSections[index].content = value;
        setSections(newSections);
    };

    // Handle multiple service images change
    const handleServiceImagesChange = (index, e) => {
        const newSections = [...sections];
        newSections[index].serviceImages = Array.from(e.target.files);
        setSections(newSections);
    };

    // Add a new service section
    const addSection = () => {
        setSections([...sections, { sliderImage: null, content: '', serviceImages: [] }]);
    };

    // Remove a service section
    const removeSection = (index) => {
        const newSections = sections.filter((_, secIndex) => secIndex !== index);
        setSections(newSections);
    };

    // Handle parent menu selection
    const handleMenuChange = (event) => {
        const selectedMenuId = event.target.value;
        setSelectedParent(selectedMenuId);
        const selected = menuItems.find((item) => item.id === parseInt(selectedMenuId));
        setSelectedMenu(selected);
        if (selected) {
            // Filter submenus based on the selected menu's ID
            const filteredSubMenus = menuItems.filter((item) => item.parent_id === parseInt(selectedMenuId));
            setSubMenu(filteredSubMenus);
        } else {
            setSubMenu([]);
        }
        setSelectedSubMenu(''); // Reset subcategory selection when a new parent is selected
    };

    // Handle sub-menu change
    const handleSubMenuChange = (event) => {
        setSelectedSubMenu(event.target.value); // Set the selected subcategory
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the payload for submission
        const formData = new FormData();
        formData.append('menu_item_id', selectedParent || ''); // Adjusted key to match 'menu_item_id' column in DB
        formData.append('sub_menu_id', selectedSubMenu || ''); // Sub menu ID is optional
        formData.append('is_active', true); // Example for is_active (set to true by default)

        sections.forEach((section, index) => {
            if (section.sliderImage) {
                formData.append(`slider_image_${index}`, section.sliderImage); // Adjusted to match 'slider_image' column
            }
            formData.append(`content_${index}`, section.content); // Adjusted to match 'content' column
            section.serviceImages.forEach((file, imgIndex) => {
                formData.append(`service_images_${index}_${imgIndex}`, file); // Collecting images for 'images' column
            });
        });

        // Log the form data to debug
        console.log(formData,"neetx");
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        // Post the data to the API
        const res = await fetch('/api/add-content', {
            method: 'POST',
            body: formData,
        });

        if (res.ok) {
            alert('Menu item added successfully');
            // Reset form after submission
            setMenuName('');
            setSelectedParent('');
            setSelectedSubMenu('');
            setSections([{ sliderImage: null, content: '', serviceImages: [] }]);
        } else {
            alert('Error adding menu item');
        }
    };

    // Render menu options in the dropdown
    const renderMenuOptions = (items) => {
        return items.map((item) => (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        ));
    };

    return (
        <RootLayout>
            <AdminHeader />
            <Sidebar />
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0">Add Menu</h4>
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item">
                                                <a href="#">Menu</a>
                                            </li>
                                            <li className="breadcrumb-item active">Add Menu</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end page title */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="live-preview">
                                            <form onSubmit={handleSubmit}>
                                                <div className="row gy-4">
                                                    <div className="col-xxl-6 col-md-6">
                                                        <div>
                                                            <label htmlFor="parentMenu" className="form-label">
                                                                Select Parent Menu
                                                            </label>
                                                            <select
                                                                className="form-select"
                                                                id="parentMenu"
                                                                value={selectedParent}
                                                                name="parentMenu" // Added the name attribute
                                                                onChange={handleMenuChange}
                                                            >
                                                                <option value="">None</option>
                                                                {renderMenuOptions(menuItems)}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-md-6">
                                                        <div>
                                                            <label htmlFor="subMenu" className="form-label">
                                                                Select Sub-category
                                                            </label>
                                                            <select
                                                                className="form-select"
                                                                id="subMenu"
                                                                value={selectedSubMenu}
                                                                name="subMenu" // Added the name attribute
                                                                onChange={handleSubMenuChange}
                                                                disabled={!subMenu.length}
                                                            >
                                                                <option value="">None</option>
                                                                {subMenu.map((item) => (
                                                                    <option key={item.id} value={item.id}>
                                                                        {item.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                {sections.map((section, index) => (
                                                    <div key={index} className="section-block">
                                                        <div className="row gy-4 mt-3">
                                                            {/* Slider Image Input */}
                                                            <div className="col-xxl-6 col-md-6">
                                                                <label className="form-label">Slider Image</label>
                                                                <input
                                                                    type="file"
                                                                    className="form-control"
                                                                    accept="image/*"
                                                                    name={`slider_image_${index}`} // Added the name attribute
                                                                    onChange={(e) => handleSliderImageChange(index, e)}
                                                                />
                                                            </div>

                                                            {/* Service Content Editor */}
                                                            <div className="col-xxl-12 col-md-12">
                                                                <label className="form-label">Service Content</label>
                                                                <Editor
                                                                    apiKey='gr80n553yg3m6esqpti35cl5sx7h53u7e342iozu7744k3qj'
                                                                    init={{
                                                                        plugins: ['link', 'image', 'media', 'table', 'lists'],
                                                                        toolbar:
                                                                            'undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | link image media',
                                                                    }}
                                                                    value={section.content}
                                                                    onEditorChange={(value) =>
                                                                        handleContentChange(index, value)
                                                                    }
                                                                />
                                                            </div>

                                                            {/* Multiple Image Upload */}
                                                            <div className="col-xxl-12 col-md-12">
                                                                <label className="form-label">Service Images (Multiple)</label>
                                                                <input
                                                                    type="file"
                                                                    className="form-control"
                                                                    accept="image/*"
                                                                    multiple
                                                                    name={`service_images_${index}`} // Added the name attribute
                                                                    onChange={(e) => handleServiceImagesChange(index, e)}
                                                                />
                                                            </div>

                                                            {/* Remove Section Button */}
                                                            {sections.length > 1 && (
                                                                <div className="col-xxl-12 col-md-12">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-danger mt-3"
                                                                        onClick={() => removeSection(index)}
                                                                    >
                                                                        Remove Section
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}

                                                <div className="row gy-4 mt-3">
                                                    <div className="col-xxl-3 col-md-6">
                                                        <button type="submit" className="btn btn-primary">
                                                            Add Menu Item
                                                        </button>
                                                    </div>
                                                    <div className="col-xxl-3 col-md-6">
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary"
                                                            onClick={addSection}
                                                        >
                                                            Add More Service
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end col*/}
                        </div>
                    </div>
                    {/* container-fluid */}
                </div>
                {/* End Page-content */}
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">© YourCompany.</div>
                            <div className="col-sm-6">
                                <div className="text-sm-end d-none d-sm-block">
                                    Design &amp; Develop by YourCompany
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </RootLayout>
    );
}
