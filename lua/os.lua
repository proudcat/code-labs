
---[[   函数os.clock()返回CPU时间的描述，通常用于计算一段代码的执行效率
local x = os.clock()
local s = 0
for i = 1, 100000000 do 
    s = s + i 
end
print(string.format("elapsed time: %.2f\n", os.clock() - x))

--]]

---[[
print(os.getenv("PATH"))
os.execute("ls")
print(os.time())
--]]