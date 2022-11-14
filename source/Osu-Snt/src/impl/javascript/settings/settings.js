const prmBdToStr = (index=0) =>
{
    return parameter_button_dot[index];
}

const strTobol = (stringValue) =>
 {
    switch(stringValue?.toLowerCase()?.trim())
    {
        case "true": 
        case "yes": 
        case "1": 
          return true;

        case "false": 
        case "no": 
        case "0": 
        case null: 
        case undefined:
          return false;

        default: 
          return stringValue;
    }
}
function seti_forceValue(index=0, value=false) { if(value==null) seti_items[index]=false; seti_items[index] = value; }
function seti_Inverse(index=0) { 
    seti_items[index] = !seti_items[index]; 
    cookie_setCookie('parameter_'+index, seti_items[index], 1)
}

function export_parameters()
{
    for(var i=0; i<seti_items.length; i++)
    {
        cookie_setCookie('parameter_'+i, seti_items[i], 1);
    }
}

function import_parameters() 
{
    for(var i=0; i<seti_items.length; ++i)
    {
        if(i != 1)
        {
            seti_items[i] = strTobol(cookie_getCookie('parameter_'+i));
            update_ParameterDot(i);
        }
    }
}