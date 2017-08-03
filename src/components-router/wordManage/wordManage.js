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
        console.log(this.dataObj);
    }

    submit(){
        console.log(this.dataObj);
        this.res = '';
        this.res += 
        `
        {
            "english": \"+this.dataObj+\",
            "description": "",
            "type": "",
            "picture": "",
            "chinese": "",
            "phonetic": "",
        }
        `;
        console.log(this.res);
    }
}

export default angular.module('app.wordManage', [])
    .component('wordManage', {
        template: template,
        controller: [wordManageController]
    })
    .name;
