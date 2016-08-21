//可用于一些调试信息
var debug = require('./debug');
//console.log(process.env.DEBUG)
var loggerServer = debug('logger:server ');
//调用此函数在控制台输出日志
//输出时，会用此日志记录器的名字和环境变量中的DEBUG值进行比较。如相同，
loggerServer('server')
var loggerClient = debug('logger:client ');

loggerClient("client")
