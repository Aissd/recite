//全局模块
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appRouter from './app.router';

// 全局组件
import components from './components/components';

//全局样式
import './css/main.scss';
import './app.scss';

//页面模板
let appComponent = {
    template: require('./app.html'),
    controller: function ($rootScope, $state, $stateParams) {
        var vm = this;

        $rootScope.$on('$stateChangeSuccess', function () {
            //根据页面情况设置是否需要页头和页左
            changeStateName($state);
            //设置页面标题
            $rootScope.$state = $state;
            //判断路由参数
            $rootScope.$stateParams = $stateParams;
        });

        function changeStateName(state) {
            switch (state.current.name) {
            default:
                vm.pageMainModel = 'main';
                break;
            }
        }

    },
    controllerAs: 'app'
};
appComponent.$inject = ['$rootScope', '$state', '$stateParams'];

//app.run
let appRun = ['$rootScope', function ($rootScope) {
    console.log($rootScope);
    $rootScope.$on('$stateChangeStart', function (event, toState) {
        console.log(event);
        console.log(toState);
    });
}];


export default angular.module('app', [uiRouter, components])
    //初始化设置
    .run(appRun)
    //页面路由
    .config(appRouter)
    //页面模板
    .component('app', appComponent)
    .name;



