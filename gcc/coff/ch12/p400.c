/* p400.c
page 400
*/

int main()
{
  int ret;
  char msg[] = "Hello\n";
  __asm__ volatile (
    "call *%%esi"
    : "=a" (ret)
    : "a" (4),
    "S" (0xffffe000),
    "b" ((long) 1),
    "c" ((long) msg),
    "d" ((long) sizeof(msg)));
    
  return 0;
}
