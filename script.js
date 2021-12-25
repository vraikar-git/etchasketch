
const grid = document.querySelector('.grid');
const reset = document.querySelector('#reset')
let number = 5;

reset.addEventListener('click',doReset);
grid.addEventListener('mouseover',changeColor);
generateGridDivs(number)

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function doReset(){
    grid.textContent = '';
    number = Number.parseInt(prompt('Enter Number',10));
    if( number > 100){
        alert("Number too big to render");
        return;
    }
    generateGridDivs(number);

};

function changeColor(e){
    // console.log(e.target);
    e.target.setAttribute("style",`background-color:${getRandomColor()}`);
}

function generateGridDivs(number){
    grid.setAttribute("style",`grid-template-columns: repeat(${number}, 1fr);`)
    for(i = 1; i <= number*number ; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        grid.appendChild(div);
        
    };
};


// console.log(grid.style.gridTemplateColumns)

