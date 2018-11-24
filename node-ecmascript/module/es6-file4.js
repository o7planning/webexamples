// Syntax: import { export as alias } from "Module-name or File-path";
import {sayHello as mySayHello, HELLO} from './es6-module-file.js';

console.log(  HELLO ); // Hello Everybody

mySayHello("Tom")  ; // Hello Tom
