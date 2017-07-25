import angular from 'angular';
import template from './uiSwitch.html';
import './uiSwitch.scss';

class uiSwitchController {
    constructor() {
        this.$onInit = () => {
            
        };
    }
}

export default angular.module('app.uiSwitch', [])
    .component('uiSwitch', {
        template: template,
        controller: [uiSwitchController]
    })
    .name;
