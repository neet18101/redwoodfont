'use client';
import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import RootLayout from '../../layout';
import AdminHeader from '../../components_admin/AdminHeader';
import Sidebar from '../../components_admin/Sidebar';

export default function Page() {
    const [menuName, setMenuName] = useState('');
    const [selectedParent, setSelectedParent] = useState('');
    const [menuItems, setMenuItems] = useState([]);
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

    const handleSliderImageChange = (index, e) => {
        const newSections = [...sections];
        newSections[index].sliderImage = e.target.files[0];
        setSections(newSections);
    };

    const handleContentChange = (index, value) => {
        const newSections = [...sections];
        newSections[index].content = value;
        setSections(newSections);
    };

    const handleServiceImagesChange = (index, e) => {
        const newSections = [...sections];
        newSections[index].serviceImages = Array.from(e.target.files);
        setSections(newSections);
    };

    const addSection = () => {
        setSections([...sections, { sliderImage: null, content: '', serviceImages: [] }]);
    };

    const removeSection = (index) => {
        const newSections = sections.filter((_, secIndex) => secIndex !== index);
        setSections(newSections);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the payload for submission
        const formData = new FormData();
        formData.append('menu_name', menuName);
        formData.append('parent_id', selectedParent || '');

        sections.forEach((section, index) => {
            if (section.sliderImage) {
                formData.append(`sliderImage_${index}`, section.sliderImage);
            }
            formData.append(`content_${index}`, section.content);
            section.serviceImages.forEach((file, imgIndex) => {
                formData.append(`serviceImages_${index}_${imgIndex}`, file);
            });
        });

        // Post the data to the API (implement your API accordingly)
        const res = await fetch('/api/add-content', {
            method: 'POST',
            body: formData,
        });
        console.log(formData);
        // console.log(res)

        if (res.ok) {
            alert('Menu item added successfully');
            // Reset form after submission
            setMenuName('');
            setSelectedParent('');
            setSections([{ sliderImage: null, content: '', serviceImages: [] }]);
        } else {
            alert('Error adding menu item');
        }
    };

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
                                                <a href="javascript: void(0);">Menu</a>
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
                                                                onChange={(e) => setSelectedParent(e.target.value)}
                                                            >
                                                                <option value="">None (Top-level Category)</option>
                                                                {renderMenuOptions(menuItems)}
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
                                                                    onChange={(e) => handleSliderImageChange(index, e)}
                                                                />
                                                            </div>

                                                            {/* Service Content Editor */}
                                                            <div className="col-xxl-12 col-md-12">
                                                                <label className="form-label">Service Content</label>
                                                                <Editor
                                                                    apiKey='gr80n553yg3m6esqpti35cl5sx7h53u7e342iozu7744k3qj'
                                                                    init={{
                                                                        plugins: [
                                                                            'link', 'image', 'media', 'table', 'lists'
                                                                        ],
                                                                        toolbar: 'undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | link image media',
                                                                    }}
                                                                    value={section.content}
                                                                    onEditorChange={(value) => handleContentChange(index, value)}
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
