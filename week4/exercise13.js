/*eslint-disable*/
function countProfit(shoppers) {
  let listBarang = [
    ["Sepatu Stacattu", 1500000, 10],
    ["Baju Zoro", 500000, 2],
    ["Sweater Uniklooh", 175000, 1]
  ];

  var JSON = [];
  var val = 0;

  //Make JSON structure
  for (let i = 0; i < listBarang.length; i++) {
    JSON[i] = {
      product: listBarang[i][0],
      shopper: [],
      leftOver: listBarang[i][2],
      totalProfit: 0
    };
  }

  for (let j = 0; j < shoppers.length; j++) {
    if (shoppers[j].product == "Sepatu Stacattu") {
      val = 0;
      func(val, j);
    } else if (shoppers[j].product == "Baju Zoro") {
      val = 1;
      func(val, j);
    } else if (shoppers[j].product == "Sweater Uniklooh") {
      val = 2;
      func(val, j);
    }
  }

  function func(a, b) {
    if (JSON[a]["leftOver"] - shoppers[b].amount >= 0) {
      JSON[a]["leftOver"] -= shoppers[b].amount;
      JSON[a]["shopper"].push(shoppers[b].name);
      JSON[a]["totalProfit"] += listBarang[a][1] * shoppers[b].amount;
    }
  }

  return JSON;
}

// TEST CASES
console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 2 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 3 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 2 }
  ])
);
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 8 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 10 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 1 },
    { name: "Devi", product: "Baju Zoro", amount: 1 },
    { name: "Lisa", product: "Baju Zoro", amount: 1 }
  ])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(
  countProfit([{ name: "Windi", product: "Sepatu Naiki", amount: 5 }])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
