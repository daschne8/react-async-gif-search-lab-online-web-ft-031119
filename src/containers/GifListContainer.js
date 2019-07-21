import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component{

  state = {
    gifs: [],
  }

  fetchGifs = (query = 'dog') => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(response => response.json())
    .then(({data}) => {
      this.setState({
        gifs: data.map(el => el.images.original.url)
      })
    })
  }

  componentDidMount(){
    this.fetchGifs()
  }

  render(){
    //console.log(this.state.gifs)
    return(
      <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList urls={this.state.gifs}/>
      </div>
    )
  }
}
