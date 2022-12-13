import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';

import { Actions, ModalBody, OrderDetails, OverLay } from './style';
import { formatCurrency } from './../../utils/formatCurrency';
import { useEffect } from 'react';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}
export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  //let total = 0;
  //order.products.forEach(({ quantity, product }) => {
  //  total += product.price * quantity;
  //});

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);

  return (
    <OverLay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type='button' onClick={onClose}>
            <img src={closeIcon} alt='Ícone de fechar' />
          </button>
        </header>

        <div className='status-container'>
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '⌛'}
              {order.status === 'IN_PRODUCTION' && '🥙'}
              {order.status === 'DONE' && '✅'}
            </span>
            <span>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto'}
            </span>
          </div>
        </div>

        <OrderDetails>
          <strong>items</strong>
          <div className='order-items'>
            {order.products.map(({ _id, product, quantity }) => (
              <div className='item' key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width='48'
                  height='40'
                />

                <span className='quantity'>{quantity}x</span>
                <div className='product-details'>
                  <span>{product.name}</span>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className='total'>
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button className='primary' type='button'>
            <span>🥙</span>

            <strong>Inicar produção</strong>
          </button>

          <button className='secondary' type='button'>
            Cancelar pedido
          </button>
        </Actions>
      </ModalBody>
    </OverLay>
  );
}
