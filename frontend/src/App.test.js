import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from './test-utils/test-utils';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export const handlers = [
    rest.get('http://localhost/api/pages', (req, res, ctx) => {
        
        return res(ctx.json({
            categories: [
                {
                    _id: '60e04b7cb80662a461c9830f',
                    name: 'abc street',
                    title: 'ABC Street',
                    url: '/abc-street',
                    description: 'Обучение младших школьников технике чтения на английском языке',
                    subcategoryIds: ['60e04ab0eeea85a94499ff43']
                }
            ],
            subcategories: [
                {
                    _id: '60e04ab0eeea85a94499ff43',
                    name: 'detyam',
                    title: 'Детям',
                    url: '/detyam'
                }
            ],
            staticPages: []
        }), ctx.delay(150));
    })
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('fetches & receives a user after clicking the fetch user button', async () => {
    render(
        <BrowserRouter >
            <App />
        </BrowserRouter >
    );   

    expect(await screen.findByText(/Обучение младших школьников технике чтения на английском языке/i)).toBeInTheDocument();
    screen.debug();     
    
});