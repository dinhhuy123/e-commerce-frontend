import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function SignUp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sign-up-title')}>
                <span>Register as a new user</span>
            </div>
            <PopperWrapper className={cx('container')}>
                <form className={cx('inner')}>
                    <div className={cx('full-name-container')}>
                        <div className={cx('title')}>
                            <span>Full Name</span>
                        </div>
                        <div className={cx('input-container')}>
                            <input className={cx('input-box')} type="text" />
                        </div>
                    </div>
                    <div className={cx('email-container')}>
                        <div className={cx('title')}>
                            <span>Email address</span>
                        </div>
                        <div className={cx('input-container')}>
                            <input className={cx('input-box')} type="text" />
                        </div>
                    </div>
                    <div className={cx('password-container')}>
                        <div className={cx('title')}>
                            <span>Password</span>
                        </div>
                        <div className={cx('input-container')}>
                            <input className={cx('input-box')} type="password" />
                        </div>
                        <FontAwesomeIcon className={cx('show-password-icon')} icon={faEye} />
                    </div>
                    <div className={cx('button-container')}>
                        <button className={cx('submit-btn')}>Submit</button>
                    </div>
                    <div className={cx('sign-up-link')}>
                        <span>Already have an account?</span>
                        <NavLink className={cx('link')} to="/login">
                            Log in
                        </NavLink>
                    </div>
                </form>
            </PopperWrapper>
        </div>
    );
}

export default SignUp;
