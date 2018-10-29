var neo4j = require('neo4j-driver').v1;
var async = require('async');

var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "BAS1HZ"));


function insertQueryFun(params) {
  var insertQuery =
    "merge (n:SysNode{sys_name:{sys_name},sys_statues:{sys_statues}}) \
      return n.sys_name as name ";
  var session = driver.session();
  session
    .run(insertQuery, { sys_name: params[0], sys_statues: params[1] })
    .subscribe({
      onNext: function (record) {
        console.log(record.get('name'));
      }, onCompleted: function () {
        session.close();
      },
      onError: function (error) {
        console.log(error);
      }
    });
}
function updateQueryFun(params) {
  var updateQuery =
    "match(n:SysNode{sys_name:{sys_name}}) set n.sys_statues={sys_statues}\
    return n.sys_name as name ";
  var session = driver.session();
  session
    .run(updateQuery, { sys_name: params[0], sys_statues: params[1] })
    .subscribe({
      onNext: function (record) {
        console.log(record.get('name'));
      }, onCompleted: function () {
        session.close();
      },
      onError: function (error) {
        console.log(error);
      }
    });
}

function deleteQueryFun(params) {
  var deleteQuery =
    "match(n:SysNode{sys_name:{sys_name}}) set n.sys_statues={sys_statues}\
    return n.sys_name as name ";
  var session = driver.session();
  session
    .run(updateQuery, { sys_name: params[0], sys_statues: params[1] })
    .subscribe({
      onNext: function (record) {
        console.log(record.get('name'));
      }, onCompleted: function () {
        session.close();
      },
      onError: function (error) {
        console.log(error);
      }
    });
}
 function getUserFocusSysInformation(userid) {
  var getUserFocusSysQuery =
    "match(n:USER{emp_id:{userid}})-[r:USER_TO_WRNPOINT]->(n1:WRN_POINT)\
    return n1.ear_warn_point_id as name";
  var sysInformationQuery = "RETURN cmb.findNodes(\"WRN_POINT\",\"ear_warn_point_id\",{ear_warn_point_id},\
    \"JOB_TO_JOB\",\"WRNPOINT_TO_JOB\") as name";

  return new Promise((resolve,reject)=>{

    var session = driver.session();
    session
    .run(getUserFocusSysQuery, { userid: userid })
    .then(function (result) {
      // result.records.forEach(function (record) {
      //   console.log(record.get('name'));
      // });
      async.map(result.records, function (record, callback) {
        var ear_warn_point_id = record.get('name').low;
        
        session
          .run(sysInformationQuery, { ear_warn_point_id: ear_warn_point_id })
          .subscribe({
            onNext: function (record) {
              var sysInf = record.get('name');
              callback(null, sysInf)
            }, onCompleted: function () {
            },
            onError: function (error) {
              console.log(error);
            }
          });
      }, function (err, results) {
        // console.log(results);
        var sysnodes = [
          {
            id: 1, name: "管舱基础客群获客管理", state: "延迟12分钟", rate_of_progress: "50",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 2, name: "智慧营销", state: "正常", rate_of_progress: "30",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 3, name: "管舱基础客群获客管理", state: "延迟12分钟", rate_of_progress: "50",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 4, name: "智慧营销", state: "正常", rate_of_progress: "30",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 5, name: "管舱基础客群获客管理", state: "延迟12分钟", rate_of_progress: "50",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 6, name: "智慧营销", state: "正常", rate_of_progress: "30",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 7, name: "管舱基础客群获客管理", state: "延迟12分钟", rate_of_progress: "50",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 8, name: "智慧营销", state: "正常", rate_of_progress: "30",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 9, name: "管舱基础客群获客管理", state: "延迟12分钟", rate_of_progress: "50",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 10, name: "智慧营销", state: "正常", rate_of_progress: "30",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 11, name: "管舱基础客群获客管理", state: "延迟12分钟", rate_of_progress: "50",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 12, name: "智慧营销", state: "正常", rate_of_progress: "30",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 13, name: "管舱基础客群获客管理", state: "延迟12分钟", rate_of_progress: "50",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 14, name: "智慧营销", state: "正常", rate_of_progress: "30",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 15, name: "管舱基础客群获客管理", state: "延迟12分钟", rate_of_progress: "50",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 16, name: "智慧营销", state: "正常", rate_of_progress: "30",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 17, name: "管舱基础客群获客管理", state: "延迟12分钟", rate_of_progress: "50",
            threshold: "08:00", average: "03:25", hot: "15"
          },
          {
            id: 18, name: "智慧营销", state: "正常", rate_of_progress: "30",
            threshold: "08:00", average: "03:25", hot: "15"
          }
        ];
        sysnodes.forEach(function (sysnode) {
          sysnode.state = results[0].substr(0,1);
          sysnode.rate_of_progress=results[0].substr(1,4);
        });
        //console.log(sysnodes);
       
        var tmpsysnodes = sysnodes;
        var data = {
          sysnodes: sysnodes,
          tmpsysnodes: tmpsysnodes
        };
         resolve(data);
      });
      session.close();
    })
    .catch(function (error) {
      console.log(error);
    });
  })
  
}

module.exports.insertQueryFun = insertQueryFun;
module.exports.updateQueryFun = updateQueryFun;
module.exports.getUserFocusSysInformation = getUserFocusSysInformation;

