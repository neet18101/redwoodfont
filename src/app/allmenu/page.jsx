import React from 'react'

function page() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Category Blog</h4>
                            <div className="flex-shrink-0">

                            </div>
                        </div>{/* end card header */}
                        <div className="card-body">
                            <div className="live-preview">
                                <div className="row gy-4">
                                    <div className="col-xxl-6 col-md-6 col-12">
                                        <div>
                                            <label htmlFor="basiInput" className="form-label">Title</label>
                                            <input type="password" className="form-control" id="basiInput" />
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-xxl-6 col-md-6 col-12">
                                        <div>
                                            <label htmlFor="basiInput" className="form-label">Slug</label>
                                            <input type="password" className="form-control" id="basiInput" />
                                        </div>
                                    </div>



                                    {/*end col*/}
                                </div>
                                {/*end row*/}
                            </div>

                        </div>
                        <div className="card-body">
                            <div className="live-preview">
                                <div className="row gy-4">

                                    {/*end col*/}
                                    <div className="col-xxl-12 col-md-12">
                                        <div className="mt-4">
                                            <h5 className="fs-15 mb-3">Images</h5>
                                            <div className="row g-3">
                                                <div className="col-lg-12">
                                                    <div className="input-group">
                                                        <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                                                        <input type="file" className="form-control mb-0" id="inputGroupFile01" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>



                                    {/*end col*/}
                                </div>
                                {/*end row*/}
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header align-items-center d-flex">
                                        <h4 className="card-title mb-0">Ck Editor</h4>
                                    </div>{/* end card header */}
                                    
                                </div>{/* end card */}
                            </div>
                            {/* end col */}
                        </div>

                    </div>
                </div>
                {/*end col*/}
            </div>

        </div>
    )
}

export default page