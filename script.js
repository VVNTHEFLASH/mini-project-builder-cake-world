/*Fill your code */
var price = {
    Chocolate: 300,
    Strawberry: 100,
    Butterscotch: 200,
    Vannila: 250,
    Redvelvet: 350
}

var state = {
    Chocolate: true,
    Strawberry: true,
    Butterscotch: true,
    Vannila: true,
    Redvelvet: true
}

var color = {
    ChocolateColor: "chocolate",
    StrawberryColor: "#f542a7",
    ButterscotchColor: "#E3963E",
    VannilaColor: "#F3E5AB",
    RedvelvetColor: "red"
}

var ChocoPos=0, SbPos=0, BsPos=0, VPos=0, RvPos=0;
var count = 0;
var total = 0;
function renderChocolate() {
    let chocolateButton = document.querySelector('#btn-chocolate');
    if(state.Chocolate) {
        count = count + 1;
        ChocoPos = count;
        document.querySelector('#layer'+count).style.display = "inherit";
        document.querySelector('#layer'+count).style.backgroundColor = color.ChocolateColor;
        chocolateButton.style.padding = "20px";
        document.getElementById('chocolateBill').style.visibility = "visible";
        total = total + price.Chocolate;
    }
    else {
        document.querySelector('#layer'+ChocoPos).style.display = "none";
        chocolateButton.style.padding = "5px";
        document.getElementById('chocolateBill').style.visibility = "hidden";
        count = count - 1;
        total = total - price.Chocolate;
    }
}
function renderStrawberry() {
    let strawberryButton = document.querySelector('#btn-strawberry');
    if(state.Strawberry) {
        count += 1;
        SbPos = count;
        document.querySelector('#layer'+count).style.display = "inherit";
        document.querySelector('#layer'+count).style.backgroundColor = color.StrawberryColor;
        strawberryButton.style.padding = "20px";
        document.getElementById('strawberryBill').style.visibility = "visible";
        total = total + price.Strawberry;
    }
    else {
        document.querySelector('#layer'+SbPos).style.display = "none";
        strawberryButton.style.padding = "5px";
        document.getElementById('strawberryBill').style.visibility = "hidden";
        count -= 1;
        total = total - price.Strawberry;
    }
}
function renderButterscotch() {
    let butterscotchButton = document.querySelector('#btn-butterscotch');
    if(state.Butterscotch) {
        count += 1;
        BsPos = count;
        document.querySelector('#layer'+count).style.display = "inherit";
        document.querySelector('#layer'+count).style.backgroundColor = color.ButterscotchColor;
        butterscotchButton.style.padding = "20px";
        document.getElementById('butterscotchBill').style.visibility = "visible";
        total = total + price.Butterscotch;
    }
    else {
        document.querySelector('#layer'+BsPos).style.display = "none";
        butterscotchButton.style.padding = "5px";
        document.getElementById('butterscotchBill').style.visibility = "hidden";
        count -= 1;
        total = total - price.Butterscotch;
    }
}
function renderVannila() {
    let vannilaButton = document.querySelector('#btn-vannila');
    if(state.Vannila) {
        count += 1;
        VPos = count;
        document.querySelector('#layer'+count).style.display = "inherit";
        document.querySelector('#layer'+count).style.backgroundColor = color.VannilaColor;
        vannilaButton.style.padding = "20px";
        document.getElementById('vannilaBill').style.visibility = "visible";
        total = total + price.Vannila;
    }
    else {
        document.querySelector('#layer'+VPos).style.display = "none";
        vannilaButton.style.padding = "5px";
        document.getElementById('vannilaBill').style.visibility = "hidden";
        count -= 1;
        total = total - price.Vannila;
    }
}
function renderRedvelvet() {
    let redvelvetButton = document.querySelector('#btn-redvelvet');
    if(state.Redvelvet) {
        count += 1;
        RvPos = count;
        document.querySelector('#layer'+count).style.display = "inherit";
        document.querySelector('#layer'+count).style.backgroundColor = color.RedvelvetColor;
        redvelvetButton.style.padding = "20px";
        document.getElementById('redvelvetBill').style.visibility = "visible";
        total += price.Redvelvet;
    }
    else {
        document.querySelector('#layer'+RvPos).style.display = "none";
        redvelvetButton.style.padding = "5px";
        document.getElementById('redvelvetBill').style.visibility = "hidden";
        count -= 1;
        total -= price.Redvelvet;
    }
}
document.querySelector('#btn-chocolate').onclick = function () {
    renderChocolate();
    state.Chocolate = !state.Chocolate;
}
document.querySelector('#btn-strawberry').onclick = function () {
    renderStrawberry();
    state.Strawberry = !state.Strawberry;
}
document.querySelector('#btn-butterscotch').onclick = function () {
    renderButterscotch();
    state.Butterscotch = !state.Butterscotch;
}
document.querySelector('#btn-vannila').onclick = function () {
    renderVannila();
    state.Vannila = !state.Vannila;
}
document.querySelector('#btn-redvelvet').onclick = function () {
    renderRedvelvet();
    state.Redvelvet = !state.Redvelvet;
}
document.querySelector("#btn-buy").onclick = function () {
    document.getElementById('totalBill').innerHTML="Total:  "+total;
    document.getElementById('totalBill').style.visibility = "visible";
    document.getElementById('candle').style.display = "inherit";
}