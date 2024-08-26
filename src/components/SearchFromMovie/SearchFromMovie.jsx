import toast, { Toaster } from 'react-hot-toast';
import { IoMdSearch } from 'react-icons/io';

const SearchFormMovie = ({ onSearch }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const searchForm = event.currentTarget.elements.searchInput.value.trim();

    if (searchForm === '') {
      toast.error('Please add a query.');
      return;
    }
    onSearch(searchForm, 1);
    event.currentTarget.reset();
  };

  return (
    <>
      <form  onSubmit={handleSubmit}>
        <input
          
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button  type="submit">
          <IoMdSearch size="20" />
        </button>
        <Toaster position="bottom-right" reverseOrder={false} />
      </form>
    </>
  );
};

export default SearchFormMovie;