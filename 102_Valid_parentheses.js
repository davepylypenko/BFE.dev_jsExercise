/*
Given a string containing only following characters:

parentheses : ( or )
brackets: [ or ]
braces: { or }
write a function to determine if they are valid.

By 'valid', it means all should be rightly paired, and with the valid order.
*/

function validate(str) {
  let containers = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  let stack = [];
  let open = Object.values(containers);
  for (let i of str) {
    if (open.includes(i)) {
      stack.push(i)
    } else {
      let last = stack.pop();
      if ( last != containers[i]) {return false}
    }
  }
  return stack.length == 0 ? true: false
}

validate('{}[]()') 
// true

validate('{[()]}') 
// true

validate('{[}]') 
// false

validate('{}}') 
// false