const Form = ({formSubmit, inputChange, inputValue}) => (
  <div>
    <form onSubmit={formSubmit}>
      query
      <input
        type="text"
        name="query"
        value={inputValue}
        onChange={inputChange}
      />
      <button type="submit">Search</button>
    </form>
  </div>
);

export default Form;
