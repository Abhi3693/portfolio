import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './component/App';
import './stylesheet/style.scss';

let root = createRoot(document.getElementById('root'));
root.render(<App />);
