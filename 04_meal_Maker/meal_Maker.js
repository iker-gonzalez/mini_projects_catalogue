const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers () {
    return this._courses.appetizers;
  },
  get mains () {
    return this._courses.main;
  },
  get desserts () {
    return this._courses.desserts;
  },
  set appetizers (appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains (mains) {
    this._courses.mains = mains;
  },
  set desserts (desserts) {
    this._courses.desserts = desserts;
  },
  get courses () {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal: ${appetizer.name}, ${main.name} and ${dessert.name}. Price to be paid: ${totalPrice}.`
  }
};

menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'avocado', 3.00);
menu.addDishToCourse('appetizers', 'sushi', 7.50);

menu.addDishToCourse('mains', 'salmon', 11.50);
menu.addDishToCourse('mains', 'steak', 12.50);
menu.addDishToCourse('mains', 'pasta', 9.00);

menu.addDishToCourse('desserts', 'cheesecake', 6.00);
menu.addDishToCourse('desserts', 'yogurt', 3.50);
menu.addDishToCourse('desserts', 'banana', 2.50);

const meal = menu.generateRandomMeal();
console.log(meal);
