const key = 'user';

const useLocalStorage = () => {
    const getItem = () => {
        const dataStorage = JSON.parse(localStorage.getItem(key)) || {};

        return dataStorage;
    };

    const setItem = (object) => {
        const dataStorage = getItem();

        Object.assign(dataStorage, object);

        return localStorage.setItem(key, JSON.stringify(dataStorage));
    };

    const deleteItem = (item) => {
        const dataStorage = getItem();
        delete dataStorage[item];

        const jsonData = JSON.stringify(dataStorage);

        return localStorage.setItem(key, jsonData);
    };

    return {
        dataStorage: getItem(),
        setDataStorage: setItem,
        deleteDataStorage: deleteItem,
    };
};

export default useLocalStorage;
