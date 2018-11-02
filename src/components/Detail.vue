<template>
  <div id='detail_div'>
    <div class="Header">
      <h3 id="title">{{ $route.params.sysname }}</h3>
      <img id="more" src="../assets/more.png" alt="更多设置" v-on:click='otherset' />
    </div>
    <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="100%" color=#bebebe SIZE=4 />
    <div id="mynetwork"></div>
    <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="100%" color=#bebebe SIZE=4 />
    <div v-if="id_select === 4">
      <Mywrongjobs :wrongjobs="sysnodeinf.wrongjobs"></Mywrongjobs>
    </div>
    <div v-else-if="id_select === 5">
      <Mydelayjobs :delayjobs="sysnodeinf.delayjobs"></Mydelayjobs>
    </div>
    <div v-else-if="id_select === 3">
      C
    </div>
    <div v-else>
    </div>
  </div>
</template>

<script>
import Hammer from "hammerjs"
import Mywrongjobs from "../components/Wrongjobs"
import Mydelayjobs from "../components/Delayjobs"
import vis from "vis"
import user from '../assets/user1.png'
import app from '../assets/app.png'
import delay0 from '../assets/delay.png'
import error0 from '../assets/error.png'
import delay1 from '../assets/delay1.png'
import error1 from '../assets/error1.png'
import right from '../assets/right1.png'


export default {
  data() {
    return {
      options : {
        layout:{
          hierarchical:true
        },
        nodes:{
          size:40,
          font:{
              size:20,
          }
        },
        edges: {
          width:2,
          arrowStrikethrough: true,
          chosen: true,
          color: {
            color: "#848484",
            highlight: "#848484",
            hover: "#848484",
            inherit: "from",
            opacity: 1.0
          }
        },
      },
      sysnodeinf:{},
      id_select:4
    };
  },
  methods: {
      getData(sysname,latest_finish_time) {
      console.log("刷新");
      var _this = this;
      var opts = {
        method: "POST", //请求方法
        // body:"userid="+userid,   //请求体
        body: "sysname=" + sysname+"&latest_finish_time"+latest_finish_time,
        cache: "no-store",
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      this.$store.commit("showLoading");
      fetch(`/jsondatadetail`, opts)
        .then(res => res.json())
        .then(function(data) {
          (_this.sysnodeinf = data.sysnodeinf),
          console.log(_this.sysnodeinf.delayjobs);
          _this.$store.commit("hideLoading");
        });
    },
    otherset: function() {
      alert("待开发中");
    },
    bindSwipeEvent: function() {
      var content = document.getElementById("detail_div");
      var hammer = new Hammer(content);
      hammer.get("swipe").set({ threshold: 100 });
      hammer.on("swiperight", e => {
        this.$router.back(-1);
      });
    },
    drawJobStaMap: function() {
      var content = document.getElementById("mynetwork");
      content.style.height = window.screen.availHeight * 0.5 + "px";
      var sysname = this.$route.params.sysname;

      // create an array with nodes
      var nodes = new vis.DataSet([
        { id: 1, label: "",shape: "image", image:user,
            // icon: {
            //   face: "FontAwesome",
            //   code: "\uf007",
            //   size: 50,
            //   color: "#3366ff"
            // },
            fixed:true },
        { id: 2, label: sysname, shape: "image",image:app
            // icon: {
            //   face: "FontAwesome",
            //   code: "\uf085",
            //   size: 50,
            //   color: "#222222"
            // } 
            },
        { id: 4, label: "报错作业",shape: "image",image:error1,
            // icon: {
            //   face: "FontAwesome",
            //   code: "\uf05c",
            //   size: 50,
            //   color: "red"
            // } 
            },
        { id: 3, label: "正常作业",shape: "image",image:right
            // icon: {
            //   face: "FontAwesome",
            //   code: "\uf058",
            //   size: 50,
            //   color: "green"
            // } 
            },
        { id: 5, label: "延迟作业",shape: "image",image:delay1
            // icon: {
            //   face: "FontAwesome",
            //   code: "\uf06a",
            //   size: 50,
            //   color: "orange"
            // }
             }
      ]);
    
      // create an array with edges
      var edges = new vis.DataSet([
        { from: 1, to: 2,label:"25",font:{size:30,color:"red"},dashes:true,width:3},
        { from: 2, to: 3,arrows: {
            to: { enabled: true, scaleFactor: 1, type: "arrow" }
          }},
        { from: 2, to: 4,arrows: {
            to: { enabled: true, scaleFactor: 1, type: "arrow" }
          }},
        { from: 2, to: 5,arrows: {
            to: { enabled: true, scaleFactor: 1, type: "arrow" }
          }}
      ]);
      var data = {
        nodes: nodes,
        edges: edges
      }; 

      // these are all options in full.
      // initialize your network!
      var network = new vis.Network(content, data, this.options);
      return network;
    },
  },
  computed:{
  },
  created: function() {
    var sysname = this.$route.params.sysname;
    var latest_finish_time=this.$route.params.latest_finish_time;
    this.getData(sysname,latest_finish_time); //这里定义这个方法，vue实例之后运行到这里就调用这个函数
  },
  mounted: function() {
    var _this=this;
    this.bindSwipeEvent();
    var network=this.drawJobStaMap();
    network.on("click", function (params) {
        params.event = "[original event]";
        // document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
        _this.id_select=this.getNodeAt(params.pointer.DOM);
        console.log('click event, getNodeAt returns: ' + _this.id_select);
    });
  },
 
  components: {Mywrongjobs,Mydelayjobs}
};
</script>

<style>
#more {
  float: right;
  width: 25px;
  height: 25px;
}
#title {
  display: inline;
  padding: 0px 0px 0px 32px;
}

.Header {
  text-align: center;
  margin:0.3cm,10px,0.2cm,0;
}

#mynetwork{
  margin-top:-0.5cm;
}
</style>
