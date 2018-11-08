'use strict';

let player = {
  healthpoints: 130
};

let skeletonMage = {
  healthpoints: 100,
  manapoints: 50,
  normalAttackDamage: 7,

/*
Use player as a target for regular attack
*/
  attack: function(target) {
    let initialHp = target.healthpoints;
    if (target.healthpoints > 0) {
      target.healthpoints -= this.normalAttackDamage;
      console.log("Skeleton-mage attacked you with his staff for " + this.normalAttackDamage + " damage | targert's hp "
      + initialHp + " -> " + target.healthpoints + '\n');
    }
  },
  /*
  Use player as a target for fireball attack
  */
  fireball: function(target) {
    let fireballDamage = this.normalAttackDamage * 2;
    let initialHp = target.healthpoints;
    if (this.manapoints >= 10){
        if (target.healthpoints > 0) {
          target.healthpoints -= fireballDamage;
          console.log("Skeleton-mage casted fireball for " + fireballDamage + " damage | target's hp "
          + initialHp + " -> " + target.healthpoints + '\n');
          this.manapoints -= 10;
        }
    }
  }

};

function writeProps(obj) {
  for (let props in obj) {
    console.log(props);
  }
}

writeProps(skeletonMage);
skeletonMage.attack(player);
skeletonMage.fireball(player);
