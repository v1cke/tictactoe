let fields = [];
let currentShape = 'cross';
let winnersound = new Audio('youwon.mp3')


function fillShape(id) {
    if (!fields[id]) {
    if (currentShape == 'cross') {
        currentShape = 'circle';
        document.getElementById('p2').classList.remove('active-player');
        document.getElementById('p1').classList.add('active-player');
        document.getElementById(`circle-${id}`).classList.remove('d-none');
    } else {
        currentShape = 'cross';
        document.getElementById('p1').classList.remove('active-player');
        document.getElementById('p2').classList.add('active-player');
        document.getElementById(`cross-${id}`).classList.remove('d-none');
    }
    fields[id] = currentShape;
    checkWin();
}
}


function checkWin() {
    let winner;

    // wenn Feld a=B und b=c und Feld a hat einen Wert, dann gibt es einen Gewinner
    if (fields[1] == fields[2] && fields[2] == fields[3] && fields[1]) {
        winner = fields[1];
        document.getElementById('horizontal-line1').classList.remove('d-none');
        gameFinished();
    }
    
    if (fields[4] == fields[5] && fields[5] == fields[6] && fields[4]) {
        winner = fields[4];
        document.getElementById('horizontal-line2').classList.remove('d-none');
        gameFinished();
    }
    
    if (fields[7] == fields[8] && fields[8] == fields[9] && fields[7]) {
        winner = fields[7];
        document.getElementById('horizontal-line3').classList.remove('d-none');
        gameFinished();
    }
    
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[4]) {
        winner = fields[4];
        document.getElementById('vertical-line1').classList.remove('d-none');
        gameFinished();
    }
    
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('vertical-line2').classList.remove('d-none');
        gameFinished();
    }
    
    if (fields[3] == fields[6] && fields[6] == fields[9] && fields[3]) {
        winner = fields[3];
        document.getElementById('vertical-line3').classList.remove('d-none');
        gameFinished();
    }
    
    if (fields[1] == fields[5] && fields[5] == fields[9] && fields[1]) {
        winner = fields[1];
        document.getElementById('diagonal-line1').classList.remove('d-none');
        gameFinished();
    }
    
    if (fields[3] == fields[5] && fields[5] == fields[7] && fields[3]) {
        winner = fields[3];
        document.getElementById('diagonal-line2').classList.remove('d-none');
        gameFinished();
    }

}


function gameFinished() {
    document.getElementById('tr1').classList.add('finishedGame');
    document.getElementById('tr2').classList.add('finishedGame');
    document.getElementById('tr3').classList.add('finishedGame');
    winnersound.play();

}