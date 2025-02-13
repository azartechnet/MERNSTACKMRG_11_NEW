import React from "react";

const CreatePost=()=>{
    return(
        <div>
            <h1>CREATE POST</h1>
            <div className="container mt-5">
               <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h3>Create a NewPost</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                 <div className="form-group">
                                   <label>Title</label>
                                   <input type="text" className="form-control" placeholder="Enter title"
                                   />

                                 </div>
                                 <div className="form-group">
                                  <label>Body</label>
                                  <textarea className="form-control" rows="5" placeholder="Enter body"></textarea>
                                 </div>
                                 <button type="submit" className="btn btn-primary">CreatePost</button>
                            </form>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}
export default CreatePost;