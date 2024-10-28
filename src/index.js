// ALUNO DA DIO.me SÁVIO CARREIRO //
//INTELIGÊNCIA ARTIFICAL FOI USADA PARA CORRIGIR E TORNAR FUNCIONAL O SISTEMA DE BOOST, O DE ARMAS FOI DE CRIAÇÃO 100% MINHA//
const player1 = {
    NAME:  "Mario",
    SPEED: 4,
    MANEUVERABILITY: 3,
    POWER: 3,
    POINTS: 0,
}

const player2 = {
    NAME:  "Luigi",
    SPEED: 3,
    MANEUVERABILITY: 4,
    POWER: 4,
    POINTS: 0,
}

const armamente = {
    PUMP: -2,
    HULL: -1,
    UNARMED: 0,
}

const boost = {
    BOOST: 1,
}

const boostONLINE = {
    boostON1: true,
    boostON2: true,
}


async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "STRAIGHT"
            break;
        case random < 0.66:
            result = "CURVE"
            break;
        default:
            result = "FIGHT"
    }
    return result;
}

async function getRandomArm(){
    let Armrandom = Math.random()
    let resultArm

    switch (true) {
        case Armrandom < 0.33:
            resultArm = armamente.PUMP;
            console.log("The gun caught was PUMP")
            break;
        case Armrandom < 0.66:
            resultArm = armamente.HULL;
            console.log("The gun caught was HULL")
            break;
        default:
            resultArm = armamente.UNARMED
            console.log("No weapons were taken")
    }
    return resultArm;
}



async function getRandomBoost(playerBoostON){
    let Brandom = Math.random()
    let resultBoost = 0
            if((boostONLINE.boostON1 || boostONLINE.boostON2) && Brandom < 0.22){
                resultBoost = boost.BOOST;
                console.log("Boost caught, put the pedal to the metal!!! 🏎️")
        }
        return resultBoost;
}

async function logRollResult(characterNAME, block, diceResult, attribute){
    console.log(`${characterNAME} 🎲 rolled a die ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function logARollResult(characterNAME, block, diceResult, attribute, army, boost){
    console.log(`${characterNAME} 🎲 rolled a die ${block} ${diceResult} + ${attribute} + ${army} + ${boost} = ${diceResult + attribute + army + boost}`)
}

async function PlayerRaceEngine(character1, character2){
    for(let round = 1; round <=5; round++){
    console.log(`🏁 Round ${round}`)

    // sotear bloco
    let block = await getRandomBlock();
    console.log(`Block: ${block}`);
    
    // rolar os dados
    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()
    
    //teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if(block === "STRAIGHT"){
        totalTestSkill1 = diceResult1 + character1.SPEED;
        totalTestSkill2 = diceResult2 + character2.SPEED;
        await logRollResult(character1.NAME, "SPEED", diceResult1, character1.SPEED);
        await logRollResult(character2.NAME, "SPEED", diceResult2, character2.SPEED);
    }
    if(block === "CURVE"){
        totalTestSkill1 = diceResult1 + character1.MANEUVERABILITY;
        totalTestSkill2 = diceResult2 + character2.MANEUVERABILITY;
        await logRollResult(character1.NAME, "MANEUVERABILITY", diceResult1, character1.MANEUVERABILITY);
        await logRollResult(character2.NAME, "MANEUVERABILITY", diceResult2, character2.MANEUVERABILITY);
    }
    if(block === "FIGHT"){
        let army = await getRandomArm();
        let armResult = army;
        let boostValue1 = await getRandomBoost(boostONLINE.boostON1);
        let boostValue2 = await getRandomBoost(boostONLINE.boostON2);
        let powerResult1 = diceResult1 + character1.POWER + army + boostValue1;
        let powerResult2 = diceResult2 + character2.POWER + army + boostValue2;
        
        // ARMAS
        if(army === "PUMP"){
            armamente;
        }else if(army === "HULL"){
            armamente;
        }else if(army === "UNARMED"){
            armamente;
        }

        // IF OTIMIZADO
        if(powerResult1 > powerResult2 && character2.POINTS > 0){
            console.log(`${character1.NAME} won the match! ${character2.NAME} lost 1 point 😵‍💫`)
            character2.POINTS--;
        }

        if(powerResult2 > powerResult1 && character1.POINTS > 0){
            console.log(`${character2.NAME} won the match! ${character1.NAME} lost 1 point 😵‍💫`)
            character1.POINTS--;
        }
        ////////////////

        console.log(`${character1.NAME} faced ${character2.NAME}!🥊`)
        await logARollResult(character1.NAME, "POWER", diceResult1, character1.POWER, armResult, boostValue1);
        await logARollResult(character2.NAME, "POWER", diceResult2, character2.POWER, armResult, boostValue2);
        
        // console.log otimizado
        console.log(powerResult2 === powerResult1 ? "Drawn confrontation! No points were lost!" : "");
        ////////////////
    }
    // verificando o vencedor
    if(totalTestSkill1 > totalTestSkill2){
        console.log(`${character1.NAME} scored a point!`);
        character1.POINTS++;
    }
    else if(totalTestSkill2 > totalTestSkill1){
        console.log(`${character2.NAME} scored a point!`);
        character2.POINTS++;
    }
    console.log("____________________________________")
    }
}

async function declaredWinner(character1, character2){
    console.log("End result:")
    console.log(`${character1.NAME}: ${character1.POINTS} point(s)`)
    console.log(`${character2.NAME}: ${character2.POINTS} point(s)`)
    if(character1.POINTS > character2.POINTS){
        console.log(`\n${character1.NAME} won the race! Congratulations!!!🏆`)
    }else if(character2.POINTS > character1.POINTS){
        console.log(`\n${character2.NAME} won the race! Congratulations!!!🏆`)
    }else{
        console.log("The race ended in a draw!")
    }
}

(async function main(){
    console.log(`🚨🏁 Fasten your seatbelts! The race is starting between ${player1.NAME} and ${player2.NAME}...\n`)
    await PlayerRaceEngine(player1, player2)
    await declaredWinner(player1, player2)
})()