const fs = require('fs');

const calculateMass = (mass) => {
  return Math.abs(Math.floor(mass / 3) - 2);
}

const calculateMass2 = (mass) => {
  let m = Math.floor(mass / 3) - 2;
  if(m <= 0){
    return 0;
  }else{
    return m + calculateMass2(m);
  }
}

fs.readFile("input.json", (err, rawData) => {
  let data = JSON.parse(rawData.toString()).data;
  const out = data.reduce((prev, curr) => prev + calculateMass2(curr), 0)
  console.log(out);
});

