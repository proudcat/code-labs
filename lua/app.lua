---[[ >=lua5.2
local clib = require "clib"  --指定包名称
print (">>> LUA程序开始运行了 ")
print(clib.add(1.0,2.0))
print(clib.sub(20.1,19))
--]]

--[[ <=lua5.1
require "clib" 
print(clib.add(1.0,2.0)) -- >=5.2  
print(clib.sub(20.1,19))
--]]