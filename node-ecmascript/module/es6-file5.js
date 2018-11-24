// Syntax: import defaultExport, * as name from "Module-name or File-path";
import myModule, {sayHello, HELLO} from './es6-module-file.js';

console.log(  HELLO ); // Hello Everybody

myModule.sayHello("Tom")  ; // Hello Tom
