import angular from 'angular';
import template from './wordDetail.html';
import './wordDetail.scss';

class wordDetailController {
    constructor() {
        this.$onInit = () => {
            this.dataList = require('./../../json/zys.json');
            this.currentWord = this.getRadomWord();
            console.log(this.currentWord);
        };
    }

    // 取下一个单词
    getNext() {
        this.currentWord = this.getRadomWord();
    }

    // 看答案
    getAnswer() {
        this.currentWord.display = true;
    }

    // 从单词数组里随机取一元素
    getRadomWord() {
        let random = Math.floor(Math.random() * this.dataList.length + 1) - 1;
        if(this.dataList[random].finished) {
            this.getNext();
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

export default angular.module('app.wordDetail', [])
    .component('wordDetail', {
        template: template,
        controller: [wordDetailController]
    })
    .name;
