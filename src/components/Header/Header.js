import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '~/components/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Image from '~/components/Image';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { CartIcon, FavoriteIcon, LoginIcon } from '~/components/Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

const USER_MENU = [
    {
        title: 'View profile',
    },
    {
        title: 'My order',
    },
    {
        title: 'Logout',
        separate: true,
    },
];

const CATEGORIES_MENU = [
    {
        title: 'Computers & Laptops',
    },
    {
        title: 'Home Appliances',
    },
    {
        title: 'Mobiles & Tablets',
    },
    {
        title: 'TV & Videos',
    },
    {
        title: 'Movies, Music & Book',
    },
    {
        title: 'Toys',
    },
    {
        title: 'Furniture',
    },
    {
        title: 'Clothing, shoes & accessories',
    },
];

function Header() {
    const { isAuth, currentUser } = useSelector((state) => state.auth);
    const [isShowMegaMenu, setIsShowMegaMenu] = useState(false);

    console.log(currentUser);

    const handleShowMegaMenu = () => {
        setIsShowMegaMenu(!isShowMegaMenu);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('page-width')}>
                    <div className={cx('title')}>Mall Center</div>
                    <Search />
                    <div className={cx('action-container')}>
                        <div className={cx('favorite-container')}>
                            <FavoriteIcon className={cx('favorite-icon')} />
                            <NavLink to="/login" className={cx('favorite-tile')}>
                                Favorite <br /> Products
                            </NavLink>
                        </div>
                        <div className={cx('login-container')}>
                            {!isAuth && <LoginIcon className={cx('login-icon')} />}
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
                                                        <div
                                                            key={index}
                                                            className={cx('item', { separate: item.separate })}
                                                        >
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
                                        <div className={cx('user-name')}>{currentUser.data.fullName}</div>
                                    </div>
                                </HeadlessTippy>
                            ) : (
                                <NavLink to="/login" className={cx('login-tile')}>
                                    Login <br /> My Account
                                </NavLink>
                            )}
                        </div>
                        <div className={cx('cart-container')}>
                            <CartIcon className={cx('cart-icon')} />
                            <div className={cx('my-cart')}>
                                <div className={cx('cart-count')}>
                                    <span>0</span>
                                </div>
                                <div className={cx('total-price')}>$0.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('navbar')}>
                <div className={cx('custom-width')}>
                    <div className={cx('categories')} onClick={handleShowMegaMenu}>
                        <FontAwesomeIcon className={cx('bars-icon')} icon={faBars} />
                        <div className={cx('cat-title')}>
                            <span>All Categories</span>
                        </div>
                        <FontAwesomeIcon className={cx('arrow-down-icon')} icon={faChevronDown} />
                    </div>
                    {isShowMegaMenu && (
                        <div className={cx('mega-menu')}>
                            <ul className={cx('cat-list')}>
                                {CATEGORIES_MENU.map((item, index) => (
                                    <li key={index} className={cx('cat-item')}>
                                        <a className={cx('item-link')} href="/">
                                            {item.title}
                                            <FontAwesomeIcon className={cx('arrow-right-icon')} icon={faChevronRight} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
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
                    {/* {isAuth ? (
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
                            <div className={cx('login')}>
                                <NavLink to="/login">Login</NavLink>
                            </div>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    );
}

export default Header;
