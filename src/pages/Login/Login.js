import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '~/redux/slices/authSlice';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginData = {
                email,
                password,
            };
            const action = await dispatch(login(loginData));
            // console.log(action);
            if (action.error?.message) {
                console.log('Error');
            } else {
                navigate('/');
                window.location.reload();
            }
            console.log(action);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-title')}>
                <span>Login to your account</span>
            </div>
            <PopperWrapper className={cx('container')}>
                <form className={cx('inner')} onSubmit={(e) => e.preventDefault()}>
                    <div className={cx('email-container')}>
                        <div className={cx('title')}>
                            <span>Email address</span>
                        </div>
                        <div className={cx('input-container')}>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={cx('input-box')}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className={cx('password-container')}>
                        <div className={cx('title')}>
                            <span>Password</span>
                        </div>
                        <div className={cx('input-container')}>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={cx('input-box')}
                                type="password"
                            />
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
                        <button className={cx('submit-btn')} onClick={handleSubmit}>
                            Submit
                        </button>
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
