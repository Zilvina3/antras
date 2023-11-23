import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout({ children }) {

    const navLinks = [
        {
            name: 'Pagrindinis',
            to: '/'
        },
        {
            name: 'Apie mane',
            to: '/Apie'
        },
        {
            name: 'Asmeninė konsultacija',
            to: '/konsultacija'
        },
        {
            name: 'Santikių suderinimas',
            to: '/suderinimas'
        },
        // {
        //     name: 'Spauda rašo',
        //     to: '/spauda'
        // },
        // {
        //     name: 'Atsiliepimai',
        //     to: '/home'
        // },
    ]

  return (
    <div>
        <Header NavItems={navLinks} />
        {children}
        <Footer footNavLinks={navLinks} />
    </div>
  )
}

export default Layout