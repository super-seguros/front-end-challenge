import { useState } from "react";
import styled from "styled-components";

import "./App.css";

import { formatMoney } from "utils";
import { InfoToken } from "ui/InfoToken";
import { Topbar } from "ui/Topbar";
import { Title } from "ui/Title";
import { Feature, Features } from "ui/Feature";
import { SwitchInput } from "ui/SwitchInput";

const HELP_URL =
  "https://wa.me/525585250354?text=%C2%A1Hola%21+Estoy+en+la+p%C3%A1gina+de+S%C3%BAper+y+tengo+una+pregunta.";

const regularInsurance = [
  {
    coverageAmount: 500000,
    montlyPrice: 286.68,
    detailUrl: "",
    recommended: false,
  },
  {
    coverageAmount: 500000,
    montlyPrice: 286.68,
    detailUrl: "",
    recommended: true,
  },
  {
    coverageAmount: 500000,
    montlyPrice: 286.68,
    detailUrl: "",
    recommended: false,
  },
];

const insuranceTypes = [
  {
    value: "regular",
    label: "Tradicional",
  },
  {
    value: "cashback",
    label: "Con devolución",
  },
];

const InsuranceBox = styled.div`
  display: block;
  padding: 16px;

  background: #ffffff;
  border: 2px solid #e3e3e3;
  box-shadow: 0px 2px 2px #ebebeb;
  border-radius: 12px;
`;

const Life = () => {
  const [insuranceType, setInsuranceType] = useState(
    insuranceTypes.find((type) => type.value === "regular")
  );

  return (
    <StyledApp>
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
          <InfoToken
            label="Cobertura"
            value={formatMoney(insurance.coverageAmount)}
          />
          <InfoToken
            label="Precio desde"
            value={`${formatMoney(insurance.montlyPrice)}/mes`}
          />
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
        <Feature
          title="Anticipo por enfermedad terminal."
          description="Muerte natural, accidental y por
enfermedades"
        />
        <Feature
          title="Anticipo para gastos funerarios."
          description="Adelanto del 15% para tus beneficiaria(o)s."
        />
        <Feature
          title="Cobertura inmediata."
          description="Tu cobertura empieza apenas se
aprueba tu seguro."
        />
        <Feature
          title="Pago en parcialidades."
          description="Puedes pagar tu seguro mensual o semestralmente, con un recargo del
6.5% sobre el costo anual."
        />
      </Features>
      <b>Cobertura por fallecimiento.Cobertura por fallecimiento.</b>
      Muerte natural, accidental y por enfermedades
      <b></b>
    </StyledApp>
  );
};

// Ideally, this would be a full CSS reset or something like normalize.css
const StyledApp = styled.div`
  * {
    /* font-family: "Outfit", sans-serif; */
    box-sizing: border-box;
    line-height: 1;
  }

  --font-family-title: "Outfit";
  --font-family-body: "Outfit";
`;

function App() {
  return <Life />;
}

export default App;
