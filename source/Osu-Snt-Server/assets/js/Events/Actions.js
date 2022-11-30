var isUsrDrpDwnMnuOpen = false; 

function openUsrDrpDwnMnu()
{
    const usrMnu = document.getElementById('usermenu').style;
    if(isUsrDrpDwnMnuOpen) 
    {
        usrMnu.right = '5%';
        usrMnu.opacity = '0%';
        usrMnu.visibility = 'hidden';
        usrMnu.height = '0px'
        usrMnu.width = '0px';
    }
    else 
    {
        usrMnu.visibility = 'visible';
        usrMnu.right = '-5%';
        usrMnu.opacity = '100%';
    }
    isUsrDrpDwnMnuOpen = !isUsrDrpDwnMnuOpen;
}

