import React from 'react';
import { Route, Switch } from 'react-router';
import { AntBreadCrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Category } from '../Category/Category';
import './Main.scss';

export const Main = ({categoryUrls, categories}) => {    

    return (
        <main className='main__wrapper'>
            <div className='main__breadCrumbsWrapper'>
                <AntBreadCrumbs />
            </div>
            <div className='main'>
                <Switch>
                    <Route path={`/:category(${categoryUrls})`} render={() => <Category categories={categories}/>} />
                    <Route path='*' render={() => <div>404 NOT FOUND</div>} />
                </Switch>
            </div>
        </main>
    );
};