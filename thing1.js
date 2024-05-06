document.write( '<img src="dor.png" id="dor1" width="600">' );
document.write( '<img src="目.png" id="thing1" >' );
document.write( '<img src="cuter.png" id="thing2" width="200">' );

function stagelink2() {
if(fun === 1) {
document.getElementById( 'thing1' ).style.left = stageX + 1400 + "px";
document.getElementById( 'thing1' ).style.top = stageY + 400 + "px";

document.getElementById( 'thing2' ).style.left = - 400 + "px";
}
if(fun === 2) {
document.getElementById( 'thing2' ).style.left = stageX + 1400 + "px";
document.getElementById( 'thing2' ).style.top = stageY + 400 + "px";
}
if(fun === 3) {
document.getElementById( 'thing2' ).style.left = - 500 + "px";
document.getElementById( 'thing2' ).style.top = stageY + 400 + "px";

document.getElementById( 'thing1' ).style.left = stageX + run + "px";
}
document.getElementById( 'dor1' ).style.left = stageX + dorX + "px";
document.getElementById( 'dor1' ).style.top = stageY + 230 + "px";
}
let intervalId3 = setInterval(stagelink2, 10);

var dorX = 2200;
var fun = 1;
var run = 0;
var neck = 0;
var array = ['Eye"Hi,I am Isaac."', 'Stick"I am Stick."', 'He is nice guy.','　'];
var array2 = ['Eye"Hi,I am Isaac."', 'Stick"I am Stick."', 'He is nice guy.','　'];

addEventListener( "keydown", Z );

function Z() {
if(fun === 1) {
if(Math.sqrt( Math.pow( stageX+1400-x, 2 ) + Math.pow( stageY+400-y, 2 ) ) < 110) {
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
if(fun === 2) {
if(Math.sqrt( Math.pow( stageX+1400-x, 2 ) + Math.pow( stageY+400-y, 2 ) ) < 150) {
if(lr === 1) {
Z2();
}
}
if(Math.sqrt( Math.pow( stageX+1150-x, 2 ) + Math.pow( stageY+400-y, 2 ) ) < 200) {
if(lr === 2) {
Z2();
}
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

function Z2() {
var key_code = event.keyCode;
	if( key_code === 90 ) {
        fun = 3;
        run = dorX;
rightend = -4000;
runevent();

        }
}

function sleep(ms, callback) {
  setTimeout(callback, ms);
}

function runevent() {
if(fun === 3) {
const interval = setInterval(function() {
  run += 18;
  count++;
  if (stageX < -3999) {
    fun = 4;
    clearInterval(interval);
    fadeout();
  }
  if(Math.sqrt( Math.pow( stageX+run-x, 2 ) + Math.pow( stageY+400-y, 2 ) ) < 101) {
  clearInterval(interval);
  screenin();
  fun = 1;
  stageX = 400;
  rightend = -2000;
  dorX = 2200;
  backcos3();
  backcos4();
  backcos7();
  backcos8();
  run = dorX;
  fadeout();
setTimeout(function() {
  screenout();
  fadein();  
}, 2000);
}
}, 50);
}
}

let count = 0;

addEventListener( "keydown", changestage );

function changestage() {
var key_code = event.keyCode;
if( key_code === 90 ) {
if(Math.sqrt( Math.pow( stageX+dorX-x, 2 ) + Math.pow( stageY+230-y, 2 ) ) < 200) {
if(fun === 1) {
backcos();
backcos2();
backcos5();
backcos6();
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
function backcos5() {
    const changeimg = document.getElementById("img3");
    changeimg.src = "stage2.png";
}
function backcos6() {
    const changeimg = document.getElementById("img4");
    changeimg.src = "stage3.png";
}
function backcos7() {
    const changeimg = document.getElementById("img3");
    changeimg.src = "black2.png";
}
function backcos8() {
    const changeimg = document.getElementById("img4");
    changeimg.src = "black2.png";
}


function fadeout() {
  const element = document.getElementById("fadein");
  if (element.classList.contains("fadein")) {
    element.classList.remove("fadein");
    element.classList.add("fadeout");
  }
}

function fadein() {
  const element = document.getElementById("fadein");
  if (element.classList.contains("fadeout")) {
    element.classList.remove("fadeout");
    element.classList.add("fadein");
  }
}

function screenout() {
  const element = document.getElementById("black");
  if (element.classList.contains("op1")) {
    element.classList.remove("op1");
    element.classList.add("op0");
  }
}

function screenin() {
  const element = document.getElementById("black");
  if (element.classList.contains("op0")) {
    element.classList.remove("op0");
    element.classList.add("op1");
  }
}
