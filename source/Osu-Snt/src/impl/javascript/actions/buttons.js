function Random(max) {  return Math.floor(Math.random() * max); }

var waitingUrl = '';
var hidden = true; 
var showParameters = false;
var showWarnings = false;
var secretSettingsActivate = false;
var musicMode = false;
var byPasseSongVolume = false;

function accountPopUp() { 
    hidden = !hidden;
    if(hidden) 
    {
        document.getElementById('usermenu').style.right = '5%';
        document.getElementById('usermenu').style.opacity = '0%';
        document.getElementById('usermenu').style.visibility = 'hidden';
        document.getElementById('usermenu').style.height = '0px'
        document.getElementById('usermenu').style.width = '0px';
    }
    else 
    {
        playSong('open-menu2');
        document.getElementById('usermenu').style.visibility = 'visible';
        document.getElementById('usermenu').style.right = '-5%';
        document.getElementById('usermenu').style.opacity = '100%';

        showParameters = false;
        document.getElementById('parametermenu').style.right = '5%';
        document.getElementById('parametermenu').style.opacity = '0%';
        document.getElementById('parametermenu').style.visibility = 'hidden';

        showWarnings = false;
        document.getElementById('warning').style.right = '5%';
        document.getElementById('warning').style.opacity = '0%';
        document.getElementById('warning').style.visibility = 'hidden';
        document.getElementById('warning').style.height = '0px'
        document.getElementById('warning').style.width = '0px';
    }
}

function secretSettings() { 
    secretSettingsActivate = !secretSettingsActivate;
    if(secretSettingsActivate) 
    {
        playSong('accept');
        
        if(!seti_items[2])document.getElementById('welcometoosu').play();
        if(seti_items[2]) document.getElementById('triangles').play();
        if(seti_items[3]) document.getElementById('circles').play();

        document.getElementById('body').style.backgroundImage = 'url(../resources/background/osu/image'+Random(3)+'.png)'; // Faire une liste pour ca
        document.getElementById('body').style.backgroundRepeat = 'no-repeat';
        document.getElementById('body').style.backgroundSize = '130%';
        document.getElementById('body').style.backgroundColor = '#000000';

        
        if(seti_items[2] || seti_items[3])
            document.getElementById('body').style.animation = 'zoom-in-zoom-out 0.325s ease infinite';

        document.getElementById('secretsettings-icon-lock').style.backgroundImage = 'url(../resources/icons/unlock.png)';
    }
    else 
    {
        playSong('deny');
        document.getElementById('seeya').play();

        document.getElementById('triangles').pause();
        document.getElementById('triangles').currentTime = 0;

        document.getElementById('circles').pause();
        document.getElementById('circles').currentTime = 0;

        document.getElementById('body').style.backgroundImage = '';
        document.getElementById('body').style.backgroundSize = '250%';
        document.getElementById('body').style.backgroundColor = 'rgb(28, 28, 28)';

        document.getElementById('body').style.animation = '';

        document.getElementById('secretsettings-icon-lock').style.backgroundImage = 'url(../resources/icons/lock.png)';
    }
}

function playDiscordo() {
    warningMessage('Discord', 'https://discord.gg/8UCV8yEDcQ')
}

function playNo() {
    document.getElementById('no').play();
}

function activeSong()
{
    const dot = document.getElementById('active-song-button-dot');

    seti_Inverse(4);
    if(seti_items[4]) { dot.style.backgroundColor = 'rgb(89, 231, 103)'; musicMode = true; playSong('accept'); }
    else { dot.style.backgroundColor = 'rgb(227, 76, 76)'; playSong('deny', true); }
}

function showParameter()
{
    playSong('open-menu2');

    showParameters = !showParameters;
    if(!showParameters) 
    {
        accountPopUp();
        document.getElementById('parametermenu').style.right = '5%';
        document.getElementById('parametermenu').style.opacity = '0%';
        document.getElementById('parametermenu').style.visibility = 'hidden';
    }
    else 
    {
        accountPopUp();
        document.getElementById('parametermenu').style.visibility = 'visible';
        document.getElementById('parametermenu').style.right = '-5%';
        document.getElementById('parametermenu').style.opacity = '100%';
    }
} 

function testButton()
{
    const dot = document.getElementById(prmBdToStr(0));


    playSong('accept');
    seti_Inverse(0);


    if(seti_items[0]) dot.style.backgroundColor = 'rgb(89, 231, 103)'; 
    else dot.style.backgroundColor = 'rgb(227, 76, 76)';
}

function trianglesOpening()
{
    const dot = document.getElementById('triangles-button-dot');
    if(seti_items[3])
        circlesOpening();

    musicMode = false;
    seti_Inverse(2);
    if(seti_items[2]) { dot.style.backgroundColor = 'rgb(89, 231, 103)'; musicMode = true; playSong('accept'); }
    else { dot.style.backgroundColor = 'rgb(227, 76, 76)'; playSong('deny'); }

}

function circlesOpening()
{
    const dot = document.getElementById('circles-button-dot');
    if(seti_items[2])
        trianglesOpening();

    musicMode = false;
    seti_Inverse(3);
    if(seti_items[3]) { dot.style.backgroundColor = 'rgb(89, 231, 103)'; musicMode = true; playSong('accept'); }
    else { dot.style.backgroundColor = 'rgb(227, 76, 76)'; playSong('deny'); }

}

function showPostBadges()
{
    seti_Inverse(5);
    if(!seti_items[5]) 
    {
        playSong('deny');
        document.getElementById('medals').style.right = '5%';
        document.getElementById('medals').style.opacity = '0%';
        document.getElementById('medals').style.visibility = 'hidden';
        document.getElementById('medals1').style.right = '5%';
        document.getElementById('medals1').style.opacity = '0%';
        document.getElementById('medals1').style.visibility = 'hidden';
        document.getElementById('medals2').style.right = '5%';
        document.getElementById('medals2').style.opacity = '0%';
        document.getElementById('medals2').style.visibility = 'hidden';

        document.getElementById('medals-settings-dot').style.backgroundColor = 'rgb(227, 76, 76)';
    }
    else 
    {
        playSong('accept');
        document.getElementById('medals').style.visibility = 'visible';
        document.getElementById('medals').style.right = '-5%';
        document.getElementById('medals').style.opacity = '100%';
        document.getElementById('medals1').style.visibility = 'visible';
        document.getElementById('medals1').style.right = '-5%';
        document.getElementById('medals1').style.opacity = '100%';
        document.getElementById('medals2').style.visibility = 'visible';
        document.getElementById('medals2').style.right = '-5%';
        document.getElementById('medals2').style.opacity = '100%';

        document.getElementById('medals-settings-dot').style.backgroundColor = 'rgb(89, 231, 103)';
    }
}

function warningMessage(site, url)
{
    showWarnings = !showWarnings;
    if(!showWarnings) 
    {
        document.getElementById('warning').style.right = '5%';
        document.getElementById('warning').style.opacity = '0%';
        document.getElementById('warning').style.visibility = 'hidden';
        document.getElementById('warning').style.height = '0px'
        document.getElementById('warning').style.width = '0px';

    }
    else 
    {
        playSong('open-menu');
        accountPopUp();
        waitingUrl = url;
        console.log(url);
        document.getElementById('warning').style.visibility = 'visible';
        document.getElementById('warning').style.right = '-5%';
        document.getElementById('warning').style.opacity = '100%';
    }

}

function warningDiscard()
{
    waitingUrl = '';
    accountPopUp();
    playSong('deny');
    showWarnings = false;
    document.getElementById('warning').style.right = '5%';
    document.getElementById('warning').style.opacity = '0%';
    document.getElementById('warning').style.visibility = 'hidden';
    document.getElementById('warning').style.height = '0px'
    document.getElementById('warning').style.width = '0px';
}

function warningAccept()
{
    playSong('accept');
    window.location.href = waitingUrl;
}

function checkIfTrianglesOpening()
{
    if((seti_items[2] || seti_items[3]) && !byPasseSongVolume)
    {
        volumeWarningMessage();
    }
    else{
        secretSettings();
    }
}

function volumeWarningMessage()
{
    showWarnings = !showWarnings;
    if(!showWarnings) 
    {
        document.getElementById('volumeWarning').style.right = '5%';
        document.getElementById('volumeWarning').style.opacity = '0%';
        document.getElementById('volumeWarning').style.visibility = 'hidden';
        document.getElementById('volumeWarning').style.height = '0px'
        document.getElementById('volumeWarning').style.width = '0px';

    }
    else 
    {
        playSong('open-menu');
        accountPopUp();
        document.getElementById('volumeWarning').style.visibility = 'visible';
        document.getElementById('volumeWarning').style.right = '-5%';
        document.getElementById('volumeWarning').style.opacity = '100%';
    }

}

function volumeWarningAccept()
{
    accountPopUp();
    playSong('accept');
    showWarnings = false;

    byPasseSongVolume = true;
    document.getElementById('volumeWarning').style.right = '5%';
    document.getElementById('volumeWarning').style.opacity = '0%';
    document.getElementById('volumeWarning').style.visibility = 'hidden';
    document.getElementById('volumeWarning').style.height = '0px'
    document.getElementById('volumeWarning').style.width = '0px';

    secretSettings();
}

function volumeWarningDiscard()
{
    accountPopUp();
    playSong('deny');
    showWarnings = false;

    document.getElementById('volumeWarning').style.right = '5%';
    document.getElementById('volumeWarning').style.opacity = '0%';
    document.getElementById('volumeWarning').style.visibility = 'hidden';
    document.getElementById('volumeWarning').style.height = '0px'
    document.getElementById('volumeWarning').style.width = '0px';
}