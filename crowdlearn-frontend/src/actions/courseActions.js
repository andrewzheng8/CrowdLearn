import {SET_COURSE} from './types'

export const setCourse = course => {
  return {type: SET_COURSE, payload: course}
}
