import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.less';
import Pages from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
};
const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);

export default root.render(<App />);
