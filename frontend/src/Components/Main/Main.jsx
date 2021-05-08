import React, { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { AntBreadCrumbs } from '../Breadcrumbs/Breadcrumbs';
// import { Category } from '../Category/Category';
// import { Contacts } from '../StaticPages/Contacts';
// import { Reviews } from '../StaticPages/Reviews';
import './Main.scss';
import { MainPage } from './MainPage';

const Category = lazy(() => import('../Category/Category'));
const Contacts = lazy(() => import('../StaticPages/Contacts'));
const Reviews = lazy(() => import('../StaticPages/Reviews'));



export const Main = ({ categories, subcategories }) => {

    return (
        <main className='main'>
            <div className='main__bread-crumbs-wrapper'>
                <AntBreadCrumbs />
            </div>
            <div className='main__content'>
                <Suspense fallback={<div>Загрузка...</div>}>
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
                </Suspense>
            </div>
        </main>
    );
};