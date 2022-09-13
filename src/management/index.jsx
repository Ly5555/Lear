// 脸书状态管理学习
import React from "react";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
const textState = atom({ key: "textState", default: "" });
const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
function RecoilStatus() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}
export default RecoilStatus;
// RecoilRoot 在父组件某个位置包裹着子组件
// useRecoilState 那个组件需要父组件抛出来的值那个组件就进行引入
// selector 代表一个派生状态，派生状态是状态的转换。你可以将派生状态视为将状态传递给以某种方式修改给定状态的纯函数的输出
const CharacterCounter = () => {
  return (
    <>
      <TextInput />
      <CharacterCount />
    </>
  );
};
function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
}
