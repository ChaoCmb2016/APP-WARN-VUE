var neo4j = require('neo4j-driver').v1;

var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "BAS1HZ"));


function insertQueryFun (params){
    var insertQuery=
    "merge (n:SysNode{sys_name:{sys_name},sys_statues:{sys_statues}}) \
      return n.sys_name as name ";
    var session = driver.session();
    session
    .run(insertQuery, {sys_name: params[0],sys_statues:params[1]})
    .subscribe({ onNext: function (record) {
      console.log(record.get('name'));
    }, onCompleted: function () {
      session.close();},
    onError: function (error) {
      console.log(error);
    }
  });
}
function updateQueryFun(params){
  var updateQuery=
  "match(n:SysNode{sys_name:{sys_name}}) set n.sys_statues={sys_statues}\
    return n.sys_name as name ";
  var session = driver.session();
  session
  .run(updateQuery, {sys_name: params[0],sys_statues:params[1]})
  .subscribe({ onNext: function (record) {
    console.log(record.get('name'));
  }, onCompleted: function () {
    session.close();},
  onError: function (error) {
    console.log(error);
  }
});
}

function deleteQueryFun(params){
  var deleteQuery=
  "match(n:SysNode{sys_name:{sys_name}}) set n.sys_statues={sys_statues}\
    return n.sys_name as name ";
  var session = driver.session();
  session
  .run(updateQuery, {sys_name: params[0],sys_statues:params[1]})
  .subscribe({ onNext: function (record) {
    console.log(record.get('name'));
  }, onCompleted: function () {
    session.close();},
  onError: function (error) {
    console.log(error);
  }
});
}
function getUserFocusSysInformation(userid){

}

module.exports.insertQueryFun=insertQueryFun;
module.exports.updateQueryFun=updateQueryFun;
module.exports.getUserFocusSysInformation=getUserFocusSysInformation;

