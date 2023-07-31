import { Fragment, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import { useLocalStorage } from '~/hooks';
import { getCurrentUser } from '~/redux/slices/authSlice';

function App() {
    const { dataStorage } = useLocalStorage();
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (dataStorage.token) {
            const fetchApi = async () => {
                const response = await dispatch(getCurrentUser(dataStorage.token));
                console.log(response);
                return response;
            };
            fetchApi();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Router>
            <div className="app">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
