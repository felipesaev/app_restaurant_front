import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './style';

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrderBoard({ icon, title, orders }: OrderBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null)
  function handleOpenOrder(order: Order) {
    setIsModalVisible(true)
    setSelectedOrder(order)
  }

  function handleCloseModal () {
    setIsModalVisible(false);
    setSelectedOrder(null)
  }
  return (
    <Board>
      <OrderModal visible={isModalVisible} order={selectedOrder} onClose={handleCloseModal}/>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
        {orders.map((order) => (
        <button type='button' key={order._id} onClick={() => handleOpenOrder(order)}>
          <strong>Mesa {order.table}</strong>
          <span>{order.products.length} items</span>
        </button>
        ))}
      </OrdersContainer>
      )}
    </Board>
  );
}
