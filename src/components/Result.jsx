import styled from '@emotion/styled';

const ContainerResult = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: start;
  gap: 20px;

  span {
    margin-left: 10px;
    font-weight: 700;
  }
`;

const Price = styled.p`
  font-size: 25px;
  margin-top: 0;
`;

const Text = styled.p`
  font-size: 18px;
`;

const Image = styled.img`
  width: 120px;
`;

// eslint-disable-next-line react/prop-types
export const Result = ({ PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE }) => {
  return (
    <ContainerResult>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="crypto image" />
      <div>
        <Price>
          El precio es de: <span>{PRICE}</span>
        </Price>
        <Text>
          El precio más alto del día: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          El precio más bajo del día: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          última actualización: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </ContainerResult>
  );
};
