//1: Khởi động tàu vũ trụ K12
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K12";
const crew = ["Nguyêt", "Nga", "Trúc", "My"];
function launchShip(crew) {
  console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến
phiêu lưu ${mission}.`);
}
launchShip(crew);

//2: Du hành đến hành tinh bí ẩn
let speed;
let time;
function calculateDistance(speed, time) {
  let distance = speed * time;
  console.log(`Khoảng cách tính toán được là ${distance} km`);
}
calculateDistance(1000, 24);

//3: Hành tinh kỳ lạ
function convertTimeToHex(time) {
  let hexadecimal = time.toString(16);
  console.log(`${time}s chuyển sang thập lục phân là ${hexadecimal}.`);
}
convertTimeToHex(120);

//4: Khám phá kho báu
let code;
function decryptCode(code) {
  let str = "";
  for (let char of code) {
    if (char == char.toUpperCase()) {
      str = str + char.toLowerCase();
    } else if (char == char.toLowerCase()) {
      str = str + char.toUpperCase();
    }
  }
  return str;
}
console.log(decryptCode("K12 Challenge"));

//5: Trở về Trái Đất
function returnToEarth() {
  console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();
