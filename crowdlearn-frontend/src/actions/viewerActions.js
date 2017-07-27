import {SET_VIEWER} from './types'

export function setUser = (user) =>
  return {type:SET_VIEWER, payload: user}
}
