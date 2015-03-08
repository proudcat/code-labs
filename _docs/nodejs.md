## Nodejs

> 环境 win7_x64 + nodejs_v0.10.25

### Tips

1. 将变量转成boolean不能直接用Boolean构造，任何非空的字符串都会被当作true。
```javascript
var myBool = Boolean("false");	// == true
var myBool = !!"false";		// == true
myFalse = new Boolean(false);   // initial value of false
g = Boolean(myFalse);       // initial value of true
```
2. 