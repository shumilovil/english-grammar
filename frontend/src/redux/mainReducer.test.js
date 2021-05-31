import * as actions from './mainReducer';
import * as types from './mainReducer';
import { initialState, mainReducer } from './mainReducer';

describe('actions', () => {

    it('should create an action to toggle menu visibility', () => {
        const expectedAction = {
            type: types.TOGGLE_MENU_VISIBILITY
        };
        expect(actions.toggleMenuVisibility()).toEqual(expectedAction);
    });

    it('should create an action to hide menu', () => {
        const expectedAction = {
            type: types.HIDE_MENU
        };
        expect(actions.hideMenu()).toEqual(expectedAction);
    });

    it('should create an action to set current category', () => {
        const category = {
            _id: 101,
            name: 'abc street',
            title: 'ABC Street',
            url: '/abc-street',
            description: 'Обучение младших школьников технике чтения на английском языке',
            subcategoryIds: [201, 202, 203]
        };
        const expectedAction = {
            type: types.SET_CURRENT_CATEGORY,
            category
        };
        expect(actions.setCurrentCategory(category)).toEqual(expectedAction);
    });

    it('should create an action to set current subcategory', () => {
        const subcategory = {
            _id: 201,
            name: 'detyam',
            title: 'Детям',
            url: '/detyam'
        };
        const expectedAction = {
            type: types.SET_CURRENT_SUBCATEGORY,
            subcategory
        };
        expect(actions.setCurrentSubcategory(subcategory)).toEqual(expectedAction);
    });

    it('should create an action to set current static page', () => {
        const staticPage = {
            url: '/otzyvy',
            title: 'Отзывы',
            name: 'otzyvy'
        };
        const expectedAction = {
            type: types.SET_CURRENT_STATIC_PAGE,
            staticPage
        };
        expect(actions.setCurrentStaticPage(staticPage)).toEqual(expectedAction);
    });

});


describe('main reducer', () => {

    it('should return the initial state', () => {
        expect(mainReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle toggleMenuVisibility', () => {
        expect(
            mainReducer(initialState, { type: types.TOGGLE_MENU_VISIBILITY }))
            .toEqual({
                ...initialState,
                isMenuVisible: true
            });

        expect(
            mainReducer({
                ...initialState,
                isMenuVisible: true
            }, { type: types.TOGGLE_MENU_VISIBILITY }))
            .toEqual({
                ...initialState,
                isMenuVisible: false
            });
    });

    it('should handle hideMenu', () => {    
        expect(
            mainReducer({
                ...initialState,
                isMenuVisible: true
            }, { type: types.HIDE_MENU }))
            .toEqual({
                ...initialState,
                isMenuVisible: false
            });
    });

});