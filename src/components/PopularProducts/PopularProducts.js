import classNames from 'classnames/bind';
import styles from './PopularProducts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images/images';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

const productData = [
    {
        image: images.smartwatches,
        title: 'Smart Watch',
    },
    {
        image: images.image4,
        title: 'Speaker',
    },
    {
        image: images.laptop,
        title: 'Laptops',
    },
];

const collectionData = [
    {
        image: images.image1,
        name: 'Havells',
        title: 'Kids Headphone Bulk 10 Pack Multi Colored For Students',
        rating: 4,
        price: '$100.00',
        salePrice: '',
        saleOff: '',
    },
    {
        image: images.image2,
        name: 'Sony',
        title: 'Olympus pen E-PL9 kit with 14-42, EZ lens, camera',
        rating: 4,
        price: '$110.00',
        salePrice: '$77.00',
        saleOff: '30%',
    },
    {
        image: images.image3,
        name: 'Havells',
        title: 'Honor T1 7.0 1 GB RAM 8 GB ROM...',
        rating: 4,
        price: '$100.00',
        salePrice: '',
        saleOff: '',
    },
    {
        image: images.image4,
        name: 'Bajaj',
        title: 'Beoplay A1 Portable Bluetooth Speaker with Microphone',
        rating: 4,
        price: '$90.00',
        salePrice: '',
        saleOff: '',
    },
    {
        image: images.image5,
        name: 'Sony',
        title: 'Milanese Loop Watch Band for 42mm/44mm Apple Watch',
        rating: 4,
        price: '$90.00',
        salePrice: '',
        saleOff: '',
    },
    {
        image: images.image6,
        name: 'Bajaj',
        title: 'Sony EXTRA BASS Portable Splash-proof Wireless Speaker',
        rating: 4,
        price: '$100.00',
        salePrice: '',
        saleOff: '',
    },
    {
        image: images.image5,
        name: 'Sony',
        title: 'Milanese Loop Watch Band for 42mm/44mm Apple Watch',
        rating: 4,
        price: '$90.00',
        salePrice: '',
        saleOff: '',
    },
    {
        image: images.image6,
        name: 'Bajaj',
        title: 'Sony EXTRA BASS Portable Splash-proof Wireless Speaker',
        rating: 4,
        price: '$100.00',
        salePrice: '',
        saleOff: '',
    },
    {
        image: images.image5,
        name: 'Sony',
        title: 'Milanese Loop Watch Band for 42mm/44mm Apple Watch',
        rating: 4,
        price: '$90.00',
        salePrice: '',
        saleOff: '',
    },
];

function PopularProducts() {
    const [index, setIndex] = useState(0);

    const prevData = () => {
        if (index > 0) {
            setIndex((prev) => prev - 1);
        }
    };

    const nextData = () => {
        if (index < collectionData.length - 6) {
            setIndex((prev) => prev + 1);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('large-title')}>Our Popular Products</div>
                <div className={cx('container')}>
                    <div className={cx('navbar-container')}>
                        <PopperWrapper className={cx('popper')}>
                            {productData.map((item, index) => (
                                <div key={index} className={cx('item')}>
                                    <Image className={cx('item-image')} src={item.image} />
                                    <span className={cx('item-title')}>{item.title}</span>
                                </div>
                            ))}
                        </PopperWrapper>
                    </div>
                    <div className={cx('product-container')}>
                        <div className={cx('sale-off')}>
                            <Image className={cx('sale-off-image')} src={images.homeSpeaker} />
                        </div>
                        <div className={cx('image-container')}>
                            <div
                                className={cx('images')}
                                style={{
                                    transform: `translate3d(${(-index * 1700) / 6}px, 0, 0)`,
                                    width: `calc(1700px / 6 * ${collectionData.length})`,
                                }}
                            >
                                {collectionData.map((data, index) => (
                                    <div key={index} className={cx('data')}>
                                        <PopperWrapper className={cx('data-popper')}>
                                            <div className={cx('data-image')}>
                                                <Image className={cx('image')} src={data.image} />
                                            </div>
                                            <div className={cx('content')}>
                                                <span className={cx('name')}>{data.name}</span>
                                                <span className={cx('title')}>
                                                    <a href="/">{data.title}</a>
                                                </span>
                                                <div className={cx('rating')}>
                                                    <FontAwesomeIcon icon={faStar} className={cx('rating-icon')} />
                                                </div>
                                                <div className={cx('price')}>
                                                    <div className={cx('normal-price', { line: !!data.salePrice })}>
                                                        {data.price}
                                                    </div>
                                                    {data.salePrice && (
                                                        <div className={cx('sale-price')}>{data.salePrice}</div>
                                                    )}
                                                </div>
                                            </div>
                                            {data.saleOff && (
                                                <div className={cx('sale-off-label')}>
                                                    <span className={cx('label')}>{data.saleOff}</span>
                                                </div>
                                            )}
                                            <button className={cx('like-button')}>
                                                <FontAwesomeIcon className={cx('like-icon')} icon={faHeart} />
                                            </button>
                                        </PopperWrapper>
                                    </div>
                                ))}
                            </div>
                        </div>
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

export default PopularProducts;
