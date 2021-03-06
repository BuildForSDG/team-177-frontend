import App from './App';
import ReactDom from 'react-dom'
import React from 'react';


const startApp = async () => {
  const header = document.querySelector('[data-app-name]');
  if (!header) return;

  const programName = await App();
  header.textContent = programName;
};

document.addEventListener('DOMContentLoaded', startApp);


ReactDom.render(
  <App/>,
  document.getElementById('root')
)