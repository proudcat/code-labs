/* inline.c */

int main()
{
    int a = 10, b = 0;

    __asm__ __volatile__("movl %1, %%eax;\n\r"
                         "movl %%eax, %0;"
                         :"=r"(b)      /* 输出 */
                         :"r"(a)       /* 输入 */
                         :"%eax");     /* 不受影响的寄存器 */

    printf("Result: %d, %d\n", a, b);
}