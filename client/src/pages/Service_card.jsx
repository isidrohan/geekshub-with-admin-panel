import React from 'react'
import work from '/image/work.png'

export const Service_card = ({item}) => {
  return (
    <>
        <div className="card1">
          <div className="image">
              <img src={work} alt="computer" width='180'/>
          </div>
          <div className="content">
            <div className="service-provider">
                <p>{item.provider}</p>
                <p><b>Rs.{item.charges}</b></p>
            </div>
            <div className="service-detail">
              <h2>{item.service}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
    </>
  )
}
