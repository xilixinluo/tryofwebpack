### step1
> this is the first step of learning webpack, you should install node ,npm and webpack with -g before carring out below operations.
```
npm init
npm install webpack --save
webpack ./src/js/app.js bundle.js

```
the bundle.js will created.

### step2

> this step the module has been require in the entry JS.

```
webpack ./src/js/app.js bundle.js

```
### step3
> this step we can deal with style,we need loader for help.

```
npm install css-loader --save
npm install style-loader --save
webpack ./src/js/app.js bundle.js

```
open index.html in browser

### step4
全局安装webpack 后，执行webpack 即可
