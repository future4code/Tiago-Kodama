# Labefy

## Mock Data

### playlists
    ``` 
    [ 
        name: String,
        description: String,
        musics: [
            {
                id: string
                name: string,
                artist: string,
                url: string
            }
        ] 
    ]
    ```

## Mock de design

### Hierarchy
    -App (CurrentScreen)
        -Menu
        -Player
        -Painel
            -Screen Playlist 
            -Screen NewPlaylist (ControlledInputs)