import classNames from 'classnames/bind';
import styles from './LatestNews.module.scss';
import images from '~/assets/images/images';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

const newsData = [
    {
        image: images.vr,
        date: '11 june, 2022',
        title: 'Latest News',
        content:
            "You're only as good as your last collection, which is an enormous pressure. I think there is something about luxury...",
    },
    {
        image: images.performance,
        date: '11 june, 2022',
        title: 'Latest News',
        content:
            "You're only as good as your last collection, which is an enormous pressure. I think there is something about luxury...",
    },
    {
        image: images.business,
        date: '11 june, 2022',
        title: 'Latest News',
        content:
            "You're only as good as your last collection, which is an enormous pressure. I think there is something about luxury...",
    },
    {
        image: images.screen,
        date: '11 june, 2022',
        title: 'Latest News',
        content:
            "You're only as good as your last collection, which is an enormous pressure. I think there is something about luxury...",
    },
    {
        image: images.beauty,
        date: '11 june, 2022',
        title: 'Latest News',
        content:
            "You're only as good as your last collection, which is an enormous pressure. I think there is something about luxury...",
    },
];

function LatestNews() {
    const [index, setIndex] = useState(0);

    const prevData = () => {
        if (index > 0) {
            setIndex((prev) => prev - 1);
        }
    };

    const nextData = () => {
        if (index < newsData.length - 4) {
            setIndex((prev) => prev + 1);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('big-title')}>Our Latest News</div>
                <div
                    className={cx('list-container')}
                    style={{
                        transform: `translate3d(${(-index * 1710) / 4}px, 0, 0)`,
                        width: `calc(1710px / 4 * ${newsData.length})`,
                    }}
                >
                    {newsData.map((item, index) => (
                        <div key={index} className={cx('item')}>
                            <PopperWrapper className={cx('popper')}>
                                <Image className={cx('image')} src={item.image} />
                                <div className={cx('item-content')}>
                                    <div className={cx('date')}>{item.date}</div>
                                    <div className={cx('title')}>{item.title}</div>
                                    <div className={cx('content')}>{item.content}</div>
                                    <button className={cx('read-more-btn')}>
                                        <span>read more</span>
                                    </button>
                                </div>
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

export default LatestNews;
