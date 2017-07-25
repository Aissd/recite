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
            this.currentWord = this.getRadomWord();
            console.log(this.currentWord);
        };
    }

    // 从单词数组里随机取一元素
    getRadomWord() {
        let random = Math.floor(Math.random() * this.dataList.length + 1) - 1;
        if(this.dataList[random].finished) {
            this.getRadomWord();
        } else {
            this.dataList[random].finished = true;
            return this.dataList[random];
        }
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
