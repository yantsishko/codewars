/**
 Given: an array containing hashes of names

 Return: a string formatted as a list of names separated by commas except for the last two names,
 which should be separated by an ampersand.
 Example:
 list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
 // returns 'Bart, Lisa & Maggie'

 list([ {name: 'Bart'}, {name: 'Lisa'} ])
 // returns 'Bart & Lisa'

 list([ {name: 'Bart'} ])
 // returns 'Bart'

 list([])
 // returns ''
*/
function list(names){
  const namesArr = names.map((item) => {
    return item.name;
  });

  const lastName = namesArr[namesArr.length - 1];
  namesArr.splice(namesArr.length - 1, 1);

  if (names.length === 1) {
    return names[0].name;
  }
  if (!names.length) {
    return '';
  }
  return `${namesArr.join(', ')} & ${lastName}`;
}
