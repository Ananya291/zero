import React from 'react'
import './Products.css'

function Products({ img, txt, rate, bgColor }) {
    return (
        <div className='productsMain' style={{ backgroundColor: bgColor }}>
            <img className='productImage' src={img} />
            <h2 className='productTxt'>{txt}</h2>
            <div className='productBottom'>
                <h1 className='productRate'>{rate}</h1>
                <button className='productBtn' style={{ backgroundColor: bgColor }}>ADD</button>
            </div>
        </div>
    )
}

export default Products