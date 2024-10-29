/* # 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */

/* exemplo do stackoverflow  https://stackoverflow.com/questions/2994135/javascript-switch-using-intervals

var j = parseInt(troops[i]);
switch (true) {
            case (j<10):
                editbox.style.fontSize = "13px";
                break;
            case (j<100):
                editbox.style.fontSize = "12px";
                break;
            case (j<1000):
                editbox.style.fontSize = "8px";
                editbox.size = 3;
                //editbox.style.width = "18px";
                break;
            default:
                editbox.style.fontSize = "10px";
        }
*/
const nomeDoHeroi = "shumacker";
const nivelDoHeroi = 8000;
let nivel = "";

switch (true) {
    case (nivelDoHeroi < 1000):
        nivel = "Ferro";
        break;
    case (nivelDoHeroi >= 1001 && nivelDoHeroi <= 2000):
        nivel = "Brinze";
        break;
    case (nivelDoHeroi >= 2001 && nivelDoHeroi <= 5000):
        nivel = "Prata";
        break;
    case (nivelDoHeroi >= 5001 && nivelDoHeroi <= 7000):
        nivel = "Ouro";
        break;
    case (nivelDoHeroi >= 7001 && nivelDoHeroi <= 8000):
        nivel = "Platina";
        break;
    case (nivelDoHeroi >= 8001 && nivelDoHeroi <= 9000):
        nivel = "Ascendente";
        break;
    case (nivelDoHeroi >= 9001 && nivelDoHeroi <= 10000):
        nivel = "Imortal";
        break;
    case (nivelDoHeroi >= 10001):
        nivel = "Radiante";
        break;

    default:
        break;
}

console.log("O herói de nome **"+nomeDoHeroi+"** está no nível de **"+nivel+"**");