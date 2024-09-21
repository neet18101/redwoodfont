import React from 'react'

function page() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Enter Your Data</h4>
                            <div className="flex-shrink-0">
                                
                            </div>
                        </div>{/* end card header */}
                        <div className="card-body">
                            <div className="live-preview">
                                <div className="row gy-4">
                                    <div className="col-xxl-3 col-md-6">
                                        <div>
                                            <label htmlFor="basiInput" className="form-label">Title</label>
                                            <input type="password" className="form-control" id="basiInput" />
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-xxl-3 col-md-6">
                                        <div>
                                            <label htmlFor="labelInput" className="form-label">Slug</label>
                                            <input type="password" className="form-control" id="labelInput" />
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
                                    <div className="col-xxl-12 col-md-12">
                                        <div>
                                            <label htmlFor="basiInput" className="form-label">Title</label>
                                            <input type="password" className="form-control" id="basiInput" />
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-xxl-12 col-md-12">
                                        <div>
                                            <label htmlFor="labelInput" className="form-label">Slug</label>
                                            <input type="password" placeholder="Service" className="form-control" id="labelInput" />
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    {/*end col*/}
                                </div>
                                {/*end row*/}
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/*end col*/}
            </div>

        </div>
    )
}

export default page