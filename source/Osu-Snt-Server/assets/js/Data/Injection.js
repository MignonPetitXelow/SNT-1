function injectComponentText(objID='', value='')
{
    document.getElementById(objID).innerHTML = value;
}

function injectVariable(VarName='', VarValue=''){
    document.documentElement.style.setProperty(VarName, VarValue);
}