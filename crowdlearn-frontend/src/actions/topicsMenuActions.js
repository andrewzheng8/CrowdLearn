import {SET_ACTIVE_ITEM} from './types'

export const setActiveItem = itemName => {
  return {type: SET_ACTIVE_ITEM, payload: itemName}
}
