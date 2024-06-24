import React from 'react'
import ApostleCard from './ApostleCard'
import './Card.css';

function Card() {
  return (
    <div className='card'>
      <h1>Ask An Apostle</h1>
      <div className='card__container'>
        <div className='card__wrapper'>
            <ul className='card__items'>
                <ApostleCard
                src="images/mountaincross.jpg"
                text="See how each of Jesus`s 12 Apostles can bring you serenity"
                label='Ask an Apostle'
                path='/' />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
