<template>
  <div>
      <div class="wrongjob" v-for="wrongjob in wrongjobs" :key="wrongjob.id">
             <span className="fontstyle">报错作业:{{wrongjob.name}}</span>
            <br />
            <span className="fontstyle">报错信息:{{wrongjob.information}}</span>
            <br />
            <span>作业负责人|{{wrongjob.jobowner}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>电话|<a href="tel:wrongjob.tel">{{wrongjob.tel}}</a></span>
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
    wrongjobs: {
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
.wrongjob{
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
