function meleeRangedGrouping(str) {
  var arr = str;
  var hero = arr.split(/[-,]/);
  var result = [];
  var melee = [];
  var ranged = [];

  for (let i = 0; i < hero.length; i++) {
    if (hero[i] == "Ranged") {
      ranged.push(hero[i - 1]);
    } else if (hero[i] == "Melee") {
      melee.push(hero[i - 1]);
    } else if (hero[i]=="") {
        return []
    }
  }

  result.push(ranged,melee)
  return result;
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
