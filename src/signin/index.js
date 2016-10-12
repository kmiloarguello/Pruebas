/* SIGN IN */
var page = require("page");
var empty = require("empty-element");
var template = require("./template.js");
var title = require("title");

page('/signin', function(ctx, next) {
    title('KMera - Signin');
    var main = document.getElementById('main-container');
    empty(main).appendChild(template);
})