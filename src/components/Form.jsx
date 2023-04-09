import { useState } from "react";
import { IoRefresh, AiOutlineClear } from "react-icons/all";
function Form({ data, setData, searchData, refresh }) {
  console.log("FORM", data);

  // const [show, setShow] = useState(true);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="form"
    >
      <input
        className="form__input"
        type="search"
        name="user-search"
        placeholder="Live search users"
        aria-label="search"
        autoComplete="off"
        onChange={(e) => searchData(e.target.value)}
      />
      <button
        onClick={() => {
          refresh();
        }}
        className="form__button"
      >
        <span className="form__button-inner" style={{ gap: "4px" }}>
          <IoRefresh style={{ fontSize: "20px" }} />
          <span className="refresh">Refresh</span>
        </span>
      </button>
      {data && (
        <button
          onClick={() => {
            setData(null);
          }}
          type="submit"
          id="clear__button"
          className="clear__button form__button"
        >
          <span className="form__button-inner" style={{ gap: "4px" }}>
            <AiOutlineClear style={{ fontSize: "20px" }} />
            <span className="refresh">Clear</span>
          </span>
        </button>
      )}
    </form>
  );
}

export default Form;
