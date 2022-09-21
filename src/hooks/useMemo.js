import Reac, { useState } from "react";
import UseMemoChild from "./useMemoChild";
import { Input } from "antd";
function UseMemoParent() {
  const [input, setInput] = useState("");
  const handeleInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <Input onChange={handeleInputChange} />
      <UseMemoChild listLength={input} />
    </div>
  );
}

export default UseMemoParent;
