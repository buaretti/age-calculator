  function clicou() {
    const anoNascimento = parseInt(document.getElementById("year").value);
    const mesNascimento = parseInt(document.getElementById("month").value);
    const diaNascimento = parseInt(document.getElementById("day").value);

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

    const resultado = `<p><span style="color: hsl(259, 100%, 65%);">${idadeAnos}</span> years</p> <span style="color: hsl(259, 100%, 65%);">${idadeMeses}</span> months <span style="color: hsl(259, 100%, 65%);">${idadeDias}</span> days`;
      
    document.getElementById("return").innerHTML = resultado;
    document.getElementById("return").innerHTML = resultado;
    document.getElementById("return").innerHTML = resultado;
  }

  function diasNoMes(ano, mes) {
    return new Date(ano, mes, 0).getDate();
  }

if (day == "" || month == "" || year == "") {
  //the field is required
}

if (day < 1 || day > 31) {
  //must be a valid day
}

if (month < 1 || month > 12) {
  //must be a valid month
}

if (year > currentyear) {
  //must be a valid year
}
