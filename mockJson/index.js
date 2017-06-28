// 假数据 success，msg，data，error
/**
 * 所有接口都由此文件导出
 */
let fs = require('fs');

let fileArr = fs.readdirSync(__dirname),
    newArr = [];

/**
 * 读取mockJson目录下除了index以为的文件名
 */
fileArr.forEach((item) => {
  if (!/index/.test(item)) {
    newArr.push(item.match(/(\w+)\./)[1]);
  }
});


/**
 * 引入文件，并把各个模块（user， manage等）的请求对象赋值给exports对象
 */
newArr.forEach((filename) => {
  let file = require('./' + filename);
  Object.assign(exports, file);
});

