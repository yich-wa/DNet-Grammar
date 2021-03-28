
const SET_ACTIVE_CONFIG_INDEX = "UPDATE_CONFIG";

export function activeIndex(state = 0, action) {
	switch (action.type) {
		case SET_ACTIVE_CONFIG_INDEX:
            return action.payload
		default:
			return state;
	}
}

// 修改
export function setActiveConfigIndex(newIndex) {
	return { type: SET_ACTIVE_CONFIG_INDEX, payload: newIndex };
}


