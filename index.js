import React, { Component, useRef } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import AsyncPaginate from 'react-select-async-paginate';
import Select from 'react-select';


const App = () => {
  const selectRef = useRef(null);
  return  <div>
        <AsyncPaginate 
        selectRef={selectRef}
        loadOptions={() => console.log('loadOptions')}
        / >
      </div>
}

render(<App />, document.getElementById('root'));
