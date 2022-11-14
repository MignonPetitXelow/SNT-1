
function update_ParameterDot(index=0)
{

        const dot = document.getElementById(prmBdToStr(index));

        if(seti_items[index]) 
            dot.style.backgroundColor = 'rgb(89, 231, 103)'; 

        else dot.style.backgroundColor = 'rgb(227, 76, 76)';
}
