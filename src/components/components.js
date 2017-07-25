import angular from 'angular';

// 页面功能组件
import selectComponent from './selectComponent/selectComponent';
import uiSwitch from './uiSwitch/uiSwitch';

import searchInput from './searchInput/searchInput';

// 页面路由组件
import loading from '../components-router/loading/loading';
import wordList from '../components-router/wordList/wordList';
import configuration from '../components-router/configuration/configuration';

// 注入模块
export default angular.module('app.components', [
    // 功能
    selectComponent, uiSwitch, searchInput,
    // 路由
    loading, wordList, configuration
])
.name;