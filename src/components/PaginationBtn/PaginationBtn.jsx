

const PaginationBtn = ({ onBtnClick, page }) => {
  return (
    <button
      
      type="button"
      onClick={() => onBtnClick(page - 1)}
    >
      Pervious Page
    </button>
  );
};

export default PaginationBtn;