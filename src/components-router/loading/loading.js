import angular from 'angular';
import template from './loading.html';
import './loading.scss';

class loadingController {
    constructor($state, $timeout) {
        this.$state = $state;
        this.$timeout = $timeout;
        this.$onInit = () => {
            this.loadingInitFn();
        };
    }

    loadingInitFn() {
        let url = '';
        if(this.IsPC()) {
            // PC端走管理
            url = 'wordManage';
        } else {
            // 移动端走详情页
            url = 'wordDetail';
        }
        this.$timeout(()=>{
            this.$state.go(url);
        }, 2000);
    }
    
    // 判断客户端是否为PC
    IsPC() {  
        var userAgentInfo = navigator.userAgent;  
        var Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');  
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {  
            if (userAgentInfo.indexOf(Agents[v]) > 0) { 
                flag = false; 
                break; 
            }  
        }
        return flag;  
    }
}

export default angular.module('app.loading', [])
    .component('loading', {
        template: template,
        controller: ['$state', '$timeout', loadingController]
    })
    .name;
