
function intereger(anos, salario, ipca) {

    //quanto fazer para viver até os 65 

    let totalAte65
    let meses = 12 * anos

    totalAte65 = 3000 * meses * (1 + ipca) ^ meses
    let totaAte6555 = 0
    let totalPorMes = 3000
    for (i = 0; i < meses; i++) {

        totalPorMes = totalPorMes * 1.006
        totaAte6555 = totalPorMes + totaAte6555
        if (i == 12) console.log(totalPorMes + " " + totaAte6555)
    }
    console.log("Total por ano do consumo :" + totalPorMes)

    console.log("precisa criar até lá : " + totaAte6555)

    rendimentoAluguel = 1.07 ^ anos
    let aluguel = 7200
    let aluguelTotal = 0
    for (i = 0; i < anos; i++) {
        aluguel = (aluguel) * 1.06
        aluguelTotal = (aluguel + aluguelTotal) * 1.06

    }

    let mesesContribuição = meses
    let produzido = 10000000

    while (produzido > 7200000 && mesesContribuição > 2) {
        produzido = 0
        let valorTrabalho = 2500
        let trabalho = 0
        let aluguelMes = 1800
        let aluguelTotalMes = 0
        for (i = 0; i < meses; i++) {

            aluguelMes = (aluguelMes) * 1.004
            aluguelTotalMes = ( aluguelMes + aluguelTotalMes) * 1.006
        }
        for (i = 0; i < mesesContribuição; i++) {
            trabalho = valorTrabalho + trabalho
            valorTrabalho = valorTrabalho * 1.004
        }
        produzido = aluguelTotalMes + trabalho
        mesesContribuição = mesesContribuição - 1
        console.log('meses contribuição: ' + mesesContribuição + " trabalho " + trabalho)
        console.log("produzido com trabalho e aluguel " + produzido)
    }
    console.log("produzido com trabalho e aluguel " + produzido)

    console.log('meses contribuição: ' + mesesContribuição + " anos contri: " + mesesContribuição / 12)
    totalCOmAluguel = 3 * aluguelTotal

    console.log("com 3 casas quanto fazer : " + totalCOmAluguel)
    console.log("com 4 casas quanto fazer : " + 4 * aluguelTotal)
  //  console.log("com 4 casas quanto fazer mes: " + 4 * aluguelTotalMes)

}

intereger(38, 6000, 0.006)