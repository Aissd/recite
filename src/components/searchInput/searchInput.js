import angular from 'angular';
import template from './searchInput.html';
import './searchInput.scss';

class searchInputController {
    constructor() {
        this.$onInit = () => {
            
        };
    }
}

export default angular.module('app.searchInput', [])
    .component('searchInput', {
        template: template,
        controller: [searchInputController],
        bindings: {
            config: '=',
            fn: '&'
        }
    })
    .name;