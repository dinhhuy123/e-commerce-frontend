import classNames from 'classnames/bind';
import styles from './Service.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images/images';

const cx = classNames.bind(styles);

function Service() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('item')}>
                    <div className={cx('item-image')}>
                        <Image className={cx('image')} src={images.shippingCar} />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('title')}>Free shipping</div>
                        <div className={cx('des')}>From all orders over $100</div>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('item-image')}>
                        <Image className={cx('image')} src={images.surprisedGift} />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('title')}>Daily Surprise Offers</div>
                        <div className={cx('des')}>Save up to 25% off</div>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('item-image')}>
                        <Image className={cx('image')} src={images.support} />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('title')}>Support 24/7</div>
                        <div className={cx('des')}>Shop with an expert</div>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('item-image')}>
                        <Image className={cx('image')} src={images.afford} />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('title')}>Affordable prices</div>
                        <div className={cx('des')}>Ger factory direct price</div>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('item-image')}>
                        <Image className={cx('image')} src={images.payment} />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('title')}>Secure Payments</div>
                        <div className={cx('des')}>100% Protected Payments</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
