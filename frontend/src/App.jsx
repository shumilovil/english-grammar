import './App.scss';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { Footer } from './Components/Footer/Footer';
import { AntMenu } from './Components/Menu/Menu';
import { useSelector } from 'react-redux';
import { getCategoryUrls } from './CommonHelpers/CommonHelpers';
import { useMemo } from 'react';

function App() {

    const categories = useSelector(state => state.app.categories);
    const subcategories = useSelector(state => state.app.subcategories);
    console.log('categories', categories);

    const categoryUrls = useMemo(() => getCategoryUrls(categories), [categories]);

    if (!categories || !subcategories) return null;

    return (
        <div className='App'>
            <Header />
            <AntMenu
                categories={categories}
                subcategories={subcategories} />
            <Main
                categoryUrls={categoryUrls}
                categories={categories} />
            <Footer />
        </div>
    );
}

export default App;
