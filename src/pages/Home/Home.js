import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images/images';
import Service from '~/components/Service';
import CollectionList from '~/components/CollectionList';
import FeaturedCollection from '~/components/FeaturedCollection';
import Brand from '~/components/Brand';
import SpecialProducts from '~/components/SpecialProducts';
import PopularProducts from '~/components/PopularProducts';
import Logo from '~/components/Logo';
import LatestNews from '~/components/LatestNews';

const cx = classNames.bind(styles);

const slideData = [
    {
        image: images.largeImage1,
        title: 'Supercharged for pros.',
        content: 'iPad S13+ Pro.',
        description: `From $999 or $41.62/mo. for 24 mo. Footnote*`,
    },
    {
        image: images.largeImage2,
        title: 'Supercharged for pros.',
        content: 'Special Sale',
        description: 'From $999 or $41.62/mo. for 24 mo. Footnote*',
    },
];

const delay = 2500;

function Home() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeOut = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeOut();
        timeoutRef.current = setTimeout(
            () => setIndex((prev) => (prev === slideData.length - 1 ? 0 : prev + 1)),
            delay,
        );

        return () => resetTimeOut();
    }, [index]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('image-section')}>
                <div className={cx('image-container')}>
                    <div className={cx('padding-right')}>
                        <div className={cx('slideshow')}>
                            <div
                                className={cx('slideshow-slider')}
                                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                            >
                                {slideData.map((slider, index) => (
                                    <div key={index} className={cx('large-image')}>
                                        <Image src={slider.image} alt="large-image" className={cx('image')} />
                                        <div className={cx('large-content')}>
                                            <div className={cx('large-text-1')}>{slider.title}</div>
                                            <div className={cx('large-text-2')}>{slider.content}</div>
                                            <div className={cx('large-text-3')}>{slider.description}</div>
                                            <div className={cx('buy-link')}>
                                                <a href="/">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cx('slideshow-dots')}>
                            {slideData.map((_, id) => (
                                <div
                                    key={id}
                                    className={cx('slideshow-dot', `${index === id ? 'active' : ''}`)}
                                    onClick={() => {
                                        setIndex(id);
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('images-list')}>
                        <a className={cx('image-link')} href="/">
                            <Image className={cx('small-image')} src={images.macBook} alt="small-image" />
                            <div className={cx('small-content')}>
                                <div className={cx('small-text-1')}>Best sale</div>
                                <div className={cx('small-text-2')}>Laptops Max</div>
                                <div className={cx('small-text-3')}>
                                    From $1699 or <br /> $64.62/mo for 12 mo. *
                                </div>
                            </div>
                        </a>
                        <a className={cx('image-link')} href="/">
                            <Image className={cx('small-image')} src={images.ipad} alt="small-image" />
                            <div className={cx('small-content')}>
                                <div className={cx('small-text-1')}>New arrival</div>
                                <div className={cx('small-text-2')}>Buy Ipad Air</div>
                                <div className={cx('small-text-3')}>
                                    From $599 or <br /> $49.91/mo for 12 mo. *
                                </div>
                            </div>
                        </a>
                        <a className={cx('image-link')} href="/">
                            <Image className={cx('small-image')} src={images.smartWatch} alt="small-image" />
                            <div className={cx('small-content')}>
                                <div className={cx('small-text-1')}>15% Off</div>
                                <div className={cx('small-text-2')}>Smartwatch 7</div>
                                <div className={cx('small-text-3')}>
                                    Shop for the latest band <br /> styles and colors.
                                </div>
                            </div>
                        </a>
                        <a className={cx('image-link')} href="/">
                            <Image className={cx('small-image')} src={images.headphone} alt="small-image" />
                            <div className={cx('small-content')}>
                                <div className={cx('small-text-1')}>Free engraving</div>
                                <div className={cx('small-text-2')}>AirPods Max</div>
                                <div className={cx('small-text-3')}>
                                    High-fidelity playback & <br /> ultra-low distortion
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('service-section')}>
                <Service />
            </div>
            <div className={cx('collection-section')}>
                <CollectionList />
            </div>
            <div className={cx('featured-collection')}>
                <FeaturedCollection />
            </div>
            <div className={cx('brand-section')}>
                <Brand />
            </div>
            <div className={cx('special-products-section')}>
                <SpecialProducts />
            </div>
            <div className={cx('popular-products-section')}>
                <PopularProducts />
            </div>
            <div className={cx('logo-section')}>
                <Logo />
            </div>
            <div className={cx('news-section')}>
                <LatestNews />
            </div>
        </div>
    );
}

export default Home;
