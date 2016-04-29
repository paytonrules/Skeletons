import 'jasmine/jasmine.css!';
import jasmine from 'jasmine';
import 'jasmine/jasmine-html.js';
import 'jasmine/boot';
import '/testem';

let runTests = window.onload;

var tests = testFiles.map((file) => System.import(file));
Promise.all(tests).then(() => { runTests(); });
