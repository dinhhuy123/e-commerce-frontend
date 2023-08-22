import classNames from 'classnames/bind';
import styles from './Brand.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images/images';
import Image from '../Image/Image';

const cx = classNames.bind(styles);

const brandData = [
    {
        image: images.brand1,
        title: 'big screen',
        content: 'Smart Watch Series 7',
        description: 'From $399 or $16.62/mo for 24 mo. *',
    },
    {
        image: images.brand2,
        title: 'studio display',
        content: '600 nits or brightness',
        description: '27-inch 5k Retina display',
    },
    {
        image: images.brand3,
        title: 'smartphones',
        content: 'Smartphone 13 Pro.',
        description: 'Now in Green. From $999.00 or $42.62/mo for 24 mo. Footnote*',
    },
    {
        image: images.brand4,
        title: 'home speakers',
        content: 'Room-filling sound',
        description: 'From $699 or $59.42/mo for 12 mo. *',
    },
];

function Brand() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('page-width')}>
                <div className={cx('container')}>
                    {brandData.map((item, index) => (
                        <div key={index} className={cx('item')}>
                            <PopperWrapper className={cx('popper')}>
                                <div className={cx('item-image')}>
                                    <Image className={cx('image')} src={item.image} />
                                </div>
                                <div className={cx('item-content')}>
                                    <div className={cx('title')}>{item.title}</div>
                                    <div className={cx('content')}>{item.content}</div>
                                    <div className={cx('description')}>{item.description}</div>
                                </div>
                            </PopperWrapper>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Brand;
