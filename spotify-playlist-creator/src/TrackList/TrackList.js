import React from 'react';
import './TrackList';
import PlayList from '../PlayList';

class TrackList extends React.Component{
    render() {
        return(
            <div className="TrackList">
                <PlayList/> <PlayList/> <PlayList/>
            </div>
        );
    }
}

export default TrackList;