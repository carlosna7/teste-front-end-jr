import style from "./page.module.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PhoneSwiper from "@/components/phoneSwiper/PhoneSwiper";

export default function Home() {
  return (
    <>
      <main className={style.main}>
        <Header />

        <section className={style.banner}>
          <div>
            <h1>Venha conhecer nossas promoções</h1>
            <h2>50% Off nos produtos</h2>
            <button>Ver produto</button>
          </div>
        </section>

        <section className={style.filter}>
          <div>
            <div>
              <div><img src="monitorar-tablet-e-smartohoneImg.png" alt="" /></div>
              <p>Tecnologia</p>
            </div>
            <div>
              <div><img src="supermercadosImg.png" alt="" /></div>
              <p>Supermercado</p>
            </div>
            <div>
              <div><img src="whiskeyImg.png" alt="" /></div>
              <p>Bebidas</p>
            </div>
            <div>
              <div><img src="ferramentasImg.png" alt="" /></div>
              <p>Ferramentas</p>
            </div>
            <div>
              <div><img src="cuidados-de-saudeImg.png" alt="" /></div>
              <p>Saúde</p>
            </div>
            <div>
              <div><img src="corridaImg.png" alt="" /></div>
              <p>Esportes e fitness</p>
            </div>
            <div>
              <div><img src="modaImg.png" alt="" /></div>
              <p>Moda</p>
            </div>
          </div>

          <section>
            <div>
              <div>
                <p>CELULAR</p>
              </div>
              <div>
                <p>ACESSÓRIOS</p>
              </div>
              <div>
                <p>TABLETS</p>
              </div>
              <div>
                <p>NOTEBOOKS</p>
              </div>
              <div>
                <p>TVS</p>
              </div>
              <div>
                <p>VER TODOS</p>
              </div>
            </div>
          </section>
        </section>

        <PhoneSwiper />

        <section className={style.parceiros}>
          <div>
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor cum pariatur et harum reiciendis totam dolorum quod laborum nemo.</p>
            <button>CONFIRA</button>
          </div>
          <div>
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor cum pariatur et harum reiciendis totam dolorum quod laborum nemo.</p>
            <button>CONFIRA</button>
          </div>
        </section>

        <div className={style.sectionTitle1}>
        </div>

        <section className={style.produtos}>
          <div>
            <h2>Produtos</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor cum pariatur et harum reiciendis totam dolorum quod laborum nemo.</p>
            <button>CONFIRA</button>
          </div>
          <div>
            <h2>Produtos</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor cum pariatur et harum reiciendis totam dolorum quod laborum nemo.</p>
            <button>CONFIRA</button>
          </div>
        </section>

        <div className={style.sectionTitle2}>
          <h1>Navegue por marcas</h1>
        </div>

        <section className={style.navBrands}>
          <div>
            <div>
              <img src="logo.png" alt="" />
            </div>
            <div>
              <img src="logo.png" alt="" />
            </div>
            <div>
              <img src="logo.png" alt="" />
            </div>
            <div>
              <img src="logo.png" alt="" />
            </div>
            <div>
              <img src="logo.png" alt="" />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
