
--[[ type nil boolean number string table function userdata thread
print(type("Hello world")) --> string
print(type(10.4*3)) --> number
print(type(print)) --> function
print(type(type)) --> function
print(type(true)) --> boolean
print(type(nil)) --> nil
print(type(type(X))) --> string
--]]


-- 转义符	描述
-- \a	响铃
-- \b	退格
-- \n	换行
-- \r	回车
-- \t	水平Tab
-- \\	反斜杠
-- \"	双引号
-- \'	单引号

-- 在Lua中还可以通过[[ all strings ]]的方式来禁用[[ ]]中转义字符，如：
-- page = [[ <html> <head> <title> An Html Page </title> </head> ]]
-- 如果两个方括号中包含这样的内容：a = b[c[i]]，这样将会导致Lua的误解析，
-- 因此在这种情况下，我们可以将其改为[===[ 和 ]===]的形式，从而避免了误解析的发生。



--[[ number
x = math.pi
print(x - x%0.01)  -->3.14
--]]

--[[ logical operator
print(4 and 5) --> 5
print(nil and 13) --> nil
print(false and 13) --> false
print(4 or 5) --> 4
print(false or 5) --> 5

print(not nil) --> true
print(not false) --> true
print(not 0) --> false
print(not not 1) --> true
print(not not nil) --> false
--]]

-- nil & false 为假 其他都为真。

--[[string
a = "Hello"
print(a .. " World") --> Hello World
print(a) --> Hello
--]]

--[[
-- 在Lua中全局变量不需要声明，直接赋值即可。
-- 如果直接访问未初始化的全局变量，Lua也不会报错，直接返回nil。
-- 如果不想再使用该全局变量，可直接将其置为nil。
print(b)
b=10
print(b)
b=nil
print(b)
for n in pairs(_G) do print(n) end
-- print(os.getenv("PATH"))
-- os.execute("dir")
 --]]

 ---[[  # 
a = "hello"
print(#a)
 --]]