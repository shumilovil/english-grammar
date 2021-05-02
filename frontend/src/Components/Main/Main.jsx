import React from 'react';
import { Route, Switch } from 'react-router';
import { AntBreadCrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Category } from '../Category/Category';
import './Main.scss';

export const Main = ({ categories, subcategories }) => {

    return (
        <main className='main__wrapper'>
            <div className='main__bread-crumbs-wrapper'>
                <AntBreadCrumbs />
            </div>
            <div className='main'>
                <Switch>
                    <Route exact path='/' render={() => <div>Здесь будут плашки</div>} />
                    <Route path='/:category' render={() => <Category categories={categories} />} />
                    <Route path='*' render={() => <div>404 NOT FOUND</div>} />
                </Switch>
            </div>
        </main>
    );
};