import {initConfig} from '../util/initConfig.js'

const RESET_ACTIVE_CONFIG = "UPDATE_CONFIG"
const MODIFY_ACTIVIE_CONFIG = "MODIFY_CONFIG"
const ADD_NEW_CONFIG = "ADD_NEW_CONFIG"
const DELETE_ACTIVE_CONFIG = "DELETE_ACTIVE_CONFIG"

export function configsGroup(state = [initConfig], action) {
	switch (action.type) {
		case MODIFY_ACTIVIE_CONFIG:
            const  {activeIndex,key,value} = action.payload
            state[activeIndex] = {
                ...state[activeIndex],
                [key]:{
                    ...state[activeIndex][key],
                    ...value
                }
            }
            return state
        case RESET_ACTIVE_CONFIG: 
            state[action.payload.activeIndex] = action.payload.config
            return state
        case ADD_NEW_CONFIG:
            state.push(action.payload)
            return state
        case DELETE_ACTIVE_CONFIG:
            state.splice(action.payload, 1)
		default:
			return state;
	}
}


// 修改激活config中的某一个设置
export function modifyAcitveConfig(payload) {
	return { type: MODIFY_ACTIVIE_CONFIG, payload };
}

// 重设激活的那套config,用模板覆盖
export function resetActiveConfig(payload) {
	return { type: RESET_ACTIVE_CONFIG, payload};
}

// 增加一套config
export function addNewConfig(payload) {
    return { type: ADD_NEW_CONFIG, payload}
}

// 删除激活的那个config
export function deleteActive(payload){
    return { type: DELETE_ACTIVE_CONFIG, payload}
}


