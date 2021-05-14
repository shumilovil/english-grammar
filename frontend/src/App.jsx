import './App.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { AntMenu } from './components/Menu/Menu';
import { useSelector } from 'react-redux';

function App() {

    const categories = useSelector(state => state.app.categories);
    const subcategories = useSelector(state => state.app.subcategories);    

    if (!categories || !subcategories) return null; // should be loading

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
