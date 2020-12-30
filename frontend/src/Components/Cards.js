import React from 'react';
import '../Styling/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Sport Categories</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bodybuilding.jpg'
              text='Sculpt your body'
              label='BodyBuilding'
              path='/'
            />
            <CardItem
              src='images/powerlifting2.jpg'
              text='Build strength'
              label='PowerLifting'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='landing.jpg'
              text='Become a machine'
              label='Crossfit'
              path='/'
            />
            <CardItem
              src='images/weightlifting.jpg'
              text='Learn perfect technique'
              label='WeightLifting'
              path='/'
            />
            <CardItem
              src='images/boxing.jpg'
              text='Boxing, calisthenics, basketball, soccer...'
              label='Specific Sport'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
