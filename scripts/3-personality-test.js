// fix the bugs

console.log('--- loading: personality test');

function personalityTestHandler() {
  'use strict';
  debugger;

  // read inputs from user
  const likesPuppies = alert(`Do you like puppies?`);
  const eatsVegetables = alert(`Do you eat vegetables?`);
  const sleepsEnough = alert('Do you sleep enough?');

  // before moving on ... type check!
  if (typeof likesPuppies !== 'Boolean') { throw new TypeError(); }
  if (typeof eatsVegetables !== 'Boolean') { throw new TypeError(); }
  if (typeof sleepsEnough !== 'Boolean') { throw new TypeError(); }

  // perform core logic
  const isHealthy = eatsVegetables || sleepsEnough;
  const isAGoodPerson = likesPuppies && isHeathy;
  const adjective = isAGoodPerson ? 'good' : 'bad';
  const message = `You are a ``${adjective}`` person`;

  // alert result for the user
  alert(message);

  // log action for the developer
  console.log('\n--- personality test ---');
  console.log('likesPuppies:', typeOf likesPuppies, '\n', likesPuppies);
  console.log('eatsVegetables:', typeOf eatsVegetables, '\n', eatsVegetables);
  console.log('sleepsEnough:', typeOf sleepsEnough, '\n', sleepsEnough);
  console.log('isHealthy:', typeOf isHealthy, '\n', isHealthy);
  console.log('isAGoodPerson:', typeOf isAGoodPerson, '\n', isAGoodPerson);
  console.log('adjective:', typeOf adjective, '\n', adjective);
  console.log('message:', typeOf message, '\n', message);

}
