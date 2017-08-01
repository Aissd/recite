import angular from 'angular';
import template from './wordManage.html';
import './wordManage.scss';

class wordManageController {
    constructor() {
        this.$onInit = () => {
            
        };
    }
}

export default angular.module('app.wordManage', [])
    .component('wordManage', {
        template: template,
        controller: [wordManageController]
    })
    .name;
