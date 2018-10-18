<template>
    <div>
        <div class="Sysnode"  v-for="(sysnode,index) in sysnodes" v-on:click='stepIntoDetail(index)' :key="sysnode.id">
            <span class="fontstyle">{{sysnode.name}}</span>
            <br />

            <span class="fontstyle">{{sysnode.state}}</span>

            <span class="fontstyle right">进度{{sysnode.rate_of_progress}}%</span>
            <br />
            <span>阈值|{{sysnode.threshold}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>平均|{{sysnode.average}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>热度|{{sysnode.hot}}</span>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Sysnodes",
  data() {
    return {};
  },
  props: {
    sysnodes: {
      type: Array
    }
  },
  methods: {
    stepIntoDetail: function(sysIndex) {
      console.log(sysIndex);
      this.router.push({
        name: "Detail",
        params : {
          sysname: this.sysnodes[sysIndex].name,
        }
      });
    }
  },
  components: {}
};
</script>

<style>
.Sysnode {
  width: 90%;
  margin: 12px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 5px;
  /* text-align: center; */
}

.fontstyle {
  font-weight: bold;
  font-size: 110%;
}
.right {
  float: right;
}
</style>
