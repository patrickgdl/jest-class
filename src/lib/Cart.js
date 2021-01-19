export default class Cart {
  items = [];

  add(item) {
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((acc, val) => {
      return acc + val.quantity * val.product.price;
    }, 0);
  }
}
