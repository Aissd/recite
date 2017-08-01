import angular from 'angular';
import template from './wordDetail.html';
import './wordDetail.scss';

class wordDetailController {
    constructor($timeout) {
        this.$timeout = $timeout;
        this.$onInit = () => {
            this.dataList = require('./../../json/zys.json');
            this.getNext();
        };
    }

    // 取下一个单词
    getNext() {
        this.fade = false;
        this.currentWord = this.getRadomWord();
        this.fade = true;
    }

    // 显示答案，显示下一个按钮
    getAnswer() {
        this.currentWord.display = true;
    }

    // 从单词数组里随机取一元素
    getRadomWord() {
        if(this.dataList.length !== 0) {
            let random = Math.floor(Math.random() * this.dataList.length + 1) - 1;
            let word = this.dataList[random];
            this.dataList.splice(random, 1);
            return word;
        } else {
            return null;
        }
    }
}

export default angular.module('app.wordDetail', [])
    .component('wordDetail', {
        template: template,
        controller: ['$timeout', wordDetailController]
    })
    .name;
