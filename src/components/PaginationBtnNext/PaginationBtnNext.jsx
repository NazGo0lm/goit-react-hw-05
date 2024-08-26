

const PaginationBtnNext = ({ onBtnClick, page }) => {
  return (
    <button
      
      type="button"
      onClick={() => onBtnClick(page + 1)}
    >
      Next Page
    </button>
  );
};

export default PaginationBtnNext;