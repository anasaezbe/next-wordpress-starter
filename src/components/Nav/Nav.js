import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { BsList, BsXLg } from 'react-icons/bs';

import useSite from 'hooks/use-site';

import { postPathBySlug } from 'lib/posts';
import { findMenuByLocation, MENU_LOCATION_NAVIGATION_DEFAULT } from 'lib/menus';

import Section from 'components/Section';

import styles from './Nav.module.scss';
// import NavListItem from 'components/NavListItem';

import Container from 'components/Container';
// import { categoryPathBySlug } from 'lib/categories';

// import logoNegro from "./logo-negro.png";


const Nav = () => {
  const { metadata = {}, recentPosts = [], categories = [] } = useSite();

  // const { metadata = {}, menus } = useSite();
  const { title } = metadata;

  const hasRecentPosts = Array.isArray(recentPosts) && recentPosts.length > 0;
  const hasRecentCategories = Array.isArray(categories) && categories.length > 0;
  const hasMenu = hasRecentPosts || hasRecentCategories;

  // const navigationLocation = process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || MENU_LOCATION_NAVIGATION_DEFAULT;
  // const navigation = findMenuByLocation(menus, navigationLocation);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);


  return (
    <nav className={styles.nav}>
      <Section className={styles.navSection}>
        <p className={styles.navName}>
          <Link href="/">
            <a><img src="/logo-negro.png" alt='logo-contra'/></a>
          </Link>
        </p>
        {/* <ul className={styles.navMenu}>
          {navigation?.map((listItem) => {
            return <NavListItem key={listItem.id} className={styles.navSubMenu} item={listItem} />;
          })}
        </ul> */}
        {/* {hasMenu && ( */}
        {/* <Section> */}
        {/* /**ESTO ES DINAMICO* */}
        {/* <Container>
            <ul className={styles.navMenu}>              
              {hasRecentCategories && (
                <li>
                  
                  <ul className={styles.footerMenuItems}>
                    {categories.map((category) => {
                      const { id, slug, name } = category;
                      return (
                        <li key={id}>
                          <Link href={categoryPathBySlug(slug)}>{name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )}
            </ul>
          </Container> */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          {menuOpen? <BsXLg/>:<BsList/>}
          
          
          


        </div>
          

        

        {/* ESTO ES ESTÁTICO */}
        <div>
        
          <ul className={`${styles.navMenu} ${menuOpen ? styles.open : ''}`}>
            <ul className={styles.top}>
              <li className={`${styles.h3} ${styles.titleFont} ${styles.uppercase} ${styles.extraBoldH}`}>
                <Link href="/categories/architecture">Architecture</Link>
              </li>
              <li className={`${styles.h3} ${styles.titleFont} ${styles.uppercase} ${styles.extraBoldH}`}>
                <Link href="/communication">Communication</Link>
              </li>
              <li className={`${styles.h3} ${styles.titleFont} ${styles.uppercase} ${styles.extraBoldH}`}>
                <Link href="/future">Future</Link>
              </li>
            </ul>
            <ul className={`${styles.h3} ${styles.titleFont} ${styles.uppercase} ${styles.extraBoldH}`}>
              <li className={styles.h3}>
                <Link href="/about">About</Link>
              </li>
              <li className={`${styles.h3} ${styles.titleFont} ${styles.uppercase} ${styles.extraBoldH}`}>Contact</li>
            </ul>
          </ul>
        </div>
        {/* </Section> */}
        {/* )} */}
      </Section>
    </nav>
  );
};

// export async function getStaticProps() {
//   return {
//     props: {},
//   };
// }

export default Nav;
