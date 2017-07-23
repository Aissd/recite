import angular from 'angular';
import template from './wordList.html';
import './wordList.scss';

class wordListController {
    constructor($stateParams) {
        this.$stateParams = $stateParams;
        this.$onInit = () => {
            let doc = this.$stateParams.accountName ? this.$stateParams.accountName : 'zys';
            try {
                if(require('./../../json/' + doc + '.json')){
                    this.dataList = require('./../../json/' + doc + '.json');
                }
            } catch (error) {
                alert('哪有你的文件');
                this.dataList = require('./../../json/zys.json');
            }
            console.log(this.dataList);
        };
    }

    // 控制显示
    handleDisplay() {
        this.display = !this.display;
    }
}

export default angular.module('app.wordList', [])
    .component('wordList', {
        template: template,
        controller: ['$stateParams', wordListController]
    })
    .name;
