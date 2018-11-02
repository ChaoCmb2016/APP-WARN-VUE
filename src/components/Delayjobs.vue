<template>
  <div>
      <div class="delayjob" v-for="delayjob in delayjobs" :key="delayjob.id">
            <span class="fontstyle:false">延迟作业:{{delayjob.name}}</span>
            <br />
            <span class="fontstyle">延迟{{delayjob.minutes}}分钟,
            剩余{{delayjob.num_of_prejobs}}个作业</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{{delayjob.state}}</span>
            <br />
            <span>作业负责人|{{delayjob.jobowner}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>电话|<a href="tel:delayjob.tel">{{delayjob.tel}}</a></span>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    delayjobs: {
      type: Array
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style>
.delayjob{
    width:95%;
    margin:12px auto;
    border:1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 5px;
    /* text-align: center; */
}

.fontstyle{
    font-weight: bold;
    font-size: 110%;
}
.right{
    float: right;
}
</style>
