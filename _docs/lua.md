## Lua
> 实验环境 ubuntu12.04/win7_x64 + lua5.2

### ubuntu下环境搭建
	* 方式一：apt-get
		+ apt-get install lua5.2
		+ apt-get install liblua5.2-dev (lua头文件和库文件，c调用lua时候用)
	* 方式二:源码方式安装
		+ wget http://xxxx.luaxx.tar.gz
		+ tar -cvf lua-xxx.tar.gz
		+ ./configure && make && make install


### lua常用命令行
	* lua xxx.lua : 执行lua
	* -e: 直接执行命令行中Lua代码，如：lua -e "print(\"Hello World\")"
	* -l: 加载Lua库文件，如：lua -l mylib -e "x = 10"，先加载mylib中的Lua代码，后面的命令可使用该文件中的函数。
	* -i: 在执行完指定的Lua程序文件之后，并不退出解释器程序，而是直接进入该程序的交互模式。


### c调用lua
	* 首先确定lua头文件和lua库位置(updatedb && locate lua.h|liblua)
	* 打开app.c main函数里面相应的注释即可测试相应的功能。
	* 编译(后面的[]表示可选的意思) : gcc -o app app.c -I /usr/include/lua5.2/ [-L /usr/lib/x86_64-linux-gnu/] -llua5.2
	* 执行 : ./app
	* 说明: app.c-->lib.lua ,  app.c-->config.lua


### lua调用c
	* 首先确定lua头文件和lua库位置(updatedb && locate lua.h|liblua)
	* 编译so: gcc clib.c -I /usr/include/lua5.2/ [-L /usr/lib/x86_64-linux-gnu/] -llua5.2 -fPIC -shared -o clib.so
	* 运行: lua app.lua
	* 说明: app.c-->lib.lua,app.c-->config.lua,app.lua-->lib.c


### 栈操作：
压栈：
* void lua_pushnil(lua_State* L);  --nil值
* void lua_pushboolean(lua_State* L, int b); --布尔值
* void lua_pushnumber(lua_State* L, lua_Number n); --浮点数
* void lua_pushinteger(lua_State* L, lua_Integer n);  --整型
* void lua_pushlstring(lua_State* L, const char* s, size_t len); --指定长度的内存数据
* void lua_pushstring(lua_State* L, const char* s);  --以零结尾的字符串，其长度可由strlen得出。

查询栈： 成功返回1，否则返回0。
* int lua_isboolean (lua_State *L, int index);
* int lua_iscfunction (lua_State *L, int index);
* int lua_isfunction (lua_State *L, int index);
* int lua_isnil (lua_State *L, int index);
* int lua_islightuserdata (lua_State *L, int index);
* int lua_isnumber (lua_State *L, int index);
* int lua_isstring (lua_State *L, int index);
* int lua_istable (lua_State *L, int index);
* int lua_isuserdata (lua_State *L, int index);

转换函数：
* int lua_toboolean (lua_State *L, int index);
* lua_CFunction lua_tocfunction (lua_State *L, int index);
* lua_Integer lua_tointeger (lua_State *L, int index);
* const char *lua_tolstring (lua_State *L, int index, size_t *len);
* lua_Number lua_tonumber (lua_State *L, int index);
* const void *lua_topointer (lua_State *L, int index);
* const char *lua_tostring (lua_State *L, int index);
* void *lua_touserdata (lua_State *L, int index);


> 对于上述函数，如果调用失败，lua_toboolean、lua_tonumber、lua_tointeger和lua_objlen均返回0，而其他函数则返回NULL。
在很多时候0不是一个有效的判断错误的值，但是ANSI C没有提供其他可以表示错误的值。
因此对于这些函数，在有些情况下需要先使用lua_is*函数判断是否类型正确，剩下的函数可以直接通过判断返回值是否为NULL即可。
对于lua_tolstring函数返回的指向内部字符串的指针，在该索引指向的元素被弹出之后，将无法保证仍然有效。该函数返回的字符串末尾均会有一个尾部0。


其他
* 获取元素的类型：int lua_type (lua_State *L, int index);
* type : LUA_TNIL、LUA_TNUMBER、LUA_TBOOLEAN、LUA_TSTRING、LUA_TTABLE、LUA_TFUNCTION、LUA_TUSERDATA、LUA_TTHREAD和LUA_TLIGHTUSERDATA。
* 空槽位： int lua_checkstack(lua_State* L, int extra) --期望得到extra数量的空闲槽位，如果不能扩展并获得，返回false。
