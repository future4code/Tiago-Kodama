import React from 'react'
import Styled from 'styled-components'
import ScreenAllMusics from './ScreenAllMusics'
import ScreenNewPlaylist from './ScreenNewPlaylist'
import ScreenPlaylist from './ScreenPlaylist'

const StyledPanel = Styled.div`
    overflow: auto;
`

export default class Panel extends React.Component{

    addPlaylist = playlist => {
        this.props.updatePlaylists(playlist)
    }

    render(){

        const currentScreen = () => {
            switch (this.props.selectedScreen) {
                case 'screennewplaylist':
                    return <ScreenNewPlaylist
                                addPlaylist={this.addPlaylist}
                            />
                
                case 'screenplaylist':
                    return <ScreenPlaylist 
                                playlist={this.props.playlist}
                                setMusics={this.props.setMusics}
                            />

                case 'screenallmusics':
                    return <ScreenAllMusics
                                playlists={this.props.playlists}
                                setMusics={this.props.setMusics}
                            />
            
                default:
                    return <p>Erro</p>
            }
        }

        return(
            <StyledPanel className='Panel'>
                {currentScreen()}
            </StyledPanel>
        );
    }
}