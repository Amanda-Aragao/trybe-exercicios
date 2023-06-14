const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};
const nameDelivery = order.order.delivery.deliveryPerson;
const nameClient = order.name;
const phoneClient = order.phoneNumber;
const adress = order.address.street;
const number = order.address.number;
const apartment = order.address.apartment;

const customerInfo = (order) => {
    console.log(`Olá ${nameDelivery}, entrega para ${nameClient}, Telefone: ${phoneClient}, R. ${adress}, N°: ${number}, AP ${apartment}   `);
    
};

customerInfo(order);

const pizzas = Object.keys(order.order.pizza) // resgatando a chave do obj para acessar-lo por dentro
const newClient = order.name = 'Luiz Silva'
const drinks = Object.keys(order.order.drinks)
const value = order.payment = '50'
const orderModifier = (order) => {
console.log(`Olá ${newClient}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks[0]} é R$ ${value},00.`)
};

orderModifier(order);