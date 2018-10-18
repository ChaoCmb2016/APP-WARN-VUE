<template>
  <div>
      <div class="delayjob" v-for="delayjob in delayjobs" :key="delayjob.id">
            <span class="fontstyle">延迟作业:{{delayjob.name}}</span>
            <br />
            <span class="fontstyle">延迟{{delayjob.minutes}}分钟,
            剩余{{delayjob.num_of_prejobs}}个作业</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{{delayjob.state}}</span>
            <br />
            <span>作业负责人|{{delayjob.jobowner}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>电话|{{delayjob.tel}}</span>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style>

</style>
