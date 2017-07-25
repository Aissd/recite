import angular from 'angular';
import template from './selectComponent.html';
import './selectComponent.scss';

class selectComponentController {
    constructor() {
        this.$onInit = () => {
            
        };
    }

    // 点击选项
    selectItem(target, event, index) {
        if(event.target.nodeName == 'LABEL') return;
        console.log(this.config);
        this.config[index] = target;
        console.log(this.config);
        this.fn({value: target});
    }
}

export default angular.module('app.selectComponent', [])
    .component('selectComponent', {
        template: template,
        controller: [selectComponentController],
        bindings: {
            config: '=',
            fn: '&'
        }
    })
    .name;