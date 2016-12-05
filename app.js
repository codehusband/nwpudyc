/**
 * Created by Dang_yc on 2016/11/16.
 */

var session = require('express-session');
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(session({
    resave: true, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'love'
}));

app.use(function(req,res,next){
    if (!req.session.user) {
        if(req.url=="/login"){
            next();//如果请求的地址是登录则通过，进行下一个请求
        }
        else
        {
            res.redirect('/login');
        }
    } else if (req.session.user) {
        next();
    }
});

app.get('/login',function(req,res){
    res.render("login");
});
app.post('/login',function(req,res){
    if(req.body.username=="love" && req.body.password=="love"){
        var user = {'username':'love'};
        req.session.user = user;
        res.redirect('/admin/app/list');
    }
    else
    {
        res.redirect('/login');
    }
});
app.get('/logout',function(req,res){
    req.session.user = null;
    res.redirect('/login');
});