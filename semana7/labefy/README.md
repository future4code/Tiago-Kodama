# Labefy

## Mock Data

### playlists
    ``` 
    [ 
        id: String
        name: String,
    ]
    ```
### musics

    ```
        musics: [
            {
                id: string
                name: string,
                artist: string,
                url: string
            }
        ] 
    ```


## Mock de design

### Hierarchy
    -App (CurrentScreen, playlists)
        -Menu ()
        -Player
        -Painel
            -Screen Playlist 
                - Card Music
            -Screen NewPlaylist (inputNameNewPlaylist)
            -Screen All Musics
                - Card Music