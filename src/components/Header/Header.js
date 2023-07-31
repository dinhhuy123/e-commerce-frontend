import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '~/components/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife, faCartShopping, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Image from '~/components/Image';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { CartIcon, LogoutIcon, ViewProfileIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header() {
    const { isAuth, currentUser } = useSelector((state) => state.auth);

    const USER_MENU = [
        {
            icon: <ViewProfileIcon />,
            title: 'View profile',
        },
        {
            icon: <CartIcon />,
            title: 'My order',
        },
        {
            icon: <LogoutIcon />,
            title: 'Logout',
            separate: true,
        },
    ];

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
                    {isAuth ? (
                        <HeadlessTippy
                            interactive
                            // visible={true}
                            delay={[0, 700]}
                            offset={[16, 8]}
                            render={(attrs) => (
                                <div className={cx('user-extension')} tabIndex="-1" {...attrs}>
                                    <div className={cx('arrow')}></div>
                                    <PopperWrapper className={cx('popper-wrapper')}>
                                        <div className={cx('menu-items')}>
                                            {USER_MENU.map((item, index) => (
                                                <div key={index} className={cx('item', { separate: item.separate })}>
                                                    <span className={cx('icon')}>{item.icon}</span>
                                                    <div className={cx('item-title')}>
                                                        <span>{item.title}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('user-container')}>
                                <div className={cx('image-container')}>
                                    <Image
                                        className={cx('image')}
                                        src={currentUser.data.avatar}
                                        alt={currentUser.data.fullName}
                                    />
                                </div>
                                <div className={cx('name')}>{currentUser.data.fullName}</div>
                            </div>
                        </HeadlessTippy>
                    ) : (
                        <div className={cx('login-container')}>
                            {/* <FontAwesomeIcon className={cx('user-icon')} icon={faUser} /> */}
                            <div className={cx('login')}>
                                <NavLink to="/login">Login</NavLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
