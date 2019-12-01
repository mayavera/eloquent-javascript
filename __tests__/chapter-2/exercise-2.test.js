const { fizzbuzz } = require('../../chapter-2/exercise-2');

describe('fizzbuzz', () => {
  jest.spyOn(console, 'log').mockImplementation();

  it('prints 100 times', () => {
    expect.assertions(1);

    fizzbuzz();

    expect(console.log).toHaveBeenCalledTimes(100);
  });

  it('prints the correct output', () => {
    expect.assertions(100);

    fizzbuzz();

    expect(console.log).toHaveBeenNthCalledWith(1, 1);
    expect(console.log).toHaveBeenNthCalledWith(2, 2);
    expect(console.log).toHaveBeenNthCalledWith(3, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(4, 4);
    expect(console.log).toHaveBeenNthCalledWith(5, 'Buzz');
    expect(console.log).toHaveBeenNthCalledWith(6, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(7, 7);
    expect(console.log).toHaveBeenNthCalledWith(8, 8);
    expect(console.log).toHaveBeenNthCalledWith(9, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(10, 'Buzz');
    expect(console.log).toHaveBeenNthCalledWith(11, 11);
    expect(console.log).toHaveBeenNthCalledWith(12, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(13, 13);
    expect(console.log).toHaveBeenNthCalledWith(14, 14);
    expect(console.log).toHaveBeenNthCalledWith(15, 'FizzBuzz');
    expect(console.log).toHaveBeenNthCalledWith(16, 16);
    expect(console.log).toHaveBeenNthCalledWith(17, 17);
    expect(console.log).toHaveBeenNthCalledWith(18, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(19, 19);
    expect(console.log).toHaveBeenNthCalledWith(20, 'Buzz');
    expect(console.log).toHaveBeenNthCalledWith(21, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(22, 22);
    expect(console.log).toHaveBeenNthCalledWith(23, 23);
    expect(console.log).toHaveBeenNthCalledWith(24, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(25, 'Buzz');
    expect(console.log).toHaveBeenNthCalledWith(26, 26);
    expect(console.log).toHaveBeenNthCalledWith(27, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(28, 28);
    expect(console.log).toHaveBeenNthCalledWith(29, 29);
    expect(console.log).toHaveBeenNthCalledWith(30, 'FizzBuzz');
    expect(console.log).toHaveBeenNthCalledWith(31, 31);
    expect(console.log).toHaveBeenNthCalledWith(32, 32);
    expect(console.log).toHaveBeenNthCalledWith(33, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(34, 34);
    expect(console.log).toHaveBeenNthCalledWith(35, 'Buzz');
    expect(console.log).toHaveBeenNthCalledWith(36, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(37, 37);
    expect(console.log).toHaveBeenNthCalledWith(38, 38);
    expect(console.log).toHaveBeenNthCalledWith(39, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(40, 'Buzz');
    expect(console.log).toHaveBeenNthCalledWith(41, 41);
    expect(console.log).toHaveBeenNthCalledWith(42, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(43, 43);
    expect(console.log).toHaveBeenNthCalledWith(44, 44);
    expect(console.log).toHaveBeenNthCalledWith(45, 'FizzBuzz');
    expect(console.log).toHaveBeenNthCalledWith(46, 46);
    expect(console.log).toHaveBeenNthCalledWith(47, 47);
    expect(console.log).toHaveBeenNthCalledWith(48, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(49, 49);
    expect(console.log).toHaveBeenNthCalledWith(50, 'Buzz');
    expect(console.log).toHaveBeenNthCalledWith(51, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(52, 52);
    expect(console.log).toHaveBeenNthCalledWith(53, 53);
    expect(console.log).toHaveBeenNthCalledWith(54, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(55, 'Buzz');
    expect(console.log).toHaveBeenNthCalledWith(56, 56);
    expect(console.log).toHaveBeenNthCalledWith(57, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(58, 58);
    expect(console.log).toHaveBeenNthCalledWith(59, 59);
    expect(console.log).toHaveBeenNthCalledWith(60, 'FizzBuzz');
    expect(console.log).toHaveBeenNthCalledWith(61, 61);
    expect(console.log).toHaveBeenNthCalledWith(62, 62);
    expect(console.log).toHaveBeenNthCalledWith(63, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(64, 64);
    expect(console.log).toHaveBeenNthCalledWith(65, 'Buzz');
    expect(console.log).toHaveBeenNthCalledWith(66, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(67, 67);
    expect(console.log).toHaveBeenNthCalledWith(68, 68);
    expect(console.log).toHaveBeenNthCalledWith(69, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(70, 'Buzz');
    expect(console.log).toHaveBeenNthCalledWith(71, 71);
    expect(console.log).toHaveBeenNthCalledWith(72, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(73, 73);
    expect(console.log).toHaveBeenNthCalledWith(74, 74);
    expect(console.log).toHaveBeenNthCalledWith(75, 'FizzBuzz');
    expect(console.log).toHaveBeenNthCalledWith(76, 76);
    expect(console.log).toHaveBeenNthCalledWith(77, 77);
    expect(console.log).toHaveBeenNthCalledWith(78, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(79, 79);
    expect(console.log).toHaveBeenNthCalledWith(80, 'Buzz');
    expect(console.log).toHaveBeenNthCalledWith(81, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(82, 82);
    expect(console.log).toHaveBeenNthCalledWith(83, 83);
    expect(console.log).toHaveBeenNthCalledWith(84, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(85, 'Buzz');
    expect(console.log).toHaveBeenNthCalledWith(86, 86);
    expect(console.log).toHaveBeenNthCalledWith(87, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(88, 88);
    expect(console.log).toHaveBeenNthCalledWith(89, 89);
    expect(console.log).toHaveBeenNthCalledWith(90, 'FizzBuzz');
    expect(console.log).toHaveBeenNthCalledWith(91, 91);
    expect(console.log).toHaveBeenNthCalledWith(92, 92);
    expect(console.log).toHaveBeenNthCalledWith(93, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(94, 94);
    expect(console.log).toHaveBeenNthCalledWith(95, 'Buzz');
    expect(console.log).toHaveBeenNthCalledWith(96, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(97, 97);
    expect(console.log).toHaveBeenNthCalledWith(98, 98);
    expect(console.log).toHaveBeenNthCalledWith(99, 'Fizz');
    expect(console.log).toHaveBeenNthCalledWith(100, 'Buzz');
  });
});
