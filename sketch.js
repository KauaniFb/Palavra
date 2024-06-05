function setup() {
    createCanvas(400, 400);
  }
  
  function inicializaCores() {
    background("lightpink");
    fill("#E328FA");
    textSize(56)
    textAlign(CENTER,CENTER);
  }
  
  function draw() {
    inicializaCores();
    
    if(mouseX < 80) {
     let palavra = " " ;
      text(palavra,350,50);
    } else if(mouseX < 100) {
     let palavra = "🦋";
      text(palavra,350,50);
     } else {
      let palavra = "🦋";
      text(palavra,350,50);
     }
  
  if(mouseX < 80) {
     let palavra = " " ;
      text(palavra,50,350);
    } else if(mouseX < 100) {
     let palavra = "🦋";
      text(palavra,50,350);
     } else {
      let palavra = "🦋";
      text(palavra,50,350);
     }
    
    let maximo = width;
    let minimo = 0;
    // mouseX, 0, width ==> 0, palavra.length
  
    let palavra = "Borboleta";
    let quantidade = map(mouseX, 0, width, 1, palavra.length);
    // console.log (quantidade);
    let parcial = palavra.substring(0, quantidade);
    text(parcial, 200, 200);
  
  
  }