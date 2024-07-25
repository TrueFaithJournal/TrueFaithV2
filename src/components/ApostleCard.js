import React from 'react'
import './ApostleCard.css'
import { Button } from './Button';
import './Button.css';
import { ApostleJohnButton } from './ApostleJohnButton';
import { ApostleMatthewButton } from './ApostleMatthewButton';
import { ApostlePeterButton } from './ApostlePeterButton';
import { ApostleJudasButton } from './ApostleJudasButton';
import { ApostleJamesButton } from './ApostleJamesButton';
import { ApostlePhilipButton } from './ApostlePhilipButton';
import { ApostleJamesOfZebedeeButton } from './ApostleJamesOfZebedeeButton';
import { ApostleAndrewButton } from './ApostleAndrewButton';
import { ApostleThomasButton } from './ApostleThomasButton';
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
      <ApostleJamesButton
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              James the son of Alphaeus (James the Less):
            </ApostleJamesButton>
      <ApostlePhilipButton
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Philip
            </ApostlePhilipButton>
      <ApostleJamesOfZebedeeButton
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              James of Zebedee
            </ApostleJamesOfZebedeeButton>
      <ApostleAndrewButton
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Andrew
            </ApostleAndrewButton>
      <ApostleThomasButton
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Thomas
            </ApostleThomasButton>
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
