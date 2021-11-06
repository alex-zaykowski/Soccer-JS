document.addEventListener('keydown', function(event){
    if(event.key === 'd'){
        if(velocityX < 1){
            velocityX += 0.01;
        }
        keyupD = false;
    }
    if(event.key === 'a'){
        if(velocityX > -1){
            velocityX -= 0.01;
        }
        keyupA = false;
    }
    if(event.key === 'w'){
        if(velocityZ > -1){
            velocityZ -= 0.01;
        }
        keyupW = false;
    }
    if(event.key === 's'){
        if(velocityZ < 1){
            velocityZ += 0.01;
        }
        keyupS = false;
    }
    if(event.key === 's'){
        if(velocityZ < 1){
            velocityZ += 0.01;
        }
        keyupS = false;
    }
});

document.addEventListener('keyup', function(event){
    if(event.key === 'd'){
        keyupD = true;
    }else if(event.key === 'a'){
        keyupA = true;
    }
    else if(event.key === 'w'){
        keyupW = true;
    }else if(event.key === 's'){
        keyupS = true;
    }
});
