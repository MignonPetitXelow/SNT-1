function PL_U_Load(id='1')
{
    loadUserBaseData(id);
}

function loadUserBaseData(id)
{
    fetch(`http://localhost:1024/post/users/${id}`).then(function(response){ return response.json(); }).then(function(data)
    { 
        if(data.error){ redirect("http://localhost:1024")}
        injectComponentText("username", data.username);

        injectComponentText("liked-subinfo", data.like);
        injectComponentText("playstyle-subinfo", data.playstyle.replace(";", " "));

        injectComponentText("user-coutry", data.country);
        document.getElementById("user-coutry-flag").style.backgroundImage = "url(../../assets/icons/flags/"+data.country+".svg)";

        injectVariable('--user-background-url', `url(${data.banner})`);
        injectVariable('--user-avatar-url', `url(${data.avatar})`);

        const b = data.friend.split(';');
        const c = data.played.split(';');

        for(var i = 0; i < b.length-1; ++i) { injectFavFriendComponent(b[i]); }
        for(var i = 0; i < c.length-1; ++i) { injectRecentPlayComponent(c[i]); }
    });
}

function injectFavFriendComponent(id=1) 
{
    fetch(`http://localhost:1024/post/users/${id}`).then(function(response){ return response.json(); }).then(function(data)
    { 
        document.getElementById('favfriend-container').insertAdjacentHTML("beforeend","<div class=\"friend-object-container\" onclick=\"redirect('http://localhost:1024/user/"+id+"');\"><div class=\"friend-object-banner\" style=\"background-image: url('"+data.banner+"');\"></div> <div style=\"transform: translateY(-120px) translateX(-13px);\"><div class=\"popup-user-avatar\" style=\"background-image: url('"+data.avatar+"');\"></div><div class=\"popup-user-footer\" style=\"justify-content: center; padding-left: 27px;\"><span class=\"popup-user-name\" style=\"text-align: center; width: 95px;\">"+data.username+"</span></div></div></div>");
    });
}

function injectRecentPlayComponent(id='1&34') 
{   
    const a = id.split('&');
    fetch(`http://localhost:1024/post/beatmaps/${a[0]}`).then(function(response){ return response.json(); }).then(function(data)
    { 
        document.getElementById('categorie-obj-container').insertAdjacentHTML(
            "beforeend",
            `<div class="map-played" onclick="redirect('${data.link}')"> 
                <div class="map-object-banner" style="background-image: url('${data.banner}');"></div>
                <div class="map-object-container">
                    <div class="map-object-container-s">
                        <span class="map-object-title">${data.name}</span>
                        <span class="map-object-difficulty">${data.difficulty_name}</span>
                    </div>
                    <div class="map-object-playButton"></div>
                    <span class="map-numberofplay">${a[1]}</span>
                </div>
            </div>`
        );
    });
}