# JavaScript Lab - Day 2


### Exercise 1: String Manipulation
Write a function `formatName(firstName, lastName)` that:
- Takes two parameters: firstName and lastName
- Trims any whitespace from both inputs
- Converts the first letter of each name to uppercase and the rest to lowercase
- Returns the full name in the format: "LastName, FirstName"

Example:
```javascript
formatName("  john  ", "  DOE  ") // Returns: "Doe, John"
```

---

### Exercise 2: Number Validator
Create a function `validateNumber(input)` that:
- Takes a string input from a user
- Checks if it's a valid number (not NaN)
- If valid, return the number rounded to 2 decimal places
- If invalid, return the string "Invalid input"

Example:
```javascript
validateNumber("123.456") // Returns: 123.46
validateNumber("hello")   // Returns: "Invalid input"
```

---

### Exercise 3: Random Number Generator
Write a function `getRandomInRange(min, max)` that:
- Takes two numbers as parameters (min and max)
- Returns a random integer between min and max (inclusive)
- Handle the case where min > max by swapping the values

Example:
```javascript
getRandomInRange(1, 10)  // Returns a random number between 1 and 10
getRandomInRange(50, 20) // Returns a random number between 20 and 50
```

---

### Exercise 4: String Search and Replace
Create a function `censorWord(text, wordToCensor, replacement)` that:
- Takes three parameters: text, wordToCensor, and replacement
- Replaces ALL occurrences of wordToCensor with replacement (case-insensitive)
- Returns the modified text

Example:
```javascript
censorWord("Hello world, hello everyone", "hello", "***")
// Returns: "*** world, *** everyone"
```

---

### Exercise 5: Function with Callbacks
Write a function `processNumbers(number, callback)` that:
- Takes a numbers and a callback function
- Applies the callback function the number
- callback function should take a number and return a number

Example:
```javascript
processNumbers(5, function(x) { return x * 2 })
// Returns: 10
processNumbers(5, function(x) { return x + 10 })
// Returns: 15
```

---

## Bonus 
### Flexible Sum Function
Write a function `flexibleSum()` that:
- Can accept any number of arguments
- Supports both numbers and strings that can be converted to numbers
- Ignores any values that cannot be converted to valid numbers
- Returns the sum of all valid numbers
- Returns 0 if no valid numbers are provided

Example:
```javascript
flexibleSum(1, 2, 3)                    // Returns: 6
flexibleSum(1, "2", 3, "hello", 4)      // Returns: 10
flexibleSum("5", "10", "15")            // Returns: 30
flexibleSum("hello", "world")           // Returns: 0
```

---

## Submission Guidelines
- Create a new file called `lab-solutions.js`
- Write all your functions in this file
- Test each function with the provided examples
- Add your own test cases for edge cases
