import React from 'react';
import { Route, Switch } from 'react-router';
import { AntBreadCrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Category } from '../Category/Category';
import './Main.scss';

export const Main = () => {
    return (
        <main className='main__wrapper'>
            <div className='main__breadCrumbsWrapper'>
                <AntBreadCrumbs />
            </div>
            <div className='main'>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <div>Текст</div>
                <Switch>
                    <Route exact path='/:category(abc-street|grammar-smile)' component={Category} />
                </Switch>
            </div>
        </main>
    );
};