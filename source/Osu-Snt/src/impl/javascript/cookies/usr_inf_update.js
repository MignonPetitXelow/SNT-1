var flags = [
    'https://www.wikiberal.org/images/6/62/Flag_of_France.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png',
    'https://osu.ppy.sh/assets/images/flags/1f1ec-1f1e7.svg',
]

function submit() {
    var1 = document.getElementById("avatar").value;
    var0 = document.getElementById("background").value;
    var2 = document.getElementById("in_username").value;
    var3 = document.getElementById("country");

    if(var0 != '')
        cookie_setCookie('user_0', 'url('+var0+')', 255);

    if(var1 != '')
        cookie_setCookie('user_1', 'url('+var1+')', 255);

    if(var2 != '')
        cookie_setCookie('user_2', var2, 255);

    cookie_setCookie('user_3', var3.options[var3.selectedIndex].text, 255);

    injectValues('--user-background-url', cookie_getCookie('user_0'));
    injectValues('--user-avatar-url', cookie_getCookie('user_1'));
}

function done() {
    submit();
    window.location.href = "./user.html"
}