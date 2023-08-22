import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import images from '~/assets/images/images';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

const cx = classNames.bind(styles);

const logoData = [
    {
        image: images.apple,
    },
    {
        image: images.bose,
    },
    {
        image: images.canon,
    },
    {
        image: images.dell,
    },
    {
        image: images.intel,
    },
    {
        image: images.lg,
    },
    {
        image: images.samsung,
    },
    {
        image: images.sandisk,
    },
    {
        image: images.sony,
    },
];

function Logo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <PopperWrapper className={cx('popper')}>
                    <div className={cx('slider')}>
                        <Swiper
                            slidesPerView={7}
                            autoplay={true}
                            loop={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className={cx('swiper')}
                        >
                            {logoData.map((item, index) => (
                                <SwiperSlide>
                                    <div key={index} className={cx('item')}>
                                        <a className={cx('item-link')} href="/">
                                            <Image src={item.image} className={cx('image')} />
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </PopperWrapper>
            </div>
        </div>
    );
}

export default Logo;
