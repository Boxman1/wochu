const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/client', { 
      target: 'http://api9.wochu.cn',
      changeOrigin:true 
    }));

}
