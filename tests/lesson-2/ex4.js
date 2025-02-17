const high = 157;
let highMet = 157/100;
let canNangLyTuong = (high%100)*9/10;
let mucCanToiDa = high%100;
let mucCanToiThieu = (high%100)*8/10;
console.log("Như vậy, nếu bạn cao " + highMet +"m, " + "tức "+ high + "cm thì:");
console.log("Cân nặng lý tưởng của bạn là: "+canNangLyTuong);
console.log("Cân nặng tối đa của bạn là: "+mucCanToiDa);
console.log("Cân nặng tối thiểu của bạn là: "+mucCanToiThieu);