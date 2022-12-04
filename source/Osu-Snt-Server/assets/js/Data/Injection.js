function injectComponentText(objID='', value='')
{
    document.getElementById(objID).innerHTML = value;
    console.log('[INJECT] Injecting TEXT=\'' + value + '\' into COMPONENT=\'' + objID +'\'');
}

function injectVariable(VarName='', VarValue=''){
    document.documentElement.style.setProperty(VarName, VarValue);
}