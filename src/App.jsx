import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import TextProvider from "./context/textProvider";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextProvider>
        <TextInput />
        <TextList />
      </TextProvider>
    </div>
  );
}

export default App;
