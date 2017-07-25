import {SET_VIEWER} from './action_types'

export function setUser = (user) =>
  return {type:SET_VIEWER, payload: user}
}
