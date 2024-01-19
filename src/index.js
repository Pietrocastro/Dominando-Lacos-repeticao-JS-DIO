const prompt = require("prompt-sync")()

console.log("WELCOME TO CLIMB HERO [by Pietro Prata]\n")
let heroName = prompt("Tell me, great warior, what's your name? ")
// array com valores já predefinidos:
const floorsWithTreasure = [2, 4, 7, 10];
const floorsWithMonsters = [3, 6, 8, 9];
let totalfloors = prompt("How many floors did you go? [limit: 10]")
//Aqui temos uma forma de loop para percorrer cada floor da masmorra:
for (let floor = 1; floor <= totalfloors; floor++) {
//Utilizamos o .includes() para verificar se um número está presente nos arrays:
    const hasTreasure = floorsWithTreasure.includes(floor);
    const hasMonster = floorsWithMonsters.includes(floor);

//TODO: Agora implemente uma condição necessária para verificar e exibir se há tesouro na floor e se há monstro na floor:
    if (hasTreasure)
    {
        console.log("\nTreasure on the " + floor + " floor!\n");
    } 
    else if (hasMonster) 
    {
        console.log("\nMonster on the " + floor + " floor!\n");
    }
}