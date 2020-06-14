// fix the bugs

console.log('--- loading: magic number');

function magicNumberHandler() {
  'use strict';
  debugger;

  // read inputs from user
  let faveNumber = prompt(`What's your favorite number?`);
  let birthDate = prompt('On which date were you born?');
  // before moving on ... type check!
  
  faveNumber = Number(faveNumber);
  birthDate = Number(birthDate);

  if (isNaN(faveNumber)) { throw new TypeError(); }
  if (isNaN(birthDate)) { throw new TypeError(); }

  // perform core logic

  const magicNumber = Math.abs(faveNumber - birthDate);
  const message = `your magic number is: " ${magicNumber} "`;

  // alert result for the user
  alert(message);

  // log action for the developer
  console.log('\n--- magic number ---');
  console.log('input1:', typeof input1, '\n', input1);
  console.log('faveNumber:', typeof faveNumber, '\n', faveNumber);
  console.log('input2:', typeof input2, '\n', input2);
  console.log('birthDate:', typeof birthDate, '\n', birthDate);
  console.log('message:', typeof message, '\n', message);

}
