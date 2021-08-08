import React, { lazy } from 'react';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { useLocation } from 'react-router-dom';
import { AntBreadCrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Preloader } from '../Preloader/Preloader';
import './Main.scss';
import { MainPage } from './MainPage';
import ym from 'react-yandex-metrika';

const Category = lazy(() => import('../Category/Category'));
const Contacts = lazy(() => import('../StaticPages/Contacts'));
const Reviews = lazy(() => import('../StaticPages/Reviews'));



export const Main = ({ isAppLoading }) => {

    const { pathname } = useLocation();

    const categories = useSelector(state => state.app.categories);
    const subcategories = useSelector(state => state.app.subcategories);

    useEffect(() => {
        ym('hit', pathname);
    }, [pathname]);

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