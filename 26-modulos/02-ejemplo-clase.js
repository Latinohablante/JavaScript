// 
import * as mod1 from "./01-export.js";
import {PI as PII} from "./03-conflicto-nombres.js";
import msj from "./04-export-default.js"

console.log(mod1.suma(2,5));
console.log("PI: " + mod1.PI);
console.log("Raiz de 2: " + mod1.r2);
console.log("PI con más dígitos: " + PII);
console.log(msj());