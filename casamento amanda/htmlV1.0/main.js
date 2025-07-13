const date_casamento = new Date(2026, 1, 14, 17, 0, 1);

function calculo(){
    const date = new Date();
    const tempoRestante = date_casamento - date;

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
    
    console.log(dias, horas,minutos,segundos);
    document.getElementById("contagem").innerHTML = `<div id="contagem_dias"><h1>${dias}</h1><h2>dias</h2></div>
                <div id="contagem_horas"><h1>${horas}</h1><h2>horas</h2></div>
                <div id="contagem_minutos"><h1>${minutos}</h1><h2>min</h2></div>
                <div id="contagem_segundos"><h1>${segundos}</h1><h2>seg</h2></div>`
}

calculo();
const intervalo = setInterval(calculo, 1000); // atualiza a cada segundo
