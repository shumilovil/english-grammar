import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWantEat } from './redux/testReducer';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { Footer } from './Components/Footer/Footer';

function App() {

    const dispatch = useDispatch();
    const name = useSelector((state) => state.eat.name);
    const hunger = useSelector((state) => state.eat.wantEat);

    const clickHandler = () => {
        dispatch(toggleWantEat());
    };

    return (
        <div className='App'>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
