const fs = require('fs');

const calculateMass = (mass) => {
  return Math.abs(Math.floor(mass / 3) - 2);
}

fs.readFile("input.json", (err, rawData) => {
  let data = JSON.parse(rawData.toString()).data;
  const out = data.reduce((prev, curr) => prev + calculateMass(curr), 0)
  console.log(out);
});

