import classNames from 'classnames/bind';
import styles from './CollectionList.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images/images';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function CollectionList() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <PopperWrapper className={cx('popper')}>
                    <div className={cx('row')}>
                        <div className={cx('item', 'no-border')}>
                            <div className={cx('content')}>
                                <div className={cx('title')}>Computers & Laptops</div>
                                <div className={cx('quantity')}>8 items</div>
                            </div>
                            <div className={cx('item-image')}>
                                <Image className={cx('margin-right')} src={images.laptop} />
                            </div>
                        </div>
                        <div className={cx('item', 'no-border')}>
                            <div className={cx('content')}>
                                <div className={cx('title')}>Mobiles & Tablets</div>
                                <div className={cx('quantity')}>5 items</div>
                            </div>
                            <div className={cx('item-image')}>
                                <Image className={cx('margin-right')} src={images.mobile} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('item')}>
                            <div className={cx('content', 'padding-left')}>
                                <div className={cx('title')}>Cameras & Video</div>
                                <div className={cx('quantity')}>10 items</div>
                            </div>
                            <div className={cx('item-image')}>
                                <Image className={cx('margin-right')} src={images.camera} />
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('content', 'padding-left')}>
                                <div className={cx('title')}>Headphones</div>
                                <div className={cx('quantity')}>6 items</div>
                            </div>
                            <div className={cx('item-image')}>
                                <Image className={cx('margin-right')} src={images.headphones} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('item')}>
                            <div className={cx('content', 'padding-left')}>
                                <div className={cx('title')}>Smart TV</div>
                                <div className={cx('quantity')}>12 items</div>
                            </div>
                            <div className={cx('item-image')}>
                                <Image className={cx('margin-right')} src={images.smartTV} />
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('content', 'padding-left')}>
                                <div className={cx('title')}>Accessories</div>
                                <div className={cx('quantity')}>10 items</div>
                            </div>
                            <div className={cx('item-image')}>
                                <Image className={cx('margin-right')} src={images.accessories} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('item')}>
                            <div className={cx('content', 'padding-left')}>
                                <div className={cx('title')}>Smartwatches</div>
                                <div className={cx('quantity')}>13 items</div>
                            </div>
                            <div className={cx('item-image')}>
                                <Image className={cx('margin-right')} src={images.smartwatches} />
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('content', 'padding-left')}>
                                <div className={cx('title')}>Portable Speakers</div>
                                <div className={cx('quantity')}>8 items</div>
                            </div>
                            <div className={cx('item-image')}>
                                <Image className={cx('margin-right')} src={images.speaker} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('item')}>
                            <div className={cx('content', 'padding-left')}>
                                <div className={cx('title')}>Music & Gaming</div>
                                <div className={cx('quantity')}>4 items</div>
                            </div>
                            <div className={cx('item-image')}>
                                <Image src={images.gaming} />
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('content', 'padding-left')}>
                                <div className={cx('title')}>Home Appliances</div>
                                <div className={cx('quantity')}>6 items</div>
                            </div>
                            <div className={cx('item-image')}>
                                <Image src={images.homeAppliance} />
                            </div>
                        </div>
                    </div>
                </PopperWrapper>
            </div>
        </div>
    );
}

export default CollectionList;
