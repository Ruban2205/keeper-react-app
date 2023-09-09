import React from "react";

function CreateArea() {
    return (
        <div>
            <form>
                <input name="title" placeholder="Title" /> 
                <textarea name="content" placeholder="Take a note..." />
                <button>Add Note</button>
            </form>
        </div>
    )
}

export default CreateArea; 
