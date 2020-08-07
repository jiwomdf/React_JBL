import React from 'react';
import '../assets/footer.css'
import { label } from '../assets/style'

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="flex justify-center">
                <li className="mr-6">
                    <a className={label} href="#">Programmer Gabut Inc 2020</a>
                </li>
                <li className="mr-6">
                    <a className={label} href="#">Icon</a>
                </li>
                <li className="mr-6">
                    <a className={label} href="#">Icon</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer
