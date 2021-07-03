import './App.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { AntMenu } from './components/Menu/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPages } from './redux/mainReducer';

function App() {

    const dispatch = useDispatch();

    const categories = useSelector(state => state.app.categories);
    const subcategories = useSelector(state => state.app.subcategories);
    const isAppLoading = useSelector(state => state.app.isLoading);

    useEffect(() => dispatch(getAllPages()), [dispatch]);

    if (isAppLoading) return null; // should be loading

    return (
        <div className='App'>
            <Header />
            <AntMenu
                categories={categories}
                subcategories={subcategories} />
            <Main
                categories={categories}
                subcategories={subcategories} />
            <Footer />
        </div>
    );
}

export default App;
