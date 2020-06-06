// Patter : this file is a 'shortcut'

//Action creator
export const selectSong = (song) => {
    // return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
}