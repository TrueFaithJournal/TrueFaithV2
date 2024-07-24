import React from 'react'
import './ApostleCard.css'
import { Button } from './Button';
import './Button.css';
import { ApostleJohnButton } from './ApostleJohnButton';
import { ApostleMatthewButton } from './ApostleMatthewButton';
import { Link } from 'react-router-dom';

export default function ApostleCard() {
  return (
    <div>
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
      <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Peter
            </Button>
      <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Lucas
            </Button>
            </div>
    </div>
  );

}

   {/* <iframe
        src="https://app.fitleadspro.ai/v2/preview/ABhDHyeuGllF1GLUI10N?notrack=true"
        allow="clipboard-write"
        name="FormWise.ai"
        scrolling="yes"
        frameborder="0"
        marginheight="0px"
        marginwidth="0px"
        id="toolsetiframe"
        height="800px"
        width="2000px"
        allowfullscreen
      ></iframe> */}
