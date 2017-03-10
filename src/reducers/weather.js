/**
 * Created by aliyy on 2017/1/15.
 */
import {FETCH_WEATHER} from '../actions/index'

export default function (state = [], action) {  //入参是state和action
  switch(action.type) {
    case FETCH_WEATHER :
      return [ action.payload.data, ...state] //生成新数组[city, city, city] 不是 [city, [city, city]]
  //  将新的城市放到新数组中，与原state里的城市一起返回
  //  不能操作原state，如state.push(action.payload.data)
  //  可以写成state.concat([action.payload.data])，因为concat返回的是一个全新的数组，而不是操作原数组
  }
  return state
}