import React from "react";
import Input from "../Input";
import { Section, Subtitle, Title } from "./Search";
import { books } from "./data";
import { useState } from "react";

const Search = () => {
  const [searchBooks, setSearchBooks] = useState([]);

  console.log(searchBooks);

  return (
    <>
      <Section>
        <Title>Já sabe por onde começar?</Title>
        <Subtitle>Encontre o seu livro em nossa estante.</Subtitle>
        <Input
          placeholder="Escreva sua próxima leitura"
          onBlur={(event) => {
            const text = event.target.value;
            const result = books.filter((book) => book.nome.includes(text));
            setSearchBooks(result);
          }}
        />
      {searchBooks.map((book) => (
        <>
          <p>{book.nome}</p>
          <img src={book.src} />
        </>
      ))}
      </Section>
    </>
  );
};

export default Search;
