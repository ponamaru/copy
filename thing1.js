

document.write( '<img src="目.png" id="thing1" >' );

function stagelink2() {
if(fun === 1) {
document.getElementById( 'thing1' ).style.left = stageX + 1400 + "px";
document.getElementById( 'thing1' ).style.top = stageY + 400 + "px";
}

document.getElementById( 'dor1' ).style.left = stageX + dorX + "px";
document.getElementById( 'dor1' ).style.top = stageY + 230 + "px";
}
let intervalId3 = setInterval(stagelink2, 10);

var dorX = 2200;

var fun = 1;
var array = ['Eye"Hi,I am Isaac."', 'Stick"I am Stick."', 'He is nice guy.','　'];

addEventListener( "keydown", Z );

function Z() {
if(Math.sqrt( Math.pow( stageX+1400-x, 2 ) + Math.pow( stageY+400-y, 2 ) ) < 150) {
if(lr === 1) {
Z1();
}
}
if(Math.sqrt( Math.pow( stageX+1150-x, 2 ) + Math.pow( stageY+400-y, 2 ) ) < 200) {
if(lr === 2) {
Z1();
}
}
}

function Z1() {
var key_code = event.keyCode;
	if( key_code === 90 ) {
        walk = 0;
	if(nowtext === 3) {
	  nowtext -= 3;
        walk = 0;
	if(lr === 1) poteto3();
	if(lr === 2) poteto();
	} else {
	  nowtext += 1;
        if(nowtext === 3) {
	if(lr === 1) poteto4();
	if(lr === 2) poteto2();
        walk = 2;
        }
	}
	document.getElementById("area").innerText = array[nowtext];
        }
}

document.write( '<img src="dor.png" id="dor1" width="600">' );

addEventListener( "keydown", changestage );

function changestage() {
var key_code = event.keyCode;
if( key_code === 90 ) {
if(Math.sqrt( Math.pow( stageX+dorX-x, 2 ) + Math.pow( stageY+230-y, 2 ) ) < 200) {
if(fun === 1) {
backcos();
backcos2();
fun = 2;
stageX = 200;
dorX = 400;
document.getElementById( 'thing1' ).style.left = stageX - 800 + "px";
}
}
}
}

function backcos() {
    const changeimg = document.getElementById("img1");
    changeimg.src = "stage2.png";
}
function backcos2() {
    const changeimg = document.getElementById("img2");
    changeimg.src = "stage2.png";
}

function backcos3() {
    const changeimg = document.getElementById("img1");
    changeimg.src = "teststage.png";
}
function backcos4() {
    const changeimg = document.getElementById("img2");
    changeimg.src = "teststage.png";
}



