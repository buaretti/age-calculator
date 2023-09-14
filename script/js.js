function clicou() {
  
  const anoNascimento = parseInt(document.getElementById("year").value);
  const mesNascimento = parseInt(document.getElementById("month").value);
  const diaNascimento = parseInt(document.getElementById("day").value);
  
  var inputd = document.getElementById("day");
  var inputm = document.getElementById("month");
  var inputy = document.getElementById("year");
  var labeld = document.querySelector('label[for="day"]');
  var labelm = document.querySelector('label[for="month"]');
  var labely = document.querySelector('label[for="year"]');
  var errod = document.getElementById("errod");
  var errom = document.getElementById("errom");
  var erroy = document.getElementById("erroy");
  
  function resetFieldStyles() {
    // Redefine estilos para os campos e mensagens de erro
    inputd.style.borderColor = "";
    inputm.style.borderColor = "";
    inputy.style.borderColor = "";
    labeld.style.color = "";
    labelm.style.color = "";
    labely.style.color = "";
    errod.style.display = "none";
    errom.style.display = "none";
    erroy.style.display = "none";
  }
  
  resetFieldStyles(); // Redefine estilos antes de validar novamente
  
  if (inputd.value === '' || inputm.value === '' || inputy.value === '' ){
    //the field is required
    
    inputd.style.borderColor = "hsl(0, 100%, 67%)";
    labeld.style.color = "hsl(0, 100%, 67%)";
    errod.innerHTML = "This field is required";
    errod.style.display = "block";
    
    inputm.style.borderColor = "hsl(0, 100%, 67%)";
    labelm.style.color = "hsl(0, 100%, 67%)";
    errom.innerHTML = "This field is required";
    errom.style.display = "block";
    
    inputy.style.borderColor = "hsl(0, 100%, 67%)";
    labely.style.color = "hsl(0, 100%, 67%)";
    erroy.innerHTML = "This field is required";
    erroy.style.display = "block";
    
    // Define um temporizador para redefinir os estilos após 2 segundos
    setTimeout(resetFieldStyles, 3000); // 2000 milissegundos = 2 segundos
    
    return;
  }
  
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const mesAtual = dataAtual.getMonth() + 1; // Meses são indexados de 0 a 11
  const diaAtual = dataAtual.getDate();
  
  let idadeAnos = anoAtual - anoNascimento;
  let idadeMeses = mesAtual - mesNascimento;
  let idadeDias = diaAtual - diaNascimento;
  
  if (idadeDias < 0) {
    idadeMeses--;
    idadeDias += diasNoMes(anoAtual, mesAtual - 1);
  }
  
  if (idadeMeses < 0) {
    idadeAnos--;
    idadeMeses += 12;
  }
  
  if (diaNascimento < 1 || diaNascimento > 31 || mesNascimento < 1 || mesNascimento > 12 || anoNascimento > anoAtual || anoNascimento < 1910) {
    //must be a valid day
    inputd.style.borderColor = "hsl(0, 100%, 67%)";
    errod.innerHTML = "Must be a valid date";
    errod.style.display = "block";
    
    inputm.style.borderColor = "hsl(0, 100%, 67%)";
    errom.innerHTML = "Must be a valid month";
    errom.style.display = "block";
    
    inputy.style.borderColor = "hsl(0, 100%, 67%)";
    erroy.innerHTML = "Must be a valid year";
    erroy.style.display = "block";
    
    // Define um temporizador para redefinir os estilos após 2 segundos
    setTimeout(resetFieldStyles, 3000); // 2000 milissegundos = 2 segundos
    
    return;
  }
  
  const resultado = `<p><span style="color: hsl(259, 100%, 65%);">${idadeAnos}</span> years</p> <p><span style="color: hsl(259, 100%, 65%);">${idadeMeses}</span> months </p> <p><span style="color: hsl(259, 100%, 65%);">${idadeDias}</span> days </p>`;
  
  document.getElementById("return").innerHTML = resultado;
  document.getElementById("return").innerHTML = resultado;
  document.getElementById("return").innerHTML = resultado;
}

function diasNoMes(ano, mes) {
  return new Date(ano, mes, 0).getDate();
}

document.getElementById("bola").addEventListener("click", clicou)