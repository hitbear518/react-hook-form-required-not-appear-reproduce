import * as React from 'react';
import { render } from 'react-dom';

import './styles.css';
import SampleForm from './SampleForm';

function App() {
  return (
    <div className="App">
      <SampleForm />
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
