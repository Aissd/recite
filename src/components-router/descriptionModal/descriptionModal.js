import angular from 'angular';
import template from './descriptionModal.html';
import './descriptionModal.scss';

class descriptionModalController {
    constructor() {
        this.$onInit = () => {
            
        };
    }
}

export default angular.module('app.descriptionModal', [])
    .component('descriptionModal', {
        template: template,
        controller: [descriptionModalController]
    })
    .name;
