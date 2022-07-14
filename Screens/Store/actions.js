import * as actions from './actionTypes'

export function searchAdd(description) {
    return {
        type: actions.SEARCH_ADD,
        payload: {
            description: description
        }
    }
}

export function searchRemoved(description) {
    return {
        type: actions.SEARCH_REMOVED,
        payload: {
            description: description
        }
    }
}