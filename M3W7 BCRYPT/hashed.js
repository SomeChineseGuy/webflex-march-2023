const  bcrypt = require('bcryptjs');

const plainTextPassword = 'yoloswag420';

// bcrypt.genSalt(10)
//   .then(data => {
//     console.log(data);
//   })


// bcrypt.hash(plainTextPassword, salt)
//   .then(data => {
//     
//   })



const salt = bcrypt.genSaltSync(10)
console.log('salt:   ', salt);
const hashed = bcrypt.hashSync(plainTextPassword, salt);
console.log('hashed: ', hashed);
console.log(plainTextPassword);

const results = bcrypt.compareSync(plainTextPassword, hashed)
console.log(results);

let arr = []
for(let i = 0; i < 50; i++) {
  const salt = bcrypt.genSaltSync(10)
  const hashed = bcrypt.hashSync(plainTextPassword, salt);
  arr.push(hashed)
  console.log(arr);
}

console.log(bcrypt.compareSync(plainTextPassword, arr[4]));
console.log(bcrypt.compareSync(plainTextPassword, arr[25]));
console.log(bcrypt.compareSync(plainTextPassword, arr[19]));
console.log(bcrypt.compareSync(plainTextPassword, arr[45]));
console.log(bcrypt.compareSync(plainTextPassword, arr[12]));
console.log(bcrypt.compareSync(plainTextPassword, arr[1]));
console.log(bcrypt.compareSync(plainTextPassword, arr[10]));
console.log(bcrypt.compareSync(plainTextPassword, arr[30]));
console.log(bcrypt.compareSync(plainTextPassword, arr[40]));