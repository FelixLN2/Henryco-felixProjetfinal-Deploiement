import React, { useState } from 'react';
import '../../styles/App.css';

function Footer() {
    const d = new Date();
    return (
        <div className="App-footer">
            <footer className="App-footer">

                <p>Sylvain Labranche - sylvain.labranche@cmontmorency.qc.ca<br />
                {d.toDateString()}</p>
            </footer>
        </div>

    );
}

export default Footer;