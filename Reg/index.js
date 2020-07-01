// var s1 = "get-element-by-id";
// let reg = /-([a-z]+?)/g;
// s1 = s1.replace(reg, function (x) {
//   return x.slice(1).toUpperCase();
// });
// console.log(s1);

// let telReg = /^1[345678]\d{9}$/;
// let tel = 13120039312;
// console.log(telReg.test(tel));

// let numReg = /^\d{3}-\d{3}-\d{4}$/;
// let num = '123-456-7890';
// console.log(numReg.test(num));

// let USDReg = /^\$(\d){1,3}(,\d{3})+(\.\d{2})?$/;
// let USD = "$345,678,901.12";
// console.log(USDReg.test(USD));

// let urlReg = /(?<=\?)([\s\S]+)/g;
// let url = "https://www.baidu.com?name=tom&age=24";
// let paramArr = url.match(urlReg)[0].split("&");
// let params = {};
// if (paramArr.length > 0) {
//   paramArr.map((item) => {
//     Object.assign(params, {
//       [item.split("=")[0]]: item.split("=")[1],
//     });
//   });
// }
// console.log(params);

// let emailReg = /\w+@\w+\.(com|cn|cc|org|gov)/;
// let email = "13f1_12aaa@qq.com";
// console.log(emailReg.test(email));

// let hanReg = /\p{sc=Han}/gu;
// let chinese = "ahsu哈哈jaiw氨基酸";
// console.log(chinese.match(hanReg));

// let reg = /^\/+|\/+$/g;
// let str = "/asfasfasf//";
// str = str.replace(reg, "");
// console.log(str);

// let htmlReg = /<\/?\w+>/g
// let html = '<div><p>12ppp</p><h1>hhh1h1h1</h1>div></div>'
// console.log(html.replace(htmlReg, ''))

// let ipReg = /^(\d{1,3}\.){3}\d{1,3}$/g;
// let ip = "127.0.0.1";
// console.log(ipReg.test(ip));

// let birReg = /(?<=(\d{6}))(\d{8})(?=(\w{4}))/g;
// let id = "13020319931231181x";
// console.log(birReg.exec(id));
// console.log(id.match(birReg));

