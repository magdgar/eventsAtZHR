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
        On-site events organised by AWS in Switzerland
      </h1>
    </Container>
    <Toasts />
    <div className="p-1">
      <Button
        variant="primary"
        className="mr-1"
        onClick={() => filterByType("ImmersionDays")}
      >
        Immersion Days
      </Button>
      <Button
        variant="secondary"
        className="mr-1"
        onClick={() => filterByType("Industry")}
      >
        Industries
      </Button>
      <Button
        variant="success"
        className="mr-1"
        onClick={() => filterByType("ISV")}
      >
        Independent Software Vendors
      </Button>
      <Button
        variant="warning"
        className="mr-1"
        onClick={() => filterByType("Innovation")}
      >
        Innovation in Practice
      </Button>
      <Button
        variant="danger"
        className="mr-1"
        onClick={() => filterByCity("Geneva")}
      >
        Geneva
      </Button>
      <Button
        variant="danger"
        className="mr-1"
        onClick={() => filterByCity("Zurich")}
      >
        Zurich
      </Button>
      <Button
        variant="light"
        className="mr-1"
        onClick={() => clearFilters()}
      >
        ALL
      </Button>
      <h2>Upcoming events </h2>
      <List sampleData={data} type={filter} location={city} />
    </div>
  </Container>
);
};

export default App;
