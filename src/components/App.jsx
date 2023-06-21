import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

import noteContent from "../notes";

function App() {
    return (
        <div>
            <Header />
            {noteContent.map((noteItems) => (
                <Note
                    key={noteItems.id}
                    title={noteItems.title}
                    content={noteItems.content} 
                    
                    />
            ))}
            <Footer />
        </div>
    );
}

export default App; 