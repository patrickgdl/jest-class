import Cart from './Cart';

describe('Cart', () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it('should return 0 when getTotal(0 is executed in a newly created instance', () => {
    expect(cart.getTotal()).toEqual(0);
  });

  it('shoud multiply quantity and price and receive the total amount', () => {
    const item = {
      product: {
        title: 'Adidas running shoes',
        price: 35388, // R$ 353,88
      },
      quantity: 2,
    };

    cart.add(item);

    expect(cart.getTotal()).toEqual(70776);
  });
});
