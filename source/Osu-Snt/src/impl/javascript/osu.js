var seti_items = [

    test = false,
    pastest = false,
    triangles_opening = false,
    circles_opening = false,
    song_active = false,
    show_badges = true,

]

var parameter_button_dot = [
    'settings-button-dot',
    null,
    'triangles-button-dot',
    'circles-button-dot',
    'active-song-button-dot',
    'medals-settings-dot',
]

function start()
{
    if(strTobol(cookie_getCookie('visited')))
    {
        console.log(strTobol(cookie_getCookie('visited')));
        console.log(seti_items[4]);

        import_parameters();

        return;
    }
    
    cookie_setCookie('visited', true, 255);
    export_parameters(strTobol(cookie_getCookie('visited'))); //FIXME: Dois etre l'inverse de la valeur entrer
}