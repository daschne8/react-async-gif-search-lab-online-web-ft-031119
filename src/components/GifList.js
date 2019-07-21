import React, {Component} from 'react'

export default class GifList extends Component{


  render(){
    return(
      <div>
        {this.props.urls.map(url =>
          <img src={url} alt="gif" />)}
      </div>
    )
  }
}
