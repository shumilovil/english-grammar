import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';

describe('App basic behaviour', () => {

    const categories = store.getState().app.categories;
    const Application = (
        <BrowserRouter >
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );

    it('Renders Menu component', () => {
        render(Application);
        categories.forEach(category => {            
            const menu = screen.getByTestId('menu-test');
            expect(menu.textContent.includes(category.title)).toBeTruthy();
        });
    });

    it('Click by menu button within the Header component should trigger menu display with overlay', () => {
        render(Application);
        expect(screen.getByTestId('menu-test')).toHaveClass('hidden');        
        const menuButton = screen.getByTestId('menu-toggle-test');
        fireEvent.click(menuButton);
        expect(screen.getByTestId('menu-test')).not.toHaveClass('hidden'); 
    });

    it('Quantity of course Cards on the main page should be equal to the categories quantity', () => {
        render(Application);
        const mainPage = screen.getByTestId('main-page-test');
        const cards = mainPage.querySelectorAll('.course-card');
        expect(cards.length).toBe(categories.length);
    });

});