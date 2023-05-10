import Link from 'next/link';

import useSite from 'hooks/use-site';
import { postPathBySlug } from 'lib/posts';
import { categoryPathBySlug } from 'lib/categories';

import Section from 'components/Section';
import Container from 'components/Container';

import styles from './Footer.module.scss';


const Footer = () => {
  const { metadata = {}, recentPosts = [], categories = [] } = useSite();
  const { title } = metadata;

  const hasRecentPosts = Array.isArray(recentPosts) && recentPosts.length > 0;
  const hasRecentCategories = Array.isArray(categories) && categories.length > 0;
  const hasMenu = hasRecentPosts || hasRecentCategories;

  return (
    <footer className={styles.footer}>
      {hasMenu && (
        <Section className={styles.footerMenu}>
          <Container>            
            <ul className={styles.footerMenuColumns}>
              <li>
                <ul className={styles.footerMenuTitle}>
                <strong className={styles.titleFont}>¡Hablemos!</strong>
                </ul>
              </li>
              <li>
                <ul className={styles.footerMenuItems}>
                  <li>
                    <a href="#"><u>Dirección:</u> Calle Aldapa, 2 Local 4, 28025 Madrid</a>
                  </li>
                  <li>
                    <a href="tel:+34697286914"><u>Teléfono:</u> 697 28 69 14</a>
                  </li>
                  <li>
                    <a href="mailto:hola@contra-architecture.com?Subject=Consulta"><u>Mail:</u> hola@contra-architecture.com</a>
                  </li>
                </ul>
              </li>
            </ul>
          </Container>
        </Section>
      )}

      <Section className={styles.footerLegal}>
        <Container>
          <p>
            Proudly baked by {title} &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
