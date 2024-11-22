import { useDispatch } from "react-redux";
import { addText } from "../redux/slices/textSlice";
import useInput from "../hooks/useInput";

function TextInput() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue, handleChange] = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addText(inputValue));
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TextInput;
