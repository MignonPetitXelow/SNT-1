const flagsName = [
    {country: "undefined", name: "Pays inconnue"},
    {country:"US", name:"United States"},
    {country:"RU", name:"Russian Federation"},
    {country:"DE", name:"Germany"},
    {country:"CA", name:"Canada"},
    {country:"PL" , name:"Poland"},
    {country:"PH" , name:"Philippines"},
    {country:"FR" , name:"France"},
    {country:"JP" , name:"Japan"},
    {country:"BR" , name:"Brazil"},
    {country:"GB" , name:"United Kingdom"},
    {country:"ID" , name:"Indonesia"},
    {country:"HM" , name:"Australia"},
    {country:"TW" , name:"Taiwan"},
    {country:"CL" , name:"Chile"},
    {country:"MY" , name:"Malaysia"},
    {country:"KR" , name:"South Korea"},
    {country:"UA" , name:"Ukraine"},
    {country:"MX" , name:"Mexico"},
    {country:"AR" , name:"Argentina"},
    {country:"TH" , name:"Thailand"},
    {country:"SG" , name:"Singapore"},
    {country:"CN" , name:"China"},
    {country:"VN" , name:"Vietnam"},
    {country:"IT" , name:"Italia"},
    {country:"HK" , name:"Hong Kong"},
    {country:"FI" , name:"Finland"},
    {country:"ES" , name:"Spain"},
    {country:"NL" , name:"Netherlands"},
    {country:"SE" , name:"Sweden"},
    {country:"TR" , name:"Turkey"},
    {country:"PE" , name:"Peru"},
    {country:"CZ" , name:"Czech Republic"},
    {country:"RO" , name:"Romania"},
    {country:"PT" , name:"Portugal"},
    {country:"NO" , name:"Norway"},
    {country:"AT" , name:"Austria"},
    {country:"HU" , name:"Hungary"},
    {country:"CO" , name:"Colombia"},
    {country:"KZ" , name:"Kazakhstan"},
    {country:"BE" , name:"Belgium"},
    {country:"BY" , name:"Belarus"},
    {country:"NZ" , name:"New Zealand"},
    {country:"LT" , name:"Lithuania"},
    {country:"IL" , name:"Israel"},
    {country:"DK" , name:"Denmark"},
    {country:"IN" , name:"India"},
    {country:"CH" , name:"Switzerland"},
    {country:"GR" , name:"Greece"},
    {country:"EE" , name:"Estonia"},
    {country:"BG" , name:"Bulgaria"},
];

function getCountryName(country="undefined") { for(var i = 0; i < flagsName.length; ++i) if(flagsName[i].country == country) return flagsName[i].name; return flagsName[0].name;}

function PL_U_Load(id='1', page)
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

        if(data.discord_account != '') document.getElementById('subinfoprofile-container').insertAdjacentHTML("beforeend",`
            <div class="display-subinfo-value">
                <span class="display-value-subinfo-label" style="font-size: 14px;"><span style="
                    display: block;
                    background-image: url('../assets/icons/discord.png');
                    background-repeat: no-repeat;
                    background-size: 110%;
                    background-position: 50%;
                    position: relative;

                    width: 14px;
                    height: 14px;
                    top: 3px;
                    filter: sepia(255) brightness(150);
                "></span></span>
                <span class="display-value-subinfo-value" id="liked-subinfo" style="font-size: 14px;">${data.discord_account}</span>
            </div>
        `);

        var playStyle = '';
        const playStyleList = data.playstyle.split(';');
        for(var i = 0; i < playStyleList.length; ++i) { playStyle += playStyleList[i]; if(i < playStyleList.length-2) playStyle += ', '; }

        injectComponentText("playstyle-subinfo", playStyle);

        injectComponentText("user-coutry", getCountryName(data.country));
        document.getElementById("user-coutry-flag").style.backgroundImage = "url(../../assets/icons/flags/"+data.country+".png)";

        injectVariable('--user-background-url', `url(${data.banner})`);
        injectVariable('--user-avatar-url', `url(${data.avatar})`);

        injectPageComponents(data);
        injectViewSelfProfile(id);

        if(data.friend == '') { injectSadMessage('favfriend-container', "<(＿　＿)> Ce profile n'a pas d'amis.."); }
        if(data.played == '') { injectSadMessage('beatmaps-container', "(。﹏。*) Ce profile n'a pas jouer de map recement.."); }


    });
}

function injectPageComponents(data)
{
    const b = data.friend.split(';');
    const c = data.played.split(';');

    for(var i = 0; i < b.length-1; ++i) { injectFavFriendComponent(b[i]); }
    for(var i = 0; i < c.length-1; ++i) { injectRecentPlayComponent(c[i]); }
}

function injectViewSelfProfile(id=1)
{
    if(id != 1){ //(self id)
        document.getElementById("popup-menu-profile").insertAdjacentHTML("afterbegin", `<a class="popup-button" onclick="redirectOwnAcc();"><span class="icon-github" style="background-image: url('https://osu.ppy.sh/images/icons/profile.svg')"></span><span class="popup-button-text">mon compte</span></a>`)
    }
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
        document.getElementById('beatmaps-container').insertAdjacentHTML(
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

function injectSadMessage(obj,message)
{
    document.getElementById(obj).insertAdjacentHTML(
        "beforeend",
        `<div class="sad-message">${message}</div>`
    );
}