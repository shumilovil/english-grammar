import './App.scss';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { Footer } from './Components/Footer/Footer';
import { AntMenu } from './Components/Menu/Menu';

function App() {   

    return (
        <div className='App'>
            <Header />
            <AntMenu />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
