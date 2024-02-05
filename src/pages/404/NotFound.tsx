import { Link } from 'react-router-dom';
import { NotFoundWrapper } from './styled';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <h2>😅 Not Found</h2>
      <p>Wow, looks like there's nothing here!</p>
      <p>
        <Link to="/">Click here to get back to our application :D</Link>
      </p>
    </NotFoundWrapper>
  );
};

export default NotFound;
