import { useContext } from "react";
import { TextContext } from "../context/textProvider";

export default function TextList() {
  const { texts } = useContext(TextContext);
  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
