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

var user = [ // With Xelow Profile value

    // BACKGROUND 0
    //Xelow>'url("https://media.tenor.com/n0gwoMH5mqYAAAAC/anime-girl-and-boy-tbhk.gif")',
    'url("https://osu.ppy.sh/images/headers/profile-covers/c6.jpg")',

    // AVATAR 1 
    //Xelow> 'url("https://64.media.tumblr.com/5bb8c47cde5a53fb90bed9da558cb7b2/6a6e0620c327e113-a5/s540x810/831c3bdfa6e19037e1cabc503f15a39a75b66a3a.gif")',
    'url("https://i.ppy.sh/5909dcab19c5f4d866da39ab5362bd046849b37c/68747470733a2f2f692e696d6775722e636f6d2f5165706e55347a2e6a7067")',

    // USERNAME 2
    'Guest',

    // COUTRY 3
    'Japon'
]

function start()
{
    if(strTobol(cookie_getCookie('visited')))
    {
        console.log(strTobol(cookie_getCookie('visited')));
        console.log(seti_items[4]);

        injectValues('--user-background-url', cookie_getCookie('user_0'));
        injectValues('--user-avatar-url', cookie_getCookie('user_1'));
        import_parameters();

        injectUsername('username');
        injectUsername('username-prof');
        return;
    }
    
    cookie_setCookie('visited', true, 255);
    export_parameters();
    export_user();
}

function injectValues(VarName='', VarValue=''){
    document.documentElement.style.setProperty(VarName, VarValue);
}

function injectUsername(elementName='text', elementValue='')
{
    document.getElementById(elementName).appendChild(document.createTextNode(cookie_getCookie('user_2')));
}

function injectCountry(elementName='null')
{
    document.getElementById(elementName).appendChild(document.createTextNode(cookie_getCookie('user_3')));
    document.getElementById(elementName+"-flag").style.backgroundImage = "url('../../resources/icons/flags/"+cookie_getCookie('user_3')+".svg')";
}