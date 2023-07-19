import classNames from 'classnames/bind';
import styles from './BestSelling.module.scss';

const cx = classNames.bind(styles);

function BestSelling() {
    return (
        <div className={cx('wrapper')}>
            <h1>Best Selling Page</h1>
        </div>
    );
}

export default BestSelling;
