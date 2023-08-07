import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import {
    AmexIcon,
    ColorIcon1,
    ColorIcon2,
    ColorIcon3,
    ColorIcon4,
    FaceBookIcon,
    InstagramIcon,
    PinterestIcon,
    TwitterIcon,
    VisaIcon,
    YoutubeIcon,
} from '~/components/Icons';
import images from '~/assets/images/images';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('link-container')}>
                    <div className={cx('menu')}>
                        <h2 className={cx('menu-title')}>Contact Us</h2>
                        <ul className={cx('menu-content')}>
                            <li>
                                <span>
                                    Demo E-Commerce Web
                                    <br />
                                    123 King Street, Toronto, Canada
                                </span>
                            </li>
                            <li>
                                <span>+1234567890</span>
                            </li>
                            <a className={cx('email-link')} href="/">
                                store@example.com
                            </a>
                            <ul className={cx('icons-container')}>
                                <li>
                                    <a href="/">
                                        <TwitterIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <FaceBookIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <PinterestIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <InstagramIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <YoutubeIcon />
                                    </a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div className={cx('menu')}>
                        <h2 className={cx('menu-title')}>Information</h2>
                        <ul className={cx('menu-content')}>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/">Refund Policy</a>
                            </li>
                            <li>
                                <a href="/">Shipping Policy</a>
                            </li>
                            <li>
                                <a href="/">Terms OF Service</a>
                            </li>
                            <li>
                                <a href="/">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('menu')}>
                        <h2 className={cx('menu-title')}>Account</h2>
                        <ul className={cx('menu-content')}>
                            <li>
                                <a href="/">Search</a>
                            </li>
                            <li>
                                <a href="/">About Us</a>
                            </li>
                            <li>
                                <a href="/">Faq</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                            <li>
                                <a href="/">Size Chart</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('menu')}>
                        <h2 className={cx('menu-title')}>Quick links</h2>
                        <ul className={cx('menu-content')}>
                            <li>
                                <a href="/">Accessories</a>
                            </li>
                            <li>
                                <a href="/">Laptops</a>
                            </li>
                            <li>
                                <a href="/">Headphones</a>
                            </li>
                            <li>
                                <a href="/">Smart Watches</a>
                            </li>
                            <li>
                                <a href="/">Tablets</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('menu')}>
                        <h2 className={cx('menu-title')}>Out App</h2>
                        <span className={cx('preferential')}>
                            Download our App and get extra 15% Discount on your first Order..!
                        </span>
                        <ul className={cx('images-container')}>
                            <li>
                                <Image alt="google-play" src={images.googlePlay} />
                            </li>
                            <li>
                                <Image alt="google-play" src={images.appStore} />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('payments')}>
                    <div className={cx('year')}>
                        <span>@ 2023, Copyright</span>
                    </div>
                    <ul className={cx('payment-icon-container')}>
                        <li>
                            <VisaIcon />
                        </li>
                        <li>
                            <AmexIcon />
                        </li>
                        <li>
                            <ColorIcon1 />
                        </li>
                        <li>
                            <ColorIcon2 />
                        </li>
                        <li>
                            <ColorIcon3 />
                        </li>
                        <li>
                            <ColorIcon4 />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
