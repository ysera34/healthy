import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router';

const Header = () => {

  const history = useHistory();

  const handleClick = (url: string) => {
    history.push(url);
  };

  return (
    <header className="p-grid p-align-center p-nogutter">
      <div className="p-col">
        <Toolbar id="header-toolbar">
          <div className="p-toolbar-group-left">
            <Button label="logo" className="pi p-button-secondary" icon="pi pi-home" iconPos="left"
                    onClick={() => handleClick('/')}/>
          </div>
        </Toolbar>
      </div>
      <div className="p-col-8">
        <Toolbar id="header-toolbar">
          <div className="p-toolbar-group-right">
            <Button label="Coronavirus Info" className="p-button-secondary"
                    style={{ borderRadius: '0', marginRight: '.25em' }} onClick={() => handleClick('/')}/>
            <Button label="Order PPE" className="p-button-secondary" style={{ borderRadius: '0', marginRight: '.25em' }}
                    onClick={() => handleClick('/products')}/>
            <Button label="Map" className="p-button-secondary" style={{ borderRadius: '0', marginRight: '.25em' }}
                    onClick={() => handleClick('/')}/>
            <Button label="Learn More" className="p-button-secondary"
                    style={{ borderRadius: '0', marginRight: '.25em' }}
                    onClick={() => handleClick('/')}/>
            <Button label="Contact" className="p-button-secondary" style={{ borderRadius: '0', marginRight: '.25em' }}
                    onClick={() => handleClick('/')}/>
            <Button label="Provider Sign up" className="p-button-secondary" style={{ borderRadius: '0', marginRight: '.25em' }}
                    onClick={() => handleClick('/')}/>
          </div>
        </Toolbar>
      </div>

    </header>
  );
};

export default Header;