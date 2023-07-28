import React from "react";
import Input from "../Input";
import { Section, Subtitle, Title } from "./Search";

const Search = () => {
  return (
    <Section>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre o seu livro em nossa estante.</Subtitle>
      <Input placeholder="Escreva sua próxima leitura" />
    </Section>
  );
};

export default Search;
