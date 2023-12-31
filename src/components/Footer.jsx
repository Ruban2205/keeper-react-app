import React from "react";

function Footer() {

    const date = new Date();
    const currentYear = date.getFullYear();

    console.log(currentYear);

    return (
        <footer className="footer">
            <p>Copyright © {currentYear} | All rights reserved | www.rubangino.in</p>
        </footer>
    );
}

export default Footer; 