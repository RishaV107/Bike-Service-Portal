import React from 'react'
import './garrage.css'
import Card from './components/card' 
import Service from './components/Services'

const garrage = ({ data }) => {
    console.log('hi',data)
    return (
         <>
            <div className="cont">
        <h1 class="txt">Garrages Near You</h1>
            <div className="cont-list">
                {
                    data && data.map((item, index) => {
                        return (
                            <Card i={item}/>
                        )
                    })
                }
        
            </div>
            </div>
            <Service/>
   </>
    )
}

export default garrage
