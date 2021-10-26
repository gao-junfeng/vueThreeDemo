function MinCoinChange(coins = [], students = []) {
  var coins = coins.sort(asc);
  var students = students.sort(asc);

  // console.log(coins[2] || 0);
  var cache = {};

  this.makeChange = function(amount) {
    var change = [],
      total = 0;

    for (var i = coins.length; i >= 0; i--) {
      var coin = coins[i];
      while (total + coin <= amount) {
        change.push(coin);
        total += coin;
      }
    }

    return change;
  };
  // 数组之间最小
  this.makeChangeArr = function(amount) {
    var change = [],
      total = 0;
    let stuL = 0,
      coinsL = 0;

    while (stuL < students.length && coinsL < coins.length) {
      if (students[stuL] !== coins[coinsL]) {
        total = total + Math.abs(students[stuL] - coins[coinsL]);
      }
      stuL++;
      coinsL++;
    }

    return total;
  };

  function asc(a, b) {
    return a - b;
  }
}

let coins = [2, 2, 6, 8, 2];
let students = [1, 3, 2, 6];

// var aa = new MinCoinChange(coins, students);
// console.log(aa.makeChangeArr());

// var minCoinChange = new MinCoinChange([1, 10, 5, 25]);
// console.log(minCoinChange.makeChange(24));
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let next = 0,
    l1Item = 0,
    l2Item = 0,
    result = [];
  console.log(l1, l2);
  const l3 = new NodeList(l1);
  console.log(l3);
  while (l1Item < l1.length || l2Item < l2.length) {
    let sum = (l1[l1Item] || 0) + (l2[l2Item] || 0) + next;
    console.log(sum);
    next = 0;
    if (sum > 9) {
      sum = sum - 10;
      next = 1;
    }
    result.push(sum);
    l1Item++;
    l2Item++;
  }
  return result;
};

console.log(addTwoNumbers(coins, students));
