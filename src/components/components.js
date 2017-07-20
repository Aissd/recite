import angular from 'angular';

// 页面功能组件
import selectComponent from './@selectComponent/selectComponent';

// 页面路由组件
import wordModal from '../components-router/wordModal/wordModal';
import descriptionModal from '../components-router/descriptionModal/descriptionModal';

// 注入模块
export default angular.module('app.components', [
    // 功能
    selectComponent,
    // 路由
    wordModal, descriptionModal
])
.name;