"use strict";
const P1 = {
  id: 'p1', world: 'Lantern Village', topic: 'Java basics',
  blurb: `Variables, math, decisions, loops, arrays, methods and text. The ground floor everything else stands on.`,
  lessons: [
  {
    id: 'p1-hello', icon: '>_', title: 'Hello, Java',
    story: [
      `A computer is a super fast helper that only follows <b>very exact</b> orders. Java is a language for writing those orders.`,
      `You write your orders in a file like <code>Hello.java</code>. A tool called <code>javac</code> turns it into <b>bytecode</b> (a <code>.class</code> file). Then the <b>JVM</b> (Java Virtual Machine) reads the bytecode and runs it.`,
      `Think of the JVM as a translator that lives on every computer. Windows, Mac, Linux, phones: each has its own translator, so the same bytecode runs everywhere. Java's old slogan was "write once, run anywhere".`,
      `Every Java program starts at a method called <code>main</code>. It's the front door of your house: the JVM always walks in there first.`
    ],
    syntax: [
      { c: `public class Hello {
  public static void main(String[] args) {
    System.out.println("Hi, I'm Java!");
  }
}`, n: `The smallest full program. The class name must match the file name: <code>Hello</code> lives in <code>Hello.java</code>. Every line that does something ends with <code>;</code>.` },
      { c: `System.out.println("one line");
System.out.print("same ");
System.out.print("line");`, n: `<code>println</code> prints, then jumps to a new line. <code>print</code> stays on the same line. Output: <code>one line</code> then <code>same line</code>.` },
      { c: `// a note for humans, Java skips it
/* a note that
   spans many lines */`, n: `Comments. Java ignores them. Use them to explain the "why" to future you.` },
      { c: `javac Hello.java   // makes Hello.class
java Hello         // runs it`, n: `What happens in the terminal. Your IDE (IntelliJ) does both steps when you press the green play button.` }
    ],
    ex: [
      { t: 'fill', p: `Finish the program so it prints <code>Welcome to the dojo</code>.`, c: `public class Dojo {
  public static void [[main]](String[] args) {
    System.out.[[println]]("Welcome to the dojo");
  }
}`, h: `The front-door method has a 4-letter name. The print that jumps to a new line ends with "ln".` },
      { t: 'out', p: `What does this print?`, c: `System.out.print("Ja");
System.out.print("va");
System.out.println("!");`, a: ['Java!'], h: `<code>print</code> never jumps to a new line, so all three pieces glue together.`, e: `The three pieces stick together on one line: <code>Java!</code>` }
    ],
    quiz: [
      { q: `Who actually runs your bytecode?`, o: ['The JVM', 'javac', 'The keyboard', 'The internet'], a: 0, w: `javac only translates your code into bytecode. The JVM is the one that runs it.` },
      { q: `You write <code>public class Robot</code>. What must the file be called?`, o: ['robot.txt', 'Main.java', 'Robot.java', 'Robot.exe'], a: 2, w: `A public class must live in a file with exactly the same name, plus <code>.java</code>.` },
      { q: `Which line does Java skip?`, o: ['System.out.println("hi");', '// say hi', 'main', '}'], a: 1, w: `Anything after <code>//</code> on a line is a comment.` }
    ],
    wild: [
      `Android apps were built in Java for years, and Java still runs huge parts of banks, airlines and online shops.`,
      `A tiny version called Java Card runs on billions of SIM cards and bank chip cards.`,
      `Minecraft Java Edition is, as the name says, written in Java.`
    ],
    fact: `Java was first called <b>Oak</b>, after a tree outside the office of its creator, James Gosling. And every compiled <code>.class</code> file starts with the same four bytes: <code>CA FE BA BE</code>.`
  },
  {
    id: 'p1-vars', icon: 'x=', title: 'Variables & Types',
    story: [
      `A variable is a <b>labeled box</b>. The label is its name. What's inside is its value.`,
      `In Java, every box also has a <b>type</b>: what kind of thing fits inside. A box for whole numbers can't hold words. A box for true/false can't hold 3.5.`,
      `That sounds strict, but it's a gift: Java catches the mistake before your program even runs, instead of crashing later in front of your users.`
    ],
    syntax: [
      { c: `int lives = 3;              // whole numbers
long views = 9000000000L;   // really big whole numbers (add L)
double price = 4.99;        // numbers with a dot
boolean isNight = true;     // only true or false
char grade = 'A';           // ONE character, single quotes
String name = "Kenji";      // text, double quotes`, n: `The everyday types. <code>String</code> starts with a capital letter because it's a class, not a basic type. More on that in Phase 2.` },
      { c: `int score;    // make the box
score = 10;   // put 10 in
score = 25;   // throw 10 away, put 25 in`, n: `<code>=</code> means "put into", not "is equal to". You can make the box and fill it later.` },
      { c: `final int MAX_LEVEL = 99;
MAX_LEVEL = 100;   // error: it's locked`, n: `<code>final</code> locks the box forever. Constant names are written in CAPITALS by habit.` },
      { c: `var city = "Kyoto";   // Java guesses: String
var year = 2026;      // Java guesses: int`, n: `<code>var</code> lets Java guess the type from the value. It only works inside methods, and only when you give a value right away.` }
    ],
    ex: [
      { t: 'fill', p: `A shop needs to store one item. Pick the right type for each box.`, c: `[[String]] item = "Paper lantern";
[[double]] price = 12.5;
[[int]] stock = 40;
[[boolean]] onSale = false;`, h: `Text, a number with a dot, a whole number, and a yes/no answer.` },
      { t: 'out', p: `What does this print?`, c: `int a = 5;
a = a + 2;
a = a * 3;
System.out.println(a);`, a: ['21'], h: `Go line by line. After line 2, a is 7.`, e: `5, then 5 + 2 = 7, then 7 × 3 = <code>21</code>.` }
    ],
    quiz: [
      { q: `Which type fits <code>3.14</code>?`, o: ['int', 'double', 'boolean', 'char'], a: 1, w: `It has a dot, so it's a <code>double</code>.` },
      { q: `Which one is a <code>char</code>?`, o: ['"J"', "'J'", 'J', '"Java"'], a: 1, w: `A char is one character in single quotes. Double quotes make a String.` },
      { q: `What does <code>final</code> do?`, o: ['Ends the program', 'Makes the value unchangeable', 'Makes it faster', 'Deletes the box'], a: 1, w: `Once a final box is filled, it stays that way.` }
    ],
    wild: [
      `Your battery percent, a song's length, the number of unread messages, your health bar in a game: all variables somewhere.`,
      `Banks use precise types for money. Many store amounts as whole cents (a <code>long</code>) to avoid tiny decimal errors.`
    ],
    factTag: 'true story',
    fact: `In 1996 the Ariane 5 rocket exploded about 37 seconds after launch. A 64-bit decimal number was squeezed into a 16-bit integer box that was too small, the software crashed, and the rocket destroyed itself. Choosing the right type matters.`
  },
  {
    id: 'p1-math', icon: '+-', title: 'Math & Operators',
    story: [
      `Java is a calculator that never gets tired. <code>+ - * /</code> work like at school.`,
      `Two surprises. First: dividing two whole numbers throws the decimals away. <code>7 / 2</code> is <code>3</code>, not 3.5.`,
      `Second: <code>%</code> gives the <b>remainder</b>, the leftovers. Share 7 sweets between 2 kids: each gets 3, and 1 is left. So <code>7 % 2</code> is <code>1</code>.`
    ],
    syntax: [
      { c: `7 + 2     // 9
7 - 2     // 5
7 * 2     // 14
7 / 2     // 3    int / int drops the decimals
7.0 / 2   // 3.5  one double = real division
7 % 2     // 1    the leftover`, n: `The basic five. If you want decimals, make at least one side a <code>double</code>.` },
      { c: `x += 5;   // same as x = x + 5
x -= 1;   // same as x = x - 1
x *= 2;   // same as x = x * 2
x++;      // add 1
x--;      // take away 1`, n: `Shortcuts you'll type a thousand times.` },
      { c: `double avg = (double) total / count;
int whole = (int) 9.8;   // 9: it cuts, it doesn't round`, n: `Casting: putting a type in brackets to change how a value is treated.` },
      { c: `Math.max(3, 9)     // 9
Math.min(3, 9)     // 3
Math.abs(-4)       // 4
Math.sqrt(16)      // 4.0
Math.pow(2, 10)    // 1024.0
Math.round(2.5)    // 3`, n: `The Math toolbox comes free with Java.` },
      { c: `==  !=  <  >  <=  >=    // compare, gives true/false
&&  ||  !               // and, or, not`, n: `Comparisons and logic. <code>==</code> asks a question, <code>=</code> puts something in a box. Don't mix them up.` }
    ],
    ex: [
      { t: 'fill', p: `A video is 3725 seconds long. Turn it into hours, minutes, seconds (1h 2m 5s).`, c: `int total = 3725;
int hours = total [[/]] 3600;
int minutes = (total % 3600) [[/]] 60;
int seconds = total [[%]] 60;`, h: `How many full hours fit? That's division. What's left over? That's remainder.` },
      { t: 'out', p: `What does this print?`, c: `System.out.println(17 / 5 + " and " + 17 % 5);`, a: ['3 and 2'], h: `17 / 5 with whole numbers, then the leftover.`, e: `17 / 5 = 3 (5 fits 3 times), and 17 % 5 = 2 left over: <code>3 and 2</code>.` },
      { t: 'build', p: `Pizza party: 3 pizzas, 8 slices each, 7 friends. Print how many slices each friend gets and how many are left over.`, h: `Total slices = 3 * 8. Then use / for "each" and % for "left over".`, s: `public class Pizza {
  public static void main(String[] args) {
    int slices = 3 * 8;
    int friends = 7;
    System.out.println("Each friend: " + slices / friends);
    System.out.println("Left over: " + slices % friends);
  }
}
// Each friend: 3
// Left over: 3` }
    ],
    quiz: [
      { q: `What is <code>10 % 3</code>?`, o: ['3', '1', '0', '3.33'], a: 1, w: `3 fits into 10 three times (9), and 1 is left.` },
      { q: `What is <code>9 / 2</code> when both are ints?`, o: ['4.5', '5', '4', 'error'], a: 2, w: `Whole-number division throws the .5 away.` },
      { q: `What is <code>(int) 4.9</code>?`, o: ['5', '4', '4.9', '0'], a: 1, w: `Casting to int cuts the decimals. It doesn't round.` }
    ],
    wild: [
      `Clocks wrap from 59 back to 0 with <code>% 60</code>.`,
      `Games use <code>turn % 2</code> to switch between player 1 and player 2.`,
      `The Luhn check that catches typos in bank card numbers ends with <code>% 10</code>.`
    ],
    fact: `In 2014 the "Gangnam Style" video passed <b>2,147,483,647</b> views on YouTube. That's the biggest number a 32-bit <code>int</code> can hold (Java calls it <code>Integer.MAX_VALUE</code>). YouTube had to upgrade its counter to 64 bits.`
  },
  {
    id: 'p1-if', icon: 'if', title: 'Decisions: if & switch',
    story: [
      `Programs choose paths, like a fork on a forest trail.`,
      `<code>if</code> asks a yes/no question. If the answer is <b>true</b>, Java walks into that block. <code>else</code> is the other path.`,
      `When there are many paths, <code>switch</code> is like a signpost with lots of arrows: one value, many possible places to go.`
    ],
    syntax: [
      { c: `if (hp <= 0) {
  System.out.println("Game over");
}`, n: `The question goes in round brackets. The code to run goes in curly braces.` },
      { c: `if (temp > 30) {
  System.out.println("Hot");
} else if (temp > 15) {
  System.out.println("Nice");
} else {
  System.out.println("Cold");
}`, n: `Java checks from the top. The first true one wins and the rest are skipped.` },
      { c: `String label = (age >= 18) ? "adult" : "kid";`, n: `The ternary: a tiny if/else that gives back a value. Read it as "question ? yes : no".` },
      { c: `switch (day) {
  case "SAT", "SUN" -> System.out.println("Weekend!");
  default -> System.out.println("School day");
}`, n: `Modern switch with arrows. Several values can share one arrow. <code>default</code> catches everything else.` },
      { c: `int price = switch (size) {
  case 'S' -> 2;
  case 'M' -> 3;
  default -> 4;
};`, n: `A switch can also hand back a value. Note the <code>;</code> at the very end.` }
    ],
    ex: [
      { t: 'fill', p: `Real calendar rule: a year is a leap year if it's divisible by 4 but not by 100, unless it's also divisible by 400.`, c: `boolean leap = (year % 4 == 0 [[&&]] year % 100 != 0) [[||]] year % 400 == 0;`, h: `"…and not by 100" needs AND. "…or by 400" needs OR.` },
      { t: 'out', p: `What does this print?`, c: `int t = 22;
if (t > 25) System.out.println("A");
else if (t > 20) System.out.println("B");
else System.out.println("C");`, a: ['B'], h: `Is 22 bigger than 25? Bigger than 20?`, e: `22 > 25 is false, 22 > 20 is true, so <code>B</code>.` },
      { t: 'build', p: `Cinema tickets: under 4 is free, under 12 pays 5, 65 and over pays 6, everyone else pays 10. Write <code>int price(int age)</code>.`, h: `Check the youngest first, then the oldest, then "everyone else" with a final return.`, s: `static int price(int age) {
  if (age < 4) return 0;
  if (age < 12) return 5;
  if (age >= 65) return 6;
  return 10;
}` }
    ],
    quiz: [
      { q: `When does the <code>else</code> block run?`, o: ['Always', 'When the if question is false', 'When the if question is true', 'Never'], a: 1, w: `else is the "otherwise" path.` },
      { q: `Which symbol means AND?`, o: ['&&', '||', '!', '=='], a: 0, w: `<code>&&</code> is and, <code>||</code> is or, <code>!</code> is not.` },
      { q: `Does an arrow switch (<code>-></code>) need <code>break</code>?`, o: ['Yes, always', 'No', 'Only for Strings', 'Only for default'], a: 1, w: `Arrow cases never fall through to the next case, so no break is needed.` }
    ],
    wild: [
      `Automatic emergency braking asks "is something too close?" many times every second.`,
      `Your feed decides if a post is shown with dozens of if checks: blocked? seen? too old?`
    ],
    fact: `The year 2000 was a leap year but 1900 was not. That 400 rule exists because Earth takes about 365.2422 days to go around the Sun, not exactly 365.25.`
  },
  {
    id: 'p1-loops', icon: 'for', title: 'Loops',
    story: [
      `A loop repeats work so you don't copy-paste the same line 100 times.`,
      `<code>for</code>: you know how many times. "Do 10 push-ups."`,
      `<code>while</code>: repeat as long as something is true. "Keep walking while you're not home."`,
      `<code>for-each</code>: visit every item in a group, one by one, like checking every lantern on a street.`
    ],
    syntax: [
      { c: `for (int i = 1; i <= 5; i++) {
  System.out.println("Step " + i);
}`, n: `Three parts: start here; keep going while this is true; do this after each round.` },
      { c: `int fuel = 3;
while (fuel > 0) {
  System.out.println("Burn!");
  fuel--;
}`, n: `Checks the question before every round. If <code>fuel</code> never changed, it would loop forever.` },
      { c: `do {
  System.out.println("Runs at least once");
} while (tryAgain);`, n: `do-while asks the question after the round, so it always runs once. Good for menus.` },
      { c: `for (String name : names) {
  System.out.println(name);
}`, n: `for-each. Read it as "for each name in names".` },
      { c: `break;     // leave the loop right now
continue;  // skip the rest, go to the next round`, n: `Emergency exits.` }
    ],
    ex: [
      { t: 'fill', p: `Rocket countdown: print 10 down to 1, then Liftoff!`, c: `for (int i = 10; i [[>=]] 1; i[[--]]) {
  System.out.println(i);
}
System.out.println("Liftoff!");`, h: `Keep going while i is still at least 1. Each round, i goes down by one.` },
      { t: 'out', p: `What does this print?`, c: `int n = 0;
for (int i = 0; i < 4; i++) {
  n += i;
}
System.out.println(n);`, a: ['6'], h: `i takes the values 0, 1, 2, 3.`, e: `0 + 1 + 2 + 3 = <code>6</code>.` },
      { t: 'build', p: `Print the 7 times table, from 7 × 1 to 7 × 10, like <code>7 x 3 = 21</code>.`, h: `One for loop from 1 to 10. Build the line with +.`, s: `for (int i = 1; i <= 10; i++) {
  System.out.println("7 x " + i + " = " + (7 * i));
}` }
    ],
    quiz: [
      { q: `How many times does <code>for (int i = 0; i < 3; i++)</code> run?`, o: ['2', '3', '4', 'Forever'], a: 1, w: `i is 0, 1, 2. Then 3 < 3 is false, so it stops.` },
      { q: `What does <code>break</code> do?`, o: ['Skips one round', 'Leaves the loop', 'Crashes', 'Restarts'], a: 1, w: `continue skips a round, break leaves completely.` },
      { q: `Which loop always runs at least once?`, o: ['for', 'while', 'do-while', 'for-each'], a: 2, w: `It checks the question at the end of the round.` }
    ],
    wild: [
      `Games run a "game loop" that updates and redraws the screen around 60 times every second.`,
      `A web server is basically a loop: wait for a request, answer it, wait again.`
    ],
    fact: `Apple's old headquarters address was <b>1 Infinite Loop</b>, Cupertino. And a famous story says young Carl Gauss added 1 to 100 in seconds with <code>n * (n + 1) / 2 = 5050</code>. Try it with a loop and check he was right.`
  },
  {
    id: 'p1-arrays', icon: '[ ]', title: 'Arrays',
    story: [
      `An array is a row of lockers. Every locker holds the same type of thing, and each has a number.`,
      `The numbers start at <b>0</b>, not 1. The index means "how many steps from the start", and the first locker is zero steps away.`,
      `An array has a fixed size. Once built, you can't add lockers. (In Phase 3 you'll meet ArrayList, which can grow.)`
    ],
    syntax: [
      { c: `int[] steps = {4200, 8100, 6500, 10200, 3000, 7000, 9100};`, n: `Make and fill in one go. This is a week of step counts.` },
      { c: `String[] team = new String[3];   // 3 empty lockers (null)
team[0] = "Kenji";
team[1] = "Yuki";`, n: `Make empty lockers, fill later. Empty number lockers hold 0, empty String lockers hold null.` },
      { c: `steps[0]                  // first: 4200
steps[steps.length - 1]   // last: 9100
steps.length              // 7  (no brackets!)`, n: `<code>length</code> on an array has no <code>()</code>. On a String it does. Java is funny like that.` },
      { c: `int[][] grid = new int[3][4];   // 3 rows, 4 columns
grid[1][2] = 7;`, n: `A 2D array: a grid. Perfect for game maps and images.` },
      { c: `import java.util.Arrays;
Arrays.sort(steps);
System.out.println(Arrays.toString(steps));`, n: `Printing an array directly shows nonsense like <code>[I@1b6d3586</code>. Use <code>Arrays.toString</code>.` }
    ],
    ex: [
      { t: 'fill', p: `Fitness tracker: work out the average steps of the week.`, c: `int total = 0;
for (int s : steps) {
  total [[+=]] s;
}
double avg = (double) total / steps.[[length]];`, h: `Add each day into total. Divide by how many days there are.` },
      { t: 'out', p: `What does this print?`, c: `int[] a = {5, 8, 2};
System.out.println(a[1] + a[2]);`, a: ['10'], h: `Index 1 is the second locker.`, e: `a[1] is 8, a[2] is 2, so <code>10</code>.` },
      { t: 'build', p: `Find the best score in <code>int[] scores = {320, 950, 410, 875};</code> without using sort.`, h: `Start with best = scores[0]. Walk through the rest; if one is bigger, it becomes the new best.`, s: `int best = scores[0];
for (int s : scores) {
  if (s > best) best = s;
}
System.out.println(best); // 950` }
    ],
    quiz: [
      { q: `What's the index of the first item?`, o: ['1', '0', '-1', 'first'], a: 1, w: `Arrays start at 0.` },
      { q: `An array has length 5. What's the last index?`, o: ['5', '4', '6', '0'], a: 1, w: `0, 1, 2, 3, 4. Last index = length - 1.` },
      { q: `What happens with <code>a[5]</code> on an array of length 5?`, o: ['Gives 0', 'Gives null', 'ArrayIndexOutOfBoundsException', 'Adds a locker'], a: 2, w: `Locker 5 doesn't exist, so Java stops with that error.` }
    ],
    wild: [
      `A photo is a 2D array of pixels. A 1920 × 1080 screen has 2,073,600 of them.`,
      `Chess boards, Minesweeper and Sudoku are 2D arrays under the hood.`
    ],
    fact: `Why start at 0? In early languages like C, the index was literally the distance from the start of the array in memory. Java kept the habit, and so did almost every popular language after it.`
  },
  {
    id: 'p1-methods', icon: '()', title: 'Methods',
    story: [
      `A method is a <b>recipe with a name</b>. You write it once, then "cook" it whenever you like by calling its name.`,
      `It can take ingredients (<b>parameters</b>) and give back a dish (the <b>return value</b>).`,
      `<code>void</code> means "I do a job but give nothing back", like a recipe for washing the dishes.`
    ],
    syntax: [
      { c: `static void greet() {
  System.out.println("Hello!");
}

greet();   // call it
greet();   // and again`, n: `No ingredients, nothing back. For now, put <code>static</code> in front of methods that live next to <code>main</code>. Phase 2 explains why.` },
      { c: `static double toFahrenheit(double c) {
  return c * 9 / 5 + 32;
}

double f = toFahrenheit(25);   // 77.0`, n: `Takes a double, gives back a double. <code>return</code> hands the answer back and ends the method.` },
      { c: `static boolean isEven(int n) {
  return n % 2 == 0;
}`, n: `A method can return a yes/no answer. Names that start with "is" or "has" read nicely in ifs.` },
      { c: `static int add(int a, int b) { return a + b; }
static double add(double a, double b) { return a + b; }`, n: `Overloading: same name, different ingredients. Java picks the right one by looking at what you pass.` }
    ],
    ex: [
      { t: 'fill', p: `Write a method that squares a number.`, c: `static [[int]] square(int n) {
  [[return]] n * n;
}`, h: `It gives back a whole number. Which keyword hands the answer back?` },
      { t: 'out', p: `What does this print?`, c: `static int twice(int x) { return x * 2; }

// in main:
System.out.println(twice(twice(3)));`, a: ['12'], h: `Do the inside call first.`, e: `twice(3) is 6, twice(6) is <code>12</code>.` },
      { t: 'build', p: `Write <code>String grade(int score)</code>: 90+ gives "A", 75+ gives "B", 50+ gives "C", otherwise "F".`, h: `Same pattern as the ticket price: check from the top, return early.`, s: `static String grade(int score) {
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 50) return "C";
  return "F";
}` }
    ],
    quiz: [
      { q: `What does <code>void</code> mean?`, o: ['The method is empty', 'It gives nothing back', 'It returns 0', 'It is broken'], a: 1, w: `void methods do a job but return nothing.` },
      { q: `What does <code>return</code> do?`, o: ['Prints the answer', 'Restarts the method', 'Gives back a value and ends the method', 'Goes back to main()'], a: 2, w: `Code after a return in the same block never runs.` },
      { q: `In <code>add(int a, int b)</code>, what are a and b?`, o: ['Return values', 'Parameters', 'Classes', 'Loops'], a: 1, w: `They're the ingredients the method needs.` }
    ],
    wild: [
      `Big apps are thousands of small methods calling each other. Small methods are easier to test and reuse.`,
      `You already use methods others wrote: <code>Math.sqrt</code>, <code>System.out.println</code>.`
    ],
    fact: `Java names use <b>camelCase</b> by habit: <code>toFahrenheit</code>, not <code>to_fahrenheit</code>. The bumps in the middle look like a camel's back.`
  },
  {
    id: 'p1-strings', icon: 'abc', title: 'Strings',
    story: [
      `A String is a chain of characters, like beads on a thread. Each bead has a position, starting at 0.`,
      `Strings can't be changed (they are <b>immutable</b>). Methods like <code>toUpperCase()</code> don't change your string: they make a brand-new one.`,
      `One big trap: to check if two Strings have the same text, use <code>equals</code>, never <code>==</code>.`
    ],
    syntax: [
      { c: `String s = "Shinobi";
s.length()          // 7
s.charAt(0)         // 'S'
s.toUpperCase()     // "SHINOBI"
s.substring(0, 4)   // "Shin"  (end not included)
s.indexOf("bi")     // 5
s.contains("nob")   // true`, n: `The everyday tools. <code>substring(a, b)</code> takes from a up to, but not including, b.` },
      { c: `String hi = "Hello, " + name + "!";
String msg = String.format("%s has %d coins", name, coins);`, n: `Glue text with <code>+</code>, or use format: <code>%s</code> for text, <code>%d</code> for whole numbers, <code>%.2f</code> for decimals.` },
      { c: `a.equals(b)             // same text? use this
a.equalsIgnoreCase(b)   // same text, ignore capitals
a == b                  // same object in memory? (trap)`, n: `<code>==</code> checks if both names point to the same object, not if the letters match.` },
      { c: `String[] parts = "red,green,blue".split(",");
String clean = "  hi  ".trim();          // "hi"
String back = new StringBuilder("abc").reverse().toString();   // "cba"`, n: `Split text into an array, cut spaces, and flip a string with StringBuilder.` }
    ],
    ex: [
      { t: 'fill', p: `Is a word a palindrome (same backwards)?`, c: `String w = "racecar";
String back = new StringBuilder(w).[[reverse]]().toString();
boolean pal = w.[[equals]](back);`, h: `Flip it, then compare the text the safe way.` },
      { t: 'out', p: `What does this print?`, c: `String s = "Moonlight";
System.out.println(s.substring(0, 4).toUpperCase());`, a: ['MOON'], h: `Positions 0, 1, 2, 3.`, e: `"Moon", then uppercase: <code>MOON</code>.` },
      { t: 'build', p: `Password checker: return true if the password is at least 8 characters and has at least one digit.`, h: `Loop over the characters with <code>charAt(i)</code>. <code>Character.isDigit(c)</code> tells you if c is a digit.`, s: `static boolean strong(String pw) {
  if (pw.length() < 8) return false;
  for (int i = 0; i < pw.length(); i++) {
    if (Character.isDigit(pw.charAt(i))) return true;
  }
  return false;
}` }
    ],
    quiz: [
      { q: `How do you check if two Strings have the same text?`, o: ['a == b', 'a.equals(b)', 'a = b', 'a.same(b)'], a: 1, w: `equals compares the letters. == compares memory addresses.` },
      { q: `What's <code>"Java".charAt(1)</code>?`, o: ["'J'", "'a'", "'v'", '"Ja"'], a: 1, w: `Position 0 is J, position 1 is a.` },
      { q: `After <code>s.toUpperCase();</code> alone on a line, is s uppercase?`, o: ['Yes', 'No, Strings are immutable', 'Only the first letter', 'It crashes'], a: 1, w: `You must save the new String: <code>s = s.toUpperCase();</code>` }
    ],
    wild: [
      `Search bars, spell checkers, chat filters and username rules all live on String methods.`,
      `DNA is stored by scientists as a long String of A, C, G and T. Biologists search it for palindromes, which are spots where some enzymes cut DNA.`
    ],
    fact: `<code>"hi" == "hi"</code> is often <b>true</b>, because Java keeps a single copy of identical text written in your code (the "string pool"). But <code>new String("hi") == "hi"</code> is false. That's exactly why you always use equals.`
  },
  {
    id: 'p1-gate', icon: '竜', title: 'Gate: Guess the Number', gate: true,
    story: [
      `Time to combine everything into a real game. The computer secretly picks a number from 1 to 100. You guess. It answers "Higher!" or "Lower!" until you find it, then rates you by how many tries it took.`,
      `You'll need two new tools: <code>Scanner</code> to read what the player types, and <code>Random</code> to pick the secret number. Everything else you already know.`,
      `Build it in IntelliJ, step by step. Open a hint only when you're stuck for a few minutes.`
    ],
    syntax: [
      { c: `import java.util.Scanner;
import java.util.Random;

Scanner in = new Scanner(System.in);
int guess = in.nextInt();      // read a whole number
String word = in.next();       // read one word
String line = in.nextLine();   // read a whole line`, n: `Scanner reads from the keyboard. The imports go at the very top of the file, above the class.` },
      { c: `Random rng = new Random();
int secret = rng.nextInt(100) + 1;   // 1 to 100`, n: `<code>nextInt(100)</code> gives 0 to 99. Add 1 to shift it to 1 to 100.` }
    ],
    ex: [
      { t: 'build', p: `<b>Step 1.</b> Create <code>GuessGame</code>: pick the secret number, ask for one guess, and print what the player typed.`, h: `Make a Scanner and a Random inside main. Use <code>System.out.print</code> for the question so the answer appears on the same line.`, s: `import java.util.Random;
import java.util.Scanner;

public class GuessGame {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int secret = new Random().nextInt(100) + 1;
    System.out.print("Guess (1-100): ");
    int guess = in.nextInt();
    System.out.println("You said " + guess);
  }
}` },
      { t: 'build', p: `<b>Step 2.</b> Keep asking until the guess is right. Print "Higher!" or "Lower!" each time.`, h: `A while loop: keep going while guess != secret. Start guess at 0 so the loop runs the first time.`, s: `int guess = 0;
while (guess != secret) {
  System.out.print("Guess (1-100): ");
  guess = in.nextInt();
  if (guess < secret) {
    System.out.println("Higher!");
  } else if (guess > secret) {
    System.out.println("Lower!");
  }
}
System.out.println("You got it!");` },
      { t: 'build', p: `<b>Step 3.</b> Count the tries and add a method <code>String rate(int tries)</code>: 7 or fewer is "Ninja level", 10 or fewer is "Good", else "Keep training".`, h: `Add <code>int tries = 0;</code> before the loop and <code>tries++;</code> inside it.`, s: `static String rate(int tries) {
  if (tries <= 7) return "Ninja level";
  if (tries <= 10) return "Good";
  return "Keep training";
}

// in main, after the loop:
System.out.println("Found in " + tries + " tries: " + rate(tries));` },
      { t: 'build', p: `<b>Bonus.</b> Ask "Play again? (y/n)" at the end and restart with a new secret if the player types y.`, h: `Wrap the whole game in a do-while. Read the answer with <code>in.next()</code> and compare with equals.`, s: `String again;
do {
  int secret = new Random().nextInt(100) + 1;
  int guess = 0, tries = 0;
  while (guess != secret) {
    System.out.print("Guess: ");
    guess = in.nextInt();
    tries++;
    if (guess < secret) System.out.println("Higher!");
    else if (guess > secret) System.out.println("Lower!");
  }
  System.out.println(tries + " tries: " + rate(tries));
  System.out.print("Play again? (y/n) ");
  again = in.next();
} while (again.equals("y"));` }
    ],
    quiz: [
      { q: `Which line reads a whole number from the keyboard?`, o: ['in.nextLine()', 'in.nextInt()', 'System.in()', 'Random.nextInt()'], a: 1, w: `nextInt reads the next whole number the player types.` },
      { q: `<code>rng.nextInt(6)</code> can give which values?`, o: ['1 to 6', '0 to 6', '0 to 5', '1 to 5'], a: 2, w: `The number you pass is never included. Add 1 for a dice roll.` },
      { q: `Best loop to keep asking until the answer is right?`, o: ['for with i < 10', 'while (guess != secret)', 'for-each', 'switch'], a: 1, w: `You don't know how many tries it will take, so while fits.` }
    ],
    wild: [
      `A tip and bill splitter for a group dinner, with percentages and rounding.`,
      `A unit converter: km to miles, Celsius to Fahrenheit, MB to GB.`,
      `A Caesar cipher that encodes secret messages by shifting letters (charAt + %).`,
      `A text adventure: rooms, choices with switch, and a loop that runs until you win or lose.`
    ],
    facts: [
      `With smart guessing (always pick the middle), you can find any number from 1 to 100 in at most <b>7</b> tries, because 2⁷ = 128. That's binary search, and it's how databases find a row among millions in a few steps.`,
      `Java's mascot is a little character called <b>Duke</b>, and its drawings were released as open source in 2006.`
    ]
  }
  ]
};
const P2 = {
  id: 'p2', world: 'Bamboo Grove', topic: 'Object-oriented programming',
  blurb: `Classes, objects and the four big ideas of OOP. This is the heart of Java, so take your time here.`,
  lessons: [
  {
    id: 'p2-classes', icon: '{ }', title: 'Classes & Objects',
    story: [
      `A <b>class</b> is a cookie cutter. An <b>object</b> is a real cookie made with it.`,
      `One <code>Ninja</code> class can make many ninja objects. They share the same shape, but each one has its own name and its own health.`,
      `<b>Fields</b> are what an object <i>has</i> (name, hp). <b>Methods</b> are what it <i>can do</i> (shout, jump).`
    ],
    syntax: [
      { c: `public class Ninja {
  String name;      // field
  int hp = 100;     // field with a starting value

  void shout() {    // method
    System.out.println(name + " says: Hai!");
  }
}`, n: `The blueprint. Usually one class per file: this goes in <code>Ninja.java</code>.` },
      { c: `Ninja a = new Ninja();   // build an object
a.name = "Kenji";
a.shout();               // Kenji says: Hai!`, n: `<code>new</code> builds an object from the class. The dot means "go inside this object".` },
      { c: `Ninja b = new Ninja();
b.name = "Yuki";
// a and b are two separate ninjas`, n: `Changing b never touches a.` },
      { c: `Ninja c = a;   // NOT a copy
c.hp = 50;     // a.hp is now 50 too`, n: `Variables hold a <b>reference</b>, like a remote control. Here c and a are two remotes for the same TV.` },
      { c: `class Ninja {
  static int count = 0;   // shared by ALL ninjas
}`, n: `<code>static</code> means it belongs to the class itself, not to each object. That's why <code>main</code> is static: Java calls it before any object exists.` }
    ],
    ex: [
      { t: 'fill', p: `A smart lamp that can be switched on and off.`, c: `class Lamp {
  boolean isOn = false;

  void toggle() {
    isOn = [[!]]isOn;
  }
}

Lamp desk = [[new]] Lamp();
desk.[[toggle]]();`, h: `Toggling means "make it the opposite". Which symbol means NOT?` },
      { t: 'out', p: `What does this print?`, c: `Ninja a = new Ninja();   // hp starts at 100
Ninja c = a;
c.hp = 50;
System.out.println(a.hp);`, a: ['50'], h: `Is c a copy, or another name for the same ninja?`, e: `a and c point to the same object, so <code>50</code>.` },
      { t: 'build', p: `Make a <code>Song</code> class with title, artist and seconds, plus a method <code>describe()</code> that prints <code>Title by Artist (3:25)</code>.`, h: `Minutes = seconds / 60, leftover seconds = seconds % 60. Pad a single digit with <code>String.format("%02d", s)</code>.`, s: `public class Song {
  String title;
  String artist;
  int seconds;

  void describe() {
    int m = seconds / 60;
    int s = seconds % 60;
    System.out.println(title + " by " + artist
        + " (" + m + ":" + String.format("%02d", s) + ")");
  }
}` }
    ],
    quiz: [
      { q: `Class vs object?`, o: ['Same thing', 'Class = blueprint, object = the real thing', 'Object = blueprint', 'Classes only hold numbers'], a: 1, w: `The cutter vs the cookie.` },
      { q: `Which keyword builds an object?`, o: ['make', 'class', 'new', 'build'], a: 2, w: `<code>new Ninja()</code>.` },
      { q: `Fields describe…`, o: ['What an object has', 'What an object does', 'The file name', 'Loops'], a: 0, w: `Fields = data. Methods = actions.` }
    ],
    wild: [
      `In a game, every block, mob and item is an object made from a class.`,
      `Your phone's contact list is a pile of Contact objects, each with a name, number and photo.`
    ],
    fact: `The term "object-oriented" was coined by computer scientist <b>Alan Kay</b>. The first language with classes and objects was <b>Simula 67</b>, made in Norway in the 1960s to simulate things like ships and queues.`
  },
  {
    id: 'p2-ctor', icon: 'new', title: 'Constructors & this',
    story: [
      `A <b>constructor</b> is the setup step that runs the moment an object is born. Like typing your character's name before a game starts.`,
      `<code>this</code> means "me, this very object". You need it when a parameter has the same name as a field, so Java knows which is which.`
    ],
    syntax: [
      { c: `public class Pet {
  String name;
  int age;

  Pet(String name, int age) {
    this.name = name;   // my field = the parameter
    this.age = age;
  }
}

Pet p = new Pet("Mochi", 2);`, n: `Same name as the class and no return type, not even void.` },
      { c: `Pet(String name) {
  this(name, 0);   // reuse the other constructor
}`, n: `A class can have several constructors. <code>this(...)</code> calls another one, and it must be the first line.` },
      { c: `class Coin { }
Coin c = new Coin();   // works: Java gave a free empty constructor`, n: `If you write no constructor at all, Java adds an empty one. As soon as you write your own, the free one disappears.` }
    ],
    ex: [
      { t: 'fill', p: `A delivery drone starts with a full battery.`, c: `class Drone {
  String id;
  int battery;

  [[Drone]](String id) {
    [[this]].id = id;
    this.battery = 100;
  }
}`, h: `The constructor is named after the class. Which word means "my own field"?` },
      { t: 'out', p: `Careful. What does this print?`, c: `class Box {
  int v;
  Box(int v) { v = v; }
}

// in main:
System.out.println(new Box(9).v);`, a: ['0'], h: `Without <code>this.</code>, which v is on the left side?`, e: `<code>v = v</code> copies the parameter into itself. The field never changes and stays at its default: <code>0</code>.` },
      { t: 'build', p: `Make a <code>Point</code> with x and y (doubles), a constructor, and <code>double distanceTo(Point other)</code>.`, h: `Distance = √(dx² + dy²). Use <code>Math.sqrt</code>.`, s: `public class Point {
  double x, y;

  Point(double x, double y) {
    this.x = x;
    this.y = y;
  }

  double distanceTo(Point other) {
    double dx = other.x - x;
    double dy = other.y - y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
// new Point(0, 0).distanceTo(new Point(3, 4)) -> 5.0` }
    ],
    quiz: [
      { q: `What name must a constructor have?`, o: ['init', 'Same as the class', 'main', 'Anything'], a: 1, w: `<code>class Pet</code> → <code>Pet(...)</code>.` },
      { q: `What does a constructor return?`, o: ['void', 'int', 'Nothing: it has no return type', 'The class'], a: 2, w: `You don't write any return type at all.` },
      { q: `<code>this</code> refers to…`, o: ['The class', 'The current object', 'The main method', 'The parent'], a: 1, w: `"Me, the object being built or used right now."` }
    ],
    wild: [
      `When an app loads your profile, it's doing something like <code>new User(id, name, email)</code>.`,
      `Delivery companies model each parcel and route point as objects and compute distances between them.`
    ],
    fact: `The "assigned to itself" bug from the exercise is one of the most common beginner mistakes. IntelliJ highlights it for you, so keep an eye on yellow warnings.`
  },
  {
    id: 'p2-encap', icon: 'pv', title: 'Encapsulation',
    story: [
      `Some things should stay hidden. You don't let strangers open your wallet and change the money inside.`,
      `So you mark fields <code>private</code>: nobody outside the class can touch them. Then you offer <code>public</code> methods as the only doors in, and those doors check the rules.`,
      `That's encapsulation: the object protects itself.`
    ],
    syntax: [
      { c: `private    // only inside this class
(nothing)  // classes in the same package
protected  // same package + child classes
public     // everyone`, n: `The four access levels, from most hidden to most open.` },
      { c: `public class BankAccount {
  private double balance;

  public double getBalance() {
    return balance;
  }

  public void deposit(double amount) {
    if (amount <= 0) return;   // refuse nonsense
    balance += amount;
  }
}`, n: `Read with a getter. Change only through methods that check the rules.` },
      { c: `public boolean withdraw(double amount) {
  if (amount > balance) return false;
  balance -= amount;
  return true;
}`, n: `Return true/false so the caller knows if it worked.` },
      { c: `public void setAge(int age) {
  if (age >= 0) this.age = age;
}`, n: `A setter with a guard. A setter that checks nothing is barely better than a public field.` }
    ],
    ex: [
      { t: 'fill', p: `Hide a hero's health and let others only read it.`, c: `public class Hero {
  [[private]] int hp = 100;

  public int [[getHp]]() {
    return hp;
  }
}`, h: `Most hidden access level. Getters are named get + field name.` },
      { t: 'out', p: `What does this print?`, c: `BankAccount acc = new BankAccount();
acc.deposit(-50);
acc.deposit(100);
System.out.println(acc.getBalance());`, a: ['100.0'], h: `Does deposit accept a negative amount? balance is a double.`, e: `-50 is refused, 100 is added. A double prints with a dot: <code>100.0</code>.` },
      { t: 'build', p: `Make a <code>Thermostat</code> with a private target temperature. <code>setTarget</code> only accepts 10 to 30; anything else is ignored.`, h: `A setter with an if guard, and a getter.`, s: `public class Thermostat {
  private int target = 21;

  public int getTarget() { return target; }

  public void setTarget(int t) {
    if (t >= 10 && t <= 30) {
      target = t;
    }
  }
}` }
    ],
    quiz: [
      { q: `Where can a <code>private</code> field be used?`, o: ['Anywhere', 'Only inside its own class', 'Only in main', 'Only in child classes'], a: 1, w: `Private = this class only.` },
      { q: `Why use a setter instead of a public field?`, o: ['It is faster', 'It can check the value first', 'Java requires it', 'It uses less memory'], a: 1, w: `The setter is a door with a guard.` },
      { q: `A getter usually…`, o: ['Changes a field', 'Returns a field\'s value', 'Deletes the object', 'Prints the class'], a: 1, w: `It lets others read without being able to write.` }
    ],
    wild: [
      `Banking software never lets the balance be edited directly: every change goes through checked methods and gets logged.`,
      `Games keep health private so a bug or a cheat can't set it above the maximum.`
    ],
    fact: `Getters and setters are so common that IntelliJ writes them for you: press <b>Alt+Insert</b> (Windows/Linux) or <b>Cmd+N</b> (Mac) inside a class.`
  },
  {
    id: 'p2-inherit', icon: '^', title: 'Inheritance',
    story: [
      `A <b>child class</b> gets everything from a <b>parent class</b>, then adds its own extras.`,
      `A Cat <i>is an</i> Animal. A Dog <i>is an</i> Animal. Write the shared stuff (name, eat) once in Animal, and Cat and Dog <code>extends</code> it.`,
      `It's like an evolution that keeps all its old moves and learns new ones.`
    ],
    syntax: [
      { c: `class Animal {
  String name;
  void eat() { System.out.println(name + " eats"); }
}

class Cat extends Animal {
  void purr() { System.out.println("Purr"); }
}`, n: `Cat gets <code>name</code> and <code>eat()</code> for free.` },
      { c: `Cat c = new Cat();
c.name = "Tama";
c.eat();    // from Animal
c.purr();   // its own`, n: `The child can use both.` },
      { c: `class Animal {
  String name;
  Animal(String name) { this.name = name; }
}

class Dog extends Animal {
  Dog(String name) {
    super(name);   // run the parent's constructor first
  }
}`, n: `<code>super(...)</code> calls the parent's constructor. It must be the first line.` },
      { c: `class A extends B, C { }   // not allowed
final class Secret { }     // nobody can extend this`, n: `Java allows only <b>one</b> parent class. <code>final</code> on a class stops inheritance.` }
    ],
    ex: [
      { t: 'fill', p: `A Car is a Vehicle.`, c: `class Car [[extends]] Vehicle {
  Car(String brand) {
    [[super]](brand);
  }
}`, h: `The inheritance keyword, then the call to the parent constructor.` },
      { t: 'build', p: `Make <code>Employee</code> (name, salary) and <code>Manager extends Employee</code> with a bonus and a method <code>double total()</code>.`, h: `Manager's constructor takes name, salary and bonus, and passes the first two to super.`, s: `class Employee {
  protected String name;
  protected double salary;

  Employee(String name, double salary) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  private double bonus;

  Manager(String name, double salary, double bonus) {
    super(name, salary);
    this.bonus = bonus;
  }

  double total() { return salary + bonus; }
}` }
    ],
    quiz: [
      { q: `Which keyword makes a child class?`, o: ['inherits', 'extends', 'implements', 'super'], a: 1, w: `<code>class Cat extends Animal</code>.` },
      { q: `How many parent classes can a Java class have?`, o: ['One', 'Two', 'As many as you want', 'Zero'], a: 0, w: `Exactly one (interfaces are different, next lessons).` },
      { q: `What does <code>super(name)</code> do?`, o: ['Makes the class faster', 'Calls the parent constructor', 'Creates a new parent', 'Deletes name'], a: 1, w: `The parent sets up its part first.` }
    ],
    wild: [
      `In Android, every screen you build used to start with <code>extends Activity</code>.`,
      `Game engines often have Enemy as a parent, with Zombie, Skeleton and Slime as children.`
    ],
    fact: `Every Java class secretly <code>extends Object</code>, even if you don't write it. That's why every object you ever make already has <code>toString()</code> and <code>equals()</code>.`
  },
  {
    id: 'p2-poly', icon: '@', title: 'Overriding & Polymorphism',
    story: [
      `Polymorphism means "many shapes". You can say "every Shape, tell me your area!" and each shape answers its own way.`,
      `A child class <b>overrides</b> a parent's method by writing its own version with the same name and parameters.`,
      `The magic: you can hold a Circle in a Shape variable, and Java still runs the Circle's version.`
    ],
    syntax: [
      { c: `class Shape {
  double area() { return 0; }
}

class Circle extends Shape {
  double r;
  Circle(double r) { this.r = r; }

  @Override
  double area() { return Math.PI * r * r; }
}`, n: `Same method signature as the parent, new body.` },
      { c: `Shape s = new Circle(2);
System.out.println(s.area());   // 12.566... (Circle's version)`, n: `The variable's type is Shape, but the object is a Circle. Java picks the method from the real object.` },
      { c: `Shape[] shapes = { new Circle(1), new Square(3) };
for (Shape sh : shapes) {
  System.out.println(sh.area());
}`, n: `One loop, many shapes. Add a Triangle tomorrow and this loop still works.` },
      { c: `@Override   // "compiler, check I really override something"`, n: `If you misspell the name, @Override makes Java complain instead of silently making a new method.` },
      { c: `// overloading: same name, different parameters, same class
// overriding:  same name, same parameters, child class`, n: `Two words that sound alike. Don't mix them up in exams.` }
    ],
    ex: [
      { t: 'fill', p: `Give Square its own area.`, c: `class Square extends Shape {
  double side;

  [[@Override]]
  double [[area]]() {
    return side * side;
  }
}`, h: `The annotation that asks the compiler to double-check, then the method's name.` },
      { t: 'out', p: `Dog overrides sound() to print Woof. What prints?`, c: `Animal a = new Dog();
a.sound();`, a: ['Woof'], h: `Which object was actually built with new?`, e: `The object is a Dog, so Dog's version runs: <code>Woof</code>.` },
      { t: 'build', p: `Checkout: a <code>Payment</code> class with <code>double fee(double amount)</code> returning 0. <code>CardPayment</code> charges 2%, <code>CashPayment</code> charges nothing. Loop over a mixed array and print each fee for 100.`, h: `Override fee in CardPayment only. CashPayment can just extend Payment.`, s: `class Payment {
  double fee(double amount) { return 0; }
}

class CardPayment extends Payment {
  @Override
  double fee(double amount) { return amount * 0.02; }
}

class CashPayment extends Payment { }

// in main:
Payment[] pays = { new CardPayment(), new CashPayment() };
for (Payment p : pays) {
  System.out.println(p.fee(100));   // 2.0 then 0.0
}` }
    ],
    quiz: [
      { q: `What does <code>@Override</code> do?`, o: ['Makes a method faster', 'Asks the compiler to check you really override', 'Deletes the parent method', 'Nothing at all'], a: 1, w: `It catches typos in method names.` },
      { q: `<code>Shape s = new Circle(1); s.area();</code> runs…`, o: ["Shape's area", "Circle's area", 'Both', 'Neither, error'], a: 1, w: `The real object decides.` },
      { q: `Overriding happens…`, o: ['Inside one class', 'In a child class, same signature', 'Only with static methods', 'Only with constructors'], a: 1, w: `Overloading is the one that stays in the same class.` }
    ],
    wild: [
      `A drawing app keeps a list of shapes and calls <code>draw()</code> on each one without caring which kind it is.`,
      `Online checkouts treat card, wallet and cash-on-delivery the same way through one Payment type.`
    ],
    fact: `Java decides which overridden method to run <b>while the program is running</b>, not while compiling. This is called dynamic dispatch.`
  },
  {
    id: 'p2-iface', icon: 'I', title: 'Abstract & Interfaces',
    story: [
      `An <b>abstract class</b> is an unfinished blueprint. You can't build it directly. You can only build its children, which fill in the missing parts.`,
      `An <b>interface</b> is a promise: "anything that implements <code>Flyable</code> must have a <code>fly()</code> method".`,
      `A bird and a drone aren't family, but both can fly. Interfaces describe <b>abilities</b> that unrelated classes can share.`
    ],
    syntax: [
      { c: `abstract class Enemy {
  int hp;
  abstract void attack();   // no body: children must write it
  void takeHit(int dmg) { hp -= dmg; }
}`, n: `Mix of finished methods and unfinished (abstract) ones. <code>new Enemy()</code> is an error.` },
      { c: `interface Flyable {
  void fly();
}

class Bird implements Flyable {
  public void fly() { System.out.println("Flap flap"); }
}`, n: `Interface methods are public, so the class must write <code>public</code> too.` },
      { c: `class Drone implements Flyable, Chargeable { ... }`, n: `One parent class, but as many interfaces as you want.` },
      { c: `interface Greeter {
  default void hi() { System.out.println("Hi"); }
}`, n: `A <code>default</code> method comes ready-made. Classes can use it or override it.` },
      { c: `Flyable f = new Drone();
f.fly();`, n: `Use the interface as a type. Code that only needs "something that flies" stays simple.` }
    ],
    ex: [
      { t: 'fill', p: `A plane keeps the Flyable promise.`, c: `class Plane [[implements]] Flyable {
  [[public]] void fly() {
    System.out.println("Whoosh");
  }
}`, h: `Classes extend classes but ___ interfaces. And interface methods are always…?` },
      { t: 'build', p: `Make an interface <code>Rechargeable</code> with <code>void charge()</code> and <code>int batteryLevel()</code>. Implement it in <code>Phone</code> and <code>EScooter</code>, then charge both from one loop.`, h: `Store both in a <code>Rechargeable[]</code> array.`, s: `interface Rechargeable {
  void charge();
  int batteryLevel();
}

class Phone implements Rechargeable {
  private int level = 20;
  public void charge() { level = 100; }
  public int batteryLevel() { return level; }
}

class EScooter implements Rechargeable {
  private int level = 5;
  public void charge() { level = 80; }   // protects the battery
  public int batteryLevel() { return level; }
}

// in main:
Rechargeable[] things = { new Phone(), new EScooter() };
for (Rechargeable r : things) {
  r.charge();
  System.out.println(r.batteryLevel());
}` }
    ],
    quiz: [
      { q: `Can you write <code>new Enemy()</code> if Enemy is abstract?`, o: ['Yes', 'No', 'Only in main', 'Only once'], a: 1, w: `Abstract classes are unfinished. Build a child instead.` },
      { q: `How many interfaces can one class implement?`, o: ['One', 'Two', 'Many', 'None'], a: 2, w: `<code>implements A, B, C</code> is fine.` },
      { q: `Best tool for "an ability unrelated classes share"?`, o: ['Abstract class', 'Interface', 'Array', 'static'], a: 1, w: `Birds and drones aren't family, but both fly.` }
    ],
    wild: [
      `<code>Comparable</code> is an interface: implement it and Java can sort your objects.`,
      `<code>Runnable</code> is an interface used to run code on a separate thread.`
    ],
    fact: `<code>List</code>, <code>Set</code> and <code>Map</code> are all interfaces. ArrayList is just one class that keeps the List promise. LinkedList is another.`
  },
  {
    id: 'p2-object', icon: '==', title: 'toString, equals, hashCode',
    story: [
      `Every object gets three methods from Object. Their default versions are not very useful.`,
      `<code>toString()</code> prints something like <code>Ninja@1b6d3586</code>. <code>equals()</code> only says true if it's the very same object, even if two objects have identical data.`,
      `So we override them, to print nicely and to say "same data = equal".`
    ],
    syntax: [
      { c: `@Override
public String toString() {
  return "Ninja(" + name + ", hp=" + hp + ")";
}`, n: `Now <code>System.out.println(ninja)</code> shows something readable.` },
      { c: `@Override
public boolean equals(Object o) {
  if (this == o) return true;
  if (!(o instanceof Card c)) return false;
  return rank == c.rank && suit.equals(c.suit);
}`, n: `Same object? Equal. Not a Card? Not equal. Otherwise compare the fields.` },
      { c: `import java.util.Objects;

@Override
public int hashCode() {
  return Objects.hash(rank, suit);
}`, n: `A number summary of the object. HashSet and HashMap use it to find things fast.` },
      { c: `// Rule: equal objects MUST have equal hashCodes.`, n: `Override equals without hashCode and a HashSet can hold "duplicates". Always override both together.` }
    ],
    ex: [
      { t: 'out', p: `Point has no equals override. What prints?`, c: `Point a = new Point(1, 2);
Point b = new Point(1, 2);
System.out.println(a == b);`, a: ['false'], h: `Two calls to new means…?`, e: `Two different objects, so <code>false</code>, even with the same data.` },
      { t: 'fill', p: `Print a Book nicely.`, c: `[[@Override]]
public [[String]] toString() {
  return title + " by " + author;
}`, h: `Annotation first, then the return type of toString.` },
      { t: 'build', p: `Make a <code>Card</code> class (int rank, String suit) with equals and hashCode, so two "7 of hearts" cards are equal.`, h: `Follow the equals pattern from the syntax step, and use Objects.hash for hashCode.`, s: `import java.util.Objects;

public class Card {
  private final int rank;
  private final String suit;

  public Card(int rank, String suit) {
    this.rank = rank;
    this.suit = suit;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof Card c)) return false;
    return rank == c.rank && suit.equals(c.suit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(rank, suit);
  }
}` }
    ],
    quiz: [
      { q: `Default <code>equals</code> checks…`, o: ['Same data', 'Same object', 'Same class name', 'Same hashCode'], a: 1, w: `Just like ==, until you override it.` },
      { q: `If you override equals, you must also override…`, o: ['toString', 'hashCode', 'main', 'finalize'], a: 1, w: `Equal objects need equal hash codes.` },
      { q: `What uses toString automatically?`, o: ['println(object)', 'new', 'if', 'return'], a: 0, w: `println calls toString for you.` }
    ],
    wild: [
      `Every log line in a big app uses toString to print objects.`,
      `A shopping cart uses equals and hashCode to notice you added the same item twice.`
    ],
    fact: `<code>Integer a = 127, b = 127;</code> then <code>a == b</code> is <b>true</b>. Change both to 128 and it becomes <b>false</b>. Java caches small Integer objects from -128 to 127. Another reason to use equals.`
  },
  {
    id: 'p2-records', icon: 'rec', title: 'Records & Enums',
    story: [
      `A <b>record</b> is a tiny class made only to hold data. You list the fields, and Java writes the constructor, getters, equals, hashCode and toString for you.`,
      `An <b>enum</b> is a fixed list of choices: days of the week, traffic light colors, sizes S/M/L. Nothing else is allowed.`
    ],
    syntax: [
      { c: `record Point(int x, int y) { }

Point p = new Point(3, 4);
p.x()                    // 3  (no "get" in the name)
System.out.println(p);   // Point[x=3, y=4]`, n: `One line replaces dozens. Record fields can't change after creation.` },
      { c: `record Temp(double celsius) {
  Temp {
    if (celsius < -273.15) throw new IllegalArgumentException("too cold");
  }
  double fahrenheit() { return celsius * 9 / 5 + 32; }
}`, n: `A record can check its values and have extra methods.` },
      { c: `enum Light { RED, YELLOW, GREEN }

Light now = Light.RED;`, n: `Only these three values exist. A typo like <code>Light.BLU</code> won't compile.` },
      { c: `enum Light {
  RED(30), YELLOW(5), GREEN(25);

  final int seconds;
  Light(int s) { seconds = s; }
}

Light.GREEN.seconds   // 25`, n: `Enums can carry data too.` },
      { c: `for (Light l : Light.values()) { ... }

switch (now) {
  case RED -> stop();
  case YELLOW -> slowDown();
  case GREEN -> go();
}`, n: `Loop over every value, or switch on them.` }
    ],
    ex: [
      { t: 'fill', p: `Traffic light: what comes next?`, c: `Light next = switch (now) {
  case RED -> Light.GREEN;
  case GREEN -> Light.[[YELLOW]];
  case YELLOW -> Light.[[RED]];
};`, h: `Think of a real traffic light cycle.` },
      { t: 'out', p: `What does this print?`, c: `record Pair(String a, int b) { }

System.out.println(new Pair("hp", 9));`, a: ['Pair[a=hp, b=9]'], h: `Records write their own toString: Name[field=value, ...]`, e: `<code>Pair[a=hp, b=9]</code>` },
      { t: 'build', p: `Make an enum <code>Planet</code> where each planet stores its gravity compared to Earth (Mercury 0.38, Venus 0.91, Earth 1.0, Mars 0.38, Jupiter 2.53). Print what a 50 kg person would "weigh" on each.`, h: `Give the enum a constructor that stores a double. Loop with <code>Planet.values()</code>.`, s: `enum Planet {
  MERCURY(0.38), VENUS(0.91), EARTH(1.0), MARS(0.38), JUPITER(2.53);

  final double gravity;
  Planet(double g) { gravity = g; }
}

// in main:
for (Planet p : Planet.values()) {
  System.out.println(p + ": " + (50 * p.gravity) + " kg");
}` }
    ],
    quiz: [
      { q: `Can you change a record's field after creating it?`, o: ['Yes, with a setter', 'No, fields are final', 'Only once', 'Only in main'], a: 1, w: `Records are read-only.` },
      { q: `Getter for field <code>x</code> in a record?`, o: ['getX()', 'x()', 'x', 'get("x")'], a: 1, w: `Just the field name with brackets.` },
      { q: `Best fit for "order status: PENDING, SHIPPED, DELIVERED"?`, o: ['String', 'int', 'enum', 'array'], a: 2, w: `A fixed set of choices = enum. No typos possible.` }
    ],
    wild: [
      `Records are perfect for data coming from the internet, like a weather reading: city, temperature, time.`,
      `Enums power order tracking, game states (MENU, PLAYING, PAUSED) and playing card suits.`
    ],
    fact: `Records became a full Java feature in <b>Java 16</b> (2021). Before that, programmers wrote the same constructor, getters, equals, hashCode and toString by hand for every data class.`
  },
  {
    id: 'p2-gate', icon: '竜', title: 'Gate: Lantern Library', gate: true,
    story: [
      `Build a small library system for a village. Books can be added, found by title, borrowed and returned. Then you'll level it up so the library can lend different kinds of items with different rules.`,
      `This uses classes, constructors, private fields, toString, arrays, inheritance and overriding all at once. It's the classic shape of real business software.`
    ],
    ex: [
      { t: 'build', p: `<b>Step 1.</b> Make a <code>Book</code> class: private title, author and borrowed flag. Add a constructor, getters, <code>borrow()</code> (returns false if already out), <code>giveBack()</code>, and a toString like <code>Dune by Herbert [in]</code>.`, h: `borrow(): if borrowed is already true, return false; otherwise set it to true and return true.`, s: `public class Book {
  private final String title;
  private final String author;
  private boolean borrowed;

  public Book(String title, String author) {
    this.title = title;
    this.author = author;
  }

  public String getTitle() { return title; }
  public boolean isBorrowed() { return borrowed; }

  public boolean borrow() {
    if (borrowed) return false;
    borrowed = true;
    return true;
  }

  public void giveBack() { borrowed = false; }

  @Override
  public String toString() {
    return title + " by " + author + (borrowed ? " [out]" : " [in]");
  }
}` },
      { t: 'build', p: `<b>Step 2.</b> Make a <code>Library</code> class that stores books in an array of 100, with <code>add(Book)</code>, <code>find(String title)</code> (ignore capitals, return null if missing) and <code>printAll()</code>.`, h: `Keep a <code>count</code> of how many lockers are used. Only loop up to count.`, s: `public class Library {
  private final Book[] books = new Book[100];
  private int count = 0;

  public void add(Book b) {
    if (count == books.length) return;
    books[count] = b;
    count++;
  }

  public Book find(String title) {
    for (int i = 0; i < count; i++) {
      if (books[i].getTitle().equalsIgnoreCase(title)) return books[i];
    }
    return null;
  }

  public void printAll() {
    for (int i = 0; i < count; i++) {
      System.out.println(books[i]);
    }
  }
}` },
      { t: 'build', p: `<b>Step 3 (level up).</b> Create an abstract <code>Item</code> with a title and <code>abstract int loanDays()</code>. Make <code>Book</code> (21 days) and <code>Dvd</code> (7 days) extend it, and change Library to store <code>Item[]</code>.`, h: `Move title and the borrow logic up into Item. Each child only overrides loanDays().`, s: `public abstract class Item {
  protected final String title;
  private boolean borrowed;

  protected Item(String title) { this.title = title; }

  public abstract int loanDays();

  public boolean borrow() {
    if (borrowed) return false;
    borrowed = true;
    return true;
  }

  @Override
  public String toString() {
    return title + " (" + loanDays() + " days)" + (borrowed ? " [out]" : "");
  }
}

public class Book extends Item {
  public Book(String title) { super(title); }
  @Override public int loanDays() { return 21; }
}

public class Dvd extends Item {
  public Dvd(String title) { super(title); }
  @Override public int loanDays() { return 7; }
}` }
    ],
    quiz: [
      { q: `Why make <code>borrowed</code> private?`, o: ['To save memory', 'So only borrow()/giveBack() can change it, with rules', 'Java requires it', 'For speed'], a: 1, w: `Encapsulation: the book protects its own state.` },
      { q: `In Step 3, <code>item.loanDays()</code> on a Dvd stored as Item returns…`, o: ['21', '7', '0', 'error'], a: 1, w: `Polymorphism: the real object (Dvd) decides.` },
      { q: `Why is Item abstract?`, o: ['An "item" with no kind makes no sense to create', 'Abstract classes are faster', 'To hide the title', 'So it can\'t have methods'], a: 0, w: `You only ever lend a Book or a Dvd, never a plain Item.` }
    ],
    wild: [
      `An RPG character system: a Hero parent, with Warrior, Mage and Archer children overriding attack().`,
      `A tiny chess model: an abstract Piece, and each piece overrides canMove(from, to).`,
      `A school or gym management app: members, classes, payments and rules.`,
      `Minecraft mods: modders create new blocks and items by extending the game's own Block and Item classes.`
    ],
    facts: [
      `The famous "Gang of Four" book <i>Design Patterns</i> (1994) is a catalog of smart ways to combine classes and interfaces. Many of its patterns are all over Java's own libraries.`,
      `Java was designed so that almost everything is an object. Only the 8 primitive types (int, long, double, float, boolean, char, byte, short) are not.`
    ]
  }
  ]
};
const P3 = {
  id: 'p3', world: 'Dragon Keep', topic: 'Core APIs',
  blurb: `Collections that grow, maps that find things instantly, generics, errors handled with care, and files that remember.`,
  lessons: [
  {
    id: 'p3-list', icon: '[+]', title: 'ArrayList',
    story: [
      `Arrays have a fixed size. An <b>ArrayList</b> is a magic backpack that grows every time you add something, and shrinks when you take something out.`,
      `It keeps things in order, allows duplicates, and gives each item a position starting at 0, just like an array.`
    ],
    syntax: [
      { c: `import java.util.ArrayList;
import java.util.List;

List<String> playlist = new ArrayList<>();`, n: `The type in <code>&lt;&gt;</code> says what goes inside. Writing <code>List</code> on the left is a good habit (it's the interface).` },
      { c: `playlist.add("Moon Song");      // at the end
playlist.add(0, "Intro");        // at position 0
playlist.get(1)                  // read position 1
playlist.set(1, "Remix");        // replace position 1
playlist.remove("Intro");        // remove by value
playlist.remove(0);              // remove by position
playlist.size()                  // how many
playlist.contains("Remix")       // true or false
playlist.isEmpty()`, n: `The everyday toolkit. Note: lists use <code>size()</code>, arrays use <code>length</code>.` },
      { c: `List<Integer> nums = new ArrayList<>();   // Integer, not int
nums.add(5);`, n: `Collections only hold objects. Use the wrapper types: <code>Integer</code>, <code>Double</code>, <code>Boolean</code>, <code>Character</code>. Java converts automatically.` },
      { c: `for (String song : playlist) { ... }
Collections.sort(playlist);
List<String> fixed = List.of("a", "b");   // can't be changed`, n: `<code>List.of</code> makes a read-only list. Calling add on it throws an error.` }
    ],
    ex: [
      { t: 'fill', p: `A shopping cart.`, c: `List<[[String]]> cart = new ArrayList<>();
cart.[[add]]("rice");
cart.add("tea");
System.out.println(cart.[[size]]());   // 2`, h: `It holds text. Which method puts things in? Which one counts?` },
      { t: 'out', p: `Tricky. What does this print?`, c: `List<Integer> n = new ArrayList<>(List.of(10, 20, 30));
n.remove(1);
System.out.println(n);`, a: ['[10, 30]'], h: `With an int argument, remove means "remove at position".`, e: `Position 1 is 20, so it's gone: <code>[10, 30]</code>. To remove the value 1 you'd write <code>n.remove(Integer.valueOf(1))</code>.` },
      { t: 'build', p: `A to-do list: add 3 tasks, remove the second one, then print the rest numbered from 1, like <code>1. Buy rice</code>.`, h: `A normal for loop with an index. Print i + 1.`, s: `List<String> todo = new ArrayList<>();
todo.add("Buy rice");
todo.add("Call grandma");
todo.add("Study Java");
todo.remove(1);

for (int i = 0; i < todo.size(); i++) {
  System.out.println((i + 1) + ". " + todo.get(i));
}` }
    ],
    quiz: [
      { q: `Why <code>List&lt;Integer&gt;</code> and not <code>List&lt;int&gt;</code>?`, o: ['Integer is faster', 'Collections only hold objects', 'int is deprecated', 'No reason'], a: 1, w: `Primitives aren't objects, so you use their wrapper.` },
      { q: `How many items in a list?`, o: ['list.length', 'list.size()', 'list.count', 'list.length()'], a: 1, w: `size() for collections, length for arrays.` },
      { q: `Can you add to <code>List.of("a")</code>?`, o: ['Yes', 'No, it throws an error', 'Only at the end', 'Only Strings'], a: 1, w: `List.of is read-only.` }
    ],
    wild: [
      `Your chat history, a music queue, search results: lists that grow as you use the app.`,
      `Games keep a list of every bullet or particle on screen and remove them when they disappear.`
    ],
    fact: `When an ArrayList runs out of room, it quietly builds a new array about <b>1.5×</b> bigger and copies everything over. That's why adding is usually instant but sometimes takes a little longer.`
  },
  {
    id: 'p3-map', icon: 'k:v', title: 'HashMap',
    story: [
      `A <b>HashMap</b> is a dictionary. You look up a word (the <b>key</b>) and get its meaning (the <b>value</b>).`,
      `It's incredibly fast. Even with a million entries, finding one takes about the same time as with ten.`,
      `Keys are unique: putting the same key again replaces the old value.`
    ],
    syntax: [
      { c: `import java.util.HashMap;
import java.util.Map;

Map<String, Integer> stock = new HashMap<>();
stock.put("apple", 12);
stock.put("pear", 4);
stock.put("apple", 15);   // replaces 12`, n: `Two types in the brackets: key type, then value type.` },
      { c: `stock.get("apple")              // 15
stock.get("kiwi")               // null (missing)
stock.getOrDefault("kiwi", 0)   // 0
stock.containsKey("pear")       // true
stock.remove("pear");
stock.size()`, n: `<code>getOrDefault</code> saves you from null surprises.` },
      { c: `for (Map.Entry<String, Integer> e : stock.entrySet()) {
  System.out.println(e.getKey() + " -> " + e.getValue());
}
for (String k : stock.keySet()) { ... }
for (int v : stock.values()) { ... }`, n: `Three ways to walk through a map. HashMap has no fixed order.` },
      { c: `counts.merge(word, 1, Integer::sum);`, n: `A short way to say "add 1, or start at 1 if missing". The <code>::</code> part comes back in Phase 4.` }
    ],
    ex: [
      { t: 'fill', p: `Count how many times each word appears.`, c: `Map<String, Integer> counts = new HashMap<>();
for (String w : words) {
  counts.put(w, counts.[[getOrDefault]](w, 0) + 1);
}`, h: `Get the current count, or 0 if the word is new.` },
      { t: 'out', p: `What does this print?`, c: `Map<String, Integer> m = new HashMap<>();
m.put("a", 1);
m.put("a", 2);
System.out.println(m.size() + " " + m.get("a"));`, a: ['1 2'], h: `Same key twice.`, e: `One key, its value replaced: <code>1 2</code>.` },
      { t: 'build', p: `Count each letter in "banana" with a <code>Map&lt;Character, Integer&gt;</code> and print the map.`, h: `Loop over <code>"banana".toCharArray()</code>.`, s: `Map<Character, Integer> freq = new HashMap<>();
for (char c : "banana".toCharArray()) {
  freq.put(c, freq.getOrDefault(c, 0) + 1);
}
System.out.println(freq);   // {a=3, b=1, n=2}` }
    ],
    quiz: [
      { q: `Can a HashMap have two identical keys?`, o: ['Yes', 'No, the new value replaces the old', 'Only for Strings', 'Only two'], a: 1, w: `Keys are unique.` },
      { q: `<code>map.get("missing")</code> returns…`, o: ['0', 'null', '""', 'an error'], a: 1, w: `Use getOrDefault if you want something else.` },
      { q: `Is HashMap ordered?`, o: ['Yes, by key', 'Yes, by insertion', 'No guaranteed order', 'Alphabetical'], a: 2, w: `Need order? Next lesson: TreeMap and LinkedHashMap.` }
    ],
    wild: [
      `DNS works like a giant key-value map spread across the world: domain name → IP address.`,
      `Caches, game inventories (item → quantity), and translation tables are all maps.`
    ],
    fact: `Since Java 8, when lots of keys land in the same internal bucket, HashMap turns that bucket into a balanced tree so lookups stay fast even in the worst case.`
  },
  {
    id: 'p3-set', icon: 'set', title: 'Sets & Sorted Maps',
    story: [
      `A <b>Set</b> is a bag that refuses duplicates. Throw "cat" in twice, it keeps one.`,
      `<b>HashSet</b> is the fastest and has no order. <b>TreeSet</b> and <b>TreeMap</b> keep everything sorted automatically, like a leaderboard that reorders itself.`
    ],
    syntax: [
      { c: `Set<String> visitors = new HashSet<>();
visitors.add("ana");
visitors.add("ana");   // ignored, returns false
visitors.size()        // 1`, n: `Perfect for "unique" anything.` },
      { c: `Set<Integer> sorted = new TreeSet<>(List.of(5, 1, 9));
System.out.println(sorted);   // [1, 5, 9]`, n: `TreeSet sorts as you add.` },
      { c: `Map<Integer, String> board = new TreeMap<>();
board.put(320, "Yuki");
board.put(950, "Kenji");
board.put(610, "Hana");
// keys in order: 320, 610, 950
board.lastKey()     // 950
board.firstKey()    // 320`, n: `TreeMap sorts by key. Great for leaderboards, timelines, price ranges.` },
      { c: `ArrayList      ordered, duplicates OK
HashSet        no duplicates, fastest, no order
TreeSet        no duplicates, sorted
LinkedHashSet  no duplicates, keeps adding order
HashMap        key -> value, fast, no order
TreeMap        key -> value, sorted keys
LinkedHashMap  key -> value, keeps adding order`, n: `Your cheat sheet for picking the right collection.` }
    ],
    ex: [
      { t: 'fill', p: `Remove duplicate tags from a list.`, c: `Set<String> tags = new [[HashSet]]<>(list);
System.out.println(tags.[[size]]());`, h: `The fast set with no order. And how many?` },
      { t: 'out', p: `What does this print?`, c: `Set<Character> s = new TreeSet<>();
for (char c : "banana".toCharArray()) s.add(c);
System.out.println(s);`, a: ['[a, b, n]'], h: `No duplicates, sorted.`, e: `Unique letters a, b, n, sorted: <code>[a, b, n]</code>.` },
      { t: 'build', p: `Leaderboard: store score → player in a TreeMap, then print players from highest to lowest score.`, h: `<code>descendingMap()</code> gives the same map in reverse order.`, s: `TreeMap<Integer, String> board = new TreeMap<>();
board.put(320, "Yuki");
board.put(950, "Kenji");
board.put(610, "Hana");

for (var e : board.descendingMap().entrySet()) {
  System.out.println(e.getValue() + ": " + e.getKey());
}
// Kenji: 950
// Hana: 610
// Yuki: 320` }
    ],
    quiz: [
      { q: `Which collection removes duplicates and keeps them sorted?`, o: ['ArrayList', 'HashSet', 'TreeSet', 'HashMap'], a: 2, w: `Tree = sorted, Set = unique.` },
      { q: `<code>set.add("x")</code> when "x" is already there returns…`, o: ['true', 'false', 'null', 'an error'], a: 1, w: `false means "nothing changed".` },
      { q: `Want keys in the order you added them?`, o: ['HashMap', 'TreeMap', 'LinkedHashMap', 'HashSet'], a: 2, w: `Linked = remembers insertion order.` }
    ],
    wild: [
      `Counting unique visitors on a website, or removing duplicate emails from a mailing list.`,
      `Game leaderboards and price lists that always stay sorted.`
    ],
    fact: `TreeMap is built on a <b>red-black tree</b>, a self-balancing tree. And HashSet is secretly a HashMap in disguise: your items are the keys, and every value is the same dummy object.`
  },
  {
    id: 'p3-generics', icon: '<T>', title: 'Generics',
    story: [
      `The <code>&lt;&gt;</code> brackets tell a container what it holds. <code>List&lt;String&gt;</code> is a box with a sign: "Strings only".`,
      `You can write your own: <code>Box&lt;T&gt;</code>, where <b>T</b> is a blank that gets filled in later, like a form with "your name here".`,
      `The win: Java catches wrong types while you type, and you never need casts to get things out.`
    ],
    syntax: [
      { c: `List<String> names = new ArrayList<>();   // <> on the right: Java fills it in`, n: `The empty <code>&lt;&gt;</code> is called the diamond.` },
      { c: `class Box<T> {
  private T item;
  void put(T item) { this.item = item; }
  T take() { return item; }
}

Box<String> b = new Box<>();
b.put("scroll");
String s = b.take();   // no cast needed`, n: `T stands for "Type". Any letter works, but T, E, K, V are the usual ones.` },
      { c: `record Pair<A, B>(A first, B second) { }

Pair<String, Integer> p = new Pair<>("hp", 90);`, n: `Several blanks at once.` },
      { c: `static <T> T firstOf(List<T> list) {
  return list.get(0);
}`, n: `A generic method: the <code>&lt;T&gt;</code> before the return type announces the blank.` },
      { c: `static <T extends Comparable<T>> T biggest(List<T> list) { ... }`, n: `"T can be anything, as long as it can be compared." This is called a bound.` }
    ],
    ex: [
      { t: 'fill', p: `A box that only holds whole numbers.`, c: `Box<[[Integer]]> b = new Box<>();
b.put(42);
int x = b.[[take]]();`, h: `Wrapper type for int. And the method that gives the item back.` },
      { t: 'build', p: `Write a generic method <code>maxOf(List&lt;T&gt;)</code> that works for any comparable type (numbers, Strings…).`, h: `Bound T with Comparable, then use <code>a.compareTo(b) &gt; 0</code> to check if a is bigger.`, s: `static <T extends Comparable<T>> T maxOf(List<T> list) {
  T best = list.get(0);
  for (T item : list) {
    if (item.compareTo(best) > 0) best = item;
  }
  return best;
}

// maxOf(List.of(3, 9, 4))          -> 9
// maxOf(List.of("kiwi", "apple"))  -> "kiwi"` }
    ],
    quiz: [
      { q: `<code>List&lt;String&gt; l</code>; then <code>l.add(5);</code>…`, o: ['Works', 'Compile error', 'Adds "5"', 'Crashes at runtime'], a: 1, w: `Generics catch the wrong type before the program runs.` },
      { q: `What is T in <code>Box&lt;T&gt;</code>?`, o: ['A class called T', 'A placeholder for a type', 'A number', 'A keyword'], a: 1, w: `It gets replaced when you write Box&lt;String&gt;.` },
      { q: `<code>List&lt;int&gt;</code> is…`, o: ['Fine', 'Not allowed, use Integer', 'Faster', 'Only for arrays'], a: 1, w: `Generics only take object types.` }
    ],
    wild: [
      `Every Java collection is generic. Libraries that read JSON from the internet hand you things like <code>List&lt;User&gt;</code>.`,
      `Generic code lets one sorting method or cache work for any type.`
    ],
    fact: `Generics arrived in <b>Java 5</b> (2004). The types are erased after compiling ("type erasure"), so while the program runs, a <code>List&lt;String&gt;</code> and a <code>List&lt;Integer&gt;</code> are the very same class.`
  },
  {
    id: 'p3-exc', icon: '!', title: 'Exceptions',
    story: [
      `An exception is your program shouting "Ouch, something went wrong!"`,
      `If nobody catches it, the program stops and prints a <b>stack trace</b>: a trail of breadcrumbs showing exactly where it happened.`,
      `<code>try / catch</code> is a safety net. Try the risky thing; if it falls, catch it and do something sensible instead of crashing.`
    ],
    syntax: [
      { c: `try {
  int r = 10 / 0;
} catch (ArithmeticException e) {
  System.out.println("Can't divide by zero");
}`, n: `If anything in try throws that kind of exception, Java jumps straight into catch.` },
      { c: `try {
  int age = Integer.parseInt(text);
} catch (NumberFormatException e) {
  System.out.println("Not a number: " + e.getMessage());
} finally {
  System.out.println("Always runs");
}`, n: `<code>finally</code> runs whether it worked or not. Good for cleanup.` },
      { c: `if (amount < 0) {
  throw new IllegalArgumentException("amount must be positive");
}`, n: `You can throw your own. This refuses bad input loudly instead of quietly doing something wrong.` },
      { c: `class OutOfManaException extends RuntimeException {
  OutOfManaException(String msg) { super(msg); }
}`, n: `Custom exceptions give errors clear names.` },
      { c: `NullPointerException            // used something that is null
ArrayIndexOutOfBoundsException  // locker that doesn't exist
NumberFormatException           // "12a" is not a number
ArithmeticException             // divide by zero (ints)`, n: `The four you'll meet most.` }
    ],
    ex: [
      { t: 'fill', p: `Read a number safely.`, c: `[[try]] {
  int n = Integer.parseInt(text);
  System.out.println("Got " + n);
} [[catch]] (NumberFormatException e) {
  System.out.println("Not a number");
}`, h: `The two keywords of the safety net.` },
      { t: 'out', p: `What does this print? (all on one line)`, c: `try {
  System.out.print("A");
  int x = 5 / 0;
  System.out.print("B");
} catch (ArithmeticException e) {
  System.out.print("C");
} finally {
  System.out.print("D");
}`, a: ['ACD'], h: `After the crash, the rest of try is skipped.`, e: `A prints, the division throws so B is skipped, catch prints C, finally prints D: <code>ACD</code>.` },
      { t: 'build', p: `Make <code>InsufficientFundsException</code> and throw it from <code>withdraw</code> when the amount is bigger than the balance. Catch it in main and print a friendly message.`, h: `Extend RuntimeException and pass the message to super.`, s: `class InsufficientFundsException extends RuntimeException {
  InsufficientFundsException(String msg) { super(msg); }
}

void withdraw(double amount) {
  if (amount > balance) {
    throw new InsufficientFundsException("Only " + balance + " left");
  }
  balance -= amount;
}

// in main:
try {
  acc.withdraw(500);
} catch (InsufficientFundsException e) {
  System.out.println("Sorry: " + e.getMessage());
}` }
    ],
    quiz: [
      { q: `When does <code>finally</code> run?`, o: ['Only on errors', 'Only when it works', 'Always', 'Never'], a: 2, w: `That's its whole job.` },
      { q: `<code>Integer.parseInt("12a")</code> throws…`, o: ['NullPointerException', 'NumberFormatException', 'ArithmeticException', 'nothing'], a: 1, w: `"12a" isn't a number.` },
      { q: `Which keyword raises an exception yourself?`, o: ['catch', 'throws', 'throw', 'try'], a: 2, w: `<code>throw new ...</code>. (throws with an s is for the next lesson.)` }
    ],
    wild: [
      `Apps catch network errors and show "No connection, retry?" instead of crashing.`,
      `Payment systems throw on invalid amounts so a bug can't silently send the wrong money.`
    ],
    fact: `Tony Hoare invented the null reference in 1965 and later called it his "billion-dollar mistake". Since <b>Java 14</b>, a NullPointerException tells you exactly which variable was null.`
  },
  {
    id: 'p3-checked', icon: 'try', title: 'Checked vs Unchecked',
    story: [
      `There are two families of problems.`,
      `<b>Unchecked</b> (RuntimeException): usually your bug, like dividing by zero or using null. Java doesn't force you to catch them; you should fix the code.`,
      `<b>Checked</b>: things outside your control, like a missing file or no internet. Java <i>forces</i> you to deal with them: catch them, or warn your caller with <code>throws</code>.`,
      `And <b>try-with-resources</b> closes files and connections for you, even when things go wrong.`
    ],
    syntax: [
      { c: `Exception
 ├─ IOException              checked: must handle
 └─ RuntimeException         unchecked
     ├─ NullPointerException
     └─ IllegalArgumentException`, n: `The family tree.` },
      { c: `String load(Path p) throws IOException {
  return Files.readString(p);
}`, n: `<code>throws</code> on a method says "I might fail with this; whoever calls me must handle it."` },
      { c: `try (BufferedReader r = Files.newBufferedReader(Path.of("save.txt"))) {
  System.out.println(r.readLine());
} catch (IOException e) {
  System.out.println("Couldn't read: " + e.getMessage());
}
// r is closed automatically`, n: `Resources declared in the try brackets are closed for you at the end.` },
      { c: `catch (IOException | NumberFormatException e) { ... }`, n: `Catch two kinds with one block.` }
    ],
    ex: [
      { t: 'fill', p: `A method that might fail to read a file, and a safe caller.`, c: `static String read(Path p) [[throws]] IOException {
  return Files.readString(p);
}

[[try]] (var r = Files.newBufferedReader(p)) {
  System.out.println(r.readLine());
} catch (IOException e) {
  System.out.println("Oops");
}`, h: `The warning on the method has an s. The auto-closing block starts like a normal safety net.` },
      { t: 'build', p: `Write <code>String firstLine(Path p)</code> that returns the first line of a file, or "(empty)" if the file is missing or empty. No exception should escape.`, h: `try-with-resources around a BufferedReader; readLine() returns null at the end.`, s: `static String firstLine(Path p) {
  try (BufferedReader r = Files.newBufferedReader(p)) {
    String line = r.readLine();
    return line == null ? "(empty)" : line;
  } catch (IOException e) {
    return "(empty)";
  }
}` }
    ],
    quiz: [
      { q: `Which one is checked?`, o: ['NullPointerException', 'IOException', 'ArithmeticException', 'IllegalArgumentException'], a: 1, w: `IOException is outside your control, so Java makes you handle it.` },
      { q: `What does <code>throws IOException</code> on a method mean?`, o: ['It always fails', 'The caller must handle it', 'It catches it', 'It ignores it'], a: 1, w: `It passes the responsibility up.` },
      { q: `What does try-with-resources do?`, o: ['Retries automatically', 'Closes the resource for you', 'Hides errors', 'Makes code faster'], a: 1, w: `No forgotten open files.` }
    ],
    wild: [
      `Everything that reads files, talks to a database or calls the internet uses checked exceptions and try-with-resources.`,
      `Forgetting to close files or connections is how servers slowly run out of resources and crash.`
    ],
    fact: `Checked exceptions are almost a Java-only idea. C#, Kotlin and Scala looked at them and decided not to copy them. Programmers still argue about who was right.`
  },
  {
    id: 'p3-files', icon: 'txt', title: 'Files',
    story: [
      `Variables forget everything when the program stops. <b>Files remember.</b>`,
      `<code>java.nio.file</code> is the modern toolbox. <code>Path</code> says <i>where</i> a file is. <code>Files</code> does the reading and writing.`
    ],
    syntax: [
      { c: `import java.nio.file.*;

Path p = Path.of("notes.txt");`, n: `A relative path like this points to the folder your program runs from (the project folder in IntelliJ).` },
      { c: `Files.writeString(p, "Buy rice");   // create or replace
Files.writeString(p, "\\nTea", StandardOpenOption.APPEND);   // add to the end`, n: `<code>\\n</code> inside a String means "new line".` },
      { c: `String all = Files.readString(p);
List<String> lines = Files.readAllLines(p);`, n: `Read everything at once, or as a list of lines.` },
      { c: `Files.write(p, List.of("one", "two"));   // each item becomes a line
Files.exists(p)
Files.delete(p)`, n: `All of these can throw IOException, so wrap them or add throws.` },
      { c: `for (String line : Files.readAllLines(Path.of("scores.csv"))) {
  String[] cols = line.split(",");
  String name = cols[0];
  int score = Integer.parseInt(cols[1]);
}`, n: `Reading a simple CSV file: split each line by commas.` }
    ],
    ex: [
      { t: 'fill', p: `Read every line of a score file.`, c: `List<String> lines = Files.[[readAllLines]](Path.[[of]]("scores.txt"));`, h: `"Read all lines". And how do you make a Path from text?` },
      { t: 'build', p: `High score saver: read the best score from <code>best.txt</code> (0 if the file doesn't exist). If the new score is higher, write it back.`, h: `Files.exists first. Integer.parseInt(Files.readString(p).trim()).`, s: `static void saveIfBest(int score) throws IOException {
  Path p = Path.of("best.txt");
  int best = 0;
  if (Files.exists(p)) {
    best = Integer.parseInt(Files.readString(p).trim());
  }
  if (score > best) {
    Files.writeString(p, String.valueOf(score));
    System.out.println("New record: " + score);
  }
}` }
    ],
    quiz: [
      { q: `Which class does the reading and writing?`, o: ['Path', 'Files', 'File', 'Scanner'], a: 1, w: `Path = where. Files = do things.` },
      { q: `<code>Files.writeString(p, "x")</code> on an existing file…`, o: ['Adds x at the end', 'Replaces the content', 'Does nothing', 'Throws'], a: 1, w: `Use StandardOpenOption.APPEND to add instead.` },
      { q: `File methods can throw…`, o: ['IOException', 'NumberFormatException', 'ArithmeticException', 'nothing'], a: 0, w: `It's a checked exception, so you must handle it.` }
    ],
    wild: [
      `Game save files, app settings, log files and the CSV exports from your bank.`,
      `Servers write log files all day; engineers read them to find out what went wrong at 3 a.m.`
    ],
    fact: `Minecraft saves worlds in <b>region files</b>, each one holding a 32 × 32 area of chunks. Your whole world on disk is a folder full of them.`
  },
  {
    id: 'p3-gate', icon: '竜', title: 'Gate: Dungeon To-Do', gate: true,
    story: [
      `When it starts, it shows your tasks with a number in front of each one. Then it waits for you to type a command:`,
      `<code>add Buy rice</code> adds a new task called "Buy rice".<br><code>done 1</code> marks task number 1 as finished.<br><code>quit</code> stops the program.`,
      `Here's what using it looks like:<code class="run">1. [ ] Buy rice
2. [ ] Study Java
add | done | quit &gt; done 1
1. [x] Buy rice
2. [ ] Study Java</code>`,
      `The special part: it <b>remembers</b>. Your tasks are saved in a file called <code>tasks.txt</code>. Close the program, run it again tomorrow, and your list is still there. Without the file, everything would vanish the moment the program stops, because variables only live while the program runs.`,
      `You'll build it in 4 small steps: a Task, a list of tasks, saving and loading the file, and finally the command loop that reads what you type.`
    ],
    ex: [
      { t: 'build', p: `<b>Step 1.</b> Make <code>record Task(String text, boolean done)</code> with <code>toLine()</code> (like <code>0;Buy rice</code>) and a static <code>fromLine(String)</code> that turns such a line back into a Task.`, h: `Use ";" as the separator. <code>line.split(";", 2)</code> splits only at the first ";", so the text can contain more.`, s: `record Task(String text, boolean done) {
  String toLine() {
    return (done ? "1" : "0") + ";" + text;
  }

  static Task fromLine(String line) {
    String[] parts = line.split(";", 2);
    return new Task(parts[1], parts[0].equals("1"));
  }
}` },
      { t: 'build', p: `<b>Step 2.</b> Make a <code>TodoList</code> class holding a <code>List&lt;Task&gt;</code>, with <code>add(String)</code>, <code>complete(int index)</code> and <code>print()</code> (numbered, with [x] for done).`, h: `Records can't change, so complete() replaces the task: <code>tasks.set(i, new Task(old.text(), true))</code>.`, s: `class TodoList {
  private final List<Task> tasks = new ArrayList<>();

  void add(String text) {
    tasks.add(new Task(text, false));
  }

  void complete(int i) {
    Task old = tasks.get(i);
    tasks.set(i, new Task(old.text(), true));
  }

  void print() {
    for (int i = 0; i < tasks.size(); i++) {
      Task t = tasks.get(i);
      System.out.println((i + 1) + ". [" + (t.done() ? "x" : " ") + "] " + t.text());
    }
  }
}` },
      { t: 'build', p: `<b>Step 3.</b> Add <code>save(Path)</code> and <code>load(Path)</code> to TodoList using toLine/fromLine.`, h: `save: build a List&lt;String&gt; of lines, then Files.write. load: return early if the file doesn't exist.`, s: `void save(Path file) throws IOException {
  List<String> lines = new ArrayList<>();
  for (Task t : tasks) lines.add(t.toLine());
  Files.write(file, lines);
}

void load(Path file) throws IOException {
  if (!Files.exists(file)) return;
  for (String line : Files.readAllLines(file)) {
    tasks.add(Task.fromLine(line));
  }
}` },
      { t: 'build', p: `<b>Step 4.</b> Write main: load, then loop reading commands with Scanner. Catch bad numbers like <code>done abc</code> or <code>done 99</code> without crashing. Save after every command.`, h: `Catch <code>NumberFormatException | IndexOutOfBoundsException</code> together.`, s: `public static void main(String[] args) throws IOException {
  Path file = Path.of("tasks.txt");
  TodoList list = new TodoList();
  list.load(file);
  Scanner in = new Scanner(System.in);

  while (true) {
    list.print();
    System.out.print("add <text> | done <n> | quit > ");
    String cmd = in.nextLine().trim();
    if (cmd.equals("quit")) break;

    try {
      if (cmd.startsWith("add ")) list.add(cmd.substring(4));
      else if (cmd.startsWith("done ")) list.complete(Integer.parseInt(cmd.substring(5)) - 1);
      else System.out.println("Unknown command");
    } catch (NumberFormatException | IndexOutOfBoundsException e) {
      System.out.println("Pick a real task number");
    }
    list.save(file);
  }
}` }
    ],
    quiz: [
      { q: `Why use <code>split(";", 2)</code> and not <code>split(";")</code>?`, o: ['It is faster', 'So the task text can contain ";"', 'It removes spaces', 'No difference'], a: 1, w: `The 2 means "at most 2 pieces": everything after the first ";" stays together.` },
      { q: `Where does the list survive after quitting?`, o: ['In RAM', 'In tasks.txt', 'In the ArrayList', 'Nowhere'], a: 1, w: `Files remember, variables forget.` },
      { q: `Typing <code>done 99</code> with 3 tasks throws…`, o: ['IndexOutOfBoundsException', 'IOException', 'NullPointerException', 'nothing'], a: 0, w: `Position 98 doesn't exist, and we catch it.` }
    ],
    wild: [
      `A word-frequency analyzer: load a whole book from a .txt file and show its 20 most used words.`,
      `A contact book saved as CSV that you can search by name.`,
      `A log analyzer that reads a server log and finds the most common error.`,
      `A shop inventory: products in a HashMap, restock alerts, saved to a file.`
    ],
    facts: [
      `CSV is older than the PC: comma-separated files were already used in the early 1970s, and they're still one of the most common ways to move data between programs.`,
      `The Java collections you just used (List, Set, Map) were designed mainly by Joshua Bloch, who also wrote the famous book <i>Effective Java</i>.`
    ]
  }
  ]
};
const P4 = {
  id: 'p4', world: 'Moon Garden', topic: 'Modern Java',
  blurb: `Lambdas, streams, Optional and the newest syntax. Shorter code that reads almost like a sentence.`,
  lessons: [
  {
    id: 'p4-lambda', icon: '->', title: 'Lambdas',
    story: [
      `A <b>lambda</b> is a tiny nameless method you can hand to someone, like a sticky note with instructions on it.`,
      `The note <code>x -> x * 2</code> says: "when you get an x, give back x times 2".`,
      `Before lambdas you needed a whole class just to pass one little rule around. Now it fits on one line.`
    ],
    syntax: [
      { c: `x -> x * 2                     // one input
(a, b) -> a + b                // two inputs
() -> System.out.println("hi") // no input
(x) -> {
  int y = x * 2;
  return y + 1;
}                              // several lines: braces + return`, n: `Inputs on the left, arrow, result on the right.` },
      { c: `List<String> names = new ArrayList<>(List.of("Yuki", "Al", "Kenji"));
names.sort((a, b) -> a.length() - b.length());
// [Al, Yuki, Kenji]`, n: `Sort by length: negative means a comes first, positive means b comes first.` },
      { c: `names.forEach(n -> System.out.println(n));
names.removeIf(n -> n.startsWith("A"));`, n: `Lists accept lambdas directly.` },
      { c: `Runnable r = () -> System.out.println("ninja!");
r.run();`, n: `A lambda stored in a variable, run later.` },
      { c: `int bonus = 5;
list.forEach(x -> System.out.println(x + bonus));   // OK
// bonus = 6;  would break it: lambdas only read variables that never change`, n: `This rule is called "effectively final".` }
    ],
    ex: [
      { t: 'fill', p: `Remove failing scores, then shout every name.`, c: `scores.removeIf(s [[->]] s < 50);
names.forEach(n -> System.out.println(n.[[toUpperCase]]()));`, h: `The lambda arrow, then the String method that makes CAPITALS.` },
      { t: 'out', p: `What does this print?`, c: `List<String> w = new ArrayList<>(List.of("bamboo", "fox", "moon"));
w.sort((a, b) -> a.length() - b.length());
System.out.println(w);`, a: ['[fox, moon, bamboo]'], h: `Shortest first.`, e: `3, 4, 6 letters: <code>[fox, moon, bamboo]</code>.` },
      { t: 'build', p: `Given <code>record Product(String name, double price)</code> and a list of products, sort it from cheapest to most expensive with a lambda and print each one.`, h: `<code>Double.compare(a.price(), b.price())</code> gives the negative/zero/positive answer for you.`, s: `List<Product> items = new ArrayList<>(List.of(
    new Product("Lantern", 12.5),
    new Product("Tea", 4.0),
    new Product("Kimono", 60.0)));

items.sort((a, b) -> Double.compare(a.price(), b.price()));
items.forEach(p -> System.out.println(p.name() + " " + p.price()));` }
    ],
    quiz: [
      { q: `<code>x -> x + 1</code> is…`, o: ['A loop', 'A tiny nameless function', 'A comparison', 'A class'], a: 1, w: `Input x, output x + 1.` },
      { q: `A lambda with several lines needs…`, o: ['Nothing extra', 'Braces and return', 'A name', 'static'], a: 1, w: `<code>x -> { ...; return y; }</code>` },
      { q: `Can a lambda change a local variable from outside it?`, o: ['Yes', 'No, outside variables must stay unchanged', 'Only ints', 'Only in loops'], a: 1, w: `They must be effectively final.` }
    ],
    wild: [
      `Button clicks in Android apps: <code>button.setOnClickListener(v -> openMenu())</code>.`,
      `Custom sorting everywhere: by price, by date, by distance from you.`
    ],
    fact: `The name comes from <b>lambda calculus</b>, invented by Alonzo Church in the 1930s, before real computers existed. Lambdas arrived in Java with <b>Java 8</b> in 2014.`
  },
  {
    id: 'p4-func', icon: 'f(x)', title: 'Functional Interfaces',
    story: [
      `A lambda needs a "shape" to fit into, like a key needs a lock.`,
      `Java ships with ready-made shapes: <b>Predicate</b> asks a yes/no question, <b>Function</b> turns A into B, <b>Consumer</b> eats a value and gives nothing back, <b>Supplier</b> gives a value out of nowhere.`,
      `And <b>method references</b> (<code>::</code>) are an even shorter way to write a lambda that just calls one method.`
    ],
    syntax: [
      { c: `Predicate<Integer> isAdult = age -> age >= 18;
isAdult.test(20)   // true`, n: `Predicate: question → true/false. Method: <code>test</code>.` },
      { c: `Function<Double, Double> toF = c -> c * 9 / 5 + 32;
toF.apply(100.0)   // 212.0`, n: `Function: in → out. Method: <code>apply</code>.` },
      { c: `Consumer<String> shout = s -> System.out.println(s + "!");
shout.accept("Hai");

Supplier<Integer> dice = () -> (int) (Math.random() * 6) + 1;
dice.get()`, n: `Consumer: takes, returns nothing (<code>accept</code>). Supplier: takes nothing, returns (<code>get</code>).` },
      { c: `String::toUpperCase     // s -> s.toUpperCase()
System.out::println     // x -> System.out.println(x)
Integer::parseInt       // s -> Integer.parseInt(s)
Product::price          // p -> p.price()`, n: `Method references. Use them when the lambda only calls one method.` },
      { c: `Predicate<Integer> workingAge = isAdult.and(a -> a < 65);
Function<Double, Long> rounded = toF.andThen(f -> Math.round(f));`, n: `Snap small pieces together into bigger rules.` }
    ],
    ex: [
      { t: 'fill', p: `A yes/no rule, and printing with a method reference.`, c: `[[Predicate]]<String> isLong = s -> s.length() > 5;
names.forEach(System.out[[::]]println);`, h: `The shape that answers true/false. And the method reference symbol.` },
      { t: 'out', p: `What does this print?`, c: `Function<Integer, Integer> dbl = x -> x * 2;
Function<Integer, Integer> inc = x -> x + 1;
System.out.println(dbl.andThen(inc).apply(5));`, a: ['11'], h: `andThen: first dbl, then inc.`, e: `5 × 2 = 10, then + 1 = <code>11</code>.` },
      { t: 'build', p: `Password rules as Predicates: at least 8 chars, has a digit, has an uppercase letter. Combine them with <code>and</code> and test a few passwords.`, h: `<code>s.chars().anyMatch(Character::isDigit)</code> checks for a digit.`, s: `Predicate<String> longEnough = s -> s.length() >= 8;
Predicate<String> hasDigit = s -> s.chars().anyMatch(Character::isDigit);
Predicate<String> hasUpper = s -> s.chars().anyMatch(Character::isUpperCase);

Predicate<String> strong = longEnough.and(hasDigit).and(hasUpper);

System.out.println(strong.test("moonlight"));   // false
System.out.println(strong.test("Moonlight7"));  // true` }
    ],
    quiz: [
      { q: `Which one answers true/false?`, o: ['Function', 'Predicate', 'Supplier', 'Consumer'], a: 1, w: `Predicate.test returns a boolean.` },
      { q: `<code>String::length</code> is the same as…`, o: ['s -> s.length()', 's -> length', '() -> length()', 'String.length'], a: 0, w: `A method reference is a shortcut for that lambda.` },
      { q: `Which takes nothing and gives a value?`, o: ['Consumer', 'Predicate', 'Supplier', 'Function'], a: 2, w: `It supplies values, like a dice roll.` }
    ],
    wild: [
      `Online shops store discount rules as Functions (price in, price out) and chain them.`,
      `Form validation libraries are basically lists of Predicates.`
    ],
    fact: `Any interface with exactly <b>one</b> abstract method can hold a lambda. The <code>@FunctionalInterface</code> annotation just asks the compiler to check that rule for you.`
  },
  {
    id: 'p4-stream1', icon: '>>', title: 'Streams: filter & map',
    story: [
      `A <b>stream</b> is a conveyor belt in a factory. Items ride along, stations throw some away (<b>filter</b>), change others (<b>map</b>), and a last station packs the result (<b>toList</b>).`,
      `Your original list is never touched. The belt makes something new.`,
      `If you know JavaScript's <code>array.filter().map()</code>, you already get the idea.`
    ],
    syntax: [
      { c: `List<Integer> prices = List.of(5, 30, 12, 80, 45);

List<Integer> cheapDoubled = prices.stream()
    .filter(p -> p < 40)   // keep only some
    .map(p -> p * 2)       // change each one
    .toList();             // pack the result
// [10, 60, 24]`, n: `Start with <code>.stream()</code>, add stations, finish with a final step.` },
      { c: `names.stream()
     .map(String::toUpperCase)
     .forEach(System.out::println);`, n: `forEach as the final step: do something with each item.` },
      { c: `long n = words.stream()
    .filter(w -> w.startsWith("s"))
    .count();`, n: `count as the final step.` },
      { c: `.distinct()   // remove duplicates
.sorted()     // natural order
.limit(3)     // only the first 3
.skip(2)      // ignore the first 2`, n: `More stations for the belt.` },
      { c: `IntStream.rangeClosed(1, 5)   // 1 2 3 4 5
Arrays.stream(myArray)        // a stream from an array`, n: `Streams don't have to start from a list.` }
    ],
    ex: [
      { t: 'fill', p: `Keep names longer than 3 letters, in capitals.`, c: `List<String> loud = names.stream()
    .[[filter]](n -> n.length() > 3)
    .[[map]](String::toUpperCase)
    .[[toList]]();`, h: `Throw away, change, pack.` },
      { t: 'out', p: `What does this print?`, c: `System.out.println(
    List.of(1, 2, 3, 4, 5, 6).stream()
        .filter(n -> n % 2 == 0)
        .map(n -> n * n)
        .toList());`, a: ['[4, 16, 36]'], h: `Keep the evens, then square them.`, e: `2, 4, 6 squared: <code>[4, 16, 36]</code>.` },
      { t: 'build', p: `From a <code>List&lt;Product&gt;</code>, get the names of products under 20, sorted alphabetically.`, h: `filter on price, map to name, sorted, toList.`, s: `List<String> cheap = products.stream()
    .filter(p -> p.price() < 20)
    .map(Product::name)
    .sorted()
    .toList();` }
    ],
    quiz: [
      { q: `Does <code>.filter()</code> change the original list?`, o: ['Yes', 'No, it makes a new result', 'Only if you sort', 'Only for arrays'], a: 1, w: `Streams never touch their source.` },
      { q: `Which step changes each item?`, o: ['filter', 'map', 'count', 'limit'], a: 1, w: `map = transform.` },
      { q: `What happens with <code>list.stream().filter(...).map(...)</code> and no final step?`, o: ['It runs anyway', 'Nothing runs at all', 'It crashes', 'It returns a list'], a: 1, w: `Streams are lazy: no final step, no work.` }
    ],
    wild: [
      `"Show only unread messages", "only products in stock", "only hotels under 80": filters everywhere.`,
      `Cleaning messy data before saving it: trim, lowercase, remove duplicates.`
    ],
    fact: `Change <code>.stream()</code> to <code>.parallelStream()</code> and Java splits the work across your CPU cores. It only pays off for big piles of data, but it's one word.`
  },
  {
    id: 'p4-stream2', icon: 'sum', title: 'Streams: collect & reduce',
    story: [
      `The last station on the belt can do more than make a list.`,
      `It can add everything up, find the biggest, join words into a sentence, or sort items into buckets, like sorting laundry by color.`
    ],
    syntax: [
      { c: `int total = prices.stream().mapToInt(Integer::intValue).sum();
double avg = prices.stream().mapToInt(p -> p).average().orElse(0);`, n: `<code>mapToInt</code> gives a number stream with sum, average, min and max.` },
      { c: `int product = List.of(1, 2, 3, 4).stream()
    .reduce(1, (a, b) -> a * b);   // 24`, n: `reduce folds everything into one value. Start value, then the rule for combining two.` },
      { c: `List<Player> top3 = players.stream()
    .sorted(Comparator.comparing(Player::score).reversed())
    .limit(3)
    .toList();`, n: `Sort by a field, flip it, keep the top 3.` },
      { c: `Map<Character, List<String>> byLetter = words.stream()
    .collect(Collectors.groupingBy(w -> w.charAt(0)));

Map<String, Long> counts = words.stream()
    .collect(Collectors.groupingBy(w -> w, Collectors.counting()));`, n: `groupingBy: put items into buckets by a key. Add counting() to count each bucket.` },
      { c: `String csv = names.stream().collect(Collectors.joining(", "));
boolean any = nums.stream().anyMatch(n -> n > 100);
Optional<Player> best = players.stream().max(Comparator.comparing(Player::score));`, n: `Join into text, ask a yes/no question, find the max.` }
    ],
    ex: [
      { t: 'fill', p: `Join letters with dashes, and sum a list.`, c: `String line = List.of("a", "b", "c").stream()
    .collect(Collectors.[[joining]]("-"));   // "a-b-c"

int sum = nums.stream().[[mapToInt]](n -> n).sum();`, h: `"Joining" text. And turning into a number stream.` },
      { t: 'out', p: `What does this print?`, c: `System.out.println(
    Stream.of("ant", "bee", "ape")
        .collect(Collectors.groupingBy(s -> s.charAt(0), Collectors.counting())));`, a: ['{a=2, b=1}'], h: `Bucket by first letter, then count each bucket.`, e: `Two words start with a, one with b: <code>{a=2, b=1}</code>.` },
      { t: 'build', p: `With <code>record Player(String name, int score)</code>: print the top 3 names and the average score.`, h: `sorted with comparing(...).reversed(), limit(3), map to name. Average with mapToInt(Player::score).average().`, s: `List<String> top = players.stream()
    .sorted(Comparator.comparing(Player::score).reversed())
    .limit(3)
    .map(Player::name)
    .toList();

double avg = players.stream()
    .mapToInt(Player::score)
    .average()
    .orElse(0);

System.out.println(top + " avg=" + avg);` }
    ],
    quiz: [
      { q: `Which collector puts items into buckets?`, o: ['joining', 'groupingBy', 'toList', 'counting'], a: 1, w: `groupingBy(key) → Map of key to list.` },
      { q: `<code>reduce(0, (a, b) -> a + b)</code> on [1, 2, 3] gives…`, o: ['0', '3', '6', '123'], a: 2, w: `0 + 1 + 2 + 3.` },
      { q: `Best way to check "is any number above 100?"`, o: ['filter().count()', 'anyMatch', 'map', 'sorted'], a: 1, w: `anyMatch stops as soon as it finds one.` }
    ],
    wild: [
      `Analytics: "total sales per country", "top 10 songs this week", "average rating per restaurant".`,
      `Bank apps grouping your spending by category for the monthly pie chart.`
    ],
    fact: `<code>groupingBy</code> does the same job as SQL's <code>GROUP BY</code>, and <code>filter</code> is like <code>WHERE</code>. If you know SQL, streams will feel familiar.`
  },
  {
    id: 'p4-optional', icon: '?', title: 'Optional',
    story: [
      `Sometimes there's no answer, like searching for a user who doesn't exist.`,
      `Returning <code>null</code> is like handing someone an empty box that explodes when they open it (NullPointerException).`,
      `<b>Optional</b> is a box with a big label: "might be empty, check before using". Java makes you think about the empty case.`
    ],
    syntax: [
      { c: `Optional<User> u = findUser("kenji");`, n: `A method that may not find anything returns an Optional.` },
      { c: `Optional.of(value)          // must not be null
Optional.empty()            // nothing inside
Optional.ofNullable(maybe)  // either one`, n: `Three ways to make one.` },
      { c: `u.isPresent()
u.isEmpty()
u.orElse(guest)                  // value or a backup
u.orElseGet(() -> makeGuest())   // backup made only when needed
u.orElseThrow()                  // value or an exception`, n: `Ways to open the box safely.` },
      { c: `String city = findUser("kenji")
    .map(User::city)
    .orElse("unknown");

u.ifPresent(user -> System.out.println("Hi " + user.name()));`, n: `map works on Optional too: change the value if there is one, skip if not.` },
      { c: `// use Optional for return values
// avoid it for fields and parameters
// avoid .get() without checking first`, n: `Three habits that keep Optional useful.` }
    ],
    ex: [
      { t: 'fill', p: `Use a default name when nobody is logged in.`, c: `String name = maybeUser
    .map(User::name)
    .[[orElse]]("guest");`, h: `"Or else use this".` },
      { t: 'out', p: `What does this print?`, c: `Optional<String> o = Optional.empty();
System.out.println(o.map(String::length).orElse(-1));`, a: ['-1'], h: `map on an empty box does nothing.`, e: `Still empty, so the backup: <code>-1</code>.` },
      { t: 'build', p: `Find the first product cheaper than a budget. Return <code>Optional&lt;Product&gt;</code> and print its name or "Nothing fits".`, h: `filter, then findFirst() gives an Optional.`, s: `static Optional<Product> firstUnder(List<Product> items, double budget) {
  return items.stream()
      .filter(p -> p.price() <= budget)
      .findFirst();
}

// in main:
String msg = firstUnder(items, 10)
    .map(Product::name)
    .orElse("Nothing fits");
System.out.println(msg);` }
    ],
    quiz: [
      { q: `Optional mainly helps avoid…`, o: ['Slow code', 'NullPointerException', 'Loops', 'Imports'], a: 1, w: `It makes "maybe nothing" visible.` },
      { q: `<code>Optional.empty().orElse(5)</code> gives…`, o: ['null', '0', '5', 'an error'], a: 2, w: `Empty, so the backup value.` },
      { q: `Where should Optional usually appear?`, o: ['As a return type', 'As a field', 'As a parameter', 'In arrays'], a: 0, w: `It's designed for "this method might return nothing".` }
    ],
    wild: [
      `Search features that show "no results" calmly instead of crashing.`,
      `Settings with fallbacks: use the saved language, or English if none is set.`
    ],
    fact: `In the Spring framework, the very common repository method <code>findById</code> returns an Optional, so millions of Java backends use this idea every day.`
  },
  {
    id: 'p4-modern', icon: 'var', title: 'var, switch & text blocks',
    story: [
      `Java keeps getting new shortcuts so you write less noise.`,
      `<code>var</code> lets Java guess types. Switch can hand back values. Text blocks let you paste multi-line text (like JSON or SQL) without a mess of quotes and plus signs.`
    ],
    syntax: [
      { c: `var list = new ArrayList<String>();   // Java 10: type guessed
for (var e : map.entrySet()) { ... }`, n: `Great when the type is long and obvious. Only for local variables with a value.` },
      { c: `String type = switch (day) {   // day is an enum Day
  case SAT, SUN -> "weekend";
  case FRI -> {
    System.out.println("almost!");
    yield "weekday";
  }
  default -> "weekday";
};`, n: `When a case needs several lines, use a block and <code>yield</code> to hand back the value.` },
      { c: `String json = """
    {
      "name": "Kenji",
      "level": 7
    }
    """;`, n: `A text block: three quotes, then the text exactly as it looks. Java removes the shared indentation.` },
      { c: `"Kenji is level %d".formatted(7)
"ha".repeat(3)        // "hahaha"
"   ".isBlank()       // true
"a\\nb".lines().count()  // 2
" hi ".strip()        // "hi"`, n: `Handy String methods from newer Java versions.` }
    ],
    ex: [
      { t: 'fill', p: `Rank a player by XP.`, c: `String rank = [[switch]] (xp / 100) {
  case 0 -> "rookie";
  case 1, 2 -> "ninja";
  [[default]] -> "master";
};`, h: `The value-returning keyword, and the catch-all case.` },
      { t: 'out', p: `What does this print?`, c: `var x = 7 / 2;
System.out.println(x);`, a: ['3'], h: `What type does Java guess for 7 / 2?`, e: `int / int is an int, so var becomes int: <code>3</code>.` },
      { t: 'build', p: `Write an SQL query as a text block and print it: select name and score from players where score is above 500, ordered by score descending.`, h: `Start and end with three double quotes.`, s: `String sql = """
    SELECT name, score
    FROM players
    WHERE score > 500
    ORDER BY score DESC
    """;
System.out.println(sql);` }
    ],
    quiz: [
      { q: `Where can you NOT use <code>var</code>?`, o: ['Local variable with a value', 'For-each loop', 'A class field', 'Inside main'], a: 2, w: `var only works for local variables.` },
      { q: `In a switch block, which word hands back the value?`, o: ['return', 'yield', 'break', 'give'], a: 1, w: `return would leave the whole method.` },
      { q: `Text blocks start with…`, o: ['"', "'''", '"""', '`'], a: 2, w: `Three double quotes.` }
    ],
    wild: [
      `Text blocks make SQL queries and JSON test data readable inside Java code.`,
      `Switch expressions keep game state machines short: MENU → PLAYING → PAUSED.`
    ],
    fact: `Since 2017 Java ships a new version every <b>6 months</b> (March and September), and a long-term support version every two years. That's why features arrive in small regular steps.`
  },
  {
    id: 'p4-pattern', icon: 'is', title: 'Pattern Matching',
    story: [
      `Pattern matching asks "is this thing a ___? If yes, open it up and give me its parts", all in one go.`,
      `With <b>sealed</b> interfaces you say "these are the ONLY kinds that exist". Then Java can check that your switch handles every single kind, and warns you if you forget one.`
    ],
    syntax: [
      { c: `// old way
if (obj instanceof String) {
  String s = (String) obj;
  System.out.println(s.length());
}

// new way (Java 16)
if (obj instanceof String s) {
  System.out.println(s.length());
}`, n: `Check and name it in one step. No cast.` },
      { c: `sealed interface Shape permits Circle, Rect { }
record Circle(double r) implements Shape { }
record Rect(double w, double h) implements Shape { }`, n: `Only Circle and Rect are allowed to be Shapes.` },
      { c: `double area = switch (shape) {
  case Circle c -> Math.PI * c.r() * c.r();
  case Rect r -> r.w() * r.h();
};   // no default needed: Java knows every kind`, n: `A switch on types. Add a Triangle later and Java points at every switch you need to update.` },
      { c: `if (shape instanceof Rect(double w, double h)) {
  System.out.println(w * h);
}`, n: `Record patterns (Java 21): open the record and grab its parts directly.` },
      { c: `case Circle c when c.r() > 10 -> "big circle";`, n: `<code>when</code> adds an extra condition to a case.` }
    ],
    ex: [
      { t: 'fill', p: `Check and use a type in one step.`, c: `if (pet [[instanceof]] Dog d) {
  d.bark();
}`, h: `The keyword that asks "is this a…?"` },
      { t: 'out', p: `What does this print?`, c: `Object o = 42;
String r = switch (o) {
  case Integer i when i > 40 -> "big";
  case Integer i -> "small";
  default -> "other";
};
System.out.println(r);`, a: ['big'], h: `42 is an Integer. Is it above 40?`, e: `The first case matches: <code>big</code>.` },
      { t: 'build', p: `Model app events: a sealed interface <code>Event</code> with records <code>Click(int x, int y)</code>, <code>Key(char c)</code> and <code>Scroll(int dy)</code>. Write <code>String describe(Event e)</code> with a pattern switch.`, h: `permits Click, Key, Scroll. Each case can use record patterns.`, s: `sealed interface Event permits Click, Key, Scroll { }
record Click(int x, int y) implements Event { }
record Key(char c) implements Event { }
record Scroll(int dy) implements Event { }

static String describe(Event e) {
  return switch (e) {
    case Click(int x, int y) -> "click at " + x + "," + y;
    case Key(char c) -> "pressed " + c;
    case Scroll(int dy) when dy < 0 -> "scroll up";
    case Scroll s -> "scroll down";
  };
}` }
    ],
    quiz: [
      { q: `What does <code>sealed</code> do?`, o: ['Hides the class', 'Lists the only allowed subtypes', 'Makes it final', 'Encrypts it'], a: 1, w: `permits names every allowed kind.` },
      { q: `In <code>obj instanceof String s</code>, s is…`, o: ['A new String', 'obj already cast to String', 'null', 'A boolean'], a: 1, w: `It's ready to use if the check is true.` },
      { q: `Why no <code>default</code> in a switch over a sealed type?`, o: ['It is forbidden', 'Java knows all cases are covered', 'It is optional everywhere', 'Records forbid it'], a: 1, w: `And it warns you when a new kind is added.` }
    ],
    wild: [
      `Compilers and interpreters handle each kind of token or expression with exactly this kind of switch.`,
      `Game and UI event systems: click, key, scroll, touch, each with its own data.`
    ],
    fact: `Pattern matching for switch became final in <b>Java 21</b> (2023). Languages like Haskell and Rust had the idea for years, and Java borrowed it in small careful steps.`
  },
  {
    id: 'p4-gate', icon: '竜', title: 'Gate: Moon Garden Stats', gate: true,
    story: [
      `Last gate. Rewrite the to-do app from Gate 3 (Dungeon To-Do) the modern way and give it a stats screen: how much is done, which tag is busiest, what's left.`,
      `Then replace the if/else command reading with a sealed Command type and a pattern switch. This is how modern Java code looks in real companies.`
    ],
    ex: [
      { t: 'build', p: `<b>Step 1.</b> Make <code>record Task(String text, String tag, boolean done)</code> and a sample list of 6 tasks with tags like "school", "home", "code".`, h: `<code>List.of(new Task(...), ...)</code> for the sample, or an ArrayList if you'll change it.`, s: `record Task(String text, String tag, boolean done) { }

List<Task> tasks = new ArrayList<>(List.of(
    new Task("Read chapter 3", "school", true),
    new Task("Finish lab", "school", false),
    new Task("Wash dishes", "home", true),
    new Task("Fix bike", "home", false),
    new Task("Streams practice", "code", true),
    new Task("Build stats screen", "code", false)));` },
      { t: 'build', p: `<b>Step 2.</b> With streams: print the pending task texts, the number done, and the percentage done.`, h: `<code>printf("%d/%d done (%.0f%%)%n", ...)</code> prints a neat line. %% prints a percent sign.`, s: `List<String> pending = tasks.stream()
    .filter(t -> !t.done())
    .map(Task::text)
    .toList();

long done = tasks.stream().filter(Task::done).count();
double pct = tasks.isEmpty() ? 0 : 100.0 * done / tasks.size();

System.out.println("Pending: " + pending);
System.out.printf("%d/%d done (%.0f%%)%n", done, tasks.size(), pct);` },
      { t: 'build', p: `<b>Step 3.</b> Count tasks per tag with groupingBy, and find the busiest tag as an <code>Optional&lt;String&gt;</code>.`, h: `Stream over <code>perTag.entrySet()</code> and use <code>max(Map.Entry.comparingByValue())</code>.`, s: `Map<String, Long> perTag = tasks.stream()
    .collect(Collectors.groupingBy(Task::tag, Collectors.counting()));

Optional<String> busiest = perTag.entrySet().stream()
    .max(Map.Entry.comparingByValue())
    .map(Map.Entry::getKey);

System.out.println(perTag);
System.out.println("Busiest: " + busiest.orElse("none"));` },
      { t: 'build', p: `<b>Step 4.</b> Make a sealed <code>Command</code> (Add, Done, Stats, Quit as records), a <code>parse(String)</code> method, and handle commands with a pattern switch in the main loop.`, h: `Input like <code>add school Read notes</code>: split(" ", 3) gives command, tag, text.`, s: `sealed interface Command permits Add, Done, Stats, Quit { }
record Add(String tag, String text) implements Command { }
record Done(int index) implements Command { }
record Stats() implements Command { }
record Quit() implements Command { }

static Command parse(String input) {
  String[] p = input.trim().split(" ", 3);
  return switch (p[0]) {
    case "add" -> new Add(p[1], p[2]);
    case "done" -> new Done(Integer.parseInt(p[1]) - 1);
    case "stats" -> new Stats();
    default -> new Quit();
  };
}

// in the loop:
switch (parse(in.nextLine())) {
  case Add(String tag, String text) -> tasks.add(new Task(text, tag, false));
  case Done(int i) -> {
    Task t = tasks.get(i);
    tasks.set(i, new Task(t.text(), t.tag(), true));
  }
  case Stats s -> printStats(tasks);
  case Quit q -> running = false;
}` }
    ],
    quiz: [
      { q: `Which stream step counts tasks per tag?`, o: ['filter', 'groupingBy with counting()', 'map', 'reduce'], a: 1, w: `Buckets by tag, then count each bucket.` },
      { q: `Why does <code>busiest</code> return an Optional?`, o: ['Streams always do', 'The list might be empty', 'Strings need it', 'For speed'], a: 1, w: `No tasks means no busiest tag.` },
      { q: `Adding a new <code>Edit</code> command to the sealed interface…`, o: ['Breaks nothing', 'Java flags every switch that misses it', 'Needs a default', 'Is impossible'], a: 1, w: `That's the safety sealed types give you.` }
    ],
    wild: [
      `A sales analyzer: load a CSV of orders and show revenue per month and the top 5 products, all with streams.`,
      `A Minecraft server plugin: Paper and Spigot plugins are written in Java and lean heavily on lambdas for events and scheduled tasks.`,
      `A mini search engine: a map from each word to the pages that contain it, ranked with streams.`,
      `A text adventure engine where every player command is a sealed type handled by one pattern switch.`
    ],
    facts: [
      `Netflix runs a big part of its backend on Java, and has open-sourced many Java libraries over the years.`,
      `You've now covered Phases 1 to 4. Next on the roadmap: Maven or Gradle, JUnit tests, then databases with JDBC. Spring Boot comes after that.`
    ]
  }
  ]
};
/* ---------- data wiring ---------- */
const PHASES = [P1, P2, P3, P4];
const ALL = [];
PHASES.forEach((ph, pi) => ph.lessons.forEach((l, li) => {
  l.phase = ph; l.pi = pi; l.li = li; l.num = (pi + 1) + '.' + (l.gate ? 'G' : (li + 1));
  ALL.push(l);
}));
const BY_ID = Object.fromEntries(ALL.map(l => [l.id, l]));
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- saved progress ---------- */
const KEY = 'dojo-java.v1';
// input caps: the longest official solution is ~800 chars, so 8000 per box is roomy, and 43 full boxes still stay under the 500 KB load limit
const MAX_BUILD = 8000, MAX_ANSWER = 200;
let S = { xp: 0, steps: {}, ex: {}, q: {}, builds: {}, got: {} };
// Saved data is treated as untrusted: anything that doesn't match the expected shape is dropped.
function cleanState(d) {
  const out = { xp: 0, steps: {}, ex: {}, q: {}, builds: {}, got: {} };
  if (!d || typeof d !== 'object') return out;
  const ID = /^p[1-4]-[a-z0-9]+(-e\d+|-\d+)?(:[a-z]+)?$/;
  const STEPS = ['story', 'syntax', 'practice', 'quiz', 'wild'];
  const EX = ['solved', 'built', 'peeked'];
  out.xp = Number.isFinite(d.xp) ? Math.max(0, Math.min(1e6, Math.floor(d.xp))) : 0;
  for (const [k, v] of Object.entries(d.steps || {})) {
    if (!ID.test(k) || !v || typeof v !== 'object') continue;
    out.steps[k] = {};
    for (const s of STEPS) if (v[s] === 1) out.steps[k][s] = 1;
  }
  for (const [k, v] of Object.entries(d.ex || {})) if (ID.test(k) && EX.includes(v)) out.ex[k] = v;
  for (const [k, v] of Object.entries(d.q || {})) if (ID.test(k) && Number.isInteger(v) && v >= 0 && v < 10) out.q[k] = v;
  for (const [k, v] of Object.entries(d.builds || {})) if (ID.test(k) && typeof v === 'string') out.builds[k] = v.slice(0, MAX_BUILD);
  for (const k of Object.keys(d.got || {})) if (ID.test(k)) out.got[k] = 1;
  return out;
}
try { const raw = localStorage.getItem(KEY); if (raw && raw.length < 500000) S = cleanState(JSON.parse(raw)); } catch (e) {}
let saveWarned = false;
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); }
  catch (e) { if (!saveWarned) { saveWarned = true; toast("Can't save progress in this browser"); } }
}

function award(key, n) {
  if (S.got[key]) return 0;
  S.got[key] = 1; S.xp += n; return n;
}

/* ---------- steps model ---------- */
const STEP_NAMES = { story: 'Story', syntax: 'Syntax', practice: 'Practice', quiz: 'Quiz', wild: 'In the wild' };
const GATE_NAMES = { story: 'Mission', syntax: 'New tools', practice: 'Build', quiz: 'Gate quiz', wild: 'What you can build' };
function stepsOf(l) {
  const s = ['story'];
  if (l.syntax && l.syntax.length) s.push('syntax');
  if (l.ex && l.ex.length) s.push('practice');
  if (l.quiz && l.quiz.length) s.push('quiz');
  s.push('wild');
  return s;
}
const stepName = (l, s) => (l.gate ? GATE_NAMES : STEP_NAMES)[s];
const isStepDone = (l, s) => !!(S.steps[l.id] && S.steps[l.id][s]);
const isDone = l => stepsOf(l).every(s => isStepDone(l, s));
const isStarted = l => !!S.steps[l.id] && Object.keys(S.steps[l.id]).length > 0;

// opening a step earns nothing; xp comes from exercises, quiz answers and finishing the lesson.
// earned = xp the caller just gave, folded into one toast
function markStep(l, s, earned = 0) {
  if (isStepDone(l, s)) { if (earned) toast('+' + earned + ' xp'); return; }
  const wasDone = isDone(l);
  (S.steps[l.id] = S.steps[l.id] || {})[s] = 1;
  let gained = earned;
  const finished = !wasDone && isDone(l);
  if (finished) gained += award(l.id + ':complete', l.gate ? 60 : 25);
  save(); refreshAll();
  if (finished) toast((l.gate ? 'Gate opened' : 'Lantern lit') + (gained ? '  +' + gained + ' xp' : ''), true);
  else if (gained) toast('+' + gained + ' xp');
}

/* ---------- java highlighter ---------- */
const KW = new Set(('abstract assert boolean break byte case catch char class continue default do double else enum extends final finally float for if implements import instanceof int interface long new package private protected public return short static super switch synchronized this throw throws try void volatile while var record sealed permits yield when true false null').split(' '));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function hl(src) {
  const re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("""[\s\S]*?"""|"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')|(@[A-Za-z]+)|\b(\d[\d_]*(?:\.\d+)?[LlFfDd]?)\b|\b([A-Za-z_]\w*)\b/g;
  let out = '', last = 0, m;
  while ((m = re.exec(src))) {
    out += esc(src.slice(last, m.index));
    if (m[1]) out += '<span class="t-com">' + esc(m[1]) + '</span>';
    else if (m[2]) out += '<span class="t-str">' + esc(m[2]) + '</span>';
    else if (m[3]) out += '<span class="t-ann">' + esc(m[3]) + '</span>';
    else if (m[4]) out += '<span class="t-num">' + esc(m[4]) + '</span>';
    else {
      const w = m[5];
      if (KW.has(w)) out += '<span class="t-kw">' + w + '</span>';
      else if (/^[A-Z]/.test(w)) out += '<span class="t-type">' + w + '</span>';
      else if (src[re.lastIndex] === '(') out += '<span class="t-fn">' + w + '</span>';
      else out += w;
    }
    last = re.lastIndex;
  }
  return out + esc(src.slice(last));
}
const codeBox = (src, lang = 'java') => `<div class="code"><span class="lang">${lang}</span><pre>${hl(src)}</pre></div>`;

/* ---------- map ---------- */
const mapEl = document.getElementById('map');
const OFF = [0, 1, 1.45, 1, 0, -1, -1.45, -1];

function buildMap() {
  mapEl.innerHTML = PHASES.map((ph, pi) => `
    <section class="world wrap" id="map-${ph.id}">
      <div class="world-head px rv">
        <div class="tag">world 0${pi + 1} · phase ${pi + 1}</div>
        <h2>${ph.world}<small>${ph.topic}</small></h2>
        <p>${ph.blurb}</p>
        <div class="meter" data-meter="${ph.id}">${ph.lessons.map(() => '<b></b>').join('')}<span></span></div>
      </div>
      <div class="trail" data-trail="${ph.id}">
        <svg aria-hidden="true"></svg>
        ${ph.lessons.map((l, li) => `
          <div class="stop ${l.gate ? 'gate' : ''}" data-stop="${l.id}" style="--x:0px">
            <span class="glow"></span>
            <button class="node px" type="button" data-open="${l.id}" aria-label="Open ${esc(l.title.replace(/<[^>]+>/g, ''))}">${esc(l.icon)}</button>
            <div class="label"><small>${l.gate ? 'gate ' + (pi + 1) : 'stop ' + l.num}</small>${l.title}</div>
          </div>`).join('')}
      </div>
    </section>`).join('');
  layout();
  refreshAll();
}

function layout() {
  const w = mapEl.querySelector('.trail')?.clientWidth || 600;
  const amp = Math.min(110, Math.max(46, (w - 150) / 2 * 0.62));
  document.querySelectorAll('.trail').forEach(tr => {
    tr.querySelectorAll('.stop').forEach((st, i) => {
      const x = Math.round(OFF[i % OFF.length] * amp * (st.classList.contains('gate') ? 0 : 1));
      st.style.setProperty('--x', x + 'px');
      st.style.transform = `translateX(${x}px)`;
    });
  });
  requestAnimationFrame(drawPaths);
}

function drawPaths() {
  document.querySelectorAll('.trail').forEach(tr => {
    const svg = tr.querySelector('svg');
    const box = tr.getBoundingClientRect();
    const pts = [...tr.querySelectorAll('.node')].map(n => {
      const st = n.closest('.stop');
      const x = parseFloat(st.style.getPropertyValue('--x')) || 0;
      // use the resting position, even while a stop is still animating in
      return { x: tr.clientWidth / 2 + x, y: n.offsetTop + st.offsetTop + n.offsetHeight / 2, id: st.dataset.stop };
    });
    let base = '', lit = '';
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], my = (a.y + b.y) / 2;
      const seg = `M${a.x},${a.y} C${a.x},${my} ${b.x},${my} ${b.x},${b.y}`;
      base += seg + ' ';
      if (isDone(BY_ID[a.id])) lit += seg + ' ';
    }
    svg.setAttribute('viewBox', `0 0 ${box.width} ${tr.clientHeight}`);
    svg.innerHTML = `<path class="path-base" d="${base}"/>${lit ? `<path class="path-lit" d="${lit}"/>` : ''}`;
  });
}

function nextLesson() { return ALL.find(l => !isDone(l)); }

function refreshAll() {
  const next = nextLesson();
  document.querySelectorAll('.stop').forEach(st => {
    const l = BY_ID[st.dataset.stop];
    const done = isDone(l), started = isStarted(l);
    st.classList.toggle('done', done);
    st.classList.toggle('started', !done && started);
    st.classList.toggle('next', next === l);
    let badge = st.querySelector('.badge');
    if (!done && started) {
      const n = stepsOf(l).filter(s => isStepDone(l, s)).length;
      if (!badge) { badge = document.createElement('span'); badge.className = 'badge'; st.appendChild(badge); }
      badge.textContent = n + '/' + stepsOf(l).length;
    } else if (badge) badge.remove();
  });
  PHASES.forEach(ph => {
    const m = document.querySelector(`[data-meter="${ph.id}"]`);
    if (!m) return;
    const bars = m.querySelectorAll('b');
    let c = 0;
    ph.lessons.forEach((l, i) => { const d = isDone(l); bars[i].classList.toggle('on', d); if (d) c++; });
    m.querySelector('span').textContent = c + ' / ' + ph.lessons.length + ' lit';
  });
  const doneCount = ALL.filter(isDone).length;
  setText('xpVal', S.xp); setText('doneVal', doneCount); setText('totalVal', ALL.length);
  setText('termStops', ALL.length + ' stops'); setText('termDone', doneCount + '/' + ALL.length); setText('termXp', S.xp);
  setText('termNext', next ? 'next stop: ' + strip(next.title) : 'all lanterns lit. phase 5 awaits');
  const anyStarted = ALL.some(isStarted);
  const goLabel = !next ? 'Review the trail' : anyStarted ? 'Continue: ' + strip(next.title) : 'Start walking';
  setText('heroGo', goLabel);
  setText('topGo', next ? 'Continue' : 'Review');
  requestAnimationFrame(drawPaths);
}
const setText = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
const strip = s => s.replace(/<[^>]+>/g, '');

function goNext() {
  const l = nextLesson() || ALL[0];
  const st = stepsOf(l).find(s => !isStepDone(l, s)) || 'story';
  openLesson(l.id, st);
}

/* ---------- lesson window ---------- */
const LW = document.getElementById('lesson');
const bodyEl = document.getElementById('lessonBody');
let cur = null, curStep = 0, lastFocus = null;

function openLesson(id, step) {
  if (!Object.hasOwn(BY_ID, id)) return;
  const l = BY_ID[id];
  lastFocus = document.activeElement;
  cur = l;
  const steps = stepsOf(l);
  curStep = Math.max(0, typeof step === 'string' ? steps.indexOf(step) : (step || 0));
  setText('lessonTag', (l.gate ? 'gate ' + (l.pi + 1) : 'stop ' + l.num) + ' · ' + l.phase.world);
  document.getElementById('lessonTitle').innerHTML = l.title;
  setText('lessonPath', `~/dojo/phase-${l.pi + 1}/${l.id.split('-').slice(1).join('-')}.java`);
  LW.hidden = false;
  document.body.style.overflow = 'hidden';
  try { if (location.hash !== '#' + id) history.replaceState(null, '', '#' + id); } catch (e) {}
  renderStep();
  document.getElementById('closeBtn').focus({ preventScroll: true });
}

function closeLesson() {
  if (LW.hidden) return;
  if (cur) leaveStep();
  LW.hidden = true;
  document.body.style.overflow = '';
  try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
  const st = cur && document.querySelector(`[data-stop="${cur.id}"]`);
  if (st) {
    st.scrollIntoView({ block: 'center', behavior: REDUCED ? 'auto' : 'smooth' });
    st.querySelector('.node').focus({ preventScroll: true });
  } else if (lastFocus) lastFocus.focus();
  cur = null;
}

function renderTabs() {
  const steps = stepsOf(cur);
  document.getElementById('tabs').innerHTML = steps.map((s, i) => `
    <button class="tab px ${isStepDone(cur, s) ? 'done' : ''}" role="tab" type="button" aria-selected="${i === curStep}" data-tab="${i}">
      <span class="tick"></span><span class="lbl">${stepName(cur, s)}</span>
    </button>`).join('');
  const t = document.querySelector(`[data-tab="${curStep}"]`);
  if (t) t.scrollIntoView({ inline: 'nearest', block: 'nearest' });
  const last = curStep === steps.length - 1;
  document.getElementById('prevBtn').disabled = curStep === 0;
  setText('stepCount', (curStep + 1) + ' / ' + steps.length);
  const nb = document.getElementById('nextBtn');
  nb.textContent = last ? (isDone(cur) ? 'Back to map' : 'Finish') : 'Continue';
  nb.classList.toggle('warn', last && !!cur.gate);
}

function renderStep() {
  const l = cur, s = stepsOf(l)[curStep];
  let h = '';
  if (s === 'story') {
    h = `<h4 class="step-h">${l.gate ? '// the mission' : '// the idea, simply'}</h4><div class="story">${l.story.map(p => `<p>${p}</p>`).join('')}</div>`;
  } else if (s === 'syntax') {
    h = `<h4 class="step-h">// every way to write it</h4>` + l.syntax.map(x => `<div class="syn">${codeBox(x.c)}<div class="note">${x.n}</div></div>`).join('');
  } else if (s === 'practice') {
    h = `<h4 class="step-h">${l.gate ? '// build it, step by step' : '// your turn'}</h4>` + l.ex.map((ex, i) => renderEx(l, ex, i)).join('');
  } else if (s === 'quiz') {
    h = renderQuiz(l);
  } else if (s === 'wild') {
    h = `<h4 class="step-h">${l.gate ? '// cool stuff you can build now' : '// out in the real world'}</h4>
      <ul class="wild">${l.wild.map(w => `<li>${w}</li>`).join('')}</ul>
      ${(l.facts || [l.fact]).filter(Boolean).map(f => `<div class="fact px"><div class="tag">${l.factTag || 'fun fact'}</div><p>${f}</p></div>`).join('')}
      ${isDone(l) ? `<div class="done-banner px">${l.gate ? 'Gate open. Next world unlocked.' : 'Lantern lit. Nice work.'}</div>` : ''}`;
  }
  bodyEl.innerHTML = `<section>${h}</section>`;
  bodyEl.scrollTop = 0;
  renderTabs();
}

/* exercises */
function exId(l, i) { return l.id + '-e' + i; }
// opening a hint or the solution before finishing uses up that exercise's xp ('peeked' covers older saves)
const helped = id => !!S.got[id + ':help'] || S.ex[id] === 'peeked';
function exBadge(id) {
  const st = S.ex[id];
  if (st === 'solved') return '<span class="ex-state">solved</span>';
  if (st === 'built') return '<span class="ex-state">built</span>';
  if (st === 'peeked') return '<span class="ex-state peek">solution seen</span>';
  if (helped(id)) return '<span class="ex-state peek">no xp</span>';
  return '';
}
function fillSolution(c) { return c.replace(/\[\[(.+?)\]\]/g, (m, a) => a.split('|')[0]); }

function renderEx(l, ex, i) {
  const id = exId(l, i), st = S.ex[id];
  const typeLabel = { fill: 'FILL THE GAPS', out: 'WHAT PRINTS?', build: 'BUILD IT' }[ex.t];
  let mid = '';
  if (ex.t === 'fill') {
    let k = 0;
    const parts = ex.c.split(/\[\[(.+?)\]\]/);
    const inner = parts.map((p, j) => {
      if (j % 2 === 0) return hl(p);
      const alts = p.split('|'), w = Math.max(...alts.map(a => a.length)) + 2;
      const val = st === 'solved' ? alts[0] : '';
      return `<input class="gap ${st === 'solved' ? 'ok' : ''}" id="${id}-g${k++}" data-ans="${esc(p)}" value="${esc(val)}" style="width:${w}ch" maxlength="${MAX_ANSWER}" spellcheck="false" autocomplete="off" autocapitalize="off" aria-label="blank ${k}">`;
    }).join('');
    mid = `<div class="code"><span class="lang">java</span><pre>${inner}</pre></div>
      <div class="ex-actions"><button class="btn small sky px" type="button" data-check="${id}">Check</button></div>`;
  } else if (ex.t === 'out') {
    mid = codeBox(ex.c) + `<div class="ans"><input id="${id}-in" placeholder="type the exact output" maxlength="${MAX_ANSWER}" spellcheck="false" autocomplete="off" autocapitalize="off" value="${st === 'solved' ? esc(ex.a[0]) : ''}" class="${st === 'solved' ? 'ok' : ''}" aria-label="Your answer"><button class="btn small sky px" type="button" data-check="${id}">Check</button></div>`;
  } else {
    mid = `<textarea id="${id}-ta" data-build="${id}" maxlength="${MAX_BUILD}" spellcheck="false" placeholder="Write it in IntelliJ, then paste your code here. It is saved with your progress, and you need it to mark this as built.">${esc(S.builds[id] || '')}</textarea>
      <div class="ex-actions"><button class="btn small warn px" type="button" data-built="${id}">I built it</button></div>`;
  }
  const solCode = ex.t === 'fill' ? fillSolution(ex.c) : ex.t === 'out' ? null : ex.s;
  return `<div class="ex px ${st === 'solved' || st === 'built' ? 'solved' : ''}" data-ex="${id}" style="--notch:6px">
    <div class="ex-head"><span class="ex-type ${ex.t}">${typeLabel}</span>${exBadge(id)}</div>
    <p>${ex.p}</p>
    ${mid}
    <p class="feedback" id="${id}-fb" aria-live="polite"></p>
    ${st === 'solved' || st === 'built' || helped(id) ? '' : '<p class="ex-note">Opening the hint or the solution means this exercise gives no xp.</p>'}
    <div class="ex-actions">
      <button class="btn ghost small px" type="button" data-hint="${id}" aria-expanded="false">Show hint</button>
      <button class="btn ghost small px" type="button" data-sol="${id}" aria-expanded="false">Show solution</button>
    </div>
    <div class="reveal-box" id="${id}-hint" hidden><div class="hint">${ex.h}</div></div>
    <div class="reveal-box" id="${id}-sol" hidden>
      ${solCode ? codeBox(solCode) : ''}
      ${ex.t === 'out' ? `<div class="code"><span class="lang">output</span><pre>${esc(ex.a[0])}</pre></div>` : ''}
      ${ex.e ? `<p class="explain">${ex.e}</p>` : ''}
    </div>
  </div>`;
}

const norm = s => s.trim().replace(/\s+/g, ' ');
const tight = s => s.replace(/\s+/g, '');

function setEx(l, id, val) {
  const prev = S.ex[id];
  if (prev === 'solved' || prev === 'built') return 0;
  if (prev === 'peeked' && val === 'peeked') return 0;
  const usedHelp = helped(id);
  S.ex[id] = val;
  const gained = usedHelp ? 0 : award(id + ':' + val, val === 'solved' ? 15 : val === 'built' ? 15 : 0);
  save();
  const all = l.ex.every((_, i) => S.ex[exId(l, i)]);
  if (all) markStep(l, 'practice', gained);
  else { refreshAll(); if (gained) toast('+' + gained + ' xp'); }
  const fb = document.getElementById(id + '-fb');
  if (usedHelp && val !== 'peeked' && fb) fb.textContent += ' No xp for this one, since you opened help first.';
  paintCard(id);
  renderTabs();
  return gained;
}
function paintCard(id) {
  const card = bodyEl.querySelector(`[data-ex="${id}"]`);
  if (!card) return;
  card.querySelector('.ex-head').innerHTML = card.querySelector('.ex-type').outerHTML + exBadge(id);
  card.classList.toggle('solved', S.ex[id] === 'solved' || S.ex[id] === 'built');
  const note = card.querySelector('.ex-note');
  if (note && (helped(id) || card.classList.contains('solved'))) note.remove();
}
function useHelp(id) {
  if (S.ex[id] === 'solved' || S.ex[id] === 'built' || helped(id)) return;
  S.got[id + ':help'] = 1; save();
  paintCard(id);
}

function checkEx(id) {
  const l = cur, i = +id.split('-e').pop(), ex = l.ex[i];
  const fb = document.getElementById(id + '-fb');
  if (ex.t === 'fill') {
    const gaps = [...bodyEl.querySelectorAll(`[data-ex="${id}"] .gap`)];
    let ok = 0;
    gaps.forEach(g => {
      const good = g.dataset.ans.split('|').some(a => tight(a) === tight(g.value));
      g.classList.toggle('ok', good); g.classList.toggle('bad', !good && g.value.trim() !== '');
      if (good) ok++;
    });
    if (ok === gaps.length) { fb.className = 'feedback ok'; fb.textContent = 'All correct. That code compiles.'; setEx(l, id, 'solved'); }
    else { fb.className = 'feedback bad'; fb.textContent = `${ok} of ${gaps.length} right. Java is picky about exact spelling and capitals.`; }
  } else if (ex.t === 'out') {
    const inp = document.getElementById(id + '-in');
    const good = ex.a.some(a => norm(a) === norm(inp.value));
    inp.classList.toggle('ok', good); inp.classList.toggle('bad', !good);
    if (good) { fb.className = 'feedback ok'; fb.innerHTML = 'Exactly right. ' + (ex.e || ''); setEx(l, id, 'solved'); }
    else { fb.className = 'feedback bad'; fb.textContent = inp.value.trim() ? 'Not quite. Trace it line by line, like the computer would.' : 'Type what you think it prints first.'; }
  }
}

/* quiz */
function renderQuiz(l) {
  const answered = l.quiz.filter((_, i) => S.q[l.id + '-' + i] !== undefined).length;
  const right = l.quiz.filter((q, i) => S.q[l.id + '-' + i] === q.a).length;
  return `<h4 class="step-h">// quick check, no pressure</h4>` + l.quiz.map((q, i) => {
    const key = l.id + '-' + i, chosen = S.q[key], done = chosen !== undefined;
    return `<div class="q">
      <p class="qt"><span>Q${i + 1}</span>${q.q}</p>
      <div class="opts">${q.o.map((o, j) => {
        let cls = '';
        if (done && j === q.a) cls = 'right';
        else if (done && j === chosen) cls = 'wrong';
        return `<button class="opt px ${cls}" type="button" data-q="${i}" data-o="${j}" ${done ? 'disabled' : ''}>${o.includes('<code>') ? o : esc(o)}</button>`;
      }).join('')}</div>
      ${done ? `<p class="why ${chosen === q.a ? '' : 'miss'}"><b>${chosen === q.a ? 'Right.' : 'Not this time.'}</b> ${q.w}</p>` : ''}
    </div>`;
  }).join('') + (answered === l.quiz.length ? `<div class="ex-actions" style="align-items:center"><span class="score">${right} / ${l.quiz.length} correct</span><button class="btn ghost small px" type="button" data-retake="1">Retake quiz</button></div>` : '');
}

function answer(qi, oi) {
  const l = cur, key = l.id + '-' + qi;
  if (S.q[key] !== undefined) return;
  S.q[key] = oi;
  let g = 0;
  if (oi === l.quiz[qi].a) g = award(key + ':right', 10);
  save();
  const y = bodyEl.scrollTop;
  const all = l.quiz.every((_, i) => S.q[l.id + '-' + i] !== undefined);
  if (all) markStep(l, 'quiz', g);
  else if (g) toast('+' + g + ' xp');
  renderStep(); bodyEl.scrollTop = y;
}

/* events */
document.addEventListener('click', e => {
  const t = e.target.closest('button, a');
  if (!t) return;
  if (t.dataset.open) return openLesson(t.dataset.open, firstOpenStep(BY_ID[t.dataset.open]));
  if (t.id === 'heroGo' || t.id === 'topGo') return goNext();
  if (t.getAttribute('href') === '#map-p1') { e.preventDefault(); document.getElementById('map-p1').scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' }); return; }
  if (t.id === 'closeBtn') return closeLesson();
  if (t.id === 'resetBtn') return resetFlow(t);
  if (!cur) return;
  const steps = stepsOf(cur);
  if (t.dataset.tab !== undefined) { leaveStep(); curStep = +t.dataset.tab; return renderStep(); }
  if (t.id === 'prevBtn' && curStep > 0) { leaveStep(); curStep--; return renderStep(); }
  if (t.id === 'nextBtn') {
    leaveStep();
    if (curStep < steps.length - 1) { curStep++; return renderStep(); }
    return closeLesson();
  }
  if (t.dataset.check) return checkEx(t.dataset.check);
  if (t.dataset.hint) {
    if (toggle(t, t.dataset.hint + '-hint', 'hint')) useHelp(t.dataset.hint);
    return;
  }
  if (t.dataset.sol) {
    const open = toggle(t, t.dataset.sol + '-sol', 'solution');
    if (open) { useHelp(t.dataset.sol); setEx(cur, t.dataset.sol, 'peeked'); }
    return;
  }
  if (t.dataset.built) {
    const id = t.dataset.built, fb = document.getElementById(id + '-fb'), ta = document.getElementById(id + '-ta');
    // the page can't run Java, but it can at least ask for something that looks like code
    const code = ta.value.trim();
    if (code.replace(/\s+/g, '').length < 20 || !/[;{(]/.test(code)) {
      fb.className = 'feedback bad'; fb.textContent = 'Paste the code you wrote into the box first, then press "I built it".';
      return ta.focus();
    }
    S.builds[id] = ta.value.slice(0, MAX_BUILD);
    fb.className = 'feedback ok'; fb.textContent = 'Nice. Compare with the solution if you want a second opinion.';
    return setEx(cur, id, 'built');
  }
  if (t.dataset.q !== undefined) return answer(+t.dataset.q, +t.dataset.o);
  if (t.dataset.retake) {
    cur.quiz.forEach((_, i) => delete S.q[cur.id + '-' + i]);
    save(); return renderStep();
  }
});

function firstOpenStep(l) {
  if (isDone(l)) return 'story';
  return stepsOf(l).find(s => !isStepDone(l, s)) || 'story';
}
// reading steps count as done when you move on from them
function leaveStep() {
  const s = stepsOf(cur)[curStep];
  if (s === 'story' || s === 'syntax' || s === 'wild') markStep(cur, s);
}
function toggle(btn, id, word) {
  const box = document.getElementById(id);
  box.hidden = !box.hidden;
  btn.setAttribute('aria-expanded', String(!box.hidden));
  btn.textContent = (box.hidden ? 'Show ' : 'Hide ') + word;
  return !box.hidden;
}

let buildTimer;
document.addEventListener('input', e => {
  const ta = e.target.closest('[data-build]');
  if (ta) { clearTimeout(buildTimer); buildTimer = setTimeout(() => { S.builds[ta.dataset.build] = ta.value.slice(0, MAX_BUILD); save(); }, 400); }
  if (e.target.classList.contains('gap')) e.target.classList.remove('ok', 'bad');
});
document.addEventListener('keydown', e => {
  if (LW.hidden) return;
  if (e.key === 'Escape') return closeLesson();
  if (e.key === 'Enter' && e.target.matches('.gap, .ans input')) {
    e.preventDefault();
    const card = e.target.closest('[data-ex]');
    if (card) checkEx(card.dataset.ex);
  }
  if (e.key === 'Tab') {
    const f = [...LW.querySelectorAll('button:not([disabled]), input, textarea, a[href]')].filter(x => x.offsetParent !== null);
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
});
LW.addEventListener('click', e => { if (e.target === LW) closeLesson(); });

let resetArmed = null;
function resetFlow(btn) {
  if (!resetArmed) {
    btn.textContent = 'Tap again to erase everything';
    btn.classList.add('warn');
    resetArmed = setTimeout(() => { resetArmed = null; btn.textContent = 'Reset my progress'; btn.classList.remove('warn'); }, 4000);
    return;
  }
  clearTimeout(resetArmed); resetArmed = null;
  S = { xp: 0, steps: {}, ex: {}, q: {}, builds: {}, got: {} };
  save(); refreshAll();
  btn.textContent = 'Progress erased'; btn.classList.remove('warn');
  setTimeout(() => btn.textContent = 'Reset my progress', 2500);
}

function toast(msg, gold) {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const t = document.createElement('div');
  t.className = 'toast px' + (gold ? ' gold' : '');
  t.setAttribute('role', 'status');
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2300);
}

/* scroll reveal: only stops below the fold start hidden, so the page reads fine with no script */
function setupReveal() {
  if (REDUCED || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.remove('pre'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.stop').forEach((st, i) => {
    if (st.getBoundingClientRect().top > innerHeight) {
      st.classList.add('pre');
      st.style.transitionDelay = (i % 3) * 60 + 'ms';
      io.observe(st);
    }
  });
}

/* hash routing: #p2-records opens that lesson */
function fromHash() {
  let id = '';
  try { id = decodeURIComponent(location.hash.slice(1)); } catch (e) { return; }
  if (/^p[1-4]-[a-z0-9]+$/.test(id) && Object.hasOwn(BY_ID, id)) openLesson(id, firstOpenStep(BY_ID[id]));
}
window.addEventListener('hashchange', fromHash);
window.addEventListener('resize', () => { clearTimeout(window.__rz); window.__rz = setTimeout(layout, 120); });

buildMap();
setupReveal();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => requestAnimationFrame(drawPaths));
fromHash();

/* ---------- pixel scene (night or sakura day) ---------- */
const PAL = {
  night: {
    sky: ['#02060e', '#040c1c', '#06142a', '#081d38', '#0a2843', '#0c3449', '#0f4150', '#124d55'],
    orb: ['#e2fff0', '#bff5dc', 'rgba(150,255,210,.18)'], crater: '#bfe9d6', stars: true, flies: true,
    far: ['#071a33', '#0b2746'], mid: ['#06202e', '#0a3140'], near: ['#041519', '#082a2c'],
    smallTree: '#0b2f2e', trunk: '#120f1a', needles: ['#0a3324', '#145a3b', '#1f7a4f'], sakura: false,
    bloomTrunk: '#16111f', bloom: ['#0f5a52', '#18806f', '#2fb59a', '#7ff0d8', '#c4fbff'],
    stone: '#0c1820', stoneEdge: '#1e4650', bars: '#1e4650', hole: '#03070c', torch: '#132327', flame: '#ffcd6a',
    petals: ['#7ff0d8', '#c4fbff']
  },
  day: {
    sky: ['#86bde3', '#a3cde6', '#c2dce6', '#dfe2dc', '#f2e1d2', '#f6d5cc', '#f4c5c7', '#f0b6bf'],
    orb: ['#fff6e0', '#ffdcae', 'rgba(255,220,170,.35)'], crater: null, stars: false, flies: false,
    far: ['#8ea9c6', '#c9d8e6'], mid: ['#6f9a86', '#93bb9c'], near: ['#86a46a', '#a9c584'],
    smallTree: '#e9b6c4', trunk: '#4a3226', needles: ['#3f6b45', '#5a8c58', '#7dae6c'], sakura: true,
    bloomTrunk: '#4a3226', bloom: ['#c25d7c', '#de83a0', '#f0a6bc', '#f8c8d5', '#fff0f4'],
    stone: '#5b5560', stoneEdge: '#9a94a0', bars: '#2b2226', hole: '#1c1418', torch: '#3b2c22', flame: '#ff9a52',
    petals: ['#f4a3bc', '#ffd4e0', '#fbe6ec']
  }
};
let switchScene = () => {};
(function scene() {
  const cv = document.getElementById('scene');
  const ctx = cv.getContext('2d');
  // cur is the scene on screen; old is the one fading out underneath it during a switch
  let W, H, PX, P, cur, old = null;
  const rnd = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
  const hex = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const clamp = v => Math.max(0, Math.min(1, v));
  const ease = v => v < .5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2;
  const theme = () => document.documentElement.dataset.theme === 'day' ? 'day' : 'night';

  function off(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
  // records rects instead of drawing them, each tagged with the growth level (t) at which it appears
  function recorder() { return { t: 0, fillStyle: '', rects: [], fillRect(x, y, w, h) { this.rects.push([x, y, w, h, this.fillStyle, this.t]); } }; }

  function build(name) {
    P = PAL[name];
    const SKY = P.sky.map(hex);
    PX = innerWidth < 640 ? 3 : 4;
    // never 0: a page opened hidden or at zero size would crash here and stay black
    W = Math.max(1, Math.ceil(innerWidth / PX)); H = Math.max(1, Math.ceil(innerHeight / PX));
    cv.width = W; cv.height = H;
    const R = rnd(7);

    // sky with ordered dithering between bands
    let c, g; [c, g] = off(W, H); const sky = c;
    const img = g.createImageData(W, H), d = img.data;
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const t = Math.min(.999, y / (H * .92)) * (SKY.length - 1);
      const b = Math.floor(t), f = t - b, th = (BAYER[(y & 3) * 4 + (x & 3)] + .5) / 16;
      const col = SKY[Math.min(SKY.length - 1, f > th ? b + 1 : b)], i = (y * W + x) * 4;
      d[i] = col[0]; d[i + 1] = col[1]; d[i + 2] = col[2]; d[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);

    // moon by night, sun by day
    const mr = Math.max(9, Math.round(Math.min(W, H) * .075));
    [c, g] = off(mr * 4, mr * 4); const moon = c;
    const cx = mr * 2, cy = mr * 2;
    for (let y = 0; y < mr * 4; y++) for (let x = 0; x < mr * 4; x++) {
      const dd = Math.hypot(x - cx, y - cy);
      if (dd <= mr) { g.fillStyle = dd > mr - 1.5 ? P.orb[1] : P.orb[0]; g.fillRect(x, y, 1, 1); }
      else if (dd <= mr * 1.9 && BAYER[(y & 3) * 4 + (x & 3)] / 16 > (dd - mr) / (mr * .9) + .35) { g.fillStyle = P.orb[2]; g.fillRect(x, y, 1, 1); }
    }
    if (P.crater) {
      g.fillStyle = P.crater;
      [[-.35, -.2, .22], [.25, .3, .16], [.1, -.45, .1], [-.2, .4, .12]].forEach(([ox, oy, r]) => {
        const rr = Math.max(1, Math.round(r * mr));
        for (let y = -rr; y <= rr; y++) for (let x = -rr; x <= rr; x++) if (x * x + y * y <= rr * rr) g.fillRect(Math.round(cx + ox * mr + x), Math.round(cy + oy * mr + y), 1, 1);
      });
    }

    const stars = P.stars ? Array.from({ length: Math.round(W * H / 700) }, () => ({ x: R() * W | 0, y: R() * H * .6 | 0, b: R(), p: R() * 6.28, big: R() < .08 })) : [];
    const clouds = P.stars ? [] : Array.from({ length: Math.max(3, W / 70 | 0) }, () => ({ x: R() * W, y: H * (.06 + R() * .3), w: 14 + R() * 26 | 0, v: .03 + R() * .05 }));

    const LH = Math.ceil(H * 1.7);
    const far = ridge(LH, H * .5, H * .1, 2, P.far, 11, 2);
    const mid = ridge(LH, H * .64, H * .07, 2, P.mid, 23, 1);
    decorate(mid[1], H * .64, 'mid', R);
    const near = ridge(LH, H * .8, H * .035, 2, P.near, 41, 1);
    const trees = decorate(near[1], H * .8, 'near', R);

    const flies = P.flies ? Array.from({ length: Math.max(14, W / 18 | 0) }, () => ({ x: R() * W, y: H * (.45 + R() * .5), p: R() * 6.28, s: .2 + R() * .4 })) : [];
    const petals = Array.from({ length: Math.max(10, W / (P.sakura ? 14 : 30) | 0) }, () => ({ x: R() * W, y: R() * H, v: .15 + R() * .25, p: R() * 6.28, c: P.petals[R() * P.petals.length | 0] }));
    return { sky, moon, far: far[0], mid: mid[0], near: near[0], trees, stars, clouds, flies, petals, born: null };
  }

  // a stepped, blocky ridge line, filled down to the bottom of the layer
  function ridge(LH, base, amp, step, cols, seed, snow) {
    const [c, g] = off(W, LH), R = rnd(seed);
    const ph = [R() * 6, R() * 6, R() * 6], tops = [];
    for (let x = 0; x < W; x += step) {
      const yy = base - amp * (Math.sin(x * .013 + ph[0]) * .6 + Math.sin(x * .031 + ph[1]) * .3 + Math.sin(x * .07 + ph[2]) * .15);
      const y = Math.round(yy / 2) * 2;
      tops.push([x, y]);
      g.fillStyle = cols[0]; g.fillRect(x, y, step, LH - y);
      g.fillStyle = cols[1]; g.fillRect(x, y, step, snow);
    }
    return [c, { g, tops, LH }];
  }

  function decorate(L, base, kind, R) {
    const { g, tops } = L;
    const topAt = x => { const t = tops[Math.max(0, Math.min(tops.length - 1, Math.round(x / 2)))]; return t ? t[1] : base; };
    if (kind === 'mid') {
      for (let x = 4; x < W; x += 7 + (R() * 9 | 0)) smallPine(g, x, topAt(x) + 1, 1 + (R() < .3 ? 1 : 0));
      return;
    }
    // near layer: dungeon gate and torch are baked in; pines or sakura trees are drawn live so they can grow
    const tx = Math.round(W * (W < 220 ? .5 : .28));
    dungeonGate(g, tx, topAt(tx) + 1, W < 220 ? 1 : 2);
    torch(g, tx + (W < 220 ? 16 : 34), topAt(tx + 34) + 1);
    const spots = [];
    for (let x = 6; x < W; x += 26 + (R() * 22 | 0)) if (Math.abs(x - tx) > 40) spots.push(x);
    return spots.map((x, i) => {
      const rec = recorder();
      (P.sakura || i % 3 === 1 ? blossom : pine)(rec, x, topAt(x) + 1, W < 220 ? 1 : 2, R);
      return rec.rects;
    });
  }

  function smallPine(g, x, y, s) {
    g.fillStyle = P.smallTree;
    g.fillRect(x, y - 6 * s, s, 6 * s);
    for (let i = 0; i < 3; i++) { const w = (5 - i * 1.4) * s | 0; g.fillRect(x - w, y - (3 + i * 2) * s, w * 2 + s, s); }
  }
  function pine(g, x, y, s, R) {
    const h = (26 + (R() * 10 | 0)) * s;
    g.fillStyle = P.trunk;
    for (let i = 0; i < h; i += s) { g.t = i / h * .35; g.fillRect(x + Math.round(Math.sin(i / (6 * s)) * 2 * s), y - i, 2 * s, s); }
    for (let k = 0; k < 4; k++) {
      const py = y - h * (.45 + k * .17), dir = k % 2 ? 1 : -1, px = x + dir * (3 + k) * s, w = (16 - k * 3) * s;
      g.t = .35 + k * .16;
      g.fillStyle = P.needles[0]; g.fillRect(px - w / 2, py, w, 3 * s);
      g.fillStyle = P.needles[1]; g.fillRect(px - w / 2 + s, py, w - 2 * s, s);
      g.fillStyle = P.needles[2]; for (let q = 0; q < w; q += 4 * s) g.fillRect(px - w / 2 + q + s, py, s, s);
    }
  }
  function blossom(g, x, y, s, R) {
    const h = 18 * s;
    g.fillStyle = P.bloomTrunk;
    for (let i = 0; i < h; i += s) { g.t = i / h * .3; g.fillRect(x, y - i - s, 2 * s, s); }
    g.t = .3;
    g.fillRect(x - 5 * s, y - h + 2 * s, 6 * s, s); g.fillRect(x + s, y - h + 4 * s, 7 * s, s);
    // blossoms open from the middle of the crown outward
    for (let i = 0; i < 70; i++) {
      const a = R() * 6.28, r = Math.sqrt(R());
      const bx = x + Math.cos(a) * r * 13 * s, by = y - h - 4 * s + Math.sin(a) * r * 8 * s;
      g.fillStyle = P.bloom[Math.min(4, (1 - r) * 4 + R() * 1.6 | 0)];
      g.t = .32 + r * .53 + R() * .15;
      g.fillRect(Math.round(bx / s) * s, Math.round(by / s) * s, s * 2, s * 2);
    }
  }
  // two stone towers with battlements, a dark archway and an iron portcullis
  function dungeonGate(g, x, y, s) {
    g.fillStyle = P.stone;
    g.fillRect(x - 13 * s, y - 24 * s, 7 * s, 24 * s); g.fillRect(x + 6 * s, y - 24 * s, 7 * s, 24 * s);
    g.fillRect(x - 6 * s, y - 21 * s, 12 * s, 6 * s);
    for (let k = -13; k < 13; k += 4) g.fillRect(x + k * s, y - 27 * s, 2 * s, 3 * s);
    g.fillStyle = P.hole; g.fillRect(x - 6 * s, y - 15 * s, 12 * s, 15 * s); g.fillRect(x - 4 * s, y - 16 * s, 8 * s, s);
    g.fillStyle = P.bars;
    for (let k = -5; k <= 4; k += 3) g.fillRect(x + k * s, y - 15 * s, s, 13 * s);
    g.fillRect(x - 6 * s, y - 11 * s, 12 * s, s); g.fillRect(x - 6 * s, y - 6 * s, 12 * s, s);
    g.fillStyle = P.stoneEdge;
    g.fillRect(x - 13 * s, y - 24 * s, 7 * s, 1); g.fillRect(x + 6 * s, y - 24 * s, 7 * s, 1); g.fillRect(x - 6 * s, y - 21 * s, 12 * s, 1);
  }
  function torch(g, x, y) {
    g.fillStyle = P.torch;
    g.fillRect(x, y - 8, 1, 8); g.fillRect(x - 2, y - 10, 5, 2);
    g.fillStyle = P.flame; g.fillRect(x - 1, y - 12, 3, 2); g.fillRect(x, y - 13, 1, 1);
  }

  let t = 0, last = 0, step = 1, scrollP = 0;
  function paint(S, a, now) {
    ctx.globalAlpha = a;
    ctx.drawImage(S.sky, 0, 0);
    S.stars.forEach(s => {
      const b = .35 + .65 * Math.abs(Math.sin(t * (.6 + s.b) + s.p));
      ctx.fillStyle = `rgba(${s.big ? '200,255,240' : '150,210,255'},${(b * (.4 + s.b * .6)).toFixed(2)})`;
      ctx.fillRect(s.x, s.y - scrollP * H * .05, 1, 1);
      if (s.big && b > .8) { ctx.fillRect(s.x - 1, s.y - scrollP * H * .05, 3, 1); ctx.fillRect(s.x, s.y - 1 - scrollP * H * .05, 1, 3); }
    });
    ctx.drawImage(S.moon, Math.round(W * .8 - S.moon.width / 2), Math.round(H * .2 - S.moon.height / 2 + scrollP * H * .12));
    ctx.fillStyle = 'rgba(255,250,246,.85)';
    S.clouds.forEach(c => {
      if (!REDUCED) c.x = c.x > W + c.w ? -c.w : c.x + c.v * step;
      const x = Math.round(c.x), y = Math.round(c.y - scrollP * H * .06);
      ctx.fillRect(x, y, c.w, 3); ctx.fillRect(x + 3, y - 2, c.w - 9, 2); ctx.fillRect(x + 6, y - 4, c.w / 3 | 0, 2);
    });
    ctx.drawImage(S.far, 0, Math.round(-scrollP * H * .12));
    ctx.drawImage(S.mid, 0, Math.round(-scrollP * H * .24));
    const oy = Math.round(-scrollP * H * .4);
    ctx.drawImage(S.near, 0, oy);
    // new trees turn solid early so you watch them grow, not fade
    ctx.globalAlpha = Math.min(1, a * 2.5);
    S.trees.forEach((tree, i) => {
      const grow = S.born == null ? 1 : ease(clamp((now - S.born - 500 - i * Math.min(220, 2600 / S.trees.length)) / 2200));
      for (const [x, y, w, h, c, th] of tree) if (grow >= th) { ctx.fillStyle = c; ctx.fillRect(x, y + oy, w, h); }
    });
    ctx.globalAlpha = a;
    if (!REDUCED) {
      S.petals.forEach(p => {
        p.y += p.v * step; p.x += (Math.sin(t + p.p) * .25 - .1) * step;
        if (p.y > H) { p.y = -2; p.x = Math.random() * W; }
        if (p.x < -2) p.x = W;
        ctx.fillStyle = p.c; ctx.fillRect(Math.round(p.x), Math.round(p.y), 1, 1);
      });
    }
    S.flies.forEach(f => {
      const fx = f.x + Math.sin(t * f.s + f.p) * 8, fy = f.y + Math.cos(t * f.s * 1.3 + f.p) * 5 - scrollP * H * .3;
      const b = REDUCED ? .7 : Math.max(0, Math.sin(t * 1.5 + f.p * 3));
      if (b < .05) return;
      ctx.fillStyle = `rgba(110,255,170,${(b * .25).toFixed(2)})`; ctx.fillRect(Math.round(fx) - 1, Math.round(fy) - 1, 3, 3);
      ctx.fillStyle = `rgba(200,255,200,${b.toFixed(2)})`; ctx.fillRect(Math.round(fx), Math.round(fy), 1, 1);
    });
    ctx.globalAlpha = 1;
  }
  function draw(now) {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const target = REDUCED ? 0 : Math.min(1, scrollY / max);
    scrollP += (target - scrollP) * .12 * step;
    const k = old ? ease(clamp((now - cur.born) / 1600)) : 1;
    if (old) paint(old, 1, now);
    paint(cur, k, now);
    if (old && k >= 1) old = null;
  }
  function frame(now) {
    // full frame rate while a switch is playing, a calm 30fps the rest of the time
    const busy = cur.born != null && now - cur.born < 6000;
    if (!busy && now - last < 33) return requestAnimationFrame(frame);
    step = Math.min(2, (now - last) / 33); last = now; t += .033 * step;
    draw(now);
    if (!REDUCED) requestAnimationFrame(frame);
  }
  switchScene = () => {
    old = REDUCED ? null : cur;
    cur = build(theme());
    if (REDUCED) draw(performance.now()); else cur.born = performance.now();
  };
  cur = build(theme());
  requestAnimationFrame(frame);
  addEventListener('resize', () => { clearTimeout(window.__sc); window.__sc = setTimeout(() => { old = null; cur = build(theme()); if (REDUCED) requestAnimationFrame(frame); }, 150); });
})();

/* ---------- day / night switch ---------- */
(function themeSwitch() {
  const root = document.documentElement, btn = document.getElementById('modeBtn');
  let fade;
  const sync = () => {
    const day = root.dataset.theme === 'day';
    btn.setAttribute('aria-label', day ? 'Switch to night mode' : 'Switch to day mode');
    btn.querySelector('span').textContent = day ? 'Night' : 'Day';
  };
  const apply = () => {
    if (root.dataset.theme === 'day') delete root.dataset.theme; else root.dataset.theme = 'day';
    try { localStorage.setItem('dojo-java.theme', root.dataset.theme || 'night'); } catch (e) {}
    switchScene(); sync();
  };
  btn.addEventListener('click', () => {
    btn.classList.remove('spin'); void btn.offsetWidth; btn.classList.add('spin');
    if (REDUCED) return apply();
    // the browser crossfades a snapshot of the page on the GPU; the live scene keeps growing its trees underneath
    if (document.startViewTransition) return document.startViewTransition(apply);
    root.classList.add('theme-fade'); clearTimeout(fade); fade = setTimeout(() => root.classList.remove('theme-fade'), 1700);
    apply();
  });
  sync();
})();
