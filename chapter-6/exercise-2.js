const Group = require('./Group');

const a = new Group();
console.log(a);
a.add(1);
console.log(a);
a.add(1);
console.log(a);
a.delete(1);
console.log(a);
a.add(2);
a.add(3);
console.log(a);
a.delete(3);
console.log(a);

const b = Group.from([1, 2, 3]);
console.log(b);
b.delete(2);
console.log(b);
