<template>
  <div id="content">
    <div class="Header">
      <h2 id="title">应用准实时进度监控</h2>
      <img id="add" src="../assets/add.png" alt="新增预警点" v-on:click='addsysnodes' />
    </div>
    <div class="Seacher">
      <i class="icon-search"></i>
      <input type="text" class="input-search" placeholder="关键字搜索" v-on:input='inputTestChanged' />
    </div>
    <Loading v-if="flag"/>
    <Mysysnodes :sysnodes='sysnodes' />
    

  </div>
</template>

<script>
import Mysysnodes from "../components/Sysnodes";
import Vue from "vue";
import Loading from "../components/Loading"

export default {
  data() {
    return {
      sysnodes: [],
      tmpsysnodes: [],
      scroll: 0,
      flag:false,
    };
  },
  created: function() {
    this.getData("80374724"); //这里定义这个方法，vue实例之后运行到这里就调用这个函数
  },

  mounted: function() {
    window.addEventListener("scroll", this.handleScroll);
    this.bindSwipeEvent();
    _this.flag=false;
  },

  activated: function() {
    if (this.scroll > 0) {
      window.scrollTo(0, this.scroll);
    }
  },

  deactivated: function() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    getData(userid) {
      var _this = this;
      var opts = {
        method: "POST", //请求方法
        // body:"userid="+userid,   //请求体
        body: "userid=" + userid,
        cache:"no-store",
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      _this.flag=true;
      fetch(`/jsondata`, opts)
        .then(res => res.json())
        .then(function(data) {
          setTimeout(function () {
            (_this.sysnodes = data.sysnodes),
            (_this.tmpsysnodes = data.tmpsysnodes);
           }, 2000)
        });
    },
    addsysnodes: function() {
      alert("待后续开发！");
    },
    bindSwipeEvent: function(e) {
      var content = document.getElementById("content");
      var hammer = new Hammer(content);
      hammer.get("swipe").set({ threshold: 100 });
      hammer.on("swiperight", e => {
        window.scrollTo(0, 0);
        this.getData("80374724");
      });
    },
    handleScroll: function() {
      this.scroll =
        document.documentElement && document.documentElement.scrollTop;
    },

    inputTestChanged: function(event) {
      this.sysnodes = this.tmpsysnodes;
      if (event.target.value) {
        const hitSysnodes = this.tmpsysnodes.filter(sysnode => {
          return JSON.stringify(sysnode).indexOf(event.target.value) !== -1;
        });
        console.log(event.target.value);
        console.log(hitSysnodes.length);
        this.sysnodes = hitSysnodes;
      }
    }
  },
  components: { Mysysnodes,Loading }
};
</script>

<style>
#add {
  float: right;
  width: 32px;
  height: 32px;
}
#title {
  display: inline;
  padding: 0px 0px 0px 32px;
}

.Header {
  text-align: center;
  margin: 0.5cm 10px 0.3cm 0cm;
}

.icon-search {
  position: absolute;
  left: 22px;
  z-index: 5;
  background-image: url(../assets/search.png);
  background-repeat: no-repeat;
  background-position: 5px 5px;
  width: 30px;
  height: 30px;
}

.input-search {
  padding-left: 35px;
  border: 1px solid rgb(17, 17, 17);
  margin: 0.05cm 0.25cm 0cm 15px;
  height: 30px;
  width: 83.7%;
}
.Searcher {
  margin: 0.25cm 0cm 0cm 0cm;
}
</style>
