function balancedBrackets(string) {
  // your code here
  // Using ArrayDeque is faster
  // than using Stack class
  let stack = [];

  // Traversing the Expression
  for (let i = 0; i < string.length; i++) {
    let x = string[i];

    if (x == '(' || x == '[' || x == '{') {
      // Push the element in the stack
      stack.push(x);
      continue;
    }

    // If current character is not opening
    // bracket, then it must be closing.
    // So stack cannot be empty at this point.
    if (stack.length == 0) return false;

    let check;
    switch (x) {
      case ')':
        check = stack.pop();
        if (check == '{' || check == '[') return false;
        break;

      case '}':
        check = stack.pop();
        if (check == '(' || check == '[') return false;
        break;

      case ']':
        check = stack.pop();
        if (check == '(' || check == '{') return false;
        break;
    }
  }

  // Check Empty Stack
  return stack.length == 0;
}

console.log(balancedBrackets('(hello)[world]'));
// => true

console.log(balancedBrackets('([)]'));
// => false

console.log(balancedBrackets('[({}{}{})([])]'));
// => true

module.exports = balancedBrackets;
