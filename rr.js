// 深拷贝：对对象内部进行深拷贝，支持 Array、Date、RegExp、DOM
const deepCopy = sourceObj => {
  // 如果不是对象则退出（可停止递归）
  if (typeof sourceObj !== 'object') return;

  // 深拷贝初始值：对象/数组
  let newObj = sourceObj instanceof Array ? [] : {};

  // 使用 for-in 循环对象属性（包括原型链上的属性）
  for (let key in sourceObj) {
    // 只访问对象自身属性
    if (sourceObj.hasOwnProperty(key)) {
      // 当前属性还未存在于新对象中时
      if (!(key in newObj)) {
        if (sourceObj[key] instanceof Date) {
          // 判断日期类型
          newObj[key] = new Date(sourceObj[key].getTime());
        } else if (sourceObj[key] instanceof RegExp) {
          // 判断正则类型
          newObj[key] = new RegExp(sourceObj[key]);
        } else if (typeof sourceObj[key] === 'object' && sourceObj[key].nodeType === 1) {
          // 判断 DOM 元素节点
          let domEle = document.getElementsByTagName(sourceObj[key].nodeName)[0];
          newObj[key] = domEle.cloneNode(true);
        } else {
          // 当元素属于对象（排除 Date、RegExp、DOM）类型时递归拷贝
          newObj[key] = typeof sourceObj[key] === 'object' ? deepCopy(sourceObj[key]) : sourceObj[key];
        }
      }
    }
  }

  return newObj;
};

// deepCopy 函数测试效果
const objA = {
  name: 'jack',
  birthday: new Date(),
  pattern: /jack/g,
  // body: document.body,
  others: [123, 'coding', new Date(), /abc/gim],
};

const objB = deepCopy(objA);
console.log(objA === objB); // false
console.log(objA.others === objB.others); // false
console.log(objA, objB); // 对象内容一样
