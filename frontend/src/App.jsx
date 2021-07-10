import './App.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { AntMenu } from './components/Menu/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPages } from './redux/mainReducer';
import { getAchievements } from './redux/achievementsReducer';

function App() {

    const dispatch = useDispatch();

    const isAppLoading = useSelector(state => state.app.isLoading);

    useEffect(() => {
        dispatch(getPages());
        dispatch(getAchievements());
    }, [dispatch]);

    return (
        <div className='App'>
            <Header isAppLoading={isAppLoading} />
            <AntMenu isAppLoading={isAppLoading} />
            <Main isAppLoading={isAppLoading} />
            <Footer />
        </div>
    );
}

export default App;
