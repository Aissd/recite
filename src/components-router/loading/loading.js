import angular from 'angular';
import template from './loading.html';
import './loading.scss';

class loadingController {
    constructor($state, $timeout) {
        this.$state = $state;
        this.$timeout = $timeout;
        this.$onInit = () => {
            this.$timeout(()=>{
                this.$state.go('wordDetail');
            }, 2000);
        };
    }
}

export default angular.module('app.loading', [])
    .component('loading', {
        template: template,
        controller: ['$state', '$timeout', loadingController]
    })
    .name;
