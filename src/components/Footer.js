import React from 'react';
import '../assets/footer.css'
import { label } from '../assets/style'

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="flex justify-center">
                <li className="mr-6">
                    <p className={label} href="#">Programmer Gabut Inc 2020</p>
                </li>
                <li className="mr-6">
                    <p className={label} href="#">Icon</p>
                </li>
                <li className="mr-6">
                    <p className={label} href="#">Icon</p>
                </li>
            </ul>
        </footer>
    );
}

export default Footer
