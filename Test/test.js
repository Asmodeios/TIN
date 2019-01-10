let player1 = {
    hp: 100,
    attack: 15
};

let monster1 = {
    hp: 15,
    attack: 3
}

function getMonster(monster) {
    return {
        monsterHp : monster.hp, 
        monsterAttack: monster.attack
    }; 
}

function getPlayer(player) {
    return {
        playerHp: player.hp,
        playerAttack: player.attack
    };
}

function oneStepDuel(monster, player) {
    return Promise.all([
        getPlayer(player),
        getMonster(monster)
    ]).then(([player, monster]) => ({player, monster}))
}


let duel = oneStepDuel(monster1, player1);
console.log(duel.player);
console.log(getPlayer(player1));
