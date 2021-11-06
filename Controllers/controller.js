document.addEventListener('keydown', function(event){
    if(event.key === 'd'){
        keyupD = false;
        if(velocity < 1){
            velocity += 0.01;
        }
    }else if(event.key === 'a'){
        keyupA = false;
        if(velocity > -1){
            velocity -= 0.01;
        }
    }
});

document.addEventListener('keyup', function(event){
    if(event.key === 'd'){
        keyupD = true;
    }else if(event.key === 'a'){
        keyupA = true;
    }
});