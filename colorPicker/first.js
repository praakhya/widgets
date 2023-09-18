var start=0;
var cards= [];
var selected = [];
var col;
var txcol;
var manColActivate=0;
var deleted = [];
var present = [];
function initialize() {
  col=document.getElementById("colorBg").value;
  document.getElementById("disp").style.backgroundColor = col;
  if (!manColActivate) {
    textcolor(col,0);
  }
  document.getElementById("colDisp").innerHTML = "<br>"+col+','+txcol;
}
/*
if (1==="1") {
    console.log("same");
}
else {
    console.log("not same");
}
*/

function changeBgColor() {
    col=document.getElementById("colorBg").value;
    //document.body.style.backgroundColor = col;
    document.getElementById("disp").style.backgroundColor = col;
    var myWords= new Array(100);
    document.getElementById("colDisp").innerHTML = "<br>"+col+','+txcol;
    if (!manColActivate) {
      textcolor(col,0);
    }  
}
function changeTxColor() {
  txcol=document.getElementById("colorTx").value;
  document.getElementById("disp").style.color = txcol;
  manColActivate=1;
  document.getElementById("colDisp").innerHTML = "<br>"+col+','+txcol;
}
function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
function copyToClipboard(id) {
  navigator.clipboard.writeText(document.getElementById(id).style.backgroundColor.value+','+document.getElementById(id).style.color.value);
  //console.log(document.getElementById("disp").style.backgroundColor);
  alert("Hexadecimal value of colour copied to clipboard");
}
function textcolor(col) {
  const text = document.getElementById('disp');
      //console.log(col, typeof(col));
    colTemp = col.slice(1);
    //console.log(colTemp);
    var colrgb = hexToRgb(col);
    var colrgb = hexToRgb(col);
    var r=colrgb.r;
    var g=colrgb.g;
    var b=colrgb.b;
    if ((r<100)||(g<100)||(b<100)) {
      text.style.color = 'white';
      txcol='#FFFFFF';
    }
    else if ((r>=100)||(g>=100)||(b>=100)) {
      text.style.color = 'black';
      txcol='#000000';
    }
}
function copyDivToClipboard() {
  (async () => {
    await navigator.clipboard.writeText(col+','+txcol);
  })();
}
function addCard(){
  //var html=document.getElementById("card-box").innerHTML;
  //console.log("HTML: ",html);
  while (start in cards) {
    start+=1;
  }
  var card = document.createElement("div");
  card.className="card-off";
  card.id=start;
  card.setAttribute("onclick","select(this.id)");
  card.setAttribute("style",`background-color: ${col}; color: ${txcol};`);
  var text = document.createTextNode('Aa');
  card.appendChild(text);
  var element = document.querySelector(".card-box");
  element.appendChild(card);
  cards.push(card.id);
  start+=1;
  present.push(card.id);
  //console.log(present);
}
function select(id){
  if (document.getElementById(id).className=="card-on") {
    document.getElementById(id).className="card-off";
    selected.splice(id);
  }
  else if (document.getElementById(id).className=="card-off"){
    document.getElementById(id).className="card-on";
    selected.push(id);
  }
}
function deSelectAll(){
  for (var id in cards) {
    if (document.getElementById(id)!=null) {
      document.getElementById(id).className="card-off";
    }
  }
}
function delCards(){
  if (selected.length>0) {
    selected.map(delCard);
    for (var i in selected) {
      selected.splice(i);
    }
    start=0;
  }
}
function delAllCards(){
  for (var card in cards) {
      delCard(card);
  }
}

function delCard(id){
  deSelectAll();
  const parent = document.querySelector(".card-box");
  const child = document.getElementById(id);
  console.log(child);
  if (child!=null) {
    parent.removeChild(child);
    deleted.push(id);
    if (id in present) {
    present.splice(id);
    }
  console.log(present+'|'+deleted);
  }
}