import React from 'react'
import ScreenNewPlaylist from './ScreenNewPlaylist'
import ScreenPlaylist from './ScreenPlaylist'

export default class Panel extends React.Component{
    render(){
        return(
            <div className='Panel'>
                <ScreenPlaylist />
                <ScreenNewPlaylist />
            </div>
        );
    }
}