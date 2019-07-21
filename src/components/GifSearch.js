import React, {Component} from 'react'

export default class GifSearch extends Component{

  state = {
    filter: ''
  }

  handleChange = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  handleSubmit = event =>{
    event.preventDefault()
    this.props.fetchGifs(this.state.filter)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' id="filter" value={this.state.filter} onChange={event => this.handleChange(event)} />
        <button type='submit'>Find Gifs</button>
      </form>
    )
  }
}
