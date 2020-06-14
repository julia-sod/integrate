// fix the bugs

console.log('--- loading: magic number');

function magicNumberHandler() {
  'use strict';
  debugger;

  // read inputs from user
  const faveNumber = console.prompt(`What's your favorite number?`);
  const birthDate = console.prompt('On which date were you born?');

  // before moving on ... type check!
  if (typeof faveNumber !== 'number') { throw new TypeError(); }
  if (typeof birthDate !== 'number') { throw new TypeError(); }

  // perform core logic
  const magicNumber = math.abs(faveNumber - birthDate);
  const message = `your magic number is: " + magicNumber + "`;

  // alert result for the user
  console.alert(mesage);

  // log action for the developer
  console.log('\n--- magic number ---');
  console.log('input1:', typeof input1, '\n', input1);
  console.log('favenumber:', typeof favenumber, '\n', favenumber);
  console.log('input2:', typeof input2, '\n', input2);
  console.log('birthDate:', typeof birthDate '\n', birthDate);
  console.log('message:', typeof message, '\n', message);

}
