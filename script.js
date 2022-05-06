let fields = [];
let currentShape = 'cross';


function fillShape(id) {
    if (currentShape == 'cross') {
        currentShape = 'circle';
        document.getElementById(`circle-${id}`).classList.remove('d-none');
    } else {
        currentShape = 'cross';
        document.getElementById(`cross-${id}`).classList.remove('d-none');
    }
    fields[id] = currentShape;
    checkWin();
}


function checkWin() {
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2]) {
        winner = fields[0];
    }
    
    if (fields[3] == fields[4] && fields[4] == fields[5]) {
        winner = fields[3];
    }
    
    if (fields[6] == fields[7] && fields[7] == fields[8]) {
        winner = fields[6];
    }
    
    if (fields[0] == fields[3] && fields[3] == fields[6]) {
        winner = fields[0];
    }
    
    if (fields[1] == fields[4] && fields[4] == fields[7]) {
        winner = fields[1]; 
    }
    
    if (fields[2] == fields[5] && fields[5] == fields[8]) {
        winner = fields[2];
    }
    
    if (fields[0] == fields[4] && fields[4] == fields[8]) {
        winner = fields[0];
    }
    
    if (fields[2] == fields[4] && fields[4] == fields[6]) {
        winner = fields[2];
    }
    
    console.log('GEWONNEN')
}
