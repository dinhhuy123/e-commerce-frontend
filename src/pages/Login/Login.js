import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-title')}>
                <span>Login to your account</span>
            </div>
            <PopperWrapper className={cx('container')}>
                <form className={cx('inner')}>
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
                    <div className={cx('items')}>
                        <div className={cx('remember')}>
                            <input type="checkbox" className={cx('checkbox')} />
                            <span>Remember me</span>
                        </div>
                        <div className={cx('forgot-password')}>
                            <NavLink className={cx('link')} href="/">
                                Forgot your password?
                            </NavLink>
                        </div>
                    </div>
                    <div className={cx('button-container')}>
                        <button className={cx('submit-btn')}>Submit</button>
                    </div>
                    <div className={cx('sign-up-link')}>
                        <span>Not have any account?</span>
                        <NavLink className={cx('link')} to="/sign-up">
                            Sign up
                        </NavLink>
                    </div>
                </form>
            </PopperWrapper>
        </div>
    );
}

export default Login;
