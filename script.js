
const grid = document.querySelector('.grid');
const btns = document.querySelectorAll('button');
const slider = document.querySelector('#slider');
const gridSizeDiv = document.querySelector(".grid-size")
let mode = 0;  // 1 : random color, 0 : balck and white 2: shadding
let number = 5;

btns.forEach((btn) => btn.addEventListener('click',controls));
grid.addEventListener('mouseover',changeColor);
slider.addEventListener('input', generateGridDivsOnchange);

generateGridDivs(number)


function controls(){

    switch(this.id){
        case 'reset':
            doReset();
            break;
        case 'rainbow':
            mode = 1;
            break;
        case 'shadding':
            mode = 2;
            break;
        default :
            mode = 0;
    }
}

function getColor(modeN, event){

    switch(modeN){
        case 1: return getRandomColor();
        case 2: return getShadeColor(event);
        default: return  "rgb(0,0,0)";
    }
}

function getShadeColor(event){
    if(event.target.style.backgroundColor === "")
        return "rgb(255,255,255)";
    let divColors = event.target.style.backgroundColor.match(/[\d]+/g);
    let newColors = divColors.map(item => Number.parseInt(item) - 10);
    return "rgb(" + `${newColors[0]},${newColors[1]},${newColors[2]}` + ")";
    
    
}


function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function doReset(){
    slider.value = 5;
    mode = 0;
    generateGridDivs(5);

};

function changeColor(e){
    e.target.setAttribute("style",`background-color:${getColor(mode,e)}`);
}

function generateGridDivs(gridSize){
    gridSizeDiv.textContent = `${gridSize} x ${gridSize}`;
    grid.textContent = '';
    grid.setAttribute("style",`grid-template-columns: repeat(${gridSize}, 1fr);`)
    for(i = 1; i <= gridSize*gridSize ; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        grid.appendChild(div);
        
    };
};

function generateGridDivsOnchange(event){
    generateGridDivs(event.target.value);
};



