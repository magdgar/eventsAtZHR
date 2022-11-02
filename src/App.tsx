import React from 'react';

import { useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Toasts from "./utils/Toasts";
import data from "./utils/data";

import List from "./utils/list/List";

const App: React.FC = () => {
  const [filter, setFilter] = useState("");
  const [city, setCity] = useState("");

  function filterByType(page: string) {
    console.log(page);
    setFilter(page);
  }

  function filterByCity(city: string) {
    console.log(city);
    setCity(city);
  }

  function clearFilters() {
    setFilter("");
    setCity("");
  }

  return (
    <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">
        Events organised in Swiss AWS offices
      </h1>
    </Container>
    <Toasts />
    <div className="p-1">
      <Button
        variant="blue"
        className="me-1 btn-lg"
        onClick={() => filterByType("ImmersionDays")}
      >
        Immersion Days
      </Button>
      <Button
        variant="secondary"
        className="me-1 btn-lg"
        onClick={() => filterByType("Industry")}
      >
        Industries
      </Button>
      <Button
        variant="success"
        className="me-1 btn-lg"
        onClick={() => filterByType("ISV")}
      >
        Independent Software Vendors
      </Button>
      <Button
        variant="warning"
        className="me-1 btn-lg"
        onClick={() => filterByType("Innovation")}
      >
        Innovation in Practice
      </Button>
      <Button
        variant="danger"
        className="me-1 btn-lg"
        onClick={() => filterByCity("Geneva")}
      >
        Geneva
      </Button>
      <Button
        variant="danger"
        className="me-1 btn-lg"
        onClick={() => filterByCity("Zurich")}
      >
        Zurich
      </Button>
      <Button
        variant="light"
        className="me-1 btn-lg"
        onClick={() => clearFilters()}
      >
        ALL
      </Button>
      <h2 className="p-1 mb-4 btn-lg"> </h2>
      <List sampleData={data} type={filter} location={city} />
    </div>
  </Container>
);
};

export default App;
