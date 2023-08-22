import classNames from 'classnames/bind';
import styles from './SpecialProducts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images/images';
import Image from '../Image/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { useMemo, useState } from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const productsData = [
    {
        id: 0,
        image: images.product1,
        childrenImages: [images.product11, images.product12, images.product13, images.product14],
        name: 'Havells',
        title: 'Samsung Galaxy Note10+ Mobile Phone; Sim...',
        rating: 4,
        price: '$75.00',
        salePrice: '$60.00',
        saleOff: '-20%',
    },
    {
        id: 1,
        image: images.product2,
        childrenImages: [images.product21, images.product22, images.product23],
        name: 'Baijaj',
        title: 'Session Action Camera with 8MP...',
        rating: 4,
        price: '$30.00',
        salePrice: '$16.00',
        saleOff: '-46%',
    },
    {
        id: 2,
        image: images.product3,
        childrenImages: [images.product31, images.product32, images.product33],
        name: 'Baijaj',
        title: 'Beoplay A1 Portable Bluetooth Speaker with...',
        rating: 4,
        price: '$750.00',
        salePrice: '$500.00',
        saleOff: '-33%',
    },
    {
        id: 3,
        image: images.product4,
        childrenImages: [images.product41, images.product42, images.product43, images.product44],
        name: 'Sony',
        title: 'Samsung Galaxy Tab A SM-T295, 4G...',
        rating: 4,
        price: '$250.00',
        salePrice: '$190.00',
        saleOff: '-56%',
    },
    {
        id: 4,
        image: images.product5,
        childrenImages: [images.product51, images.product52, images.product53, images.product54],
        name: 'Havells',
        title: ' BoAt Rockerz 400 Bluetooth Headset Pink',
        rating: 4,
        price: '$350.00',
        salePrice: '$250.00',
        saleOff: '-25%',
    },
    {
        id: 5,
        image: images.product6,
        childrenImages: [images.product61, images.product62, images.product63],
        name: 'Bajaj',
        title: 'HD Resolution Indoor Wi-Fi Security Camera,...',
        rating: 4,
        price: '$400.00',
        salePrice: '$300.00',
        saleOff: '-29%',
    },
];

function SpecialProducts() {
    const [index, setIndex] = useState(0);
    const [childrenIndex, setChildrenIndex] = useState(0);

    const newData = useMemo(() => {
        const size = 2;
        const dataLength = productsData.length;
        const childArray = [];

        for (let index = 0; index < dataLength; index += size) {
            const childData = productsData.slice(index, index + size);
            childArray.push(childData);
        }

        return childArray;
    }, []);

    const prevData = () => {
        if (index > 0) {
            setIndex((prev) => prev - 1);
        }
    };

    const nextData = () => {
        if (index < newData.length - 3) {
            setIndex((prev) => prev + 1);
        }
    };

    const prevChildrenData = (data) => {
        const item = document.getElementById(data.id);
        if (childrenIndex > 0) {
            setChildrenIndex((prev) => {
                item.style.transform = `translate3d(${-(prev - 1) * 120}px, 0, 0)`;
                return prev - 1;
            });
        }
    };

    const nextChildrenData = (data) => {
        const item = document.getElementById(data.id);
        console.log(childrenIndex);
        console.log(data.childrenImages.length);
        console.log(childrenIndex < data.childrenImages.length - 2);
        if (childrenIndex < data.childrenImages.length - 2) {
            setChildrenIndex((prev) => {
                item.style.transform = `translate3d(${-(prev + 1) * 120}px, 0, 0)`;
                return prev + 1;
            });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('large-title')}>Special Products</div>
                <div className={cx('large-hidden')}>
                    <div
                        className={cx('list-container')}
                        style={{
                            transform: `translate3d(${-index * 560}px, 0, 0)`,
                            width: `calc(560px * ${newData.length})`,
                        }}
                    >
                        {newData.map((data, index) => (
                            <div key={index} className={cx('data')}>
                                {data.map((item, index) => (
                                    <div key={index} className={cx('item')}>
                                        <PopperWrapper className={cx('popper')}>
                                            <div className={cx('image-container')}>
                                                <Image className={cx('image')} src={item.image} />
                                                <ul className={cx('children-image')}>
                                                    <div className={cx('hidden')}>
                                                        <div className={cx('slider')} id={item.id}>
                                                            {item.childrenImages.map((child, index) => (
                                                                <div key={index} className={cx('child-container')}>
                                                                    <Image className={cx('child')} src={child} />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </ul>
                                                <div className={cx('children-button-container')}>
                                                    <button
                                                        className={cx('prev-child-btn')}
                                                        onClick={() => prevChildrenData(item)}
                                                    >
                                                        <FontAwesomeIcon
                                                            className={cx('prev-child-icon')}
                                                            icon={faChevronLeft}
                                                        />
                                                    </button>
                                                    <button
                                                        className={cx('next-child-btn')}
                                                        onClick={() => nextChildrenData(item)}
                                                    >
                                                        <FontAwesomeIcon
                                                            className={cx('next-child-icon')}
                                                            icon={faChevronRight}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('content')}>
                                                <span className={cx('name')}>{item.name}</span>
                                                <span className={cx('title')}>
                                                    <a href="/">{item.title}</a>
                                                </span>
                                                <div className={cx('rating')}>
                                                    <FontAwesomeIcon icon={faStar} className={cx('rating-icon')} />
                                                </div>
                                                <div className={cx('price')}>
                                                    <div className={cx('normal-price')}>{item.price}</div>
                                                    <div className={cx('sale-price')}>{item.salePrice}</div>
                                                </div>
                                                <div className={cx('time')}>
                                                    <span className={cx('day')}>485 Days</span>
                                                </div>
                                                <button className={cx('add-btn')}>
                                                    <span>add to cart</span>
                                                </button>
                                            </div>
                                            <div className={cx('sale-off-label')}>
                                                <span className={cx('label')}>{item.saleOff}</span>
                                            </div>
                                            <button className={cx('like-btn')}>
                                                <FontAwesomeIcon className={cx('like-icon')} icon={faHeart} />
                                            </button>
                                        </PopperWrapper>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('button-container')}>
                    <button className={cx('prev-btn')} onClick={prevData}>
                        <FontAwesomeIcon className={cx('prev-icon')} icon={faChevronLeft} />
                    </button>
                    <button className={cx('next-btn')} onClick={nextData}>
                        <FontAwesomeIcon className={cx('next-icon')} icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SpecialProducts;
