function playSong(audio, force=false)
{
    try{
        if(seti_items[4] || force)
        {
            // Security :
            document.getElementById(audio).pause();
            document.getElementById(audio).currentTime = 0;
            document.getElementById(audio).play();
        }
    }
    catch{
        console.error('Unable to play audio ${audio}');
    }
}