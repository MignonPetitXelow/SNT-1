function PL_Init(id=1)
{
    loadSelfUserData(id);
}

function loadSelfUserData(id='1')
{

    fetch(`http://localhost:1024/post/users/${id}`).then(function(response){ return response.json(); }).then(function(data)
    { 
        document.getElementById("navbar-username").style.backgroundImage = `url(${data.avatar})`;
        document.getElementById("popup-user-avatar").style.backgroundImage = `url(${data.avatar})`;
        document.getElementById("popup-user-background").style.backgroundImage = `url(${data.banner})`;
        injectComponentText("username-prof", data.username);
    });
}

function redirect(url='http://localhost:1024') { window.location.href = url; }
function redirectOwnAcc(usrID=1) { redirect('http://localhost:1024/user/'+usrID); }