#include <stdio.h>
#include <math.h>
#include <string.h>

#include "lua.h"
#include "lualib.h"
#include "lauxlib.h"


/**
 * test c call lua & lua call c
 * /


/**
 * print the whole stack info
 */
static void stackDump (lua_State *L)
{
    printf("stack: ");
    int i;
    int top = lua_gettop(L);        /* depth of the stack */
    for (i = 1; i <= top; i++)      /* repeat for each level */
    {
        int t = lua_type(L, i);
        switch (t)
        {
        case LUA_TSTRING:   /* strings */
        {
            printf("'%s'", lua_tostring(L, i));
            break;
        }
        case LUA_TBOOLEAN:   /* booleans */
        {
            printf(lua_toboolean(L, i) ? "true" : "false");
            break;
        }
        case LUA_TNUMBER:   /* numbers */
        {
            printf("%g", lua_tonumber(L, i));
            break;
        }
        default:   /* other values */
        {
            printf("%s", lua_typename(L, t));
            break;
        }
        }
        printf(" "); /* put a separator */
    }
    printf("\n"); /* end the listing */
}

/**
 * test c invoke simple lua function
 */
void call_lua_func1(lua_State *L)
{
    int x = 10;
    int y = 15;
    int sum;

    /*load the script*/
    luaL_dofile(L, "lib.lua");

    /*the function name*/
    lua_getglobal(L, "add");

    /*the first argument*/
    lua_pushnumber(L, x);

    /*the second argument*/
    lua_pushnumber(L, y);

    /*call the function with 2 arguments, return 1 result.*/
    lua_call(L, 2, 1);

    /*get the result.*/
    sum = (int)lua_tonumber(L, -1);

    /*cleanup the return*/
    lua_pop(L, 1);

    printf("The sum is %d \n", sum);
}

/**
 * test c invoke complicated lua function
 */
int call_lua_func2(lua_State *L)
{
    char *szInParam = "This is an [IN] parameter";
    int iParam1 = 20, iParam2 = 50;

    /*load the script*/
    luaL_dofile(L, "lib.lua");

    lua_pcall(L, 0, 0, 0);

    lua_getglobal(L, "fnex2");
    lua_pushstring(L, szInParam);
    lua_pushnumber(L, iParam1);
    lua_pushnumber(L, iParam2);

    /*call the function with 3 arguments, return 2 result.*/
    lua_call(L, 3, 2);

    /*get the result.*/
    if (lua_isstring(L, -1) && lua_isnumber(L, -2))
    {
        printf("Ret_1(string): %s\n" , lua_tostring(L, -1));
        printf("Rec_2(double): %f\n" , lua_tonumber(L, -2));
    }
    else
    {
        printf("Wrong Return Values");
    }

    lua_pop(L, 2);   //只需要清理Return Value，pcall调用的入栈参数会自动清理
    return 0;
}

/**
 * test stack operations
 */
void test_stack(lua_State *L)
{
    // int lua_gettop(lua_State* L); --返回栈中元素的个数。
    // void lua_settop(lua_State* L, int index); --将栈顶设置为指定的索引值。
    // void lua_pushvalue(lua_State* L, int index); --将指定索引的元素副本压入栈。
    // void lua_remove(lua_State* L, int index); --删除指定索引上的元素，其上面的元素自动下移。
    // void lua_insert(lua_State* L, int index); --将栈顶元素插入到该索引值指向的位置。
    // void lua_replace(lua_State* L, int index); --弹出栈顶元素，并将该值设置到指定索引上。

    lua_pushboolean(L, 1);
    lua_pushnumber(L, 10);
    lua_pushnil(L);
    lua_pushstring(L, "hello");

    stackDump(L); /* true 10 nil 'hello' */

    //copy value at -4 and push stack
    lua_pushvalue(L, -4);
    stackDump(L); /* true 10 nil 'hello' true */

    //pop stack and set value to index of 3
    lua_replace(L, 3);
    stackDump(L);/* true 10 true 'hello' */

    lua_settop(L, 6);
    stackDump(L);/* true 10 true 'hello' nil nil */

    lua_remove(L, -3);
    stackDump(L);/* true 10 true nil nil */

    lua_settop(L, -5);
    stackDump(L);/* true */
}

/*
 * get table field
 */
int getcolorfield (lua_State *L, const char *key)
{
    int result;
    lua_pushstring(L, key); /* push key 1*/
    lua_gettable(L, -2); /* pop key 1, push table[1] */
    if (!lua_isnumber(L, -1))
        error(L, "invalid component in background color");
    result = lua_tonumber(L, -1);
    lua_pop(L, 1); /* remove number */
    return result;
}

/**
 *  test table operations
 */
void test_table(lua_State *L)
{
    /*load the script*/
    luaL_dofile(L, "config.lua");

    lua_getglobal(L, "background");//push table

    if (!lua_istable(L, -1))
    {
        error(L, "background is not a table");
    }

    int red =  getcolorfield(L, "r");
    int green =  getcolorfield(L, "g");
    int blue =  getcolorfield(L, "b");

    printf("The red is %d \n", red);
    printf("The green is %d \n", green);
    printf("The blue is %d \n", blue);
}

//待Lua调用的C注册函数。
static int add2(lua_State *L)
{
    //检查栈中的参数是否合法，1表示Lua调用时的第一个参数(从左到右)，依此类推。
    //如果Lua代码在调用时传递的参数不为number，该函数将报错并终止程序的执行。
    double op1 = luaL_checknumber(L, 1);
    double op2 = luaL_checknumber(L, 2);
    //将函数的结果压入栈中。如果有多个返回值，可以在这里多次压入栈中。
    lua_pushnumber(L, op1 + op2);
    //返回值用于提示该C函数的返回值数量，即压入栈中的返回值数量。
    return 1;
}

const char *testfunc = "print(add2(1.0,2.0)) print(sub2(20.1,19))";

//另一个待Lua调用的C注册函数。
static int sub2(lua_State *L)
{
    double op1 = luaL_checknumber(L, 1);
    double op2 = luaL_checknumber(L, 2);
    lua_pushnumber(L, op1 - op2);
    return 1;
}

//C函数作为应用程序的一部分
int call_c_function(lua_State *L)
{
    lua_register(L, "add2", add2);//lua_pushcfunction(L,add2)  lua_setglobal(L,"add2")
    lua_register(L, "sub2", sub2);

    //在注册完所有的C函数之后，即可在Lua的代码块中使用这些已经注册的C函数了。
    if (luaL_dostring(L, testfunc))
        printf("Failed to invoke.\n");
    return 0;
}

int main(int argc, char *argv[])
{
    /*the lua interpreter*/
    lua_State *L;

    /*initialize Lua*/
    L = luaL_newstate();

    /*load Lua base libraries*/
    luaL_openlibs(L);
    // luaopen_base(L);
    // luaopen_table(L);
    // luaopen_string(L);
    // luaopen_math(L);

    //打开下面相应的注释即可测试相关功能
    // call_lua_func1(L);
    // call_lua_func2(L);
    // test_stack(L);
    // test_table(L);
    call_c_function(L);

    /*cleanup Lua*/
    lua_close(L);

    return 0;
}