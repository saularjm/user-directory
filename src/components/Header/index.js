import React from "react";
import "./style.css";

function Header () {
    return (
        <div className="header">
            <h1 className="headText">Friends Directory</h1>
            <p>Use the buttons below to filter friends by gender or "Show all" to reset.</p>
            <p>You can also sort cards alphabetically by name or occupation.</p>
        </div>
    )
}

export default Header;