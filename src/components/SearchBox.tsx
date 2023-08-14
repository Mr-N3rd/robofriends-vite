import { SearchBoxProps } from "../types/types";

const SearchBox = ({ searchChange }: SearchBoxProps) => {
  return (
    <>
      <input
        className='px-2 py-1 my-2 rounded border border-gray-400 bg-gray-200 text-slate-600
        focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent '
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </>
  );
}

export default SearchBox;