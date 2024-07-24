import React from 'react'
import './ApostleCard.css'
import { Button } from './Button';
import './Button.css';
import { ApostleJohnButton } from './ApostleJohnButton';
import { ApostleMatthewButton } from './ApostleMatthewButton';
import { ApostlePeterButton } from './ApostlePeterButton';
import { ApostleJudasButton } from './ApostleJudasButton';
import { Link } from 'react-router-dom';

export default function ApostleCard() {
  return (
    <div className='choices'>
      <h1 className='ApostleChoice'>Which Apostle would you like to speak to?</h1>
      <div className='apostles'>
      <ApostleJohnButton
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              John
            </ApostleJohnButton>
      <ApostleMatthewButton
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Matthew
            </ApostleMatthewButton>
      <ApostlePeterButton
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Peter
            </ApostlePeterButton>
      <ApostleJudasButton
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Judas
            </ApostleJudasButton>
      <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              James the son of Alphaeus (James the Less):
            </Button>
      <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Philip
            </Button>
      <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              James of Zebedee
            </Button>
      <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Andrew
            </Button>
      <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Thomas
            </Button>
      <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Bartholomew
            </Button>
      <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Thaddaeus
            </Button>
      <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Simon the Zealot
            </Button>
            </div>
    </div>
  );

}
