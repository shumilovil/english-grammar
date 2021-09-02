import React, { lazy } from 'react';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { AntBreadCrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Preloader } from '../Preloader/Preloader';
import { MainPage } from './MainPage';
import { useYMUrlChange } from './../../hooks/metrika.hooks';
import './Main.scss';

const Category = lazy(() => import('../Category/Category'));
const Contacts = lazy(() => import('../StaticPages/Contacts'));
const Reviews = lazy(() => import('../StaticPages/Reviews/Reviews'));
const Publications = lazy(() => import('../StaticPages/Publications'));

export const Main = ({ isAppLoading }) => {    

    const categories = useSelector(state => state.app.categories);
    const subcategories = useSelector(state => state.app.subcategories);

    useYMUrlChange();

    return (
        <main className='main'>
            <div className='main__bread-crumbs-wrapper'>
                <AntBreadCrumbs />
            </div>
            <div className='main__content'>
                {isAppLoading
                    ? <Preloader />
                    : <Suspense fallback={<Preloader />}>
                        <Switch>

                            <Route exact path='/'>
                                <MainPage categories={categories} />
                            </Route>

                            <Route exact path='/otzyvy'>
                                <Reviews />
                            </Route>

                            <Route exact path='/contacts'>
                                <Contacts />
                            </Route>

                            <Route exact path='/publications'>
                                <Publications />
                            </Route>

                            <Route path='/:category'>
                                <Category
                                    categories={categories}
                                    subcategories={subcategories} />
                            </Route>

                        </Switch>
                    </Suspense>}
            </div>
        </main>
    );
};