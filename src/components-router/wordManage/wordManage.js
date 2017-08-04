import angular from 'angular';
import template from './wordManage.html';
import './wordManage.scss';

class wordManageController {
    constructor() {
        this.$onInit = () => {
            this.wordManageInit();
        };
    }

    wordManageInit() {
        this.config = require('./config.json');
        this.dataObj = {
            type: this.config.radioList[0].type
        };
        for(let a = 0, alen = this.config.inputList.length; a < alen; a++) {
            this.dataObj[this.config.inputList[a].value] = '';
        }
    }

    submit(){
        this.res = '';
        this.res += 
        `
        {
            "english": \"${this.dataObj.english}\",
            "description": \"${this.dataObj.description}\",
            "type": \"${this.dataObj.type}\",
            "picture": "",
            "chinese": \"${this.dataObj.chinese}\",
            "phonetic": \"${this.dataObj.phonetic}\"
        }
        `;
        this.wordManageInit();
    }
}

export default angular.module('app.wordManage', [])
    .component('wordManage', {
        template: template,
        controller: [wordManageController]
    })
    .name;
