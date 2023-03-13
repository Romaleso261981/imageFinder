import { useState } from 'react';
import { Radio, Input, SearchForm, RadioWrapp } from './SearchBar.styled';

export const SearchBar = ({
  enteredSearchValue,
  setEnteredSearchValue,
  sortMode,
  setSortMode,
}) => {
  return (
    <SearchForm>
      <form>
        <Input
          type="text"
          value={enteredSearchValue}
          onChange={e => setEnteredSearchValue(e.target.value)}
        />
        {/* <Button type="submit">Search</Button> */}
      </form>
      <RadioWrapp>
        <Radio>
          <input
            type="radio"
            name="sort"
            value="asc"
            checked={sortMode === 'asc'}
            onChange={e => setSortMode(e.target.value)}
          />{' '}
          A-Z
        </Radio>
        <Radio>
          <input
            type="radio"
            name="sort"
            value="desc"
            checked={sortMode === 'desc'}
            onChange={e => setSortMode(e.target.value)}
          />{' '}
          Z-A
        </Radio>
      </RadioWrapp>
    </SearchForm>
  );
};

export default SearchBar;
