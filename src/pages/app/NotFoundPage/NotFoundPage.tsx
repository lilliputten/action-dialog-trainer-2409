import { Link, useLocation } from 'react-router-dom';

export function NotFoundPage() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <h1>404 - Страница не найдена</h1>
      <h3>
        Страница{' '}
        <b>
          <u>{pathname}</u>
        </b>{' '}
        не найдена.
      </h3>
      <p>Возможно, это ошибка разработчика.</p>
      <p>
        Хотите <Link to="/">начать с начала</Link>?
      </p>
    </>
  );
}
