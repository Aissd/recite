routing.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', '$compileProvider'];
export default function routing($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $compileProvider) {

    $urlRouterProvider.otherwise('wordModal');

    $stateProvider
        // loading
        .state('loading', {
            url: '/loading',
            title: 'loading'
        })
        // wordModal
        .state('wordModal', {
            url: '/wordModal',
            template: '<word-modal></word-modal>',
            title: 'wordModal'
        })
        // descriptionModal
        .state('descriptionModal', {
            url: '/descriptionModal',
            template: '<description-modal></description-modal>',
            title: 'descriptionModal'
        })
        ;

    //配置图片白名单(其中 weixin 是微信安卓版的 localId 的形式, wxlocalresource 是 IOS 版本的 localId 形式)
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*((https?|weixin|wxlocalresource):|data:image\/)/);

}