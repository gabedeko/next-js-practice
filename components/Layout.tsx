import React from 'react'

import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'

import styles from '../styles/Layout.module.css'


const Layout = ({children}: {children: any}) => {
  return (
    <>
        <Meta />
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
              <Header />
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout