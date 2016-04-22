import 'jasmine-core/lib/jasmine-core/jasmine.css!';
import jasmine from 'jasmine-core';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';
import '/testem';

let runTests = window.onload;

var tests = testFiles.map((file) => System.import(file));
Promise.all(tests).then(() => { runTests(); });
