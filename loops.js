function forLoop(strangeStrings) {
  for (let i = 0; i < 25; i++) {
      if (i == 1) {
        strangeStrings.push('I am ' + i + ' strange loop')
      }
      else {
        strangeStrings.push(`I am ${i} strange loops`)
      }
  }
  return strangeStrings;
}

function whileLoop(arg) {
  while(arg >= 0) {
    console.log(arg)
    --arg
  }
  return 'done'
}

function doWhileLoop(array) {
  do {
    array.push()
  }
  while(array.length > 0 && incrementVariable())
  return array
}

var i = 0;

function incrementVariable() {
  i = i + 1;
  if i > 10 return false
}
