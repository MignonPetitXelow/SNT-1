function update_ParameterDot()
{

        const dot = document.getElementById(
            prmBdToStr(0)
        );

        console.log(prmBdToStr(0));

        if(seti_items[0]) 
            dot.style.backgroundColor = 'rgb(89, 231, 103)'; 

        else dot.style.backgroundColor = 'rgb(227, 76, 76)';
}
