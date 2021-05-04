import React from 'react';
import { Route, Switch } from 'react-router';
import { AntBreadCrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Category } from '../Category/Category';
import { Contacts } from '../StaticPages/Contacts';
import { Reviews } from '../StaticPages/Reviews';
import './Main.scss';
import { MainPage } from './MainPage';

export const Main = ({ categories, subcategories }) => {

    return (
        <main className='main__wrapper'>
            <div className='main__bread-crumbs-wrapper'>
                <AntBreadCrumbs />
            </div>
            <div className='main'>
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
            </div>
        </main>
    );
};