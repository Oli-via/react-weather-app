/**
 * Created by aliyy on 2017/1/14.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {term: ''}

    // 等号右边第一个this is the instance of our SearchBar, which has a function called onInputChange
    // bind the function onInputChange to the second this（括号里的this）, which is SearchBar
    // and then replace等号左边的部分（onInputChange with this new bind instance of this function)
    this.onInputChange = this.onInputChange.bind(this)
  //  类似于override下面的onInputChange方法

    this.onSubmit = this.onSubmit.bind(this)
  }

  onInputChange(event){
    //  如果不写上面的代码，就会报错：Uncaught TypeError: Cannot read property 'setState' of undefined
    this.setState({term: event.target.value})
  }

  onSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term)  //要写这句调用fetchWeather并传值
    this.setState({term: ''})
  }

  render(){
    return (
      <form
        className="input-group"
        onSubmit={this.onSubmit}
      >
        <input
          className="form-control"
          value={this.state.term}
          placeholder="Get a five-day forecast of your favourite cities"
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-default">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) { //要传入dispatch
  return bindActionCreators({fetchWeather}, dispatch) //dispatch是第二个参数，第一个参数只传props名字，把fetchWeather dispatch到props中
}

export default connect(null, mapDispatchToProps)(SearchBar) //connect后面两个括号