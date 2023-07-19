import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '~/components/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife, faCartShopping, faUser, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title-container')}>
                    <div className={cx('title')}>Mall Center</div>
                    <FontAwesomeIcon className={cx('shop-icon')} icon={faStarOfLife} />
                </div>
                <Search />
                <div className={cx('cart-container')}>
                    <FontAwesomeIcon className={cx('cart-icon')} icon={faCartShopping} />
                </div>
            </div>
            <div className={cx('navbar')}>
                <div className={cx('custom-width')}>
                    <div className={cx('categories')}>
                        <FontAwesomeIcon className={cx('bars-icon')} icon={faBars} />
                        <div className={cx('cat-title')}>All Categories</div>
                        <FontAwesomeIcon className={cx('arrow-down-icon')} icon={faChevronDown} />
                    </div>
                    <div className={cx('pages-link')}>
                        <div className={cx('section')}>
                            <NavLink to="/">Home</NavLink>
                        </div>
                        <div className={cx('section')}>
                            <NavLink to="/best-selling">Best Selling</NavLink>
                        </div>
                        <div className={cx('section')}>
                            <NavLink to="/products">Product</NavLink>
                        </div>
                        <div className={cx('section')}>
                            <NavLink to="/event">Event</NavLink>
                        </div>
                        <div className={cx('section')}>
                            <NavLink to="/">FAQ</NavLink>
                        </div>
                    </div>
                    <div className={cx('user')}>
                        <FontAwesomeIcon className={cx('user-icon')} icon={faUser} />
                        <div className={cx('login')}>
                            <NavLink to="/login">Login</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
