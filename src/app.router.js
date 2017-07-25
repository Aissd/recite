routing.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', '$compileProvider'];
export default function routing($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $compileProvider) {

    $urlRouterProvider.otherwise('loading');

    $stateProvider
        // loading
        .state('loading', {
            url: '/loading',
            template: '<loading></loading>',
            title: 'loading'
        })
        // wordList
        .state('wordList', {
            url: '/wordList/:accountName',
            template: '<word-list></word-list>',
            title: 'wordList'
        })
        // wordDetail
        .state('wordDetail', {
            url: '/wordDetail/:accountName',
            template: '<word-detail></word-detail>',
            title: 'wordDetail'
        })
        // configuration
        .state('configuration', {
            url: '/configuration',
            template: '<configuration></configuration>',
            title: 'configuration'
        })
        ;

    //配置图片白名单(其中 weixin 是微信安卓版的 localId 的形式, wxlocalresource 是 IOS 版本的 localId 形式)
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*((https?|weixin|wxlocalresource):|data:image\/)/);

}