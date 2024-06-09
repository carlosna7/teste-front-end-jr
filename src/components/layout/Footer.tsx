import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.aboutUs}>
          <ul>
            <li>SOBRE NÓS</li>
            <li>CONHEÇA</li>
            <li>COMO COMPRAR</li>
            <li>INDICAÇÃO E DESCONTO</li>
          </ul>
          <div>
            <Image
              src="/facebooklogo.png"
              width={22}
              height={22}
              alt="image"
            />
            <Image
              src="/instargamlogo.png"
              width={22}
              height={22}
              alt="image"
            />
            <Image
              src="/youtubelogo.png"
              width={22}
              height={22}
              alt="image"
            />
          </div>
        </div>

        <div className={styles.infos}>
          <ul>
            <li>INFORMAÇÕES ÚTEIS</li>
            <li>FALE CONOSCO</li>
            <li>DÚVIDAS</li>
            <li>PRAZOS DE ENTREGA</li>
            <li>FORMAS DE PAGAMENTO</li>
            <li>POLÍTICAS DE PRIVACIDADE</li>
            <li>TROCAS E DDEVOLUÇÕES</li>
          </ul>
        </div>

        <div className={styles.payment}>
          <h2>FORMAS DE PAGAMENTO</h2>
          <div>
            <Image
              src="/visalogo.png"
              width={48}
              height={16}
              alt="image"
            />
            <Image
              src="/elologo.png"
              width={44}
              height={20}
              alt="image"
            />
            <Image
              src="/alelologo.png"
              width={40}
              height={26}
              alt="image"
            />
            <Image
              src="/dinnerslogo.png"
              width={56}
              height={15}
              alt="image"
            />
            <Image
              src="/ifoodlogo.png"
              width={41}
              height={22}
              alt="image"
            />
            <Image
              src="/mastercardlogo.png"
              width={38}
              height={30}
              alt="image"
            />
            <Image
              src="/pixlogo.png"
              width={55}
              height={20}
              alt="image"
            />
            <Image
              src="/amexlogo.png"
              width={32}
              height={30}
              alt="image"
            />
            <Image
              src="/ticketlogo.png"
              width={29}
              height={29}
              alt="image"
            />
            <Image
              src="/sodexologo.png"
              width={48}
              height={16}
              alt="image"
            />
          </div>
        </div>

        <div className={styles.form}>
          <h3>CADASTRE-SE E RECEBA NOSSAS</h3>
          <h2>NOVIDADES E PROMOÇÕES</h2>
          <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
          <div>
            <input type="text" placeholder='SEU E-MAIL' />
            <button>OK</button>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
        <div>
          <Image
            src="/econverselogo.png"
            width={106}
            height={32}
            alt="image"
          />
          <Image
            src="/vtexwhite.png"
            width={88}
            height={32}
            alt="image"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer