import angular from 'angular';
import template from './wordModal.html';
import './wordModal.scss';

class wordModalController {
    constructor() {
        this.$onInit = () => {
            
        };
    }
}

export default angular.module('app.wordModal', [])
    .component('wordModal', {
        template: template,
        controller: [wordModalController]
    })
    .name;
