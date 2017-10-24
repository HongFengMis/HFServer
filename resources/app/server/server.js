var express = require('express'),
    app     = express(),
    http    = require('http'),
    server  = http.Server(app),
    io      = require('socket.io')(server),
    path    = require('path'),
    ejs     = require('ejs'),
    fs      = require('fs'),
    $       = require('jquery');

// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var session = require('express-session');

// var login = require('./routes/login');
// var main = require('./routes/main');

////////////// 服务器模块 /////////////
var port = 3009;
var uri  = "resources/app/";

app.set('views', uri+'root');
app.use(express.static(uri+'root'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// app.use(bodyParser.urlencoded({ extended: false }));
//    //parse application/json
// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(session({
//     secret: "Server",
//     cookie: {maxAge: 1000 * 60 * 60 * 24 * 10},//10 days
//     resave: false,
//     saveUninitialized: true
// }));

//讲解员端
app.get('/guide', function(req, res){
    res.render('guide', {});
});

// login(app);
// main(app);

server.listen(port, function() {
    console.log('中控Server端系统(端口：'+port+')');
});