import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

    renderList(){
        return this.props.songs.map((song) => {
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={()=> this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                
                </div>
            )
        })
    }

    render(){
        //So this.props=== { songs: state.songs }
        return(
            <div className="ui divided list">{this.renderList()}</div>
        )
    }

}

// This is saying: that we are going to take our 'state' object (all data inside Redux Store)
// and show up as props inside of our component
// convention is use the name 'mapStateToProps'

const mapStateToProps = (state) => {
    console.log(state)

    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps, {selectSong})(SongList);