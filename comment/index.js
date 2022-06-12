    function show(){
    const display= document.getElementById('displayContainer')
    const comment=document.getElementById('comment').value
    const result=document.createElement('p')
    result.innerHTML=comment
    display.append(result)
    display.scrollTop=display.scrollHeight;
    result.id='comentariu'
    reset();
    }
    
    function reset(){
        const comment=document.getElementById('comment')
        comment.value='';
    }
    
    
