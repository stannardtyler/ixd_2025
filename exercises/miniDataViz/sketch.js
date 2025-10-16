//p5js web editor isn't well suited for this, so grab this code and go to a local code editor

let data;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQADMbvtgD_CBG5kIv64DtRNuqYIooQd5F0QiJWi46L2A96U_xoHd-oe-bxMO6rqCMcMsAKKA9H2PF5/pub?gid=0&single=true&output=csv">

function preload() {
  data = loadTable(url, 'csv', 'header');
}
    
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  if (data) {
    let numRows = data.getRowCount();
    
    let carbs = data.getColumn('Calories');
    
    for (let i = 0; i < numRows; i++) {
      let x = 100;
      let y = 100 + (i*20);
      let w = carbs[i];
      let h = 10;
      
      rect(x, y, w, h);
    }
    
    
  }
}