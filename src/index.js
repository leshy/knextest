"use strict";
exports.__esModule = true;
var knex_1 = require("knex");
var x = (0, knex_1.knex)({}).where('a', 2);
console.log(x);
