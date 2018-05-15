// 写一个Person类，要有name，age属性，要有一个introduce方法，
// introduce方法返回一个字符串形如：

// >My name is Tom. I am 21 years old.

module.exports = class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return 'My name is ' + this.name + '. I am ' + this.age + ' years old.';
  }
}
