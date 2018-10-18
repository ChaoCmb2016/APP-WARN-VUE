const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/jsondata', async (ctx, next) => {
  var sysnodes=[
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
  var tmpsysnodes=sysnodes;
  
  ctx.body = {
    sysnodes:sysnodes,
  tmpsysnodes:tmpsysnodes}
})

router.get('/jsondatadetail', async (ctx, next) => {
  var wrongjobs=[
    {
      id: 1, name: "FR_CRDA_FLTV003W", information: "拷贝报错", jobowner: "董超/374724",
      tel: "13616528673", 
    },
    {
      id: 2, name: "FR_CRDA_FLTV004W", information: "拷贝报错", jobowner: "董超/374724",
      tel: "13616528673", 
    },
    {
      id: 3, name: "FR_CRDA_FLTV004W", information: "拷贝报错", jobowner: "董超/374724",
      tel: "13616528673", 
    }
  ];

  var delayjobs=[
    {
      id: 1, name: "FR_CRDA_FLTV003W", minutes: "12", num_of_prejobs: "13",
      jobowner:"董超/374724",  tel: "13616528673", 
    },
    {
      id: 2, name: "FR_CRDA_FLTV004W", minutes: "12", num_of_prejobs: "13",
       jobowner: "董超/374724",tel: "13616528673", 
    },
    {
      id: 3, name: "FR_CRDA_FLTV004W", minutes: "12", num_of_prejobs: "13",
       jobowner: "董超/374724",tel: "13616528673", 
    }
  ];
  var otherjobs=[];
  
  ctx.body = {
    wrongjobs:wrongjobs,
    delayjobs:delayjobs,
    otherjobs:otherjobs}
})




module.exports = router
