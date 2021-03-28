import { combineReducers } from 'redux';
import { dragStatus } from './drag.redux.js'
import {encodingItems} from './encoding.redux.js'
import {graphData} from './graphData.redux.js'
import {activeIndex} from './activeIndex.redux.js'
import {config} from './config.redux.js'
import {configsGroup} from './configsGroup.redux.js'
export default combineReducers({
    activeIndex,
    config,
    graphData,
    dragStatus,
    encodingItems,
    configsGroup
});