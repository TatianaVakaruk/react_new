import React from 'react';
import { Link } from 'react-router-dom';
function PageNotFound() {
  return (
    <div class="page__content">
      <h1>😢</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}
export default PageNotFound;
