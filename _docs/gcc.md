## C

> 实验环境 win7_x64 + cygwin + gcc + gdb

#### 目录说明
* gcc : c99兼容实验代码
* nasm : nasm 汇编
* vc : vc编译器特有与扩展(主要是内嵌汇编)
* coff : pe/elf文件格式，链接、装载与库

* * *

#### 常用命令说明
* `objdump`命令查看.o 文件结构
    - `-h` 显示段内基本信息
    - `-x` 输出更详细的信息
    - `-s` 反汇编
    - `-d` 输出成十六进制
- `file pe` 查看pe文件类型
- `objdump -h pe.o`, `size pe.o`,`objdump -s -d pe.o` 查看段信息
- `readelf -h pe.o` 查看elf文件头信息
- `readelf -S pe.o` 查看elf文件段信息

* * *

#### 汇编工具
* `nasm -f elf64 -o test.o test.asm` 汇编(nasm -hf 查看-f支持的格式)
* `ld test.o -o test.out` 链接(windows ld -m i386pe test.obj )


* * *

#### gcc 基础

* 生成可执行文件四个步骤:
	1. 预处理(Preprocessing)  -> foo.i
	2. 编译(Compilation)	-> foo.s
	3. 汇编 (Assembly)	-> foo.o
	4. 连接(Linking)	->foo.exe/foo.out/foo

* 分步执行生成可执行文件:
    1. 预编译 `gcc -E test.c -o test.i`
    2. 编译为汇编代码 `gcc -S test.i -o test.s`
    3. 编译为目标文件 `gcc -c test.s -o test.o`(cygwin:-fno-leading-underscore防止符号修饰)
    4. 链接 `gcc test.o -o test`
    5. 执行 `./test`

* 一步到位生成可执行文件:
    - 生成 `gcc test.c -o test`
    - 执行 `./test`

* 引用其他的库
    - 编译 `gcc –c –I /usr/dev/mysql/include test.c –o test.o`
    - 动态链接 `gcc –L /usr/dev/mysql/lib –lmysqlclient test.o –o test`
    - 强制静态链接 `gcc –L /usr/dev/mysql/lib –static –lmysqlclient test.o –o test`
    - -I  指定头文件目录
    - -lxxx 指定链接名叫 libXXX.so  或者 libXXX.a 的库
    - -L 指定库所在目录。

* 多个源文件生成可执行文件:
	- `gcc test1.c test2.c -o test`

* 查错:
    - 检查是否符合ansic标准 `gcc -pedantic test.c -o test`
    - 尽可能显示警告 `gcc -Wall test.c -o test`
    - 警告当错误 `gcc -Werror test.c -o test`

* 其他命令
	- -O0 不进行优化处理。
    - -O 或 -O1 优化生成代码。
    - -O2 进一步优化。
    - -O3 比 -O2 更进一步优化，包括 inline 函数。
    - -x language filename。


* * *



