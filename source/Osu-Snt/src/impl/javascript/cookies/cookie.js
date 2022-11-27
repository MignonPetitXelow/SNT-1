function cookie_setCookie(name, value, exdays) 
{
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));

    let expires = "expires="+ d.toUTCString();

    document.cookie = name + "=" + value + ";" + expires + ";path=/; SameSite=Lax; Secure";
}

function cookie_getCookie(cookieName) 
{
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) 
    {
      let cookie = ca[i];
      while (cookie.charAt(0) == ' ')
      cookie = cookie.substring(1);

      if (cookie.indexOf(name) == 0) 
        return cookie.substring(name.length, cookie.length);
    }
    return "";
}