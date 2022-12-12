import { Order } from '../../types/Order';
import { Board, OrdersContainer } from './style';

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrderBoard({ icon, title, orders }: OrderBoardProps) {

  function handleOpenOrder() {
    alert('teste')
  }
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
        {orders.map((order) => (
        <button type='button' key={order._id} onClick={handleOpenOrder}>
          <strong>Mesa {order.table}</strong>
          <span>{order.products.length} items</span>
        </button>
        ))}
      </OrdersContainer>
      )}
    </Board>
  );
}
