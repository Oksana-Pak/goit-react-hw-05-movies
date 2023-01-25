import { useLocation } from 'react-router-dom';
import { ContainerInfo, InfoItem } from './MovieDetailsInfo.styled';

const links = [
  {
    to: 'cast',
    title: 'Cast',
  },
  {
    to: 'reviews',
    title: 'Reviews',
  },
];
export const MovieDetailsInfo = () => {
  const location = useLocation();

  return (
    <ContainerInfo>
      <p>Additional information</p>
      <ul>
        {links.map(({ to, title }) => {
          return (
            <li key={title}>
              <InfoItem to={to} state={{ from: location?.state?.from }}>
                {title}
              </InfoItem>
            </li>
          );
        })}
      </ul>
    </ContainerInfo>
  );
};
