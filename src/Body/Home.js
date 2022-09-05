import React from 'react'
import './Home.css'
import Products from './Products'
import mango from './mango.jpg'
import avocado from './avocado.jpg'
import milk from './milk.jpg'
import bananas from './banans.jpg'

function Home() {
    return (
        <div className='homeMain'>
            <div className='homeLeft'>
                <h1 className='homeTxt'>Plastic-free</h1>
                <h1 className='homeTxt2'>groceries,</h1>
                <h1 className='homeTxt3'>delivered fast.</h1>
                <button className='homeBtn'>START SHOPPING</button>
            </div>
            <div className='homeRight'>
                <Products
                    img={mango}
                    txt='Mangoes'
                    rate='Rs.60'
                    bgColor='#FFDEDE'
                />
                <Products
                    img={avocado}
                    txt='Avocado'
                    rate='Rs.80'
                    bgColor='#C4DFAA'
                />
                <Products
                    img={bananas}
                    txt='Bananas'
                    rate='Rs.50'
                    bgColor='#FFFFFF'
                />
                <Products
                    img={milk}
                    txt='Non fat milk'
                    rate='Rs.30'
                    bgColor='#FFCCB3'
                />

            </div>
        </div>
    )
}

export default Home