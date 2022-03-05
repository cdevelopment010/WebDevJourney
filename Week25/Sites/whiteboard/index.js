(function() {
    const clearBtn = document.getElementById('clear-btn');
    const lineThickness = document.getElementById('line-thickness');
    const colorPicker = document.getElementById('favcolor');  
    const lineStyle = document.getElementById('dash');  
    let canvas = document.getElementById('my-canvas'); 
    let context = canvas.getContext("2d"); 
    let drawColor = 'black'; 
    let drawWidth = 5; 
    let style="line"

    canvas.width = window.innerWidth * 0.9; 
    canvas.height = window.innerHeight; 
    
    let mouse = {x: 0, y:0} 
    let mouseLast ={x: 0, y:0} 


    // change canvas size on window resize
    window.addEventListener('resize', () => {
        // Resizing clears canvas
        context.scale(canvas.height/ window.innerHeight , canvas.width / (window.innerWidth *0.9));
        canvas.width = window.innerWidth * 0.9; 
        canvas.height = window.innerHeight; 
        mouse.x = 0; 
        mouse.y = 0; 
    })

    colorPicker.addEventListener('change', () => {
        drawColor = colorPicker.value; 
    })

    lineThickness.addEventListener('change', ()=> {
        drawWidth = lineThickness.value;
    })

    lineStyle.addEventListener('change', ()=> {
        style = lineStyle.value
    })

    clearBtn.addEventListener('click', () => {
        context.clearRect(0, 0, canvas.width,canvas.height)
    })

    canvas.addEventListener('mousedown', (e) => {    
        setPosition(e); 
        canvas.addEventListener('mousemove', draw)
    }); 

    canvas.addEventListener('mouseup', function() {
		canvas.removeEventListener('mousemove', draw, false);
	}, false);


    function setPosition(e) {
        mouseLast.x = mouse.x; 
        mouseLast.y = mouse.y; 
        mouse.x = e.clientX;
		mouse.y = e.clientY;
    }



    function draw( e ) {
        setPosition(e);
        context.beginPath(); 
        context.moveTo(mouseLast.x, mouseLast.y); // from

        context.lineWidth = drawWidth; 
        context.lineCap = 'round';
        if(style=='dash') {
            context.setLineDash([5,100]); 
        } else {
            context.setLineDash([])
        }
        context.strokeStyle = drawColor;
      
        setPosition(e);
        context.lineTo(mouse.x, mouse.y); // to
        context.closePath(); 
      
        context.stroke(); // draw it!

    }

    return {
        draw, 
        setPosition, 
        canvas
    }
})(); 