import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import * as authService from '~/services/authService';
import { useLocalStorage } from '~/hooks';

const cx = classNames.bind(styles);

function Home() {
    const { dataStorage } = useLocalStorage();

    const handleLogout = async () => {
        const response = await authService.logout(dataStorage.token);
        console.log(response);
    };

    return (
        <div className={cx('wrapper')}>
            <h1>Home Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;
