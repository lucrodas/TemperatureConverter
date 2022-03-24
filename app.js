function askName() {
    var name = prompt("Welcome to the temperature converter what is your name?");
    return name
}

var name = askName();

function greeting(a) {
    alert(`Nice to meet you ${a}.`);
}

greeting(name);

function askTemp() {
    var temp = Number(prompt("What is the temperature you would like to convert?"));
    return temp
}

var temp = askTemp();

function conversionType() {
    var temptype = Number(prompt("If you would like to convert from FtoC press 1, or 2 for CtoF."));
    return temptype
}

var temptype = conversionType();

if (temptype == 1) {
    function FtoC() {
    var tempC = (((temp - 32) * 5) / 9);
    return tempC
    }
    alert(FtoC());
} else if (temptype == 2) {
    function CtoF() {
    var tempF = (temp * 9 / 5 + 32);
    return tempF
    }
    alert(CtoF());
} else {
    alert("please choose one of the options.")
}