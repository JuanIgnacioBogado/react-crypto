import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { Form } from '@/components/Form';
import { Result } from '@/components/Result';
import { Spinner } from '@/components/Spinner';

const Heading = styled.h1`
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 125px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

function App() {
  const [currency, setCurrency] = useState({});
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!Object.keys(currency).length) return;

    const { stateCrypto, stateCurrency } = currency;

    (async () => {
      setLoading(true);
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${stateCrypto}&tsyms=${stateCurrency}`
      );
      const { DISPLAY } = await response.json();

      setResult(DISPLAY[stateCrypto][stateCurrency]);
      setLoading(false);
    })();
  }, [currency]);

  return (
    <Container>
      <Image src="/imagen-criptos.png" />

      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>

        <Form {...{ setCurrency }} />

        {loading && <Spinner />}
        {!loading && result?.PRICE && <Result {...result} />}
      </div>
    </Container>
  );
}

export default App;
