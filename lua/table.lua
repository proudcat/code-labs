-- table demo

--[[ 
-- {} 可以初始化数组或者table
-- # 可以计算字符串或者table的长度
a = {}
a[1000] = 1
print(table.maxn(a))
print(#a)
print(a[#a]) -- prints the last value of sequence 'a'

array_like_table = {"Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"}
print(array_like_table[4]) --> Wednesday

record_like_table = {x=10, y=20}

polyline = {color="blue",
	thickness=2,
	npoints=4,
	{x=0, y=0}, -- polyline[1]
	{x=-10, y=0}, -- polyline[2]
	{x=-10, y=1}, -- polyline[3]
	{x=0, y=1} -- polyline[4]
}
print(polyline[2].x) --> -10
print(polyline[4].y) --> 1
--]]

--[[  iterate
array_like_table = {"Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"}
for i,v in ipairs(array_like_table) do
	print(i,v)
end

record_like_table = {x=10, y=20}
for k,v in pairs(array_like_table) do
	print(k,v)
end

for k,v in pairs(record_like_table) do
	print(k,v)
end
--]]


---[[
t = {"Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"}
print(#t,t[#t])
table.insert(t,2,"hehe")

print(#t,t[#t])
table.remove(t,1)
print(#t,t[#t])

--]]