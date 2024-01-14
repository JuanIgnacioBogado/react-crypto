import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { Error } from '@/components/Error';
import { useSelectCurrency } from '@/hooks/useSelectCurrency';

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  font-family: 'Lato', sans-serif;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #7a7dfe;
  }
`;

const currencies = [
  { id: 'USD', name: 'Dólar Estadounidense' },
  { id: 'ARS', name: 'Peso Argentino' },
  { id: 'MXN', name: 'Peso Mexicano' },
  { id: 'EUR', name: 'Euro' }
];

// eslint-disable-next-line react/prop-types
export const Form = ({ setCurrency }) => {
  const [error, setError] = useState(false);
  const [cryptos, setCryptos] = useState([]);

  const [SelectCurrency, stateCurrency] = useSelectCurrency('Elige tu Moneda', currencies);
  const [SelectCrypto, stateCrypto] = useSelectCurrency('Elige tu Criptomoneda', cryptos);

  const handleSubmit = e => {
    e.preventDefault();

    if (stateCurrency === '' || stateCrypto === '') return setError(true);

    setError(false);
    setCurrency({ stateCurrency, stateCrypto });
  };

  useEffect(() => {
    (async () => {
      const response = await fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD');
      const { Data } = await response.json();

      const dataParsed = Data.map(({ CoinInfo }) => ({
        id: CoinInfo.Name,
        name: CoinInfo.FullName
      }));

      setCryptos(dataParsed);
    })();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {error && <Error>Todos los campos son obligatorios</Error>}

      <SelectCurrency />
      <SelectCrypto />

      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};
