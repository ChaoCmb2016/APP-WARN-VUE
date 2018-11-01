<template>
  <div id='detail_div'>
    <div class="Header">
      <h3 id="title">{{ $route.params.sysname }}</h3>
      <img id="more" src="../assets/more.png" alt="更多设置" v-on:click='otherset' />
    </div>
    <!-- 前面添加一个标签，先渲染一个fonticon icon图标加载 -->
    <div id="mynetwork"></div>
  </div>
</template>

<script>
import Hammer from "hammerjs";
import vis from "vis";
import user from '../assets/user1.png'
import app from '../assets/app.png'
import delay from '../assets/delay2.png'
import error from '../assets/error1.png'
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
      }
    };
  },
  methods: {
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
        { id: 3, label: "延迟作业",shape: "image",image:delay
            // icon: {
            //   face: "FontAwesome",
            //   code: "\uf06a",
            //   size: 50,
            //   color: "orange"
            // }
             },
        { id: 4, label: "报错作业",shape: "image",image:error
            // icon: {
            //   face: "FontAwesome",
            //   code: "\uf05c",
            //   size: 50,
            //   color: "red"
            // } 
            },
        { id: 5, label: "正常作业",shape: "image",image:right
            // icon: {
            //   face: "FontAwesome",
            //   code: "\uf058",
            //   size: 50,
            //   color: "green"
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
  mounted: function() {
    this.bindSwipeEvent();
    this.drawJobStaMap();
  },
 
  components: {}
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
  margin-top: 0.3cm;
  margin-right: 10px;
}

#mynetwork{
  border:2px solid rgb(204, 205, 209)
}
</style>
