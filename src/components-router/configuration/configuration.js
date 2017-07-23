import angular from 'angular';
import template from './configuration.html';
import './configuration.scss';

class configurationController {
    constructor() {
        this.$onInit = () => {
            
        };
    }
}

export default angular.module('app.configuration', [])
    .component('configuration', {
        template: template,
        controller: [configurationController]
    })
    .name;
