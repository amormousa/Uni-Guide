## Q1) Variables and Data Types

Create a program that:
1. Declares a variable `userName` using literal creation and assigns it your name
2. Declares a variable `userAge` using literal creation and assigns it the number 25
3. Declares a variable `isStudent` and assigns it a boolean value
4. Declares a variable `userProfile` as an object with properties: name, age, and city
5. Create another variable `anotherProfile` and assign `userProfile` to it
6. Change the `name` property of `anotherProfile` to a different name
7. Print both `userProfile.name` and `anotherProfile.name` and explain the output

**Question:** What is the difference between copying primitive data types vs objects in JavaScript?

---

## Q2) Literal Creation vs Constructor Creation

Write a program that demonstrates the difference between literal and constructor creation:
1. Create a string variable `str1` using literal creation with value "JavaScript"
2. Create a string variable `str2` using constructor creation with the same value "JavaScript"
3. Create another string variable `str3` using constructor creation with value "JavaScript"
4. Compare `str1 == str2` and log the result
5. Compare `str2 == str3` and log the result
6. Compare `str2.valueOf() == str3.valueOf()` and log the result
7. Use `typeof` operator to check the type of both `str1` and `str2`

**Question:** Why is literal creation preferred over constructor creation in JavaScript?

---

## Q3) Type Conversion Challenge

Create a program that takes user input and performs type conversions:
1. Prompt the user to enter a number (it will be received as a string)
2. Convert the input to a number using three different methods:
   - `Number()` function
   - `parseInt()` function
   - Using the unary plus operator `+`
3. Store each result in separate variables
4. Check if the conversion was successful by using `isNaN()` and `Number.isNaN()`
5. If the input is a valid number, perform the following operations:
   - Add 10 to it
   - Multiply it by 2
   - Convert the result back to a string and concatenate " is the final result"
6. If the input is NOT a valid number, display "Invalid input! Please enter a valid number."

**Test cases to try:**
- "42"
- "15.5"
- "123abc"
- "abc"

---

## Q4) Operators and Comparisons

Write a program that:
1. Takes two numbers as input from the user (using `prompt`)
2. Performs all arithmetic operations (+, -, *, /, %) and displays the results
3. Compares the two numbers using:
   - Equal to (==)
   - Strictly equal to (===)
   - Greater than (>)
   - Less than or equal to (<=)
4. Uses logical operators to check:
   - If both numbers are greater than 0 (using &&)
   - If at least one number is even (using ||)
5. Demonstrates the difference between `==` and `===` by:
   - Comparing the number 5 with the string "5" using both operators
   - Explaining the results

---

## Q5) Control Flow - Grade Calculator

Create a grade calculator program using if-else statements:
1. Prompt the user to enter their score (0-100)
2. Convert the input to a number
3. Validate that the input is a valid number and within the range 0-100
4. Based on the score, assign a grade using the following criteria:
   - 90-100: "A - Excellent"
   - 80-89: "B - Very Good"
   - 70-79: "C - Good"
   - 60-69: "D - Pass"
   - Below 60: "F - Fail"
5. Display the grade to the user
6. If the input is invalid (not a number or out of range), display an appropriate error message

**Bonus within Q5:** Also implement the same grade calculator using a `switch` statement (you'll need to use ranges creatively, hint: use `Math.floor(score/10)`)

---

## Q6 - BONUS) Loop Master Challenge

Write a program that uses all three types of loops (for, while, do-while) to solve the following:

**Part A - Pattern Printing (using for loop):**
Print the following pattern:
```
*
**
***
****
*****
```

**Part B - Factorial Calculator (using while loop):**
1. Prompt the user to enter a positive integer
2. Calculate the factorial of that number using a while loop
3. Display the result
4. Example: factorial of 5 = 5 × 4 × 3 × 2 × 1 = 120

**Part C - Input Validator (using do-while loop):**
1. Create a program that keeps asking the user to enter a number between 1 and 10
2. Use a do-while loop to repeat until the user enters a valid number
3. Once a valid number is entered, display "Thank you! You entered: [number]"

---

## Q7 - BONUS) (Comprehensive Challenge) - FizzBuzz with a Twist

Create an advanced FizzBuzz program with the following requirements:

1. Ask the user to enter a positive integer `n`
2. Validate that the input is a valid positive integer
3. Use a for loop to iterate from 1 to `n`
4. For each number, apply the following rules:
   - If the number is divisible by both 3 and 5, print "FizzBuzz"
   - If the number is divisible by 3 only, print "Fizz"
   - If the number is divisible by 5 only, print "Buzz"
   - If the number is divisible by 7, print "Lucky" (this overrides all other rules)
   - Otherwise, print the number itself

5. After the loop completes, calculate and display:
   - How many times "Fizz" was printed
   - How many times "Buzz" was printed
   - How many times "FizzBuzz" was printed
   - How many times "Lucky" was printed

**Example output for n = 15:**
```
1
2
Fizz
4
Buzz
Fizz
Lucky
8
Fizz
Buzz
11
Fizz
13
Lucky
FizzBuzz

Summary:
Fizz: 4 times
Buzz: 2 times
FizzBuzz: 1 time
Lucky: 2 times
```

**Hint:** You'll need to use variables to count occurrences and nested if-else statements or a combination of if statements with logical operators.

---

## Submission Guidelines:
1. Create a new file named `assignment-solution.js`
2. Write your solutions for each question in the file with clear comments
3. Test each solution thoroughly
4. Use `console.log()` to display outputs
5. For questions requiring user input, use `prompt()`

## Evaluation Criteria:
- Correct use of ES5 syntax (use `var` for all variable declarations)
- Proper type conversions and validations
- Clean and readable code with comments
- Correct implementation of control flow and loops
- Proper handling of edge cases

**Good luck!**
