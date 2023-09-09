import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

import noteContent from "../notes";
import CreateArea from "./CreateArea";

function App() {
    return (
        <div>
            <Header />
            <CreateArea />
            <Note key={1} title="Note title" content="Note Content"/>
            <Footer />
        </div>
    );
}

export default App; 