# JavaScript Knowledge Point

##前端存储
###1.localStorage
1.1 localStorage 的特点：
1.1.1 大小限制为 5MB ~10MB；
1.1.2 在同源的所有标签页和窗口之间共享数据；
1.1.3 数据仅保存在客户端，不与服务器进行通信；
1.1.4 数据持久存在且不会过期，重启浏览器后仍然存在；
1.1.5 对数据的操作是同步的。
###2.sessionStorage
2.1 sessionStorage 的特点：
2.1.1 sessionStorage 的数据只存在于当前浏览器的标签页；
2.1.2 数据在页面刷新后依然存在，但在关闭浏览器标签页之后数据就会被清除；
2.1.3 与 localStorage 拥有统一的 API 接口；
2.1.4 对数据的操作是同步的。
###3.cookie
3.1 Cookie 主要用于以下三个方面：
3.1.1 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）；
3.1.2 个性化设置（如用户自定义设置、主题等）；
3.1.3 浏览器行为跟踪（如跟踪分析用户行为等）。
3.2 Cookie 的特点：
3.2.1 Cookie 的大小受限，一般为 4 KB；
同一个域名下存放 Cookie 的个数是有限制的，不同浏览器的个数不一样，一般为 20 个；
3.2.2 Cookie 支持设置过期时间，当过期时自动销毁；
每次发起同域下的 HTTP 请求时，都会携带当前域名下的 Cookie；
3.2.3 支持设置为 HttpOnly，防止 Cookie 被客户端的 JavaScript 访问。

```document.cookie = "name=semlinker";
document.cookie = "favorite_food=tripe";

alert(document.cookie);
// 显示: name=semlinker;favorite_food=tripe
document.cookie = "test1=Hello";
document.cookie = "test2=World";

var myCookie = document.cookie
    .replace(/(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/, "$1");
alert(myCookie);
```

###4.Web SQL
4.1 Web SQL Database 规范中定义的三个核心方法：
4.1.1 openDatabase：这个方法使用现有数据库或新建数据库来创建数据库对象；
4.1.2 transaction：这个方法允许我们根据情况控制事务的提交或回滚；
4.1.3 executeSql：这个方法用于执行真实的 SQL 语句。
4.2 Web SQL 的特点（相比 Cookie、localStorage 与 sessionStorage）：
4.2.1 Web SQL 能方便进行对象存储；
4.2.2 Web SQL 支持事务，能方便地进行数据查询和数据处理操作。
```
  var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

  db.transaction(function (tx) { 
    // 执行查询操作
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)'); 
    // 执行插入操作
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")'); 
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")'); 
  }); 
```
###5.Indexed DB
5.1IndexedDB 的特点：
5.1.1 存储空间大：存储空间可以达到几百兆甚至更多；
5.1.2 支持二进制存储：它不仅可以存储字符串，而且还可以存储二进制数据；
5.1.3 IndexedDB 有同源限制，每一个数据库只能在自身域名下能访问，不能跨域名访问；
5.1.4 支持事务型：IndexedDB 执行的操作会按照事务来分组的，在一个事务中，要么所有的操作都成功，要么所有的操作都失败；
5.1.5 键值对存储：IndexedDB 内部采用对象仓库（object store）存放数据。所有类型的数据都可以直接存入，包括 JavaScript 对象。对象仓库中，数据以 “键值对” 的形式保存，每一个数据记录都有对应的主键，主键是独一无二的，不能有重复，否则会抛出一个错误。
5.1.6 数据操作是异步的：使用 IndexedDB 执行的操作是异步执行的，以免阻塞应用程序。
```
var dbName = "my_db";

var request = indexedDB.open(dbName, 2);

request.onerror = function(event) {
  // 错误处理
};

request.onupgradeneeded = function(event) {
  var db = event.target.result;

  // 建立一个对象仓库来存储我们客户的相关信息，我们选择 ssn 作为键路径（key path）
  // 因为 ssn 可以保证是不重复的
  var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

  // 建立一个索引来通过姓名来搜索客户。名字可能会重复，所以我们不能使用 unique 索引
  objectStore.createIndex("name", "name", { unique: false });

  // 使用邮箱建立索引，我们确保客户的邮箱不会重复，所以我们使用 unique 索引
  objectStore.createIndex("email", "email", { unique: true });

  // 使用事务的 oncomplete 事件确保在插入数据前对象仓库已经创建完毕
  objectStore.transaction.oncomplete = function(event) {
    // 将数据保存到新创建的对象仓库
    var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
    customerData.forEach(function(customer) {
      customerObjectStore.add(customer);
    });
  };
};
```

附录: 1.一些开源前端存储库
1.1 Sharedb
1.2 ImmortalDB
1.3 web-storage-cache
1.4 lz-string 2.主流数据库
2.1 localForage
2.2 PouchDB
2.3 Rxdb
2.4 NeDB
2.5 Dexie.js
```
