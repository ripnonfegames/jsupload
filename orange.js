alert("credit to flowings for the original BIM-BOT, and credit to voidSevenSevenSix for ininite checks hack");
let response = prompt("Would you like to enable infinite checks? 'yes' or 'no'. (if you just said yes and it reloaded say 'no')"); // prompt for infinite checks hack
if (response === "yes") { //infinite check hack code
    var url = window.location.href;
var len = url.length;
var sub = len-98;
var num = 98;
var id = "";
n = 1;
var x = 0;
while(x < sub){
id = id + url[num];
num++;
x++;
}
var c = id;
var xhttp = new XMLHttpRequest();
var questions = [];
var sjson = "{";
xhttp.onreadystatechange = function() {
if(this.readyState == 4 && this.status == 200) {
console.log("Parsing JSON.");
var json = xhttp.responseText;
var decoded = JSON.parse(json);
for(var i in decoded){
for(var j in decoded[i]){
if(typeof decoded[i][j] == "object"){
for(var t in decoded[i][j]){
questions.push(decoded[i][j][t]);
}
}
}
}
for(var e in questions){
sjson = sjson + '"' + questions[e] + '":-10000,';
}
sjson = sjson.replace(/,\s*$/, "");
sjson = sjson + "}";
var xhttp1 = new XMLHttpRequest();
xhttp1.open("GET", "https://www.bigideasmath.com/MRL/rest/student-assignments/update-checked-answers?assignmentId=" + c + "&checkAnswerCounts=" + sjson, true);
xhttp1.send();
console.log("Sending XHTTP request to update answers with parsed JSON.");
setTimeout(function(){alert("Success! Click OK to reload.");location.reload();}, 250);
}
};
xhttp.open("GET", "https://www.bigideasmath.com/MRL/rest/assignment/student-report/skills?id=" + c + "&isActivityId=false", true);
xhttp.send();
console.log("Getting assignment problem list.");
} else if (response === "no") {
   let secondResponse = prompt("1= old console 2= new console 3= no console");
    if (secondResponse === "1") {
       var consoleWindow = document.createElement("div");
  consoleWindow.style.cssText = "position:fixed; bottom:0; right:0; width:250px; height:150px; background-color:white; overflow:auto; border:2px solid black; display:block;";
  document.body.appendChild(consoleWindow);

  var oldLog = console.log;
  console.log = function() {
    var message = Array.prototype.slice.call(arguments).join(' ');
    message = message.replace(/%c/g, ''); 
    message = message.replace(/font-size: 20px; color: red/g, '');
    if (message.includes("check_ans_count") || message.includes("https") || message.includes("Learnosity") || message.includes("progress") || message.includes("save")) {
      return; 
    }
    oldLog.apply(console, arguments);
    var logMessage = document.createElement("div");
    logMessage.textContent = message;
    consoleWindow.appendChild(logMessage);
  };

  document.addEventListener("keydown", function(event) {
    if (event.key === ".") {
      consoleWindow.style.display = (consoleWindow.style.display === "none") ? "block" : "none";
    }
  });
    } else if (secondResponse === "2") {
        var consoleWindow = document.createElement("div");
var blackBar = document.createElement("div");
var isDragging = false;
var previousX, previousY;

consoleWindow.style.cssText = "position:fixed; bottom:0; right:0; width:250px; height:150px; background-color:white; overflow:auto; border:2px solid black; display:block;";
  
blackBar.style.cssText = "position:absolute; top:0; left:0; width:100%; height:30px; background-color:black; cursor:move;";

consoleWindow.appendChild(blackBar);
document.body.appendChild(consoleWindow);

var oldLog = console.log;
console.log = function() {
  var message = Array.prototype.slice.call(arguments).join(' ');
  message = message.replace(/%c/g, ''); // remove '%c' from the message
  message = message.replace(/font-size: 20px; color: red/g, ''); // remove 'font-size: 20px; color: red' from the message
  if (message.includes("check_ans_count") || message.includes("https") || message.includes("Learnosity") || message.includes("progress") || message.includes("save")) {
    return; // if message contains blacklisted words, do not log it
  }
  oldLog.apply(console, arguments);
  var logMessage = document.createElement("div");
  logMessage.textContent = message;
  consoleWindow.appendChild(logMessage);
  // Copy log message to clipboard
  var range = document.createRange();
  range.selectNode(logMessage);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
};

blackBar.addEventListener("mousedown", function(event) {
  isDragging = true;
  previousX = event.clientX;
  previousY = event.clientY;
});

document.addEventListener("keydown", function(event) {
  if (event.key === ".") {
    consoleWindow.style.display = (consoleWindow.style.display === "none" || consoleWindow.style.display === "") ? "block" : "none";
  }
});

document.addEventListener("mouseup", function(event) {
  isDragging = false;
  // Get viewport dimensions
  var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  // Calculate distances to corners
  var distances = [
    {x: previousX, y: previousY},
    {x: vw - previousX, y: previousY},
    {x: previousX, y: vh - previousY},
    {x: vw - previousX, y: vh - previousY}
  ];
  // Check if the console window is close enough to any of the corners
  var minDistance = Infinity;
  var minIndex = -1;
  for (var i = 0; i < distances.length; i++) {
    var distance = Math.sqrt(distances[i].x * distances[i].x + distances[i].y * distances[i].y);
    if (distance < minDistance && distance < 100) {
      minDistance = distance;
      minIndex = i;
    }
  }
  // Snap the console window to the closest corner
  if (minIndex >= 0) {
    if (minIndex === 0) {
      consoleWindow.style.top = "0";
      consoleWindow.style.left = "0";
    } else if (minIndex === 1) {
      consoleWindow.style.top= "0";
consoleWindow.style.right = "0";
} else if (minIndex === 2) {
consoleWindow.style.bottom = "0";
consoleWindow.style.left = "0";
} else {
consoleWindow.style.bottom = "0";
consoleWindow.style.right = "0";
}
}
});

document.addEventListener("mousemove", function(event) {
if (isDragging) {
var currentX = event.clientX;
var currentY = event.clientY;
var deltaX = currentX - previousX;
var deltaY = currentY - previousY;
var consoleWindowRect = consoleWindow.getBoundingClientRect();
var consoleWindowX = consoleWindowRect.x + deltaX;
var consoleWindowY = consoleWindowRect.y + deltaY;
consoleWindow.style.left = consoleWindowX + "px";
consoleWindow.style.top = consoleWindowY + "px";
previousX = currentX;
previousY = currentY;
}
});
    } else if (secondResponse === "3") {
        // No code runs for option 3
    } else {
        alert("Invalid response. No console enabled.");
    }
} else {
    alert("Invalid response. Inf checks not enabled");
};
;const _0x53aa8a=_0x5313;function _0x5313(_0x50de42,_0x489320){const _0x550132=_0x5501();return _0x5313=function(_0x531375,_0x26a3dd){_0x531375=_0x531375-0x184;let _0x275691=_0x550132[_0x531375];return _0x275691;},_0x5313(_0x50de42,_0x489320);}(function(_0x1d4099,_0x258f4b){const _0x4c61ac=_0x5313,_0x35354a=_0x1d4099();while(!![]){try{const _0x1e9412=parseInt(_0x4c61ac(0x19f))/0x1+parseInt(_0x4c61ac(0x1a4))/0x2*(parseInt(_0x4c61ac(0x195))/0x3)+-parseInt(_0x4c61ac(0x18c))/0x4*(-parseInt(_0x4c61ac(0x19b))/0x5)+parseInt(_0x4c61ac(0x18b))/0x6*(parseInt(_0x4c61ac(0x196))/0x7)+parseInt(_0x4c61ac(0x18d))/0x8*(parseInt(_0x4c61ac(0x19d))/0x9)+-parseInt(_0x4c61ac(0x19e))/0xa*(-parseInt(_0x4c61ac(0x188))/0xb)+parseInt(_0x4c61ac(0x1a1))/0xc*(-parseInt(_0x4c61ac(0x189))/0xd);if(_0x1e9412===_0x258f4b)break;else _0x35354a['push'](_0x35354a['shift']());}catch(_0x5c2080){_0x35354a['push'](_0x35354a['shift']());}}}(_0x5501,0x9b9eb));let itemMetadata={'getCurrentItem':LearnosityAssess[_0x53aa8a(0x187)]()[_0x53aa8a(0x18a)],'UI':document[_0x53aa8a(0x18e)](_0x53aa8a(0x1ac))};function getQuestion(){const _0x1d7046=_0x53aa8a;let _0x3154ed=LearnosityAssess[_0x1d7046(0x187)]()[_0x1d7046(0x18a)];for(let _0x5d9c14=0x0;_0x5d9c14<_0x3154ed[_0x1d7046(0x1b5)];_0x5d9c14++){let _0x17c8a2=_0x3154ed[_0x5d9c14][_0x1d7046(0x1b2)];if(_0x17c8a2===_0x1d7046(0x191)){let _0x4faf78=LearnosityAssess[_0x1d7046(0x187)]()[_0x1d7046(0x18a)][_0x5d9c14]['validation'][_0x1d7046(0x1ad)];for(let _0x5dc133=0x0;_0x5dc133<_0x4faf78[_0x1d7046(0x1a7)][_0x1d7046(0x1b5)];_0x5dc133++){console[_0x1d7046(0x186)]('%c'+_0x4faf78[_0x1d7046(0x1a7)][_0x5dc133],_0x1d7046(0x1a2));}}else{if(_0x17c8a2===_0x1d7046(0x1b0)){let _0x1bb23e=LearnosityAssess[_0x1d7046(0x187)]()['questions'][_0x5d9c14]['validation'][_0x1d7046(0x1ad)];for(let _0x243a5c=0x0;_0x243a5c<_0x1bb23e[_0x1d7046(0x1a7)][_0x1d7046(0x1b5)];_0x243a5c++){console[_0x1d7046(0x186)]('%c'+_0x1bb23e['value'][_0x243a5c][0x0][_0x1d7046(0x1a7)],_0x1d7046(0x1a2)),console[_0x1d7046(0x186)]('');}}else{if(_0x17c8a2===_0x1d7046(0x1a6)||_0x17c8a2==='longtextV2')console[_0x1d7046(0x186)]('%c'+_0x1d7046(0x1b4),'font-size:\x2020px;\x20color:\x20red'),console[_0x1d7046(0x186)]('');else{if(_0x17c8a2==_0x1d7046(0x1b8)){let _0x2f57be=_0x3154ed[_0x5d9c14][_0x1d7046(0x1a0)]['valid_response'];for(let _0x46179f=0x0;_0x46179f<_0x2f57be[_0x1d7046(0x1a7)][_0x1d7046(0x1b5)];_0x46179f++){_0x2f57be[_0x1d7046(0x1a7)][_0x46179f]==0x0&&(console['log']('%c'+'A','font-size:\x2020px;\x20color:\x20red'),console['log']('')),_0x2f57be[_0x1d7046(0x1a7)][_0x46179f]==0x1&&(console[_0x1d7046(0x186)]('%c'+'B',_0x1d7046(0x1a2)),console[_0x1d7046(0x186)]('')),_0x2f57be[_0x1d7046(0x1a7)][_0x46179f]==0x2&&(console[_0x1d7046(0x186)]('%c'+'C',_0x1d7046(0x1a2)),console['log']('')),_0x2f57be[_0x1d7046(0x1a7)][_0x46179f]==0x3&&(console['log']('%c'+'D','font-size:\x2020px;\x20color:\x20red'),console[_0x1d7046(0x186)](''));}}else{if(_0x17c8a2===_0x1d7046(0x1b3)){let _0x4d7fef=_0x3154ed[_0x5d9c14][_0x1d7046(0x1a0)][_0x1d7046(0x1ad)];for(let _0x2816bb=0x0;_0x2816bb<_0x4d7fef[_0x1d7046(0x1a7)][_0x1d7046(0x1b5)];_0x2816bb++){console[_0x1d7046(0x186)]('%c'+_0x4d7fef['value'][_0x2816bb],_0x1d7046(0x1a2)),console['log']('');}}else{if(_0x17c8a2===_0x1d7046(0x1b1)){let _0x13227e=_0x3154ed[_0x5d9c14][_0x1d7046(0x1a0)][_0x1d7046(0x1ad)];for(let _0x5b8c54=0x0;_0x5b8c54<_0x13227e[_0x1d7046(0x1a7)][_0x1d7046(0x1b5)];_0x5b8c54++){if(_0x13227e[_0x1d7046(0x1a7)][_0x5b8c54][_0x1d7046(0x1b2)]===_0x1d7046(0x1a9)){}else{if(_0x13227e[_0x1d7046(0x1a7)][_0x5b8c54]['type']===_0x1d7046(0x19a)){let _0x24cfee=JSON[_0x1d7046(0x1ae)](_0x13227e[_0x1d7046(0x1a7)][_0x5b8c54][_0x1d7046(0x194)]);console['log']('%c'+_0x24cfee,_0x1d7046(0x1a2)),console[_0x1d7046(0x186)]('');}}}}}}}}}}}function _0x5501(){const _0x5823d6=['cant\x20be\x20done\x20use\x20google\x20or\x20smth','length','onmouseup','event','mcq','firstElementChild','getElementById','log','getCurrentItem','48653yfYfgi','1651sOAwnb','questions','54ofbgTT','1308vgMKro','8899192wZVIhK','createElement','onmousemove','onmousedown','clozeassociation','header','top','coords','1467BXQivE','707eoyIVn','<div\x20id=\x22Launcher\x22\x20class=\x22Launcher\x22\x20style=\x22outline:\x20blue\x20solid\x202px;min-height:\x20250px;transform:\x20\x0atranslateX(0px)\x20translateY(-32px);opacity:\x200.85;font-family:\x20sans-serif;width:\x20150px;height:\x20175px;background:\x20\x0ablack;position:\x20absolute;border-radius:\x205px;display:\x20grid;place-items:\x20center;color:\x20white;font-size:\x20larger;top:\x20151px;left:\x2021px;\x20position:absolute;\x20z-index:\x2099999;\x22>\x0a<center><h1\x20class=\x22bottomTitle\x22\x20></h1></center>\x0a<img\x20id=\x22nullicon\x22\x20src=\x22data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAzUExURf///y4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkS4xkf///9I/hLEAAAAPdFJOUwBAkMAwELDQgGDg8KBQIBWXB8EAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH5wMVFCkd252keQAAALtJREFUOMuFk1EOxCAIRFWK1uqW+99227gGFDbMF5FXmSKEMBQTTKUjKGEmqYw7UGgVbPmTdtUVuBRwrQ7mcYM2wwWIv8OO7BYtAMVt1g2j7oiLWSJyXE2gfUIdLnswAVa6HYDotAEQ3UYNlKcP3XqPCbyFsRlVovx3rtLuDYAN4Cv+AcUDyAUOD4gegA7QnD5QViP3xNWwwENbQDoQj6HH/nUgNrBawDJ1WX8fZT5g2vJdre9xAu9/FekvYGUfOUjDCIcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDMtMjFUMjA6NDE6MjgrMDA6MDAjWdlGAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAzLTIxVDIwOjQxOjI4KzAwOjAwUgRh+gAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMy0yMVQyMDo0MToyOSswMDowMKNmS5EAAAAASUVORK5CYII=\x22\x20class=\x22center\x22>\x0a\x20\x20\x20\x20<h1\x20class=\x22title\x22><center>BIM\x20BOT</center></h1>\x0a\x20\x20\x20\x20<center><h1\x20class=\x22bottomTitle\x22\x20>V2.0</h1></center>\x0a<style\x20id=\x22bruh\x22>\x0a@import\x20url(\x27https://fonts.googleapis.com/css2?family=Ubuntu&display=swap\x27);\x0a@import\x20url(\x27https://fonts.googleapis.com/css2?family=Nunito:wght@500&family=Tilt+Neon&display=swap\x27);\x0a.title\x20{\x0a\x20\x20\x20\x20font-family:\x20\x27Nunito\x27,\x20sans-serif;\x0a\x20\x20\x20\x20font-size:\x2030px;\x0a\x20\x20\x20\x20color:\x20white\x0a}\x0a.bottomTitle\x20{\x0a\x20\x20\x20\x20font-family:\x20\x27Nunito\x27,\x20sans-serif;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20margin-top:\x20-0.7rem;\x0a}\x0a.button\x20{\x0a\x20\x20font-family:\x20\x27Nunito\x27,\x20sans-serif;\x0a\x20\x20border:\x20none;\x0a\x20\x20color:\x20white;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20font-size:\x2016px;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20-webkit-transition-duration:\x200.4s;\x0a\x20\x20transition-duration:\x200.4s;\x0a\x20\x20width:\x20100%;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20color:\x20white;\x20\x0a\x20\x20background-color:\x20black;\x0a}\x0a.button:hover\x20{\x0a\x20\x20color:\x20black;\x0a\x20\x20background-color:\x20grey\x0a}\x0a.button:active\x20{\x0a\x20\x20background-color:\x20black;\x0a}\x0a.center\x20{\x0a\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20margin-left:\x20auto;\x0a\x20\x20\x20\x20margin-right:\x20auto;\x0a}\x0a</style>\x0a\x20\x20\x20\x20<button\x20id=\x22answer\x22\x20class=\x22button\x22>Get\x20Answer\x20(press\x20h\x20to\x20hide)</button>\x0a\x20\x20\x20\x20<br>\x0a</div>','offsetLeft','preventDefault','point','5235sZrsli','offsetTop','9xtjhCB','570ZMjTIo','355923ORsvSa','validation','147012miEhTr','font-size:\x2020px;\x20color:\x20red','style','530LMnPhG','clientY','longtypeV2','value','innerHTML','line','appendChild','clientX','div','valid_response','stringify','left','clozeformula','graphplotting','type','clozedropdown'];_0x5501=function(){return _0x5823d6;};return _0x5501();}function dragElement(_0x2105b1){const _0x1e23bf=_0x53aa8a;var _0x15fbbb=0x0,_0xe73bac=0x0,_0x404f81=0x0,_0x26f09d=0x0;function _0x150d14(_0x55ca33){const _0x10b791=_0x5313;(_0x55ca33=_0x55ca33||window[_0x10b791(0x1b7)])[_0x10b791(0x199)](),_0x404f81=_0x55ca33['clientX'],_0x26f09d=_0x55ca33['clientY'],document[_0x10b791(0x1b6)]=_0x53d7f8,document[_0x10b791(0x18f)]=_0x217bfa;}function _0x217bfa(_0x5019a8){const _0x59b8ea=_0x5313;(_0x5019a8=_0x5019a8||window[_0x59b8ea(0x1b7)])['preventDefault'](),_0x15fbbb=_0x404f81-_0x5019a8[_0x59b8ea(0x1ab)],_0xe73bac=_0x26f09d-_0x5019a8[_0x59b8ea(0x1a5)],_0x404f81=_0x5019a8[_0x59b8ea(0x1ab)],_0x26f09d=_0x5019a8['clientY'],_0x2105b1[_0x59b8ea(0x1a3)][_0x59b8ea(0x193)]=_0x2105b1[_0x59b8ea(0x19c)]-_0xe73bac+'px',_0x2105b1['style'][_0x59b8ea(0x1af)]=_0x2105b1[_0x59b8ea(0x198)]-_0x15fbbb+'px';}function _0x53d7f8(){const _0x5de680=_0x5313;document['onmouseup']=null,document[_0x5de680(0x18f)]=null;}document[_0x1e23bf(0x185)](_0x2105b1['id']+_0x1e23bf(0x192))?document[_0x1e23bf(0x185)](_0x2105b1['id']+_0x1e23bf(0x192))[_0x1e23bf(0x190)]=_0x150d14:_0x2105b1['onmousedown']=_0x150d14;}itemMetadata['UI'][_0x53aa8a(0x1a8)]=_0x53aa8a(0x197),document['body'][_0x53aa8a(0x1aa)](itemMetadata['UI']),dragElement(itemMetadata['UI'][_0x53aa8a(0x184)]),setInterval(function printAns(){const _0x4c8102=_0x53aa8a;document[_0x4c8102(0x185)]('answer')['onclick']=getQuestion;},0x64);let launcher = document.getElementById('Launcher');
let isHidden = false; //code to make it dissapear and re appear
document.addEventListener('keydown', function(event) {
  if (event.key === '.') {
    if (!isHidden) {
      launcher.style.display = 'none';
      isHidden = true;
    } else {
      launcher.style.display = 'block';
      isHidden = false;
    }
  }
});