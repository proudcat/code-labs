---[[
]]
function foo()
	return 1,2,3
end

print(foo())

function add(...)
	print(select('#',...))
	local s = 0
	for i,v in ipairs{...} do
		s = s+ v
	end
	return s
end

print(add(3,4,534,56,7))