import React from "react";

function AddNote() {
  return (
    <div>
      <div>
        <h1>AddNote</h1>
      </div>
      <div>
        <form>
            <label>Title</label><br />
            <input type="text" placeholder="Enter Title"   className="form-handle"></input><br />

            <label>Description</label><br />
            <input type="text" placeholder="Enter Description"  className="form-handle"></input>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
