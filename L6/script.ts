const Europa08 : number = 4965;
const Europa18 : number = 4209;
const NordAmerika08: number = 6600;
const NordAmerika18: number = 6035;
const SüdAmerika08 : number = 1132;
const SüdAmerika18 : number = 1261;
const Afrika08 : number = 1028;
const Afrika18 : number = 1235;
const Asien08: number = 12954;
const Asien18: number = 16274;
const Australien08: number = 1993;
const Australien18: number = 2100;

const Gesamt: number = Europa18 + NordAmerika18 + SüdAmerika18 + Afrika18 + Asien18 + Australien18;


const relAfrika: number = (Afrika18 / Gesamt * 100);
const zuAfrikaP: number = (100 - (Afrika08 / Afrika18 *100));
const zuAfrikaZ: number = (Afrika18 - Afrika08);

const relSüdAmerika: number = (SüdAmerika18 / Gesamt * 100);
const zuSüdAmerikaP: number = (100 - (SüdAmerika08 / SüdAmerika18 *100));
const zuSüdAmerikaZ: number = (SüdAmerika18 - SüdAmerika08);

const relEuropa: number = (Europa18 / Gesamt *100);
const zuEuropaP: number = (100 - (Europa08 / Europa18 *100));
const zuEuropaZ: number = (Europa18 - Europa08);

const relNordAmerika: number = (NordAmerika18 / Gesamt *100);
const zuNordAmerikaP: number = (100 - (NordAmerika08 / NordAmerika18 *100));
const zuNordAmerikaZ: number = (NordAmerika18 - NordAmerika08);

const relAsien: number = (Asien18 / Gesamt *100);
const zuAsienP: number = (100 - (Asien08 / Asien18 *100));
const zuAsienZ: number = (Asien18 - Asien08);

const relAustralien: number = (Australien18 / Gesamt *100);
const zuAustralienP: number = (100 - (Australien08 / Australien18 *100));
const zuAustralienZ: number = (Australien18 - Australien08);


function myFunction(name: string, value18: number, valueRel: number, valueChange: number, valueGrowth: number )

{
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in " + name;
    document.querySelector(".h2_1").innerHTML = value18.toString() + "kg CO2"; 
    document.querySelector("p").innerHTML = "Emission absolute of " + name + " in 2018";
    document.querySelector(".h2_2").innerHTML = Math.round(value18/Gesamt*100)  + "%";
    document.querySelector(".h2_3").innerHTML = `${Math.round(valueChange)}%`;
    document.querySelector(".h2_4").innerHTML = valueGrowth + "kg CO2"
    document.querySelector(".chart").setAttribute('style','height:' + Math.round(value18/Gesamt*100) + "%")
}

document.querySelector(".Europa").addEventListener("click", myFunction.bind(null,"Europe", Europa18, relEuropa, zuEuropaP, zuEuropaZ));

document.querySelector(".NordAmerika").addEventListener("click", myFunction.bind(null,"North America", NordAmerika18, relNordAmerika, zuNordAmerikaP, zuNordAmerikaZ));

document.querySelector(".SüdAmerika").addEventListener("click", myFunction.bind(null,"South America", SüdAmerika18, relSüdAmerika, zuSüdAmerikaP, zuSüdAmerikaZ));

document.querySelector(".Afrika").addEventListener("click", myFunction.bind(null,"Africa", Afrika18, relAfrika, zuAfrikaP, zuAfrikaZ));

document.querySelector(".Asien").addEventListener("click", myFunction.bind(null,"Asia", Asien18, relAsien, zuAsienP, zuAsienZ));

document.querySelector(".Australien").addEventListener("click", myFunction.bind(null,"Australia", Australien18, relAustralien, zuAustralienP, zuAustralienZ));