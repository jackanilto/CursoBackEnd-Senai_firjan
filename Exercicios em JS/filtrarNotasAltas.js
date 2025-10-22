function filtrarNotasAltas(scoreList) {
    for (let i = 0; i < scoreList.length; i++) {
        if (scoreList[i] >= 7) {
            console.log(scoreList[i]);
        }
    }
}

const notas = [4, 5.5, 7, 7.5, 9, 5];
filtrarNotasAltas(notas);