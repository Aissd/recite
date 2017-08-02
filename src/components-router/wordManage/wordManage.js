import angular from 'angular';
import template from './wordManage.html';
import './wordManage.scss';

class wordManageController {
    constructor() {
        this.$onInit = () => {
            this.wordManageInit();
        };
    }

    wordManageInit() {
        this.config = require('./config.json');
    }
}

export default angular.module('app.wordManage', [])
    .component('wordManage', {
        template: template,
        controller: [wordManageController]
    })
    .name;
