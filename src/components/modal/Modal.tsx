import React from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  show: boolean
  onClose: () => void
  phoneData: {
    productName: string
    descriptionShort: string
    photo: string
    price: number
  } | null
}

const Modal: React.FC<ModalProps> = ({ show, onClose, phoneData }) => {

  if (!show || !phoneData) {
    return null
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <div className={styles.modalBackground}>

      <div className={styles.modal}>
        <div className={styles.boxImage}>
          <img src={phoneData.photo} alt={phoneData.productName} />
        </div>
        <div className={styles.modalContent}>
          <p>{phoneData.productName}</p>
          <p>{formatPrice(phoneData.price)}</p>
          <p>{phoneData.descriptionShort} - Many desktop publishing packages and web page editors now many desktop publishing</p>
          <p>Veja mais detalhes do produto &rsaquo;</p>
          <div className={styles.counter}>
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
          <button>COMPRAR</button>
          <span onClick={onClose}>&times;</span>
        </div>
      </div>

    </div>
  )
}

export default Modal
