const router = require('koa-router')()
const neo4j_node_deal=require("../public/javascripts/neo4j_node_deal")


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

router.post('/jsondata', async (ctx, next) => {
  var params=[];
  params[0]=ctx.request.body.userid;
  // //console.log(JSON.stringify(params));
  // neo4j_node_deal.insertQueryFun(params);
  // var tmpsysnodes=sysnodes;
  ctx.body= await neo4j_node_deal.getUserFocusSysInformation(params[0]);
});

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
