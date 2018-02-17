function battleForTheKingdoms(kingdomsWithArmys, battles){
    
   let map = new Map();


    kingdomsWithArmys.forEach(element => {
        if (!map.has(element.kingdom)) {
            map.set(element.kingdom, new Map());
        }
        if (!map.get(element.kingdom).has(element.general)) {
            map.get(element.kingdom).set(element.general, {army: 0, wins: 0, loses: 0});
        }
        map.get(element.kingdom).get(element.general).army += element.army;
    });    

    battles.forEach(b => {
        let attKingdom = b[0];
        let attGeneral = b[1];
        let attGeneralArmy = map.get(attKingdom).get(attGeneral).army;
        let attGeneralWins = map.get(attKingdom).get(attGeneral).wins;
        let attGeneralLoses = map.get(attKingdom).get(attGeneral).loses;
        
        let defKingdom = b[2];
        let defGeneral = b[3];
        let defGeneralArmy = map.get(defKingdom).get(defGeneral).army;
        let defGeneralWins = map.get(defKingdom).get(defGeneral).wins;
        let defGeneralLoses = map.get(defKingdom).get(defGeneral).loses;

        if (attKingdom !== defKingdom) {
            if (attGeneralArmy > defGeneralArmy) {
                map.get(attKingdom).get(attGeneral).army = Math.round(attGeneralArmy * 1.1);
                map.get(attKingdom).get(attGeneral).wins += 1;
                map.get(defKingdom).get(defGeneral).army = Math.round(attGeneralArmy * 0.9);
                map.get(defKingdom).get(defGeneral).loses += 1;
            } else if (attGeneralArmy < defGeneralArmy){
                map.get(attKingdom).get(attGeneral).army = Math.round(attGeneralArmy * 0.9);
                map.get(attKingdom).get(attGeneral).loses += 1;
                map.get(defKingdom).get(defGeneral).army = Math.round(attGeneralArmy * 1.1);
                map.get(defKingdom).get(defGeneral).wins += 1;
            }
        }

        

    });
    let orderedKingdoms = [];
    
    Array.from(map.keys()).forEach(kingdom => {
        orderedKingdoms.push({
            name: kingdom,
            generals: Array.from(map.get(kingdom).keys())
        })
    });

    orderedKingdoms = orderedKingdoms.sort((k1,k2) => {
        let k1Wins = calcGeneralsWins(k1, map);
        let k2Wins = calcGeneralsWins(k2, map);
        if (k1Wins == k2Wins) {
            return sortByLoses(k1, k2, map);
        }
        return k1Wins<k2Wins;
    })
    let winner = orderedKingdoms[0];

    console.log('Winner: ' + winner.name);
    winner.generals.forEach(general => {        
        console.log('/\\general: '+ general);
        console.log('---army: ' + map.get(winner.name).get(general).army);
        console.log('---wins: ' + map.get(winner.name).get(general).wins);
        console.log('---loses: ' + map.get(winner.name).get(general).loses);
        
    });
    
    

    function calcGeneralsWins(kingdom, map) {
        let sum = 0;
        kingdom.generals.forEach(general => {
            sum+= map.get(kingdom.name).get(general).wins;
        });
        return sum;
    }

    function sortByLoses(k1,k2,map) {
        let k1Loses = calcLoses(k1, map);
        let k2Loses = calcLoses(k2, map);

        if (k1Loses == k2Loses) {
            return sortAlphabetically(k1, k2);
        }

        return k1Loses>k2Loses
    }

    function calcLoses(kingdom, map) {
        let sum = 0;
        kingdom.generals.forEach(general => {
            sum+= map.get(kingdom.name).get(general).loses
        });
        return sum;
    }

    function  sortAlphabetically(k1, k2) {
        return k1.name > k2.name;
    }
}

battleForTheKingdoms([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 5000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
[ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]

);

// vzimam kralstva i generali v masiv ot obekti podrejdam gi sprqmo pobedi i zagubi