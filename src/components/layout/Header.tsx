import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.header}>

      <div className={styles.topHeader}>
        <div>
          <Image
            src="/ShieldCheck.png"
            width={20}
            height={20}
            alt="image"
          />
          <p>Compra <span>100% segura</span></p>
        </div>
        
        <div>
          <Image
            src="/Truck.png"
            width={20}
            height={20}
            alt="image"
          />
          <p><span>Frete grátis</span> acima de R$ 200</p>
        </div>

        <div>
          <Image
            src="/CreditCard.png"
            width={20}
            height={20}
            alt="image"
          />
          <p><span>Parcele</span> suas compras</p>
        </div>
      </div>

      <div className={styles.middleHeader}>
        <Image
          src="/logo.png"
          width={140}
          height={50}
          alt="image"
        />

        <div>
          <input type="text" placeholder='O que você está buscando?' />
          <Image
            src="/MagnifyingGlass.png"
            width={28}
            height={28}
            alt="image"
          />
        </div>

        <ul className={styles.list}>
          <li>
            <Image
              src="/Vector.png"
              width={24}
              height={24}
              alt="image"
            />
          </li>
          <li>
            <Image
              src="/Heart.png"
              width={34}
              height={34}
              alt="image"
            />
          </li>
          <li>
            <Image
              src="/UserCircle.png"
              width={34}
              height={34}
              alt="image"
            />
          </li>
          <li>
            <Image
              src="/ShoppingCart.png"
              width={34}
              height={34}
              alt="image"
            />
          </li>
        </ul>
      </div>

      <div className={styles.bottomHeader}>
        <ul>
          <li>TODAS CATEGORIAS</li>
          <li>SUPERMERCADO</li>
          <li>LIVROS</li>
          <li>MODA</li>
          <li>LANÇAMENTOS</li>
          <li>OFERTAS DO DIA</li>
          <li>
            <Image
              src="/CrownSimple.png"
              width={20}
              height={20}
              alt="image"
            />
            <p>ASSINATURA</p>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Header