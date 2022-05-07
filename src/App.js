
import { useState } from 'react';
import styled from "styled-components";

import './App.css';

const HELP_URL = 'https://wa.me/525585250354?text=%C2%A1Hola%21+Estoy+en+la+p%C3%A1gina+de+S%C3%BAper+y+tengo+una+pregunta.'

const StyledTopbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 1px solid #e3e3e3;
  height: 52px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  color: #15135b;
  cursor: default;
  user-select: none;

  button {
    display: inline-block;
    padding: 16px 18px;
    background-color: #ffffff;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    height: 52px;
    color: #e21383;
    cursor: pointer;
    
    &:hover {
      background-color: #e3e3e3;
    }
  }
  `;

const StyledTitle = styled.h1`
  display: block;
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  color: #15135b;
  line-height: 1.25;
  text-align: center;
  cursor: default;
`;

const Topbar = () => {
  return (
    <StyledTopbar>
      <button>Atras</button>
      Cotización
      <button>Ayuda</button>
    </StyledTopbar>
  );
}

const Title = ({ title, level = 'h1' }) => {
  return <StyledTitle>{title}</StyledTitle>;
}


const regularInsurance = [
  {
    coverageAmount: 500000,
    montlyPrice: 286.68,
    detailUrl: '',
    recommended: false
  },
  {
    coverageAmount: 500000,
    montlyPrice: 286.68,
    detailUrl: '',
    recommended: true
  },
  {
    coverageAmount: 500000,
    montlyPrice: 286.68,
    detailUrl: '',
    recommended: false
  },
]

const StyledSwitch = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e3e3e3;
  padding: 8px;
  border-radius: 8px;
  
  button {
    display: inline-flex;
    border-radius: 8px;
    flex: 1;
    padding-top: 8px;
    padding-bottom: 8px;
    border: none;
    outline: none;
    background-color: transparent;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    color: #15135b;

    &.selected {
      background-color: #e21383;
      color: #ffffff;
    }
  }
`;

const SwitchInput = ({label, options, selected, onChange}) => {
  return (
    <>
      {label}
      <StyledSwitch>
      {options.map(option => {
        const isSelected = selected.value === option.value;
        console.log({isSelected, selected, option});
        return <button className={`${isSelected ? 'selected' : ''}`}onClick={() => onChange(option)}>{option.label}</button>
      })}
      </StyledSwitch>
    </>
  )
}

const insuranceTypes = [
  {
    value: 'regular',
    label: 'Tradicional'
  },
  {
    value: 'cashback',
    label: 'Con devolución'
  },
]

const InsuranceBox = styled.div`
  display: block;
  padding: 16px;

  background: #ffffff;
  border: 2px solid #e3e3e3;
  box-shadow: 0px 2px 2px #ebebeb;
  border-radius: 12px;
`;

const StyledFeature = styled.div`


  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.25;

    color: #15135b;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #15135b;
  }
`;

const Feature = ({title, description}) => {
  return (
    <StyledFeature>
      <h4>{title}</h4>
      <p>{description}</p>
    </StyledFeature>
  );
}

const Features = styled.div`
  display: block;
  padding: 16px;
  background: #ffffff;
  border: 2px solid #e3e3e3;
  box-shadow: 0px 2px 2px #ebebeb;
  border-radius: 12px;
`;

const Life = () => {
  const [insuranceType, setInsuranceType] = useState(insuranceTypes.find(type => type.value === 'regular'))

  console.log({insuranceType});

  return (
    <>
      <Topbar pageTitle="Cotización" />
      <Title title="Estos son los increíbles precios que tenemos para ti:" />
      <SwitchInput
        label="Elige tu tipo de seguro"
        options={insuranceTypes}
        selected={insuranceType}
        onChange={setInsuranceType}
      />
      Plan tradicional Se renueva cada año. Más barato pero no tiene ahorro.
      {regularInsurance.map((insurance) => (
        <InsuranceBox>
          Cobertura
          {insurance.coverageAmount}
          Precio desde
          {insurance.montlyPrice}
          <button>Más información</button>
          {insurance.recommended && <span>recommended</span>}
        </InsuranceBox>
      ))}
      Seguro expedido por General de Seguros y protegido por la CNSF.
      <Title title="Todos nuestros planes incluyen:" />
      <Features>
        <Feature
          title="Cobertura por fallecimiento."
          description="Muerte natural, accidental y por
enfermedades"
        />
        <Feature title="Anticipo por enfermedad terminal." description="Muerte natural, accidental y por
enfermedades"/>
<Feature title="Anticipo para gastos funerarios." description="Adelanto del 15% para tus beneficiaria(o)s." />
<Feature title="Cobertura inmediata." description="Tu cobertura empieza apenas se
aprueba tu seguro."/>
<Feature title="Pago en parcialidades." description="Puedes pagar tu seguro mensual o semestralmente, con un recargo del
6.5% sobre el costo anual." />
      </Features>
      <b>Cobertura por fallecimiento.Cobertura por fallecimiento.</b>
      Muerte natural, accidental y por enfermedades
      <b></b>
    </>
  );
  }



const GetYourQuote = () => {

}



function App() {
  return (
    <Life />
  );
}

export default App;
