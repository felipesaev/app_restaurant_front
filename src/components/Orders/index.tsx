import { Order } from '../../types/Order';
import { OrderBoard } from '../OrdersBoard';
import { Container } from './style';

const orders: Order[] = [
  {
    "_id": "638f3300aacf2ba41f8fd76b",
    "table": "4",
    "status": "WAITING",
    "products": [
        {
            "product": {
                "name": "Pizza",
                "imagePath": '1670887568799-png-clipart-pizza-pizza.png',
                "price": 40,
            },
            "quantity": 3,
            "_id": "638f3300aacf2ba41f8fd76c"
        }
    ],
}
]
export function Orders() {
  return (
    <Container>
      <OrderBoard icon='⌛' title='Fila de espera' orders={orders} />
      <OrderBoard icon='🥙' title='Preparação' orders={[]}/>
      <OrderBoard icon='✅' title='Prontinho' orders={[]}/>
    </Container>
  );
}
