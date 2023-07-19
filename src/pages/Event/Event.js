import classNames from 'classnames/bind';
import styles from './Event.module.scss';

const cx = classNames.bind(styles);

function Event() {
    return (
        <div className={cx('wrapper')}>
            <h1>Event Page</h1>
        </div>
    );
}

export default Event;
