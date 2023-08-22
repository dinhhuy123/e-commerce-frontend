import classNames from 'classnames/bind';
import styles from './FeaturedCollection.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/components/Image';
import images from '~/assets/images/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

const collectionData = [
    {
        image: images.image1,
        name: 'Havells',
        title: 'Kids Headphone Bulk 10 Pack Multi Colored For Students',
        rating: 4,
        price: '$100.00',
    },
    {
        image: images.image2,
        name: 'Sony',
        title: 'Olympus pen E-PL9 kit with 14-42, EZ lens, camera',
        rating: 4,
        price: '$110.00',
    },
    {
        image: images.image3,
        name: 'Havells',
        title: 'Honor T1 7.0 1 GB RAM 8 GB ROM...',
        rating: 4,
        price: '$100.00',
    },
    {
        image: images.image4,
        name: 'Bajaj',
        title: 'Beoplay A1 Portable Bluetooth Speaker with Microphone',
        rating: 4,
        price: '$90.00',
    },
    {
        image: images.image5,
        name: 'Sony',
        title: 'Milanese Loop Watch Band for 42mm/44mm Apple Watch',
        rating: 4,
        price: '$90.00',
    },
    {
        image: images.image6,
        name: 'Bajaj',
        title: 'Sony EXTRA BASS Portable Splash-proof Wireless Speaker',
        rating: 4,
        price: '$100.00',
    },
    {
        image: images.image5,
        name: 'Sony',
        title: 'Milanese Loop Watch Band for 42mm/44mm Apple Watch',
        rating: 4,
        price: '$90.00',
    },
];

function FeaturedCollection() {
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
                <div className={cx('large-title')}>Featured Collection</div>
                <div
                    className={cx('list-container')}
                    style={{
                        transform: `translate3d(${(-index * 1710) / 6}px, 0, 0)`,
                        width: `calc(1710px / 6 * ${collectionData.length})`,
                    }}
                >
                    {collectionData.map((item, index) => (
                        <div key={index} className={cx('item')}>
                            <PopperWrapper className={cx('popper')}>
                                <div className={cx('item-image')}>
                                    <Image className={cx('image')} src={item.image} />
                                </div>
                                <div className={cx('content')}>
                                    <span className={cx('name')}>{item.name}</span>
                                    <span className={cx('title')}>
                                        <a href="/">{item.title}</a>
                                    </span>
                                    <div className={cx('rating')}>
                                        <FontAwesomeIcon icon={faStar} className={cx('rating-icon')} />
                                    </div>
                                    <div className={cx('price')}>{item.price}</div>
                                </div>
                                <button className={cx('like-button')}>
                                    <FontAwesomeIcon className={cx('like-icon')} icon={faHeart} />
                                </button>
                            </PopperWrapper>
                        </div>
                    ))}
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

export default FeaturedCollection;
