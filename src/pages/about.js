import Link from 'next/link';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';

import styles from 'styles/pages/About.module.scss';

export default function CustomAbout() {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Descripción de la página de About Us"/>
      </Helmet>
      <Section>
        <Container>
          <div className={styles.center}>
            <p className={styles.subtitle} >VISIÓN + METODOLOGÍA + EQUIPO</p>
            <h1 className={`${styles.atentionCall} ${styles.h2}`}>En CONTRA nos especializamos en Comunicación de Nuevas Narrativas, Tecnología, Investigación y Arquitectura. Queremos acompañar a la gente hacia soluciones y diseños que mejoren su relación con el entorno, aumenten su bienestar y, en última instancia, su felicidad</h1>
          </div>
          
        </Container>
        <Container>
          <div className={styles.manifesto}>
          <img alt="esquema de funcinamiento" src="https://static.vecteezy.com/system/resources/previews/002/098/203/original/silver-tabby-cat-sitting-on-green-background-free-photo.jpg"/>
            <div>
              <h2>MANIFESTO</h2>
              <p>Texto Conceptual sobre CONTRA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
        </Container>
        <Container>
          <div className={styles.fotoequipo}>
            <img alt="foto de equip" src="https://static.vecteezy.com/system/resources/previews/002/098/203/original/silver-tabby-cat-sitting-on-green-background-free-photo.jpg"/>
          </div>        
        </Container>
      </Section>
      <Section>
        <Container>
        <div className={styles.nuestroequipo}>
          <h2>EL EQUIPO</h2>
          <div className={styles.gridtarjetas}>
            <div className={styles.tarjetaind}>
              <h3>Niko Barrena</h3>
              <h5>Director ejecutivo</h5>
              <p>Me gusta saltar, girar y dar volteretas padding: 4rem 0; Me gusta saltar, girar y dar volteretas</p>
              
            </div>
            <div className={styles.tarjetaind}>
              <h3>Niko Barrena</h3>
              <h5>Director ejecutivo</h5>
              <p>Me gusta saltar, girar y dar volteretas Me gusta saltar, girar y dar volteretas</p>
            </div>
            <div className={styles.tarjetaind}>
              <h3>Niko Barrena</h3>
              <h5>Director ejecutivo</h5>
              <p>Me gusta saltar, girar y dar volteretas Me gusta saltar, girar y dar volteretas</p>
            </div>
            <div className={styles.tarjetaind}>
              <h3>Niko Barrena</h3>
              <h5>Director ejecutivo</h5>
              <p>Me gusta saltar, girar y dar volteretas Me gusta saltar, girar y dar volteretas</p>
            </div>
            <div className={styles.tarjetaind}>
              <h3>Niko Barrena</h3>
              <h5>Director ejecutivo</h5>
              <p>Me gusta saltar, girar y dar volteretas Me gusta saltar, girar y dar volteretas</p>
            </div>
            <div className={styles.tarjetaind}>
              <h3>Niko Barrena</h3>
              <h5>Director ejecutivo</h5>
              <p>Me gusta saltar, girar y dar volteretas Me gusta saltar, girar y dar volteretas</p>
            </div>
            <div className={styles.tarjetaind}>
              <h3>Niko Barrena</h3>
              <h5>Director ejecutivo</h5>
              <p>Me gusta saltar, girar y dar volteretas Me gusta saltar, girar y dar volteretas</p>
            </div>
            <div className={styles.tarjetaind}>
              <h3>Niko Barrena</h3>
              <h5>Director ejecutivo</h5>
              <p>Me gusta saltar, girar y dar volteretas Me gusta saltar, girar y dar volteretas</p>
            </div>
            
         
          </div>
          
        </div>
        </Container>
      </Section>
      <Section>
        <Container>
        <div className={styles.nuestrosaliados}>
          <h2>ALIADOS</h2>
          <p> Texto sobre cómo estamos super contentos de haber trabajado con todas estas personitas, que confien en nosotros etc. </p>
          <div className={styles.logosaliados}> 
          <img alt="foto de equip" src="https://static.vecteezy.com/system/resources/previews/002/098/203/original/silver-tabby-cat-sitting-on-green-background-free-photo.jpg"/>
          <img alt="foto de equip" src="https://static.vecteezy.com/system/resources/previews/002/098/203/original/silver-tabby-cat-sitting-on-green-background-free-photo.jpg"/>
          <img alt="foto de equip" src="https://static.vecteezy.com/system/resources/previews/002/098/203/original/silver-tabby-cat-sitting-on-green-background-free-photo.jpg"/>
          <img alt="foto de equip" src="https://static.vecteezy.com/system/resources/previews/002/098/203/original/silver-tabby-cat-sitting-on-green-background-free-photo.jpg"/>
          <img alt="foto de equip" src="https://static.vecteezy.com/system/resources/previews/002/098/203/original/silver-tabby-cat-sitting-on-green-background-free-photo.jpg"/>
          <img alt="foto de equip" src="https://static.vecteezy.com/system/resources/previews/002/098/203/original/silver-tabby-cat-sitting-on-green-background-free-photo.jpg"/>
          <img alt="foto de equip" src="https://static.vecteezy.com/system/resources/previews/002/098/203/original/silver-tabby-cat-sitting-on-green-background-free-photo.jpg"/>
          <img alt="foto de equip" src="https://static.vecteezy.com/system/resources/previews/002/098/203/original/silver-tabby-cat-sitting-on-green-background-free-photo.jpg"/>
          <img alt="foto de equip" src="https://static.vecteezy.com/system/resources/previews/002/098/203/original/silver-tabby-cat-sitting-on-green-background-free-photo.jpg"/>

          </div>

        </div>
        </Container>
      </Section>
      <Section>
        <Container>
        <div className={styles.upsidedownmemento}>
          <h2>EL UPSIDEDOWN: MEMENTO</h2>
          <div className={styles.card}>
             <div className={styles.cardcontent}>
            <h2>CONTRA</h2>
            <p>Texto conceptual sobre contra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at lorem eros.</p>
              </div>
            </div>            
        </div>

        </Container>
      </Section>
    </Layout>
  );
}

// Next.js method to ensure a static page gets rendered
export async function getStaticProps() {
  return {
    props: {},
  };
}
