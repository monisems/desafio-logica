const  Herois = [
{ nome: "Papu Papu", xp: 900 },
{ nome: "Ripper Roo", xp: 1500 },
{ nome: "Dr. N. Gin", xp: 2200 },
{ nome: "Dingodile", xp: 3500 },
{ nome: "Tiny Tiger", xp: 4800 },
{ nome: "Uka Uka", xp: 6300 }, 
{ nome: "Aku Aku", xp: 7600 },
{ nome: "Dr. Neo Cortex", xp: 8500 },
{ nome: "Coco Bandicoot", xp: 9200 },
{ nome: "Crash Bandicoot", xp: 12500 }]

function classificarXP (xp) {
if (xp<= 1000) return "Ferro";
else if (xp >=1001 && xp <= 2000) return "Bronze";
else if (xp >= 2001 && xp <= 5000) return "Prata";
else if (xp >= 5001 && xp <= 7000) return "Ouro";
else if (xp >= 7001 && xp <= 8000) return "Platina";
else if (xp >= 8001 && xp <= 9000) return "Ascendente";
else if (xp >= 9001 && xp <= 10000) return "Imortal";
else if (xp > 10001 ) return "Radiante";
else return "Ferro"

}

Herois.forEach(heroi => {
    const nivel = classificarXP(heroi.xp);
    console.log(`O herói de nome ${heroi.nome} está no nível ${nivel} com ${heroi.xp} XP.`);
});


