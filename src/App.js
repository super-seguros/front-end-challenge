import { useState } from "react";
import styled from "styled-components";

import "./App.css";

import { formatMoney } from "utils";
import { InfoToken } from "ui/InfoToken";
import { Topbar } from "ui/Topbar";
import { Title } from "ui/Title";
import { Feature, Features } from "ui/Feature";
import { SwitchInput } from "ui/SwitchInput";
import { Button } from "ui/Button";
import { Label } from "ui/Label";
import { Tag } from "ui/Tag";
import { Paragraph } from "ui/Paragraph";

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

const App = () => {
  const [insuranceType, setInsuranceType] = useState(
    insuranceTypes.find((type) => type.value === "regular")
  );

  return (
    <StyledApp>
      <Topbar pageTitle="Cotización" />
      <AppContent>
        <Title>Estos son los increíbles precios que tenemos para ti:</Title>
        <SwitchInput
          label="Elige tu tipo de seguro"
          options={insuranceTypes}
          selected={insuranceType}
          onChange={setInsuranceType}
        />
        <Title level={3} left pink className="mt-3">
          Plan tradicional
        </Title>
        <Title level={2} left>
          Se renueva cada año. Más barato pero no tiene ahorro.
        </Title>
        {regularInsurance.map((insurance) => (
          <InsuranceBox className="mb-2">
            {insurance.recommended && <Tag className="mb-3">Recomendado</Tag>}
            <div className="grid grid-cols-2 mb-4">
              <InfoToken
                label="Cobertura"
                value={formatMoney(insurance.coverageAmount)}
              />
              <InfoToken
                label="Precio desde"
                value={`${formatMoney(insurance.montlyPrice)}/mes`}
              />
            </div>
            <Button>Más información</Button>
          </InsuranceBox>
        ))}
        <Paragraph center>
          Seguro expedido por General de Seguros y protegido por la CNSF.
        </Paragraph>
        <Title level={2}>Todos nuestros planes incluyen:</Title>
        <Features>
          <Feature
            icon="check-circle"
            title="Cobertura por fallecimiento."
            description="Muerte natural, accidental y por
enfermedades"
          />
          <Feature
            icon="check-circle"
            title="Anticipo por enfermedad terminal."
            description="Muerte natural, accidental y por
enfermedades"
          />
          <Feature
            icon="check-circle"
            title="Anticipo para gastos funerarios."
            description="Adelanto del 15% para tus beneficiaria(o)s."
          />
          <Feature
            icon="check-circle"
            title="Cobertura inmediata."
            description="Tu cobertura empieza apenas se
aprueba tu seguro."
          />
          <Feature
            icon="check-circle"
            title="Pago en parcialidades."
            description="Puedes pagar tu seguro mensual o semestralmente, con un recargo del
6.5% sobre el costo anual."
          />
        </Features>
      </AppContent>
    </StyledApp>
  );
};

// Ideally, this would be a full CSS reset or something like normalize.css
const StyledApp = styled.div`
  * {
    box-sizing: border-box;
  }

  /* fonts */
  --font-family-title: "Outfit";
  --font-family-body: "Outfit";

  /* colors */
  --super-gray-800: #15135b;
  --super-pink-500: #e21383;
  --super-pink-700: #b80665;
  --super-green-500: #5fb04e;
  --super-blue-50: #f9fafb;
  --white-100: #ffffff;
  --white-200: #ebebeb;
  --white-300: #e3e3e3;

  /* spacing */
  --spacing-100: 1px;
  --spacing-200: 2px;
  --spacing-300: 4px;
  --spacing-400: 8px;
  --spacing-500: 12px;
  --spacing-600: 16px;
  --spacing-700: 20px;
  --spacing-800: 24px;

  background-color: var(--super-blue-50);
`;

const AppContent = styled.div`
  display: block;
  padding: var(--spacing-500);
  margin: 0 auto;
  max-width: 375px;
  background-color: var(--white-100);
  border: 2px solid var(--white-300);
  box-shadow: 0px 2px 2px var(--white-200);
  border-radius: 12px;

  @media (max-width: 600px) {
    max-width: 100%;
    background-color: var(--super-blue-50);
    border: none;
    box-shadow: none;
  }
`;

export default App;
