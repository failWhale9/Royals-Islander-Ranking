
const draggables = document.querySelectorAll('.draggableImage');
const dropZone = document.querySelectorAll('.dropZone');
const eatZone = document.getElementById("eat");
let odds10 = 0.9;
let odds60 = 0.4;
let oddsChaos = 0.4;
let chaosMin = -5;
let chaosMax = 5;
let best = 0;
let appos = 0;

//navbar code
fetch('/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
        const currentPage = location.pathname;
        document.querySelectorAll('#navbar a').forEach(link => {
            //console.log("href:" + link.getAttribute('href') + "   currentpage:" + currentPage);
            if (link.getAttribute('href') === currentPage) {
                link.classList.add("navInactive");
                link.removeAttribute('href');
            }
        });
    }).catch(error => console.error('Error loading navbar:', error));

// When drag starts, set data
draggables.forEach(draggable => {
  draggable.addEventListener("dragstart", (e) => {
    playSound("DragStart");
    e.dataTransfer.setData("text/plain", e.target.id);
  });
});

eat.addEventListener("dragover",(e) => {
    e.preventDefault();
  });
eat.addEventListener("drop", (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("text/plain");
    eatActivated(item);
});

dropZone.forEach(zone => {

  zone.addEventListener("dragover",(e) => {
    e.preventDefault();
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    const scrollType = e.dataTransfer.getData("text/plain");
    scrollActivated(scrollType, zone.id);
});

});

function addClutter(skipFirst) {
  const clutters = document.querySelectorAll('.clutter');
  const options = ["redpot","bluepot","arrows","bolts","apple","lemon","bullet","meat","orange"];
  const title = 'data-title';
  const desc1 = 'data-desc1';
  const desc2 = 'data-desc2';
  const desc3 = 'data-desc3';
  const desc4 = 'data-desc4';
  const top = 'data-top';
  const left = 'data-left';

  clutters.forEach((clutter, index) => {
    let rIndex = Math.floor(Math.random()*options.length);
    let item = options[rIndex];

    if (index === 0 && skipFirst == true) { 
      return; 
    }

    if(Math.random() >= 0.995) {
        let yOff = 1;
        let xOff = 2;
        clutter.setAttribute(title,"Onyx Apple");
        clutter.setAttribute(desc1,"A rare, ripe apple imbued with");
        clutter.setAttribute(desc2,"power. Recovers 90% HP & MP,");
        clutter.setAttribute(desc3,"and provides +100 W.Att, +100 M.");
        clutter.setAttribute(desc4,"Att, +20 Def for 10 minutes.");
        clutter.src = "https://ik.imagekit.io/islander/images/scroll/appo.png";
        clutter.style.top = (parseInt(clutter.style.top) - parseInt(clutter.getAttribute(top))) + "px";
        clutter.setAttribute(top,yOff);
        clutter.style.top = (parseInt(clutter.style.top) + yOff) + "px";
        clutter.style.left = (parseInt(clutter.style.left) - parseInt(clutter.getAttribute(left))) + "px";
        clutter.setAttribute(left,xOff);
        clutter.style.left = (parseInt(clutter.style.left) + xOff) + "px";
        clutter.style.display = "block";
        return;
      }

    switch(item) {
      case "redpot": {
        let yOff = 0;
        let xOff = 0;
        clutter.setAttribute(title,"Red Potion");
        clutter.setAttribute(desc1,"A potion made out of red herbs.");
        clutter.setAttribute(desc2,"Recovers 50 HP.");
        clutter.setAttribute(desc3,"");
        clutter.setAttribute(desc4,"");
        clutter.src = "https://ik.imagekit.io/islander/images/scroll/redpot.png";
        clutter.style.top = (parseInt(clutter.style.top) - parseInt(clutter.getAttribute(top))) + "px";
        clutter.setAttribute(top,yOff);
        clutter.style.top = (parseInt(clutter.style.top) + yOff) + "px";
        clutter.style.left = (parseInt(clutter.style.left) - parseInt(clutter.getAttribute(left))) + "px";
        clutter.setAttribute(left,xOff);
        clutter.style.left = (parseInt(clutter.style.left) + xOff) + "px";
        break;
      }
      case "bluepot": {
        let yOff = 0;
        let xOff = 0;
        clutter.setAttribute(title,"Blue Potion");
        clutter.setAttribute(desc1,"A potion made out of blue herbs.");
        clutter.setAttribute(desc2,"Recovers 100 MP.");
        clutter.setAttribute(desc3,"");
        clutter.setAttribute(desc4,"");
        clutter.src = "https://ik.imagekit.io/islander/images/scroll/bluepot.png";
        clutter.style.top = (parseInt(clutter.style.top) - parseInt(clutter.getAttribute(top))) + "px";
        clutter.setAttribute(top,yOff);
        clutter.style.top = (parseInt(clutter.style.top) + yOff) + "px";
        clutter.style.left = (parseInt(clutter.style.left) - parseInt(clutter.getAttribute(left))) + "px";
        clutter.setAttribute(left,xOff);
        clutter.style.left = (parseInt(clutter.style.left) + xOff) + "px";
        break;
      }
      case "arrows": {
        let yOff = -3;
        let xOff = 0;
        clutter.setAttribute(title,"Arrow for Bow");
        clutter.setAttribute(desc1,"A barrel full of arrows.");
        clutter.setAttribute(desc2,"Only usable with bows.");
        clutter.setAttribute(desc3,"Attack +1");
        clutter.setAttribute(desc4,"");
        clutter.src = "https://ik.imagekit.io/islander/images/scroll/arrows.png";
        clutter.style.top = (parseInt(clutter.style.top) - parseInt(clutter.getAttribute(top))) + "px";
        clutter.setAttribute(top,yOff);
        clutter.style.top = (parseInt(clutter.style.top) + yOff) + "px";
        clutter.style.left = (parseInt(clutter.style.left) - parseInt(clutter.getAttribute(left))) + "px";
        clutter.setAttribute(left,xOff);
        clutter.style.left = (parseInt(clutter.style.left) + xOff) + "px";
        break;
      }
      case "bolts": {
        let yOff = -3;
        let xOff = 0;
        clutter.setAttribute(title,"Arrow for Crossbow");
        clutter.setAttribute(desc1,"A barrel full of arrows.");
        clutter.setAttribute(desc2,"Only usable with crossbows.");
        clutter.setAttribute(desc3,"Attack +1");
        clutter.setAttribute(desc4,"");
        clutter.src = "https://ik.imagekit.io/islander/images/scroll/bolts.png";
        clutter.style.top = (parseInt(clutter.style.top) - parseInt(clutter.getAttribute(top))) + "px";
        clutter.setAttribute(top,yOff);
        clutter.style.top = (parseInt(clutter.style.top) + yOff) + "px";
        clutter.style.left = (parseInt(clutter.style.left) - parseInt(clutter.getAttribute(left))) + "px";
        clutter.setAttribute(left,xOff);
        clutter.style.left = (parseInt(clutter.style.left) + xOff) + "px";
        break;
      }
      case "apple": {
        let yOff = 1;
        let xOff = 2;
        clutter.setAttribute(title,"Green Apple");
        clutter.setAttribute(desc1,"Sour and crunchy green apple.");
        clutter.setAttribute(desc2,"Recovers MP +30.");
        clutter.setAttribute(desc3,"");
        clutter.setAttribute(desc4,"");
        clutter.src = "https://ik.imagekit.io/islander/images/scroll/apple.png";
        clutter.style.top = (parseInt(clutter.style.top) - parseInt(clutter.getAttribute(top))) + "px";
        clutter.setAttribute(top,yOff);
        clutter.style.top = (parseInt(clutter.style.top) + yOff) + "px";
        clutter.style.left = (parseInt(clutter.style.left) - parseInt(clutter.getAttribute(left))) + "px";
        clutter.setAttribute(left,xOff);
        clutter.style.left = (parseInt(clutter.style.left) + xOff) + "px";
        break;
      }
      case "lemon": {
        let yOff = 4;
        let xOff = 1;
        clutter.setAttribute(title,"Lemon");
        clutter.setAttribute(desc1,"Very sour.");
        clutter.setAttribute(desc2,"Recovers around 150 MP.");
        clutter.setAttribute(desc3,"");
        clutter.setAttribute(desc4,"");
        clutter.src = "https://ik.imagekit.io/islander/images/scroll/lemon.png";
        clutter.style.top = (parseInt(clutter.style.top) - parseInt(clutter.getAttribute(top))) + "px";
        clutter.setAttribute(top,yOff);
        clutter.style.top = (parseInt(clutter.style.top) + yOff) + "px";
        clutter.style.left = (parseInt(clutter.style.left) - parseInt(clutter.getAttribute(left))) + "px";
        clutter.setAttribute(left,xOff);
        clutter.style.left = (parseInt(clutter.style.left) + xOff) + "px";
        break;
      }
      case "bullet": {
        let yOff = 6;
        let xOff = 2;
        clutter.setAttribute(title,"Bullet");
        clutter.setAttribute(desc1,"A bullet made out of steel. A set");
        clutter.setAttribute(desc2,"contains numerous bullets and");
        clutter.setAttribute(desc3,"once they are used up, they'll");
        clutter.setAttribute(desc4,"need to be recharged. Attack + 10");
        clutter.src = "https://ik.imagekit.io/islander/images/scroll/bullet.png";
        clutter.style.top = (parseInt(clutter.style.top) - parseInt(clutter.getAttribute(top))) + "px";
        clutter.setAttribute(top,yOff);
        clutter.style.top = (parseInt(clutter.style.top) + yOff) + "px";
        clutter.style.left = (parseInt(clutter.style.left) - parseInt(clutter.getAttribute(left))) + "px";
        clutter.setAttribute(left,xOff);
        clutter.style.left = (parseInt(clutter.style.left) + xOff) + "px";
        break;
      }
      case "meat": {
        let yOff = -1;
        let xOff = 0;
        clutter.setAttribute(title,"Meat");
        clutter.setAttribute(desc1,"A tasty-looking meat.");
        clutter.setAttribute(desc2,"Recovers around 100 HP.");
        clutter.setAttribute(desc3,"");
        clutter.setAttribute(desc4,"");
        clutter.src = "https://ik.imagekit.io/islander/images/scroll/meat.png";
        clutter.style.top = (parseInt(clutter.style.top) - parseInt(clutter.getAttribute(top))) + "px";
        clutter.setAttribute(top,yOff);
        clutter.style.top = (parseInt(clutter.style.top) + yOff) + "px";
        clutter.style.left = (parseInt(clutter.style.left) - parseInt(clutter.getAttribute(left))) + "px";
        clutter.setAttribute(left,xOff);
        clutter.style.left = (parseInt(clutter.style.left) + xOff) + "px";
        break;
      }
      case "orange": {
        let yOff = 3;
        let xOff = 1;
        clutter.setAttribute(title,"Orange");
        clutter.setAttribute(desc1,"A sweet, tasty orange.");
        clutter.setAttribute(desc2,"Recovers around 50 MP.");
        clutter.setAttribute(desc3,"");
        clutter.setAttribute(desc4,"");
        clutter.src = "https://ik.imagekit.io/islander/images/scroll/orange.png";
        clutter.style.top = (parseInt(clutter.style.top) - parseInt(clutter.getAttribute(top))) + "px";
        clutter.setAttribute(top,yOff);
        clutter.style.top = (parseInt(clutter.style.top) + yOff) + "px";
        clutter.style.left = (parseInt(clutter.style.left) - parseInt(clutter.getAttribute(left))) + "px";
        clutter.setAttribute(left,xOff);
        clutter.style.left = (parseInt(clutter.style.left) + xOff) + "px";
        break;
      }
    }
    clutter.style.display = "block";
  });
}

function updateTagColor(baseType) {
// Tag Color
  // < 0 : grey
  // 0 : white
  // 1-5: orange
  // 6-22: blue
  // 23-39: purple
  // 40+: gold
  // HP/MP count for 1/10th of a stat
  let baseline = 0;
  let total = 0;
  const title = document.getElementById(baseType + "Title");
  const tag = document.getElementById(baseType + "Tag");
  const img = document.getElementById(baseType);

  let wdef = null;
  let mdef = null;
  let watk = null;
  let matk = null;
  let hp = null;
  let mp = null;
  let spd = null;
  let jmp = null;
  let str = null;
  let dex = null;
  let int = null;
  let luk = null;
  let avo = null;
  let acc = null;

  let wdefE = document.getElementById(baseType + "Wdef");
  let mdefE = document.getElementById(baseType + "Mdef");
  let watkE = document.getElementById(baseType + "Watk");
  let matkE = document.getElementById(baseType + "Matk");
  let hpE = document.getElementById(baseType + "Hp");
  let mpE = document.getElementById(baseType + "Mp");
  let spdE = document.getElementById(baseType + "Spd");
  let jmpE = document.getElementById(baseType + "Jmp");
  let strE = document.getElementById(baseType + "Str");
  let dexE = document.getElementById(baseType + "Dex");
  let intE = document.getElementById(baseType + "Int");
  let lukE = document.getElementById(baseType + "Luk");
  let avoE = document.getElementById(baseType + "Avo");
  let accE = document.getElementById(baseType + "Acc");

  if(wdefE) {wdef = parseInt(wdefE.textContent);}
  if(mdefE) {mdef = parseInt(mdefE.textContent);}
  if(watkE) {watk = parseInt(watkE.textContent);}
  if(matkE) {matk = parseInt(matkE.textContent);}
  if(hpE) {hp = parseInt(hpE.textContent);}
  if(mpE) {mp = parseInt(mpE.textContent);}
  if(spdE) {spd = parseInt(spdE.textContent);}
  if(jmpE) {jmp = parseInt(jmpE.textContent);}
  if(strE) {str = parseInt(strE.textContent);}
  if(dexE) {dex = parseInt(dexE.textContent);}
  if(intE) {int = parseInt(intE.textContent);}
  if(lukE) {luk = parseInt(lukE.textContent);}
  if(avoE) {avo = parseInt(avoE.textContent);}
  if(accE) {acc = parseInt(accE.textContent);}

  switch(baseType) {
    case "gomu": {
      baseline = 6;
      total = wdef + spd + jmp + dex + avo + acc;
      break;
    }
    case "stripeM": {
      baseline = 11;
      total = wdef + mdef + parseInt(hp/10);
      break;
    }
    case "stripeF": {
      baseline = 11;
      total = wdef + mdef + parseInt(hp/10);
      break;
    }
    case "ice": {
      baseline = 13;
      total = wdef + parseInt((mp + hp)/10) + mdef;
      break;
    }
    case "sweat": {
      baseline = 10;
      total = wdef + parseInt(hp/10) + mdef;
      break;
    }
    case "wdana": {
      baseline = 8;
      total = wdef + mdef + acc;
      break;
    }
    case "witch": {
      baseline = 44;
      total = str + dex + luk + int + parseInt(mp/10) + wdef + mdef;
      break;
    }
    case "broom": {
      baseline = 36;
      total = watk + spd;
      break;
    }
    case "wbeltR": {
      baseline = 42;
      total = wdef + mdef + jmp;
      break;
    }
    case "wbeltB": {
      baseline = 92;
      total = wdef + mdef + spd;
      break;
    }
    case "wbeltP": {
      baseline = 126;
      total = watk + matk + wdef + mdef + spd + jmp;
      break;
    }
    case "lights": {
      baseline = 53;
      total = watk + wdef + str + spd;
      break;
    }
    case "basket": {
      baseline = 16;
      total = watk + wdef + spd + str + dex + int + luk + parseInt(hp/10);
      break;
    }
    default:
      break;
  }

  let diff = total-baseline;

  if(diff > 39) { // gold
    title.style.color = "#fffc29";
    tag.style.color = "#fffc29";
    img.style.filter = "drop-shadow(0 0 2px rgba(255, 252, 41, 0.9)) drop-shadow(0 0 2px rgba(255, 252, 41, 0.9))";
  }
  else if(diff > 22) { // purple
    title.style.color = "#cc66ff";
    tag.style.color = "#cc66ff";
    img.style.filter = "drop-shadow(0 0 2px rgba(204, 102, 255, 0.9)) drop-shadow(0 0 2px rgba(204, 102, 255, 0.9)) drop-shadow(0 0 2px rgba(204, 102, 255, 0.9))";
  }
  else if(diff > 5) { // blue
    title.style.color = "#55aaff";
    tag.style.color = "#55aaff";
    img.style.filter = "drop-shadow(0 0 2px rgba(85, 170, 255, 0.9)) drop-shadow(0 0 2px rgba(85, 170, 255, 0.9)) drop-shadow(0 0 2px rgba(85, 170, 255, 0.9))";
  }
  else if(diff >= 0) { // orange or white
    if(parseInt(tag.textContent[2]) > 0) {
      title.style.color = "#ff8811";
      tag.style.color = "#ff8811";
      img.style.filter = "drop-shadow(0 0 2px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 2px rgba(255, 255, 255, 0.9))";
    }
    else {
      title.style.color = "#ffffff";
      tag.style.color = "#ffffff";
      img.style.filter = "";
    }
  }
  else { // orange or grey
    if(tag.textContent != "" && parseInt(tag.textContent[2]) > 0) {
      title.style.color = "#ff8811";
      tag.style.color = "#ff8811";
      img.style.filter = "drop-shadow(0 0 2px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 2px rgba(255, 255, 255, 0.9))";
    }
    else {
      title.style.color = "#bbbbbb";
      tag.style.color = "#bbbbbb";
      img.style.filter = "";
    }
  }
}

function updateTag(baseType) {
  const tag = document.getElementById(baseType + "Tag");
  // Tag Counter
  if (tag.textContent == "") {
    tag.textContent = "(+1)";
  }
  else {
    tag.textContent = "(+" + (parseInt(tag.textContent[2]) + 1) + ")";
  }
  updateTagColor(baseType);
}

function eatActivated(item){
  const ele = document.getElementById(item);

  if(ele.dataset.title == "Onyx Apple") {
    appos = appos + 1;
    playSound("eat");
    if(appos > 9) {
      playSound("secret");
      const sel = document.getElementById("itemBaseSelect");
      let opt1 = document.createElement('option');
      let opt2 = document.createElement('option');
      opt1.value = "lights";
      opt1.innerHTML = "Maplemas Lights";
      opt2.value = "basket";
      opt2.innerHTML = "Pumpkin Basket (2006 SE)";
      sel.appendChild(opt1);
      sel.appendChild(opt2);
    }
  }
  document.body.classList.remove('custom-cursor-clicked');
}

function scrollActivated(scrollType, baseType) {
  const tut2 = document.getElementById("tut2");
  tut2.style.display = "none";
  let slots = document.getElementById(baseType + "Slt");
  let total = 0;
  let recordStr = "";
  const baseName = document.getElementById(baseType + "Title").textContent;

  if(parseInt(slots.textContent) <= 0) {
    // make sound?
    document.body.classList.remove('custom-cursor-clicked');
    return;
  }

  switch(scrollType) {
    case "shoejmp10": {
      const spd = document.getElementById(baseType + "Spd");
      const jmp = document.getElementById(baseType + "Jmp");
      const dex = document.getElementById(baseType + "Dex");
      const dexLi = document.getElementById(baseType + "DexLi");
      const jmpLi = document.getElementById(baseType + "JmpLi");
      if(Math.random() >= odds10) {
        goodResult();
        dexLi.style.display = "block";
        jmpLi.style.display = "block";
        spd.textContent = parseInt(spd.textContent) + 1;
        jmp.textContent = parseInt(jmp.textContent) + 5;
        dex.textContent = parseInt(dex.textContent) + 3;
        updateTag(baseType);
      }
      else {
        badResult();
      }
      slots.textContent = parseInt(slots.textContent) - 1;
      let tagCount = document.getElementById(baseType + "Tag").textContent[2];
      total = parseInt(spd.textContent) + parseInt(jmp.textContent);
      if(tagCount === undefined) {recordStr = spd.textContent + "spd, " + jmp.textContent + "jmp";}
      else{recordStr ="(+" + document.getElementById(baseType + "Tag").textContent[2] + "): " + spd.textContent + "spd, " + jmp.textContent + "jmp";} 
      break;
    }
    case "shoedex10": {
      const spd = document.getElementById(baseType + "Spd");
      const acc = document.getElementById(baseType + "Acc");
      const avo = document.getElementById(baseType + "Avo");
      const jmp = document.getElementById(baseType + "Jmp");
      const accLi = document.getElementById(baseType + "AccLi");
      const avoLi = document.getElementById(baseType + "AvoLi");
     if(Math.random() >= odds10) {
        goodResult();
        accLi.style.display = "block";
        avoLi.style.display = "block";
        spd.textContent = parseInt(spd.textContent) + 1;
        avo.textContent = parseInt(avo.textContent) + 5;
        acc.textContent = parseInt(acc.textContent) + 3;
        updateTag(baseType);
      }
      else {
        badResult();    
      }
      slots.textContent = parseInt(slots.textContent) - 1;
      let tagCount = document.getElementById(baseType + "Tag").textContent[2];
      total = parseInt(spd.textContent) + parseInt(jmp.textContent);
      if(tagCount === undefined) {recordStr = spd.textContent + "spd, " + jmp.textContent + "jmp";}
      else{recordStr = "(+" + document.getElementById(baseType + "Tag").textContent[2] + "): " + spd.textContent + "spd, " + jmp.textContent + "jmp";} 
      break;
    }
    case "botdef10":
    case "topdef10": {
      const wdef = document.getElementById(baseType + "Wdef");
      const mdef = document.getElementById(baseType + "Mdef");
      const hp = document.getElementById(baseType + "Hp");
      const mdefLi = document.getElementById(baseType + "MdefLi");
      const hpLi = document.getElementById(baseType + "HpLi");
      if(Math.random() >= odds10) {
        goodResult();
        mdefLi.style.display = "block";
        hpLi.style.display = "block";
        wdef.textContent = parseInt(wdef.textContent) + 5;
        mdef.textContent = parseInt(mdef.textContent) + 3;
        hp.textContent = parseInt(hp.textContent) + 10;
        updateTag(baseType);
      }
      else {
        badResult();
      }
      slots.textContent = parseInt(slots.textContent) - 1;
      let tagCount = document.getElementById(baseType + "Tag").textContent[2];
      total = parseInt(wdef.textContent);
      if(tagCount === undefined) {recordStr = wdef.textContent + "def";}
      else{recordStr = "(+" + document.getElementById(baseType + "Tag").textContent[2] + "): " + wdef.textContent + "def";} 
      break;
    }
    case "hatdef10": {
      const wdef = document.getElementById(baseType + "Wdef");
      const mdef = document.getElementById(baseType + "Mdef");
      const acc = document.getElementById(baseType + "Acc");
      const mdefLi = document.getElementById(baseType + "MdefLi");
      const accLi = document.getElementById(baseType + "AccLi");
      const char = document.querySelectorAll('.activeChar');
      if(char[0].id == "virus17") {
        goodResult();
        mdefLi.style.display = "block";
        accLi.style.display = "block";
        wdef.textContent = parseInt(wdef.textContent) + 5;
        mdef.textContent = parseInt(mdef.textContent) + 3;
        acc.textContent = parseInt(acc.textContent) + 1;
        updateTag(baseType);
      }
      else if(Math.random() >= odds10) {
        goodResult();
        mdefLi.style.display = "block";
        accLi.style.display = "block";
        wdef.textContent = parseInt(wdef.textContent) + 5;
        mdef.textContent = parseInt(mdef.textContent) + 3;
        acc.textContent = parseInt(acc.textContent) + 1;
        updateTag(baseType);
      }
      else {
        badResult();
      }
      slots.textContent = parseInt(slots.textContent) - 1;
      let tagCount = document.getElementById(baseType + "Tag").textContent[2];
      total = parseInt(wdef.textContent);
      if(tagCount === undefined) {recordStr = wdef.textContent + "def";}
      else{recordStr = "(+" + document.getElementById(baseType + "Tag").textContent[2] + "): " + wdef.textContent + "def";} 
      break;
    }
    case "hatdef60": {
      const wdef = document.getElementById(baseType + "Wdef");
      const mdef = document.getElementById(baseType + "Mdef");
      const mdefLi = document.getElementById(baseType + "MdefLi");
      if(Math.random() >= odds60) {
        goodResult();
        mdefLi.style.display = "block";
        wdef.textContent = parseInt(wdef.textContent) + 2;
        mdef.textContent = parseInt(mdef.textContent) + 1;
        updateTag(baseType);
      }
      else {
        badResult();
      }
      slots.textContent = parseInt(slots.textContent) - 1;
      let tagCount = document.getElementById(baseType + "Tag").textContent[2];
      total = parseInt(wdef.textContent);
      if(tagCount === undefined) {recordStr = wdef.textContent + "def";}
      else{recordStr = "(+" + document.getElementById(baseType + "Tag").textContent[2] + "): " + wdef.textContent + "def";} 
      break;
    }
    case "beltscr":
    case "witchscr": {
      let stats = [];
      let bestStats = [];
      let statNames = [];

      if(baseType == "witch") {
        const wdef = document.getElementById(baseType + "Wdef");
        const mdef = document.getElementById(baseType + "Mdef");
        const mp = document.getElementById(baseType + "Mp");
        const str = document.getElementById(baseType + "Str");
        const dex = document.getElementById(baseType + "Dex");
        const int = document.getElementById(baseType + "Int");
        const luk = document.getElementById(baseType + "Luk");       
        stats = [wdef,mdef,mp,str,dex,int,luk];
        bestStats = [str,dex,int,luk];
        statNames = ["str","dex","int","luk"];
      }
      if(baseType == "broom") {
        const watk = document.getElementById(baseType + "Watk");
        const spd = document.getElementById(baseType + "Spd");
        stats = [watk,spd];
        bestStats = [watk,spd];
        statNames = ["watk","spd"];
      }
      if(baseType == "wbeltR") {
        const wdef = document.getElementById(baseType + "Wdef");
        const mdef = document.getElementById(baseType + "Mdef");
        const jmp = document.getElementById(baseType + "Jmp");
        stats = [wdef,mdef,jmp];
        bestStats = [jmp];
        statNames = ["jmp"];
      }
      if(baseType == "wbeltB") {
        const wdef = document.getElementById(baseType + "Wdef");
        const mdef = document.getElementById(baseType + "Mdef");
        const spd = document.getElementById(baseType + "Spd");
        stats = [wdef,mdef,spd];
        bestStats = [spd];
        statNames = ["spd"];
      }
      if(baseType == "wbeltP") {
        const wdef = document.getElementById(baseType + "Wdef");
        const mdef = document.getElementById(baseType + "Mdef");
        const spd = document.getElementById(baseType + "Spd");
        const jmp = document.getElementById(baseType + "Jmp");
        const watk = document.getElementById(baseType + "Watk");
        const matk = document.getElementById(baseType + "Matk");
        stats = [wdef,mdef,spd,jmp,watk,matk];
        bestStats = [watk,spd,jmp];
        statNames = ["watk","spd","jmp"];
      }

      let csTotal = 0;

      stats.forEach(stat => {
        if(parseInt(stat.textContent) > 0) {
           let roll = getRandomInteger(chaosMin,chaosMax);
           csTotal += roll;
           stat.textContent = parseInt(stat.textContent) + roll;
           if(parseInt(stat.textContent) <= 0) {
              let li = document.getElementById(stat.id + "Li");
              li.style.display = "none";
              stat.textContent = 0;
           }
        }
      });
      if(csTotal > 0) {
        goodResult("smile");
      }
      else {
        goodResult("cry");
      }
      
      slots.textContent = parseInt(slots.textContent) - 1;
      updateTag(baseType);
      total = 0;
      bestStats.forEach(stat => {
        total = total + parseInt(stat.textContent);
      });

      recordStr = "";

      bestStats.forEach((stat, index) => {
        if(parseInt(stat.textContent) > 0) {
          recordStr += (parseInt(stat.textContent) + statNames[index] + " ");
        }
      });
      break;
    }
    case "1hsatk10": {
      let stats = [];
      let bestStats = [];
      let statNames = [];
      const wdef = document.getElementById(baseType + "Wdef");
      const watk = document.getElementById(baseType + "Watk");
      const str = document.getElementById(baseType + "Str");
      const strLi = document.getElementById(baseType + "StrLi");
      const wdefLi = document.getElementById(baseType + "WdefLi");
      if(Math.random() >= odds10) {
        goodResult();
        wdefLi.style.display = "block";
        strLi.style.display = "block";
        wdef.textContent = parseInt(wdef.textContent) + 1;
        watk.textContent = parseInt(watk.textContent) + 5;
        str.textContent = parseInt(str.textContent) + 3;
        updateTag(baseType);
      }
      else {
        badResult();
      }
      slots.textContent = parseInt(slots.textContent) - 1;
      let tagCount = document.getElementById(baseType + "Tag").textContent[2];

      if(baseType == "lights") {
        const spd = document.getElementById(baseType + "Spd");
        stats = [wdef,watk,spd,str];
        bestStats = [watk,spd];
        statNames = ["watk","spd"];
      }
      if(baseType == "basket") {
        const spd = document.getElementById(baseType + "Spd");
        const dex = document.getElementById(baseType + "Dex");
        const int = document.getElementById(baseType + "Int");
        const luk = document.getElementById(baseType + "Luk");
        const hp = document.getElementById(baseType + "Hp");
        stats = [wdef,watk,spd,str,dex,int,luk,hp];
        bestStats = [watk,spd];
        statNames = ["watk","spd"];
      }

      total = 0;
      bestStats.forEach(stat => {
        total = total + parseInt(stat.textContent);
      });

      recordStr = "";

      bestStats.forEach((stat, index) => {
        if(parseInt(stat.textContent) > 0) {
          recordStr += (parseInt(stat.textContent) + statNames[index] + " ");
        }
      });
      break;
    }
    case "chaos": {
      let stats = [];
      let bestStats = [];
      let statNames = [];

      if(baseType == "lights") {
        const wdef = document.getElementById(baseType + "Wdef");
        const watk = document.getElementById(baseType + "Watk");
        const str = document.getElementById(baseType + "Str");
        const spd = document.getElementById(baseType + "Spd");
   
        stats = [wdef,watk,str,spd];
        bestStats = [watk,spd];
        statNames = ["watk","spd"];
      }
      if(baseType == "basket") {
        const wdef = document.getElementById(baseType + "Wdef");
        const watk = document.getElementById(baseType + "Watk");
        const str = document.getElementById(baseType + "Str");
        const spd = document.getElementById(baseType + "Spd");
        const hp = document.getElementById(baseType + "Hp");
        const dex = document.getElementById(baseType + "Dex");
        const int = document.getElementById(baseType + "Int");
        const luk = document.getElementById(baseType + "Luk");    
        stats = [watk,spd,wdef,str,dex,int,luk,hp];
        bestStats = [watk,spd];
        statNames = ["watk","spd"];
      }

      let csTotal = 0;

      if(Math.random() >= oddsChaos) {
        stats.forEach(stat => {
          if(parseInt(stat.textContent) > 0) {
            let roll = getRandomInteger(chaosMin,chaosMax);
            csTotal += roll;
            stat.textContent = parseInt(stat.textContent) + roll;
            if(parseInt(stat.textContent) <= 0) {
                let li = document.getElementById(stat.id + "Li");
                li.style.display = "none";
                stat.textContent = 0;
            }
          }
        });
        if(csTotal > 0) {
          goodResult("smile");
        }
        else {
          goodResult("cry");
        }
        updateTag(baseType);
      }
      else {
        badResult();
      }
      slots.textContent = parseInt(slots.textContent) - 1;
  
      total = 0;
      bestStats.forEach(stat => {
        total = total + parseInt(stat.textContent);
      });

      recordStr = "";

      bestStats.forEach((stat, index) => {
        if(parseInt(stat.textContent) > 0) {
          recordStr += (parseInt(stat.textContent) + statNames[index] + " ");
        }
      });
      break;
    }
    default:
      document.body.classList.remove('custom-cursor-clicked');
      return;
      break;
  }
  document.body.classList.remove('custom-cursor-clicked');
  const scrUsed = document.getElementById("scrUsed");
  const bestRes = document.getElementById("bestRes");
  scrUsed.textContent = parseInt(scrUsed.textContent) + 1;
  if(parseInt(slots.textContent) == 0) {
    if(total > best) {
      best = total;
      bestRes.textContent = recordStr;
    }
  }
}

function baseChange(event) {

    const bg = document.getElementById("scrollsim");
    const tut1 = document.getElementById("tut1");
    tut1.style.display = "none";
    // Clear scrolls and bases
    const scrolls = document.querySelectorAll('.hoverscroll');
    const bases = document.querySelectorAll('.dropZone');
    scrolls.forEach(scroll => {
      scroll.style.display = "none";
    });
    bases.forEach(base => {
      base.style.display = "none";
      base.classList.remove("activeBase");
    });

    // Populate inventory
    switch(event.target.value) {
      case "gomu": {
        const shoejmp10 = document.getElementById("shoejmp10");
        const shoedex10 = document.getElementById("shoedex10");
        const gomu = document.getElementById("gomu");
        shoejmp10.style.display = "block";
        shoedex10.style.display = "block";
        gomu.style.display = "block";
        gomu.classList.add("activeBase");
        bg.style.backgroundImage = "url(https://ik.imagekit.io/islander/images/scroll/background1.png)";
        addClutter(true);
        break;
      }
      case "stripeM": {
          const topdef10 = document.getElementById("topdef10");
          const stripeM = document.getElementById("stripeM");
          topdef10.style.display = "block";
          stripeM.style.display = "block";
          stripeM.classList.add("activeBase");
          bg.style.backgroundImage = "url(https://ik.imagekit.io/islander/images/scroll/background1.png)";
          addClutter(false);
        break;
      }
      case "stripeF": {
          const topdef10 = document.getElementById("topdef10");
          const stripeF = document.getElementById("stripeF");
          topdef10.style.display = "block";
          stripeF.style.display = "block";
          stripeF.classList.add("activeBase");
          bg.style.backgroundImage = "url(https://ik.imagekit.io/islander/images/scroll/background1.png)";
          addClutter(false);
        break;
      }
      case "ice": {
          const botdef10 = document.getElementById("botdef10");
          const ice = document.getElementById("ice");
          botdef10.style.display = "block";
          ice.style.display = "block";
          ice.classList.add("activeBase");
          bg.style.backgroundImage = "url(https://ik.imagekit.io/islander/images/scroll/background1.png)";
          addClutter(false);
        break;
      }
      case "sweat": {
          const botdef10 = document.getElementById("botdef10");
          const sweat = document.getElementById("sweat");
          botdef10.style.display = "block";
          sweat.style.display = "block";
          sweat.classList.add("activeBase");
          bg.style.backgroundImage = "url(https://ik.imagekit.io/islander/images/scroll/background1.png)";
          addClutter(false);
        break;
      }
      case "wdana": {
        const hatdef10 = document.getElementById("hatdef10");
        const hatdef60 = document.getElementById("hatdef60");
        const wdana = document.getElementById("wdana");
        hatdef10.style.display = "block";
        hatdef60.style.display = "block";
        wdana.style.display = "block";
        wdana.classList.add("activeBase");
        bg.style.backgroundImage = "url(https://ik.imagekit.io/islander/images/scroll/background1.png)";
        addClutter(true);
        break;
      }
      case "witch": {
        const witchscr = document.getElementById("witchscr");
        const witch = document.getElementById("witch");
        witchscr.style.display = "block";
        witch.style.display = "block";
        witch.classList.add("activeBase");
        bg.style.backgroundImage = "url(https://ik.imagekit.io/islander/images/scroll/background2.png)";
        addClutter(false);
        break;
      }
      case "broom": {
        const witchscr = document.getElementById("witchscr");
        const broom = document.getElementById("broom");
        witchscr.style.display = "block";
        broom.style.display = "block";
        broom.classList.add("activeBase");
        bg.style.backgroundImage = "url(https://ik.imagekit.io/islander/images/scroll/background2.png)";
        addClutter(false);
        break;
      }
      case "wbeltR": {
        const beltscr = document.getElementById("beltscr");
        const wbeltR = document.getElementById("wbeltR");
        beltscr.style.display = "block";
        wbeltR.style.display = "block";
        wbeltR.classList.add("activeBase");
        bg.style.backgroundImage = "url(https://ik.imagekit.io/islander/images/scroll/background2.png)";
        addClutter(false);
        break;
      }
      case "wbeltB": {
        const beltscr = document.getElementById("beltscr");
        const wbeltB = document.getElementById("wbeltB");
        beltscr.style.display = "block";
        wbeltB.style.display = "block";
        wbeltB.classList.add("activeBase");
        bg.style.backgroundImage = "url(https://ik.imagekit.io/islander/images/scroll/background2.png)";
        addClutter(false);
        break;
      }
      case "wbeltP": {
        const beltscr = document.getElementById("beltscr");
        const wbeltP = document.getElementById("wbeltP");
        beltscr.style.display = "block";
        wbeltP.style.display = "block";
        wbeltP.classList.add("activeBase");
        bg.style.backgroundImage = "url(https://ik.imagekit.io/islander/images/scroll/background2.png)";
        addClutter(false);
        break;
      }
      case "lights": {
        const hsatk = document.getElementById("1hsatk10");
        const chaos = document.getElementById("chaos");
        const lights = document.getElementById("lights");
        hsatk.style.display = "block";
        chaos.style.display = "block";
        lights.style.display = "block";
        lights.classList.add("activeBase");
        bg.style.backgroundImage = "url(https://ik.imagekit.io/islander/images/scroll/background1.png)";
        addClutter(true);
        break;
      }
      case "basket": {
        const hsatk = document.getElementById("1hsatk10");
        const chaos = document.getElementById("chaos");
        const basket = document.getElementById("basket");
        hsatk.style.display = "block";
        chaos.style.display = "block";
        basket.style.display = "block";
        basket.classList.add("activeBase");
        bg.style.backgroundImage = "url(https://ik.imagekit.io/islander/images/scroll/background2.png)";
        addClutter(true);
        break;
      }
    }
    playMusic();
    
    resetStats();
    newItem();

}

function resetStats() {
  const scrUsed = document.getElementById("scrUsed");
  const basUsed = document.getElementById("basUsed");
  const bestRes = document.getElementById("bestRes");
  scrUsed.textContent = "0";
  basUsed.textContent = "0";
  bestRes.textContent = "N/A";
  best = 0;

}

function charChange(event) {
  const characters = document.querySelectorAll('.character');
  const newCharStr = event.target.value;
  const newChar = document.getElementById(newCharStr);
  const eat = document.getElementById("eat");

  characters.forEach(char => {
      char.style.display = "none";
      char.classList.remove('activeChar');
  });

  if(newCharStr == "lowly") {
    eat.style.display = "block";
  }
  else {
    eat.style.display = "none";
  }

  newChar.style.display = "block";
  newChar.classList.add('activeChar');
  playSound("char");

}

function getRandomInteger(min, max) {
  min = Math.ceil(min); 
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playSound(sound) {
  const sfxBox = document.getElementById("sfxBox");
  if (sfxBox.checked) {
    let sfx = new Audio("https://ik.imagekit.io/islander/images/scroll/" + sound + ".mp3");
    sfx.play();
  }
}



function playMusic(music) {
  const bgmBox = document.getElementById("bgmBox");
  const bgm1 = document.getElementById("bgm1");
  const allMusic = document.querySelectorAll('.music');
  const activeBase = document.querySelectorAll('.activeBase');

  allMusic.forEach(music => {
      music.pause();
  });

  if (bgmBox.checked) {
    if(music == null) {
      if(activeBase[0].id == "witch" || activeBase[0].id == "broom" || activeBase[0].id == "wbeltR" || activeBase[0].id == "wbeltB" || activeBase[0].id == "wbeltP" || activeBase[0].id == "basket" ) {
        bgm2.volume = 0.6;
        bgm2.play();
      }
      else {
        bgm1.volume = 0.6;
        bgm1.play();
      }
    }
    else {
      // custom music
    }
  }
}

function newItem() {

    const baseType = document.getElementById("itemBaseSelect");
    playSound("NewBase");

    switch(baseType.value) {
      case "gomu": {
        let wdef = 0;
        let spd = 0;
        const gomuSpd = document.getElementById("gomuSpd");
        const gomuWdef = document.getElementById("gomuWdef");
        const gomuJmp = document.getElementById("gomuJmp");
        const gomuDex = document.getElementById("gomuDex");
        const gomuAcc = document.getElementById("gomuAcc");
        const gomuAvo = document.getElementById("gomuAvo");
        const gomuSlt = document.getElementById("gomuSlt");
        const gomuDexLi = document.getElementById("gomuDexLi");
        const gomuAccLi = document.getElementById("gomuAccLi");
        const gomuAvoLi = document.getElementById("gomuAvoLi");
        const gomuJmpLi = document.getElementById("gomuJmpLi");
        const gomuTag = document.getElementById("gomuTag");
        
        if(Math.random() >= 0.95) {
          wdef = getRandomInteger(3,10);
          spd = getRandomInteger(1,8);
        }
        else {
          wdef = getRandomInteger(3,5);
          spd = getRandomInteger(1,3);
        }
        gomuSpd.textContent = spd;
        gomuWdef.textContent = wdef;
        gomuJmp.textContent = "0";
        gomuDex.textContent = "0";
        gomuAcc.textContent = "0";
        gomuAvo.textContent = "0";
        gomuSlt.textContent = "5";
        gomuTag.textContent = "";
        gomuDexLi.style.display = "none";
        gomuAccLi.style.display = "none";
        gomuAvoLi.style.display = "none";
        gomuJmpLi.style.display = "none";
        break;
      }
      case "stripeM": {
        let wdef = 0;
        let mdef = 0;
        let hp = 0;
        const stripeMWdef = document.getElementById("stripeMWdef");
        const stripeMMdef = document.getElementById("stripeMMdef");
        const stripeMHp = document.getElementById("stripeMHp");
        const stripeMSlt = document.getElementById("stripeMSlt");
        const stripeMMdefLi = document.getElementById("stripeMMdefLi");
        const stripeMHpLi = document.getElementById("stripeMHpLi");
        const stripeMTag = document.getElementById("stripeMTag");
        if(Math.random() >= 0.8) {
          wdef = getRandomInteger(9,18);
        }
        else {
          wdef = getRandomInteger(9,13);
        }
        stripeMWdef.textContent = wdef;
        stripeMMdef.textContent = "0";
        stripeMHp.textContent = "0";
        stripeMSlt.textContent = "7";
        stripeMTag.textContent = "";
        stripeMMdefLi.style.display = "none";
        stripeMHpLi.style.display = "none";
        break;
      }
      case "stripeF": {
        let wdef = 0;
        let mdef = 0;
        let hp = 0;
        const stripeFWdef = document.getElementById("stripeFWdef");
        const stripeFMdef = document.getElementById("stripeFMdef");
        const stripeFHp = document.getElementById("stripeFHp");
        const stripeFSlt = document.getElementById("stripeFSlt");
        const stripeFMdefLi = document.getElementById("stripeFMdefLi");
        const stripeFHpLi = document.getElementById("stripeFHpLi");
        const stripeFTag = document.getElementById("stripeFTag");
        if(Math.random() >= 0.8) {
          wdef = getRandomInteger(9,18);
        }
        else {
          wdef = getRandomInteger(9,13);
        }
        stripeFWdef.textContent = wdef;
        stripeFMdef.textContent = "0";
        stripeFHp.textContent = "0";
        stripeFSlt.textContent = "7";
        stripeFTag.textContent = "";
        stripeFMdefLi.style.display = "none";
        stripeFHpLi.style.display = "none";
        break;
      }
      case "ice": {
        let wdef = 0;
        let mdef = 0;
        let hp = 0;
        let mp = 0;
        const iceWdef = document.getElementById("iceWdef");
        const iceMdef = document.getElementById("iceMdef");
        const iceHp = document.getElementById("iceHp");
        const iceMp = document.getElementById("iceMp");
        const iceSlt = document.getElementById("iceSlt");
        const iceMdefLi = document.getElementById("iceMdefLi");
        const iceHpLi = document.getElementById("iceHpLi");
        const iceTag = document.getElementById("iceTag");
        if(Math.random() >= 0.8) {
          wdef = getRandomInteger(11,20);
          mp = getRandomInteger(2,9);
        }
        else {
          wdef = getRandomInteger(11,15);
          mp = getRandomInteger(2,4);
        }
        iceWdef.textContent = wdef;
        iceMp.textContent = mp;
        iceMdef.textContent = "0";
        iceHp.textContent = "0";
        iceSlt.textContent = "7";
        iceTag.textContent = "";
        iceMdefLi.style.display = "none";
        iceHpLi.style.display = "none";
        break;
      }
      case "sweat": {
        let wdef = 0;
        let mdef = 0;
        let hp = 0;
        const sweatWdef = document.getElementById("sweatWdef");
        const sweatMdef = document.getElementById("sweatMdef");
        const sweatHp = document.getElementById("sweatHp");
        const sweatSlt = document.getElementById("sweatSlt");
        const sweatMdefLi = document.getElementById("sweatMdefLi");
        const sweatHpLi = document.getElementById("sweatHpLi");
        const sweatTag = document.getElementById("sweatTag");
        if(Math.random() >= 0.8) {
          wdef = getRandomInteger(9,16);
        }
        else {
          wdef = getRandomInteger(9,11);
        }
        sweatWdef.textContent = wdef;
        sweatMdef.textContent = "0";
        sweatHp.textContent = "0";
        sweatSlt.textContent = "7";
        sweatTag.textContent = "";
        sweatMdefLi.style.display = "none";
        sweatHpLi.style.display = "none";
        break;
      }
      case "wdana": {
        let wdef = 0;
        let mdef = 0;
        let acc = 0;
        const wdanaWdef = document.getElementById("wdanaWdef");
        const wdanaMdef = document.getElementById("wdanaMdef");
        const wdanaAcc = document.getElementById("wdanaAcc");
        const wdanaSlt = document.getElementById("wdanaSlt");
        const wdanaMdefLi = document.getElementById("wdanaMdefLi");
        const wdanaAccLi = document.getElementById("wdanaAccLi");
        const wdanaTag = document.getElementById("wdanaTag");
        const char = document.querySelectorAll('.activeChar');
        if(char[0].id == "virus17") {
          wdef = 13;
        }
        else if(Math.random() >= 0.8) {
          wdef = getRandomInteger(7,14);
        }
        else {
          wdef = getRandomInteger(7,9);
        }
        wdanaWdef.textContent = wdef;
        wdanaMdef.textContent = "0";
        wdanaAcc.textContent = "0";
        wdanaSlt.textContent = "7";
        wdanaTag.textContent = "";
        wdanaMdefLi.style.display = "none";
        wdanaAccLi.style.display = "none";
        break;
      }
      case "witch": {    
        const witchWdef = document.getElementById("witchWdef");
        const witchMdef = document.getElementById("witchMdef");
        const witchMp = document.getElementById("witchMp");
        const witchStr = document.getElementById("witchStr");
        const witchDex = document.getElementById("witchDex");
        const witchInt = document.getElementById("witchInt");
        const witchLuk = document.getElementById("witchLuk");

        const witchSlt = document.getElementById("witchSlt");
        const witchMdefLi = document.getElementById("witchMdefLi");
        const witchWdefLi = document.getElementById("witchMdefLi");
        const witchMpLi = document.getElementById("witchMpLi");
        const witchStrLi = document.getElementById("witchStrLi");
        const witchDexLi = document.getElementById("witchDexLi");
        const witchIntLi = document.getElementById("witchIntLi");
        const witchLukLi = document.getElementById("witchLukLi");
  
        const witchTag = document.getElementById("witchTag");

        witchWdef.textContent = "15";
        witchMdef.textContent = "15";
        witchStr.textContent = "1";
        witchDex.textContent = "1";
        witchInt.textContent = "1";
        witchLuk.textContent = "1";
        witchMp.textContent = "100";
        witchSlt.textContent = "7";
        witchTag.textContent = "";
        witchMdefLi.style.display = "block";
        witchWdefLi.style.display = "block";
        witchMpLi.style.display = "block";
        witchStrLi.style.display = "block";
        witchDexLi.style.display = "block";
        witchIntLi.style.display = "block";
        witchLukLi.style.display = "block";
    
        break;
      }
      case "broom": {    
        const broomWatk = document.getElementById("broomWatk");
        const broomSpd = document.getElementById("broomSpd");
        const broomSlt = document.getElementById("broomSlt");
        const broomWatkLi = document.getElementById("broomWatkLi");
        const broomSpdLi = document.getElementById("broomSpdLi");
        const broomTag = document.getElementById("broomTag");

        broomWatk.textContent = "31";
        broomSpd.textContent = "5";
        broomSlt.textContent = "7";
        broomTag.textContent = "";
        broomWatkLi.style.display = "block";
        broomSpdLi.style.display = "block";  
        break;
      }
      case "wbeltR": {    
        const wbeltRWdef = document.getElementById("wbeltRWdef");
        const wbeltRMdef = document.getElementById("wbeltRMdef");
        const wbeltRJmp = document.getElementById("wbeltRJmp");
        const wbeltRSlt = document.getElementById("wbeltRSlt");
        const wbeltRWdefLi = document.getElementById("wbeltRWdefLi");
        const wbeltRMdefLi = document.getElementById("wbeltRMdefLi");
        const wbeltRJmpLi = document.getElementById("wbeltRJmpLi");
        const wbeltRTag = document.getElementById("wbeltRTag");

        wbeltRWdef.textContent = "20";
        wbeltRMdef.textContent = "20";
        wbeltRJmp.textContent = "2";
        wbeltRSlt.textContent = "3";
        wbeltRTag.textContent = "";
        wbeltRWdefLi.style.display = "block";
        wbeltRMdefLi.style.display = "block";
        wbeltRJmpLi.style.display = "block";  
        break;
      }
      case "wbeltB": {    
        const wbeltBWdef = document.getElementById("wbeltBWdef");
        const wbeltBMdef = document.getElementById("wbeltBMdef");
        const wbeltBSpd = document.getElementById("wbeltBSpd");
        const wbeltBSlt = document.getElementById("wbeltBSlt");
        const wbeltBWdefLi = document.getElementById("wbeltBWdefLi");
        const wbeltBMdefLi = document.getElementById("wbeltBMdefLi");
        const wbeltBSpdLi = document.getElementById("wbeltBSpdLi");
        const wbeltBTag = document.getElementById("wbeltBTag");

        wbeltBWdef.textContent = "45";
        wbeltBMdef.textContent = "45";
        wbeltBSpd.textContent = "2";
        wbeltBSlt.textContent = "3";
        wbeltBTag.textContent = "";
        wbeltBWdefLi.style.display = "block";
        wbeltBMdefLi.style.display = "block";
        wbeltBSpdLi.style.display = "block";  
        break;
      }
      case "wbeltP": {    
        const wbeltPWdef = document.getElementById("wbeltPWdef");
        const wbeltPMdef = document.getElementById("wbeltPMdef");
        const wbeltPWatk = document.getElementById("wbeltPWatk");
        const wbeltPMatk = document.getElementById("wbeltPMatk");
        const wbeltPSpd = document.getElementById("wbeltPSpd");
        const wbeltPJmp = document.getElementById("wbeltPJmp");
        const wbeltPSlt = document.getElementById("wbeltPSlt");
        const wbeltPWdefLi = document.getElementById("wbeltPWdefLi");
        const wbeltPMdefLi = document.getElementById("wbeltPMdefLi");
        const wbeltPWatkLi = document.getElementById("wbeltPWatkLi");
        const wbeltPMatkLi = document.getElementById("wbeltPMatkLi");
        const wbeltPSpdLi = document.getElementById("wbeltPSpdLi");
        const wbeltPJmpLi = document.getElementById("wbeltPJmpLi");
        const wbeltPTag = document.getElementById("wbeltPTag");

        wbeltPWatk.textContent = "1";
        wbeltPMatk.textContent = "1";
        wbeltPWdef.textContent = "60";
        wbeltPMdef.textContent = "60";
        wbeltPSpd.textContent = "2";
        wbeltPJmp.textContent = "2";
        wbeltPSlt.textContent = "3";
        wbeltPTag.textContent = "";
        wbeltPWatkLi.style.display = "block";
        wbeltPMatkLi.style.display = "block";
        wbeltPWdefLi.style.display = "block";
        wbeltPMdefLi.style.display = "block";
        wbeltPSpdLi.style.display = "block";  
        wbeltPJmpLi.style.display = "block";  
        break;
      }
      case "lights": {    
        let watk = 0;
        let spd = 0;
        const lightsStr = document.getElementById("lightsStr");
        const lightsWatk = document.getElementById("lightsWatk");
        const lightsWdef = document.getElementById("lightsWdef");
        const lightsSpd = document.getElementById("lightsSpd");
        const lightsSlt = document.getElementById("lightsSlt");
        const lightsWatkLi = document.getElementById("lightsWatkLi");
        const lightsSpdLi = document.getElementById("lightsSpdLi");
        const lightsStrLi = document.getElementById("lightsStrLi");
        const lightsWdefLi = document.getElementById("lightsWdefLi");
        const lightsTag = document.getElementById("lightsTag");

        if(Math.random() >= 0.8) {
          watk = getRandomInteger(38,53);
          spd = getRandomInteger(9,16);
        }
        else {
          watk = getRandomInteger(38,48);
          spd = getRandomInteger(9,11);
        }

        lightsWatk.textContent = watk;
        lightsSpd.textContent = spd;
        lightsSlt.textContent = "7";
        lightsTag.textContent = "";
        lightsStr.textContent = "0";
        lightsWdef.textContent = "0";
        lightsWatkLi.style.display = "block";
        lightsSpdLi.style.display = "block";  
        lightsStrLi.style.display = "none";
        lightsWdefLi.style.display = "none";
        break;
      }
      case "basket": {    
        const basketWatk = document.getElementById("basketWatk");
        const basketWdef = document.getElementById("basketWdef");
        const basketHp = document.getElementById("basketHp");
        const basketStr = document.getElementById("basketStr");
        const basketDex = document.getElementById("basketDex");
        const basketInt = document.getElementById("basketInt");
        const basketLuk = document.getElementById("basketLuk");
        const basketSpd = document.getElementById("basketSpd");

        const basketSlt = document.getElementById("basketSlt");

        const basketWatkLi = document.getElementById("basketWatkLi");
        const basketWdefLi = document.getElementById("basketWdefLi");
        const basketHpLi = document.getElementById("basketHpLi");
        const basketSpdLi = document.getElementById("basketSpdLi");
        const basketStrLi = document.getElementById("basketStrLi");
        const basketDexLi = document.getElementById("basketDexLi");
        const basketIntLi = document.getElementById("basketIntLi");
        const basketLukLi = document.getElementById("basketLukLi");
  
        const basketTag = document.getElementById("basketTag");

        basketWatk.textContent = "1";
        basketWdef.textContent = "0";
        basketSpd.textContent = "10";
        basketStr.textContent = "1";
        basketDex.textContent = "1";
        basketInt.textContent = "1";
        basketLuk.textContent = "1";
        basketHp.textContent = "10";
        basketSlt.textContent = "7";
        basketTag.textContent = "";
        basketSpdLi.style.display = "block";
        basketWatkLi.style.display = "block";
        basketWdefLi.style.display = "none";
        basketHpLi.style.display = "block";
        basketStrLi.style.display = "block";
        basketDexLi.style.display = "block";
        basketIntLi.style.display = "block";
        basketLukLi.style.display = "block";
    
        break;
      }
      default:
        break;
    }
    updateTagColor(baseType.value);
    const basUsed = document.getElementById("basUsed");
    basUsed.textContent = parseInt(basUsed.textContent) + 1;
}

function emote(emo) 
{
  const face = document.getElementById('face');
  const char = document.querySelectorAll('.activeChar');
  face.src = "https://ik.imagekit.io/islander/images/scroll/" + char[0].id + "-" + emo + ".png";
  setTimeout(function() {
    face.src ='';
  }, 1000);
}

function badResult()
{
  const noAnim = document.getElementById('scrollNo');
  playSound("no");
  noAnim.style.display = 'block';
  const timestamp = new Date().getTime();
  noAnim.src = 'https://ik.imagekit.io/islander/images/scroll/no.gif?t=' + timestamp;
  emote("cry");
}

function goodResult(em)
{
  const yesAnim = document.getElementById('scrollYes');
  playSound("yes");
  yesAnim.style.display = 'block';
  //yesAnim.src = '';
  //yesAnim.src = 'images/scroll/yes.gif';
  const timestamp = new Date().getTime();
  yesAnim.src = 'https://ik.imagekit.io/islander/images/scroll/yes.gif?t=' + timestamp;
  if(em == null)
    em = "smile";
  emote(em);
}

//Base Tooltip Code
const baseBoxes = document.querySelectorAll('.baseBox');
const bases = document.querySelectorAll('.dropZone');

bases.forEach(base => {
  let baseBoxID = base.id + "Box";
  let baseBox = document.getElementById(baseBoxID);
  base.addEventListener('mouseenter', () => {
    const rect = base.getBoundingClientRect();
    baseBox.style.top = `${rect.bottom - 42}px`;
    baseBox.style.left = `${rect.left}px`;
    void baseBox.offsetWidth;
    baseBox.classList.add('visible');
  });

  base.addEventListener('mouseleave', () => {
    baseBox.classList.remove('visible');
  });
});

// Scroll Tooltip Code
const scrolltip = document.getElementById('scrollBox');
const scrolltipTitle = document.getElementById('scrolltipTitle');
const scrolltipDesc1 = document.getElementById('scrolltipDesc1');
const scrolltipDesc2 = document.getElementById('scrolltipDesc2');
const scrolltipDesc3 = document.getElementById('scrolltipDesc3');
const scrolltipDesc4 = document.getElementById('scrolltipDesc4');
const scrolltipImg = document.getElementById('scrolltipImg');
const hoverscrolls = document.querySelectorAll('.hoverscroll');

hoverscrolls.forEach(container => {
    container.addEventListener('mouseenter', () => {
      const rect = container.getBoundingClientRect();
      scrolltip.style.top = `${rect.bottom + 8}px`;
      scrolltip.style.left = `${rect.left}px`;
      scrolltipTitle.textContent = container.dataset.title;
      scrolltipDesc1.textContent = container.dataset.desc1;
      scrolltipDesc2.textContent = container.dataset.desc2;
      scrolltipDesc3.textContent = container.dataset.desc3;
      scrolltipDesc4.textContent = container.dataset.desc4;
      scrolltipImg.src = container.src;
      void scrolltip.offsetWidth;
      scrolltip.classList.add('visible');
    });

    container.addEventListener('mouseleave', () => {
      scrolltip.classList.remove('visible');
    });
});

// Anticheat code
const antiCheat = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if(mutation.type == "characterData") {
      if(mutation.target.parentElement.nodeName != "BODY") {
        const bg = document.getElementById('scrollsim');
        const allMusic = document.querySelectorAll('.music');
        const charSelect = document.getElementById('character');
        const sfxBox = document.getElementById('sfxBox');
        const bgmBox = document.getElementById('bgmBox');
        playSound("cheat");
        mutation.target.parentElement.textContent = "CHEATER!";
        bg.style.filter = "invert(100%) contrast(200%)";

        charSelect.disabled = true;
        sfxBox.disabled = true;
        bgmBox.disabled = true;

        const characters = document.querySelectorAll('.character');
        const newChar = document.getElementById("glitch");

        characters.forEach(char => {
            char.style.display = "none";
            char.classList.remove('activeChar');
        });

        newChar.style.display = "block";
        newChar.classList.add('activeChar');

        chaosMax = 0;
        oddsChaos = 0;
        odds60 = 0.6;
        odds10 = 0.97;

        allMusic.forEach(music => {
            music.pause();
        });

      }
    } 
  }
}

const observer = new MutationObserver(antiCheat);
let obsconfig = {
  childList: true,
  subtree: true,
  characterData: true
}
observer.observe(document.body,obsconfig);

//cursor code
cursorDiv = document.getElementById('scrollsim');

cursorDiv.addEventListener('mouseenter', function() {
  document.body.classList.add('custom-cursor');
});

cursorDiv.addEventListener('mouseleave', function() {
  document.body.classList.remove('custom-cursor');
});

cursorDiv.addEventListener('mousedown', function() {
  document.body.classList.add('custom-cursor-clicked');
});

cursorDiv.addEventListener('mouseup', function() {
  document.body.classList.remove('custom-cursor-clicked');
});

// Mobile support

function handleClick(event) {
  const activeBase = document.querySelectorAll('.activeBase');
  scrollActivated(event.currentTarget.id, activeBase[0].id);
}

const mediaQuery = window.matchMedia("(pointer: coarse)");

function applyClickListener(e) {
  const scrolls = document.querySelectorAll('.draggableImage.hoverscroll:not(.clutter)');
  scrolls.forEach(scroll => {
    if (e.matches) { scroll.addEventListener("click", handleClick);} 
    else { scroll.removeEventListener("click", handleClick);}
  });

}

applyClickListener(mediaQuery);
mediaQuery.addEventListener("change", applyClickListener);
