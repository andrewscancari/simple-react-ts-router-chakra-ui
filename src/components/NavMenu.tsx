import { Link } from 'react-router-dom';

export function NavMenu() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
