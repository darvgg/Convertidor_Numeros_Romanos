const valores =[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const simbolos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

function convertir_a_romanos(numero) {
  var resultado ="";
  
  if(numero<=0)
    resultado="0"
  else if( numero>=1 && numero<=5000)
  {
    for (let i = 0; i < valores.length; i++){
      while (numero >= valores[i]) {
        resultado += simbolos[i];
        numero -= valores[i];
    }
    }
  }
  return resultado;
}

export default convertir_a_romanos;
