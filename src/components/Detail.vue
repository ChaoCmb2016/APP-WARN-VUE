<template>
  <div id='detail_div'>
    <div class="Header">
      <h3 id="title">{{ $route.params.sysname }}</h3>
      <img id="more" src="../assets/more.png" alt="更多设置" v-on:click='otherset' />
    </div>
    <div id="mynetwork"></div>
  </div>
</template>

<script>
import Hammer from "hammerjs";
import vis from "vis";
import image1 from '../assets/more.png'

export default {
  data() {
    return {};
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
  },
   computed:{
    drawJobStaMap: function() {
      var content = document.getElementById("mynetwork");
      console.log(window.screen.availWidth, window.screen.availHeight * 0.4);
      content.style.height = window.screen.availHeight * 0.5 + "px";
      var sysname = this.$route.params.sysname;

      // create an array with nodes
      var nodes = new vis.DataSet([
        { id: 1, label: "关注用户", group: "user" },
        { id: 2, label: sysname, group: "sys" },
        { id: 3, label: "延迟作业", group: "delayjob" },
        { id: 4, label: "报错作业", group: "wrongjob" },
        { id: 5, label: "正常作业", group: "otherjob" }
      ]);

      // create an array with edges
      var edges = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
      ]);
      var data = {
        nodes: nodes,
        edges: edges
      }; 

      // these are all options in full.
      var options = {
        layout:{
          randomSeed:5
        },
        edges: {
          width:2,
          arrows: {
            to: { enabled: true, scaleFactor: 1, type: "arrow" }
          },
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
        groups: {
          user: {
            shape: "icon",
            icon: {
              face: "FontAwesome",
              code: "\uf007",
              size: 50,
              color: "#222222"
            },
            fixed:true
          },
          sys: {
            shape: "icon",
            icon: {
              face: "FontAwesome",
              code: "\uf085",
              size: 50,
              color: "#222222"
            }
          },
          delayjob: {
            shape: "icon",
            icon: {
              face: "FontAwesome",
              code: "\uf06a",
              size: 50,
              color: "orange"
            }
          },
          wrongjob: {
            shape: "icon",
            icon: {
              face: "FontAwesome",
              code: "\uf05c",
              size: 50,
              color: "red"
            }
          },
          otherjob: {
            shape: "icon",
            icon: {
              face: "FontAwesome",
              code: "\uf058",
              size: 50,
              color: "green"
            }
          }
        }
      };
      // initialize your network!
      var network = new vis.Network(content, data, options);
      return network;
    },
  },
  mounted: function() {
    this.drawJobStaMap.redraw();
    this.bindSwipeEvent();
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
  border:2px solid rgb(209, 204, 204)
}
</style>
