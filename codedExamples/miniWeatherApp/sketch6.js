//https://api.open-meteo.com/v1/forecast?latitude=37.6688&longitude=-122.0808&current=temperature_2m&hourly=temperature_2m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch

let weather;
let weatherID = 0;
let weatherName = "Hayward";
let button1, button2, button3;
let timeOffset = 0;

function setup() {
  createCanvas(400, 400);
  loadJSON(
    "https://api.open-meteo.com/v1/forecast?latitude=37.6688,51.5085,35.6895&longitude=-122.0808,-0.1257,139.6917&current=temperature_2m,is_day,rain,showers,precipitation,wind_speed_10m&timezone=America%2FLos_Angeles&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch",
    gotData
  );

  //button code

  button1 = new Button(100, 350, 75, 50, hayward, "Hayward");
  button2 = new Button(200, 350, 75, 50, london, "London");
  button3 = new Button(300, 350, 75, 50, toyko, "Toyko");
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(0);

  if (weather) {
    swapLocation();
    let colorWeatherR = map(
      weather[weatherID].current.temperature_2m,
      0,
      120,
      0,
      255
    );
    let colorWeatherB = map(
      weather[weatherID].current.temperature_2m,
      0,
      120,
      255,
      0
    );
    fill(colorWeatherR, 0, colorWeatherB);
    ellipse(200, 250, weather[weatherID].current.temperature_2m + 20);

    fill(255);
    textSize(30);
    textAlign(CENTER);
    text(weatherName, 200, 50);
    //text(weather[weatherID].current.time, 200, 100);
    if (minute() < 10) {
      text(hour() + timeOffset + " : " + "0" + minute(), 200, 100);
    } else {
      text(hour() + timeOffset + " : " + minute(), 200, 100);
    }

    text(currentDate, 200, 140);
    text(weather[weatherID].current.temperature_2m, 200, 260);
  }

  button1.show();
  //button1.rollover(mouseX, mouseY);
  button2.show();
  //button2.rollover(mouseX, mouseY);
  button3.show();
  //button3.rollover(mouseX, mouseY);
}

function hayward() {
  weatherID = 0;
  // timeOffset = 0;
}

function london() {
  weatherID = 1;
  // timeOffset = 8;
}

function toyko() {
  weatherID = 2;
  // timeOffset = -
}

function mousePressed() {
  if (button1.rollover(mouseX, mouseY)) {
    button1.buttonFunction();
  }

  if (button2.rollover(mouseX, mouseY)) {
    button2.buttonFunction();
  }

  if (button3.rollover(mouseX, mouseY)) {
    button3.buttonFunction();
  }
}

function keyPressed() {
  if (keyIsDown(LEFT_ARROW)) {
    if (weatherID == 0) {
      //nothing
    } else {
      weatherID--;
    }
  } else if (keyIsDown(RIGHT_ARROW)) {
    if (weatherID == 2) {
      //nothing
    } else {
      weatherID++;
    }
  }
}

function swapLocation() {
  if (weatherID == 0) {
    weatherName = "Hayward";
  } else if (weatherID == 1) {
    weatherName = "London";
  } else if (weatherID == 2) {
    weatherName = "Toyko";
  }

  currentTime = extractTime(weather[weatherID].current.time);
  currentDate = extractDate(weather[weatherID].current.time);

  //console.log(hour(), minute());
}

// Function to extract the time part from a datetime string
function extractTime(datetimeString) {
  if (typeof datetimeString === "string") {
    // Split the string by 'T' and get the time part
    let timePart = datetimeString.split("T")[1];
    return timePart; // Return the time part
  } else {
    console.error("Expected a string but got:", typeof datetimeString);
    return "";
  }
}

// Function to extract the date part from a datetime string
function extractDate(dateString) {
  if (typeof dateString === "string") {
    // Split the string by 'T' and get the time part
    let datePart = dateString.split("T")[0];
    return datePart; // Return the time part
  } else {
    console.error("Expected a string but got:", typeof dateString);
    return "";
  }
}
