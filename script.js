function appendValue(value){
    document.getElementById('screen').value+=value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function deleteChar(){
    let screen = document.getElementById('screen');
    screen.value = screen.value.slice(0,-1);
}
function x3(){
    const screen = document.getElementById("screen");
    screen.value=Math.pow(screen.value,3)
}
function x4(){
    const screen = document.getElementById("screen");
    screen.value=Math.pow(screen.value,4)
}
function x5(){
    const screen = document.getElementById("screen");
    screen.value=Math.pow(screen.value,5)
}
function x6(){
    const screen = document.getElementById("screen");
    screen.value=Math.pow(screen.value,6)
}
function x7(){
    const screen = document.getElementById("screen");
    screen.value=Math.pow(screen.value,7)
}
function x9(){
    const screen = document.getElementById("screen");
    screen.value=Math.pow(screen.value,9)
}
function sin(){
    const screen = document.getElementById("screen");
    screen.value=Math.sin(screen.value*(Math.PI/180))
}
function cos(){
    const screen = document.getElementById("screen");
    screen.value=Math.cos(screen.value*(Math.PI/180))
}
function tan(){
    const screen = document.getElementById("screen");
    screen.value=Math.tan(screen.value*(Math.PI/180))
}
function cot(){
    const screen = document.getElementById("screen");
    screen.value=1/Math.tan(screen.value*(Math.PI/180))
}
function log(){
    const screen = document.getElementById("screen");
    screen.value=Math.log10(screen.value)
}
function sqrt(){
    const screen = document.getElementById("screen");
    screen.value=Math.sqrt(screen.value)
}

function calculate(){
    try{
        let screen  = document.getElementById('screen');
        screen.value = eval(screen.value);
    }
    catch(error){
        alter("Invalid Input")
    }
}