const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")({
    prefix: "/api" // 父路由, 给路由统一加个前缀 /api
});
const path = require("path");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const glob = require("glob");
const cookie = require("koa-cookie");

const config = require("./db/config");
const { Auth } = require("./middleware/auth");


//跨域处理
app.use(cors());

//post请求参数处理
app.use(bodyParser());

//cookie 设置
router.use(cookie.default());

//用户未授权拦截
app.use(Auth);

//引入routers下所有的api，并使用
glob.sync(path.resolve(__dirname, "./routers", "**/*.js")).forEach(item => {
    let name = path.parse(item).name;
    let func = require(item);
    router.use(`/${name}`, func);
    /*  const phone = require('./routers/phone');
        const user = require('./routers/user');
        //使用phone模块路由
        router.use('/user', user);
        router.use('/phone', phone);
    */
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(config.port);
