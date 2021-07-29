import React from 'react'
import ScreenNewPlaylist from './ScreenNewPlaylist'
import ScreenPlaylist from './ScreenPlaylist'

export default class Panel extends React.Component{
    render(){

        const currentScreen = () => {
            switch (this.props.selectedScreen) {
                case 'screennewplaylist':
                    return <ScreenNewPlaylist />
                
                case 'screenplaylist':
                    return <ScreenPlaylist />
            
                default:
                    return <p>Erro</p>
            }
        }

        return(
            <div className='Panel'>
                {currentScreen()}
            </div>
        );
    }
}