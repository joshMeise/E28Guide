var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "basic-syntax",
  "level": "1",
  "url": "basic-syntax.html",
  "type": "Subsection",
  "number": "1.1",
  "title": "Basic Syntax",
  "body": " Basic Syntax  #include <stdio.h> int main(void) { printf(\"Hello, World!\\n\"); return (0); }  Output:  Hello, World!  Things to note:     Each line ends with a semicolon.    Code blocks are enclosed with braces.    The main() function is of type int which means that it returns an integer - 0 to indicate that the code compiled and ran successfully.     void means that the main function takes no inputs.     \\n is an escape sequence that prints onto a new line.    Single line comments use a double backslash: \/\/comment     Comment blocks\/multi-line comments are enclosed like this: \/*…comment…*\/      ENGS 20 C Book links:                     "
},
{
  "id": "variables",
  "level": "1",
  "url": "variables.html",
  "type": "Subsection",
  "number": "1.2",
  "title": "Variables",
  "body": " Variables  Datatypes and format specifiers:     Integers: int → %d     Characters: char → %c     Floats: float → %f      #include <stdio.h> int main(void) { int var1, var_two; int varThree = 6; var1 = 2; var_two = -3; printf(\"One = %d, two = %d and three = %d\\n\", var1, var_two, varThree); return(0); }  Output:  One = 2, two = -3 and three = 6  Things to note:     Variables may be declared and initialized on the same line.    Variables may be declared first and initialized separately.     %d is the format specifier for an integer.    Variable names may start with letters or underscores.     ENGS 20 C Book Links           "
},
{
  "id": "integer-division-and-casting",
  "level": "1",
  "url": "integer-division-and-casting.html",
  "type": "Subsection",
  "number": "1.3",
  "title": "Integer division and casting:",
  "body": " Integer division and casting:  #include <stdio.h> int main(void) { int var1 = 5; int var2 = 3; int res1; float res2, res3; res1 = var1\/var2; \/\/ integer division res2 = var1\/var2; \/\/ integer division res3 = (float)var1\/var2; \/\/ cast var1 to a float printf(\"var1\/var2 = %d\\n\", res1); printf(\"var1\/var2 = %f\\n\", res2); printf(\"(float)var1\/var2 = %f\\n\", res3); printf(\"(int)res3 = %d\\n\", (int)res3); return(0); }  Output:  var1\/var2 = 1  var1\/var2 = 1.000000  (float)var1\/var2 = 1.666667  (int)res3 = 1  Things to note:     It is easy to convert between datatypes in C by casting.    Casting is done by placing the data type to which we want to convert in front of the current variable in parentheses.    Dividing integers in C yields an unexpected result.    C does not round; it simply cuts off decimal points.    In order to obtain a correct value, one of the values in the division needs to be converted or \"cast\" to a float.     ENGS 20 Book links:           "
},
{
  "id": "loops",
  "level": "1",
  "url": "loops.html",
  "type": "Subsection",
  "number": "1.4",
  "title": "Loops",
  "body": " Loops  #include <stdio.h> int main(void) { int i; \/\/ For loop for (int j = 0; j < 3; j++) { printf(\"My value is: \"); printf(\"j = %d\\n\", j); } \/\/ For loop with single line of code for (int j = 0; j < 3; j++) printf(\"I only contain a single line of code.\\n\"); \/\/ Always initialize while loop counter. i = 0; \/\/ While loop while (i < 3) { printf(\"i = %d\\n\", i); i++; } return(0); }  Output:  My value is: j = 0  My value is: j = 1  My value is: j = 2  I only contain a single line of code.  I only contain a single line of code.  I only contain a single line of code.  i = 0  i = 1  i = 2  Things to note:     For loop counters may be initialized in the loop itself or at the top of the function.    For loop syntax:    i = 0; This initializes the loop counter to have the value 0.     i < 3; The terminating condition is when i is equal to 3 (i.e. no longer less than 3).     i++; This is analogous to i = i + 1 and increments the loop counter, i , by 1 each time the loop runs.       Loops with more than one line of code need to have their contents enclosed in braces.    While loop counters need to be initialized.   Additional information: Most C-compilers initialize integer variables to have a random value. This means that counter or sum variables always need to be initialized to 0.       Ensure while loop conditions change within the loop - prevent infinite loops!    While loops may contain multiple conditions.     ENGS 20 C Book links:                     "
},
{
  "id": "subsec-branching-and-logic",
  "level": "1",
  "url": "subsec-branching-and-logic.html",
  "type": "Subsection",
  "number": "1.5",
  "title": "Branching and Logic",
  "body": " Branching and Logic  #include <stdio.h> int main(void) { int sunny, cold; sunny = 1; \/\/ True cold = 0; \/\/ False if(sunny) printf(\"Remember your sunglasses.\\n\"); else printf(\"It's a gloomy day today.\\n\"); if(!cold) printf(\"No jacket needed!\\n\"); else printf(\"Bring a jacket!\\n\"); if (sunny && cold){ \/\/ Sunny and cold printf(\"Remember your sunglasses.\\n\"); printf(\"Bring a jacket!\\n\"); } else if (sunny && !cold){ \/\/ Sunny and not cold printf(\"Sunglasses, but no jacket necessary.\\n\"); } else if (!sunny || cold) { \/\/ Not sunny or cold printf(\"Today might be a glum day.\\n\"); } else { printf(\"I can't predict today's weather.\\n\"); } return(0); }  Output:  Remember your sunglasses.  No jacket needed!  Sunglasses, but no jacket necessary.  Things to note:     0 is evaluated as false in C.    1 (or any other integer value) are evaluated as true.    As with loops, if statements with only a single line of code need not have their contents enclosed in braces.    If statements may contain complex conditions.     ENGS 20 C Book links:           "
},
{
  "id": "subsec-more-branching",
  "level": "1",
  "url": "subsec-more-branching.html",
  "type": "Subsection",
  "number": "1.6",
  "title": "More Branching",
  "body": " More Branching  #include <stdio.h> int main(void) { char operation; int a = 3, b = 5, res; operation = '*'; switch(operation) { case '+': res = a + b; break; case '-': res = a - b; break; case '*': res = a*b; break; case '\/': res = a\/b; break; case '%': res = a%b; break; default: \/\/ Optional. res = 0; } printf(\"%d %c %d = %d\\n\", a, operation, b, res); return(0); }  Output:  3 * 5 = 15  Things to note:     A switch statement first contains the condition on which you are branching.    It then contains multiple cases.    The break statement causes the switch statement to only execute up to the point at which a condition has been met.    The default case is optional, does not contain a break statement and executes only if none of the other conditions have been met.     ENGS 20 C Book links:           "
},
{
  "id": "subsec-functions",
  "level": "1",
  "url": "subsec-functions.html",
  "type": "Subsection",
  "number": "1.7",
  "title": "Functions",
  "body": " Functions  #include <stdio.h> \/\/ Function prototypes int addingFunc(int x, int y); void printingFunc(int res); int main(void) { int a, b, res; a = 3; b = 9; res = addingFunc(a, b); printingFunc(res); return(0); } \/* Inputs: Two integers to be added. * Output: Result of the addition of the two integers. *\/ int addingFunc(int x, int y) { int result; result = x + y; return result; } \/* Inputs: Integer contains result of addition. * Output: None. *\/ void printingFunc(int res) { printf(\"The result of the addition is %d.\\n\", res); }  Output:  The result of the addition is 12.  Things to note:     Function prototypes included at the top of the program after library declarations.   Contain return type, function name and input variable types.       Parameters passed to functions when called do not need to contain data types.    Variables may or may not be named the same in functions as where they were sent from (more on this in variable scope).    Return types:    int returns an integer     float returns a float     char returns a character     void does not return anything        ENGS 20 C Book links:                     "
},
{
  "id": "subsec-variable-scope",
  "level": "1",
  "url": "subsec-variable-scope.html",
  "type": "Subsection",
  "number": "1.8",
  "title": "Variable Scope",
  "body": " Variable Scope  #include <stdio.h> #define ONE 1 \/\/ Defines a constant ONE to have value 1. int a = 4; \/\/ Defines a global variable 'a' to have value 4. \/\/ Function prototypes int mathFunc(int x); void printingFunc(int); int main(void) { int b, res; b = 9; a += 4; \/\/ Add 4 to the value of 'a'; a = 8 now. res = mathFunc(b); res -= ONE; \/\/ Subtract 1 from current value of 'res'. printingFunc(res); return(0); } \/* Inputs: One integer. * Output: Result of an operation on integer. *\/ int mathFunc(int y) { int result; result = (ONE + y)*a; \/\/ Use constant and global variable. return result; } \/* Inputs: Integer contains result of mathematical operation. * Output: None *\/ void printingFunc(int res) { printf(\"The result of the addition is %d.\\n\", res); }  Output:  The result of the addition is 79.  Things to note:     Global variables and constants are defined at the top of the program, after library header files have been included.    Constants may be defined with a #define command.   This saves memory as each instance of the constant in the code is replaced with the value given to said constant at compile time.    The value of such constants cannot change.       Global variables are accessible by all functions in the program.   Their value can be changed throughout the program.        ENGS 20 C Book links:           "
},
{
  "id": "subsec-linux-commands",
  "level": "1",
  "url": "subsec-linux-commands.html",
  "type": "Subsection",
  "number": "2.1",
  "title": "Linux Commands",
  "body": " Linux Commands   Linux Commands    Task:  Command:    Find Arduino's USB port  ls \/dev\/tty.usb*    Navigate to a certain folder\/ change directory  cd pathway    Terminate program  Ctrl + c    Clear terminal window  Ctrl + l    List directories in current folder  ls    Make a new directory  mkdir directory name    Create a new file  touch file name    Print current directory  pwd    Open screen  screen \/dev\/tty.usbmodem14501 9600    Quit screen  Ctrl + k + a     "
},
{
  "id": "table-1",
  "level": "2",
  "url": "subsec-linux-commands.html#table-1",
  "type": "Table",
  "number": "2.1",
  "title": "Linux Commands",
  "body": " Linux Commands    Task:  Command:    Find Arduino's USB port  ls \/dev\/tty.usb*    Navigate to a certain folder\/ change directory  cd pathway    Terminate program  Ctrl + c    Clear terminal window  Ctrl + l    List directories in current folder  ls    Make a new directory  mkdir directory name    Create a new file  touch file name    Print current directory  pwd    Open screen  screen \/dev\/tty.usbmodem14501 9600    Quit screen  Ctrl + k + a    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
