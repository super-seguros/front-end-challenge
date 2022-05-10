import { useState } from "react";
import styled from "styled-components";

import { formatMoney } from "utils";
import { InfoToken } from "ui/InfoToken";
import { Topbar } from "ui/Topbar";
import { Title } from "ui/Title";
import { Feature, Features } from "ui/Feature";
import { SwitchInput } from "ui/SwitchInput";
import { Button } from "ui/Button";
import { Tag } from "ui/Tag";
import { Paragraph } from "ui/Paragraph";

const HELP_URL =
  "https://wa.me/525585250354?text=%C2%A1Hola%21+Estoy+en+la+p%C3%A1gina+de+S%C3%BAper+y+tengo+una+pregunta.";

const regularInsurance = [
  {
    coverageAmount: 120000,
    montlyPrice: 96.68,
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
    coverageAmount: 1500000,
    montlyPrice: 612.99,
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

  background-color: var(--white-100);
  border: 2px solid var(--white-300);
  box-shadow: 0px 2px 2px var(--white-200);
  border-radius: 12px;
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


export const Life = () => {
  const [insuranceType, setInsuranceType] = useState(
    insuranceTypes.find((type) => type.value === "regular")
  );

  const regularInsuranceOptions = regularInsurance.map((insurance) => (
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
      <Button onClick={() => console.log('show more info')}>Más información</Button>
    </InsuranceBox>
  ))

  return (
    <>
      <Topbar pageTitle="Cotización" />
      <AppContent>
        <Title className="pt-3">Estos son los increíbles precios que tenemos para ti:</Title>
        <SwitchInput
          label="Elige tu tipo de seguro"
          options={insuranceTypes}
          selected={insuranceType}
          onChange={setInsuranceType}
          className="mt-7"
        />
        <Title level={3} left pink className="pt-7">
          Plan tradicional
        </Title>
        <Title level={2} left className="pb-3">
          Se renueva cada año.
          <br />          Más barato pero no tiene ahorro.
        </Title>
          {regularInsuranceOptions}
        <Paragraph center className="pt-4 pb-1">
          Seguro expedido por General de Seguros y protegido por la CNSF.
        </Paragraph>
        <Title level={2} className="pt-3 pb-3">Todos nuestros planes incluyen:</Title>
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
    </>
  );
};
