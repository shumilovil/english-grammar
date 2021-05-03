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

                    <Route exact path='/'>
                        <div>Здесь будут плашки</div>
                    </Route>

                    <Route path='/:category'>
                        <Category
                            categories={categories}
                            subcategories={subcategories} />
                    </Route>

                </Switch>

                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
                <div>Lore</div>
            </div>
        </main>
    );
};