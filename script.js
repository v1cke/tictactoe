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
        document.getElementById('horizontal-line1').style.transform = 'scaleX(1)';
       gameFinished(winner);
    }

    if (fields[4] == fields[5] && fields[5] == fields[6] && fields[4]) {
        winner = fields[4];
        document.getElementById('horizontal-line2').style.transform = 'scaleX(1)';
       gameFinished(winner);
    }

    if (fields[7] == fields[8] && fields[8] == fields[9] && fields[7]) {
        winner = fields[7];
        document.getElementById('horizontal-line3').style.transform = 'scaleX(1)';
       gameFinished(winner);
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[4]) {
        winner = fields[4];
        document.getElementById('vertical-line1').style.transform = 'rotate(90deg) scaleX(1)';
       gameFinished(winner);
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('vertical-line2').style.transform = 'rotate(90deg) scaleX(1)';
       gameFinished(winner);
    }

    if (fields[3] == fields[6] && fields[6] == fields[9] && fields[3]) {
        winner = fields[3];
        document.getElementById('vertical-line3').style.transform = 'rotate(90deg) scaleX(1)';
       gameFinished(winner);
    }

    if (fields[1] == fields[5] && fields[5] == fields[9] && fields[1]) {
        winner = fields[1];
        document.getElementById('diagonal-line1').style.transform = 'rotate(45deg) scaleX(1)';
        gameFinished(winner);
    }

    if (fields[3] == fields[5] && fields[5] == fields[7] && fields[3]) {
        winner = fields[3];
        document.getElementById('diagonal-line2').style.transform = 'rotate(135deg) scaleX(1)';
        gameFinished(winner);
    }

}


function gameFinished(winner) {
    document.getElementById('table').classList.add('finishedGame');
    winnersound.play();
    setTimeout(function(){showWinner(winner);}, 1500);
}

function showWinner(winner) {
    document.getElementById('winnerField').classList.remove('d-none');
    document.getElementById('winnerField').innerHTML = `
    <div class="winner-box"><span>${winner}</span><h1>hat das Spiel gewonnen</h1></div>
    `;
}


function hideField() {
    document.getElementById('winnerField').classList.add('d-none');
    window.location.reload();
}