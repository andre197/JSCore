function bitcoinMining(input) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;

    let day = 1;
    let moneyMined = 0;
    let firstBitBought = 0;
    let boughtBitcoins = 0;

    for (let i = 0; i < input.length; i++, day++) {
        let minedGold = input[i];
        if (day % 3 === 0) {
            minedGold *= 0.7;
        }

        moneyMined += minedGold * 67.51;

        if (moneyMined >= bitcoinPrice) {
            if (boughtBitcoins === 0) {
                firstBitBought = day;
            }
            boughtBitcoins+=1;
            moneyMined -= bitcoinPrice;
        }
    }
    boughtBitcoins += Math.floor(moneyMined / bitcoinPrice);
    moneyMined = moneyMined % bitcoinPrice

    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (boughtBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitBought}`);
    }
    console.log(`Left money: ${moneyMined.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);