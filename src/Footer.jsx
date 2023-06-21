import React from "react";

function Footer() {

    const date = new Date();
    const currentYear = date.getFullYear();

    console.log(currentYear);

    return (
        <footer className="footer">
            <p>copyright © {currentYear} | All rights reserved</p>
        </footer>
    );
}

export default Footer; 