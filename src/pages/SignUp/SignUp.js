import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { NavLink } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function SignUp() {
    const [isShowingPwd, setIsShowingPWd] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('sign-up-title')}>
                <span>Register as a new user</span>
            </div>
            <div className={cx('from-sign-in')}>
                <PopperWrapper className={cx('container')}>
                    <form className={cx('inner')}>
                        <div className={cx('full-name-container')}>
                            <div className={cx('title')}>
                                <span>Full Name</span>
                            </div>
                            <div className={cx('input-container')}>
                                <input
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className={cx('input-box')}
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                        <div className={cx('email-container')}>
                            <div className={cx('title')}>
                                <span>Email address</span>
                            </div>
                            <div className={cx('input-container')}>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={cx('input-box')}
                                    type="email"
                                    required
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
                                    type={isShowingPwd ? 'text' : 'password'}
                                    required
                                />
                            </div>
                            {isShowingPwd ? (
                                <div onClick={() => setIsShowingPWd(false)}>
                                    <EyeIcon className={cx('show-password-icon')} />
                                </div>
                            ) : (
                                <div onClick={() => setIsShowingPWd(true)}>
                                    <EyeSlashIcon className={cx('show-password-icon')} />
                                </div>
                            )}
                        </div>
                        <div className={cx('button-container')}>
                            <button
                                className={cx('submit-btn', { disabled: !(fullName && email && password) })}
                                disabled={!(fullName && email && password)}
                            >
                                Submit
                            </button>
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
        </div>
    );
}

export default SignUp;
