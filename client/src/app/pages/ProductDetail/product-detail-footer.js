import React from 'react';
import './product-detail-footer.css'

const Footer = (props) => {
    return(
        <div class="cont">
            <div class="top">
            <div class="right">
                <div class="socials">
                <strong>follow us:</strong>
                <ul>
                    <li><a title="Our Twitter" class="tw" href="https://www.twitter.com/" target="_blank">Twitter</a></li>
                    <li><a title="Our Facebook" class="fb" href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                    <li><a title="Our Instagram" class="in" href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                    <li><a title="Our Pinterest" class="pi" href="https://www.pinterest.com/" target="_blank">Pinterest</a></li>
                </ul>
                </div>
            </div>
            <div class="left">
                <span class="phone">+8435123456</span>
                <a class="mail" href="mailto:senti@gmail.com">senti@gmail.com</a>
            </div>
            </div>
            <div class="bottom">
            <div class="left">
                <nav role="navigation" aria-label="Service menu">
                <ul>
                    <li><a>About Us</a></li>
                    <li><a>Privacy</a></li>
                </ul>
                </nav>
            </div>
            </div>
        </div>
    )
}
export default Footer;