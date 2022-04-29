let cont;
let brief, method, challenges;
let style;
let active = -1; // default -1 = none

function buttons () {
  
  cont = createElement("div")
    .position(x, 0)
    .id("cont");
    brief = createButton("brief")
    .parent("cont")
    style = styling.bind(brief);
    style(0);

    method = createButton("method")
    .parent("cont")
    style = styling.bind(method);
    style(1);
  
    challenges = createButton("challenges")
    .parent("cont")
    style = styling.bind(challenges);
    style(2);
  
}

function styling (a) {
  
    let hovCol = color(150, 150, 150, 100);
  
    this.size(width/3, 50)
    this.style("background", "white")
    this.style("font-family", "arial")
    this.style("font-size", "24px")
    this.mouseOver(() => {
      this.style("background", hovCol)
      this.style("color", "white")
    })
    this.mouseOut(() => {
      this.style("background", "white")
      this.style("color", "black")
    });
    this.mouseClicked(() => {
      displayText(a)
      active = a;
    });
}

function briefReset () {
  radE = 0;
  radM = 0;
  mA = 0;
}