const sayHello ={
  name: 'hello',
  sayHi: function foo() {
    return this.name;
  }
}

console.log(sayHello.sayHi());