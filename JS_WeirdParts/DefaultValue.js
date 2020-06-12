// Default  Values

function greet(name) {
  // Have a default value
  // NOTE: Or || is run first because it has a higher precedence that equals =
  //  Operators such as or || are 
  name = name || 'Phil';
  console.log('Hello ' + name);
}

greet('Tony');
greet();