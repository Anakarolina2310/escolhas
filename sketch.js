let suaidade;
let ação;
let romance;
let comédia;
let Quicksand;
let corpo;
let filmes = {
  menor10: {
    ação: "O REI LEÃO",
    romance: "A PRINCESA E O SAPO",
    comédia: "OS INCRÍVEIS"
  },
  entre10e14: {
    ação: "HARRY POTTER",
    romance: "A CULPA É DAS ESTRELAS",
    comédia: "DETONA RALPH"
  },
  entre14e16: {
    ação: "VINGADORES",
    romance: "27 DRESS",
    comédia: "GENTE GRANDE",
  },
  entre16e18: {
    ação: "PERCY JACKSON",
    romance: "ESPOSA DE MENTIRINHA",
    comédia: "MINHA MÃE É UMA PEÇA",
  },
  maior18: {
    ação: "PIRATAS DO CARIBE",
    romance: "COMO EU ERA ANTES DE VOCÊ",
    comédia: "AS BRANQUELAS"
  }
};

let button;

function setup() {
  createCanvas(850, 400).position(100, 100);
  createSpan("qual a sua idade?").position(670, 530).addClass("hidden");
  suaidade = createInput("").position(630, 585);
  ação = createCheckbox("gosta de filmes de ação?🎡🏀🗺🌅").position(100, 600).addClass("hidden");
  romance = createCheckbox("gosta de filmes de romance🎆🎉?").position(100, 650).addClass("hidden");
  comédia = createCheckbox("gosta de filmes de comédia😂🤣?").position(100, 700).addClass('hidden');
  titulo = "Quicksand";
  corpo = "Nerko One";
  button = createButton("APERTA MEU BOTÃO✌😎").position(width / 2, 520).id("botão");
  button.mousePressed(bota);
  button.addClass("botao");
}

function bota() {
  selectAll(".hidden").forEach((el) => el.removeClass("hidden"));
  button.hide();
}

function draw() {
  background("rgb(255,255,255)");

  let idade = parseInt(suaidade.value());
  let checkação = ação.checked();
  let checkromance = romance.checked();
  let checkcomédia = comédia.checked();
  let filme = "Insira suas preferências";

  if (suaidade.value() !== "") {
    filme = mostrafilme(idade, checkação, checkromance, checkcomédia);
  }

  fill("black");
  textAlign(CENTER, CENTER);
  textSize(40);
  text(filme, width / 2, height / 2);
  textFont(titulo);
  textAlign(CENTER, CENTER);
  textSize(40);
  text("MELHOR INDICADOR DE FILMES", width / 2, 30);
  textFont(corpo);
}

function mostrafilme(idade, checkação, checkromance, checkcomédia) {
  if (isNaN(idade)) {
    return "Idade Inválida";
  }
  if (idade < 5) {
    return "Com licença, mas você é uma criança";
  } else if (idade > 120) {
    return "Já morreu, enterra";
  }

  if (idade >= 5 && idade < 10) {
    if (checkação) {
      return filmes["menor10"]["ação"];
    }
    if (checkromance) {
      return filmes["menor10"]["romance"];
    }
    if (checkcomédia) {
      return filmes["menor10"]["comédia"];
    }
  } else if (idade >= 10 && idade < 14) {
    if (checkação) {
      return filmes["entre10e14"]["ação"];
    }
    if (checkromance) {
      return filmes["entre10e14"]["romance"];
    }
    if (checkcomédia) {
      return filmes["entre10e14"]["comédia"];
    }
  } else if (idade >= 14 && idade < 16) {
    if (checkação) {
      return filmes["entre14e16"]["ação"];
    }
    if (checkromance) {
      return filmes["entre14e16"]["romance"];
    }
    if (checkcomédia) {
      return filmes["entre14e16"]["comédia"];
    }
  } else if (idade >= 16 && idade < 18) {
    if (checkação) {
      return filmes["entre16e18"]["ação"];
    }
    if (checkromance) {
      return filmes["entre16e18"]["romance"];
    }
    if (checkcomédia) {
      return filmes["entre16e18"]["comédia"];
    }
  } else if (idade >= 18) {
    if (checkação) {
      return filmes["maior18"]["ação"];
    }
    if (checkromance) {
      return filmes["maior18"]["romance"];
    }
    if (checkcomédia) {
      return filmes["maior18"]["comédia"];
    }
  }

  return "Escolha pelo menos um gênero!";
}
