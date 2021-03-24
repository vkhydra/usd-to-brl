function conversor() {
  const dolarTxt = prompt(
    "Qual o valor em dólar você quer converter para reais"
  );

  let dolarNumero = parseFloat(dolarTxt);

  let valorReal = (dolarNumero * 5.5).toFixed(2);

  alert(`US$${dolarNumero} em reais são R$${valorReal}`);
}
 