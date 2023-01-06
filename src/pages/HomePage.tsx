import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Entry } from "../components/Entry";
import styled from "styled-components";

export const HomePage: React.FC = () => {

  const {data} = useQuery(['pokemon'], pokeQuery)

  if (!data) {
    return <p>No data</p>
  }

  return (
    <>
      <h1>Homepage</h1>
      <Grid>

      {data.map(pokeData => {
        return <Entry key={pokeData.id} data={pokeData}/>
      })}
      </Grid>

    </>
  );
};

const pokeQuery = async () => {
  const all_results = []
  for (let i = 1; i <10;i++) {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
    if (result.ok) {
      const json = await result.json();
      all_results.push(json)
    }
  }
  return all_results
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`