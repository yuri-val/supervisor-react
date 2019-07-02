import React from 'react';
import { Admin, Resource } from "react-admin";
import jsonapiClient from "ra-jsonapi-client";

import './App.css';

import countryCRUD from "./country"
import budgetItemsCRUD from "./budget_item"

const settings = {
  headers: {
    Accept: 'application/vnd.api+json'
  },
  total: 'totalPages'
};

const dataProvider = jsonapiClient('http://localhost:8080', settings);

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        <Resource name="countries" { ...countryCRUD } />
        <Resource name="finance/vessel/budget_items" { ...budgetItemsCRUD } options={ { label: 'Budget Items' } } />
      </Admin>
    </div>
  );
}

export default App;
