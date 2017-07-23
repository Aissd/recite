import angular from 'angular';
import template from './loading.html';
import './loading.scss';

class loadingController {
    constructor($state, $stateParams, $timeout) {
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.$timeout = $timeout;
        this.$onInit = () => {
            this.$timeout(()=>{
                this.$state.go('wordList', {accountName: $stateParams.accountName});
            }, 1500);
        };
    }
}

export default angular.module('app.loading', [])
    .component('loading', {
        template: template,
        controller: ['$state', '$stateParams', '$timeout', loadingController]
    })
    .name;
