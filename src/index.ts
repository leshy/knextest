import {knex, Knex} from "knex";

const x: Knex.QueryBuilder = knex({}).where('a', 2);
console.log(x)
