

function bmiResult(){
    let name=document.getElementById('name').value;
    let gender=document.getElementById('gender').value;
    let height=document.getElementById('height').value;
    let weight=document.getElementById('weight').value;
    let BMI=weight/(height*height);
    let bmiState

    if(BMI<18.5){
        bmiState='underweight';
    }
    else if(BMI>=18.5 && BMI<25){
        bmiState='normal weight';
    }
    else if(BMI>=25 && BMI<30){
        bmiState='overweight';
    }
    else{
        bmiState='obese';
    }
    
    var result=document.getElementById('resultContent');
    result.textContent= name+' '+ '|'+' ' +gender +' ' +'|'+' BMI: '+BMI.toFixed(1)+' '+'| '+bmiState;
    result.style.textTransform='uppercase';
    result.style.visibility='visible';
}
function reset(){
    const inputs= document.querySelectorAll('input');
    for(i=0;i<inputs.length;i++){
        inputs[i].value='';
    }
    var result=document.getElementById('resultContent');
    result.textContent=''
    result.style.visibility='hidden';
}