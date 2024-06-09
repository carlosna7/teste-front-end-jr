'use client'

import React, { useEffect, useState } from 'react';
import styles from './PhoneSwiper.module.scss';
import phones from '../json/phones.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";
import Modal from '../modal/Modal';

import "swiper/css"
import "swiper/css/navigation"

interface IPhones {
  productName: string,
  descriptionShort: string,
  photo: string,
  price: number,
}

const PhoneSwiper = () => {
  const [phoneData, setPhoneData] = useState<IPhones[]>([])
  const [selectedPhone, setSelectedPhone] = useState<IPhones | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setPhoneData(phones.products)
  }, [])

  const handleBuyClick = (phone: IPhones) => {
    setSelectedPhone(phone)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedPhone(null)
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <div className={styles.phoneSwiper}>

      <Swiper
        navigation
        slidesPerView={4}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={62}
        modules={[Navigation, Autoplay]}
      >

        {phoneData && phoneData.map((phone, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <img src={phone.photo} alt={phone.productName} />
                <div className={styles.phoneData}>
                  <p>{phone.productName}</p>
                  <p>{formatPrice(phone.price)}</p>
                  <p>{formatPrice(phone.price)}</p>
                  <p>ou 2x de {formatPrice(phone.price / 2)} sem juros</p>
                  <p>Frete grátis</p>
                  <button onClick={() => handleBuyClick(phone)}>COMPRAR</button>
                </div>
              </div>
            </SwiperSlide>
          )
        })}

      </Swiper>

      <Modal show={showModal} onClose={closeModal} phoneData={selectedPhone} />
    </div>
  )
}

export default PhoneSwiper