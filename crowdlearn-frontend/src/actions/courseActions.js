import {SET_COURSE} from './action_types'

export const setCourse = course => {
  return {type: SET_COURSE, payload: course}
}
