import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
} from "react";
import { Button, Input, message } from "antd";
// 父组件获取子组件的值或者函数
const Father = () => {
  const SonValueRef = useRef();
  const handelClick = () => {
    SonValueRef.current.handelClick()
  }
  const [childValue, setChildValue] =useState("")
  return (
    <>
      子元素的value：{childValue}
      <Button onClick={handelClick}>点击执行子元素加加事件</Button>
      <Son
        ref={SonValueRef}
        onChange={(values) => {
            setChildValue(values)
        }}
      />
    </>
  );
};
const Son = forwardRef(({ onChange }, ref) => {
  const [value, setValue] = useState();
  const [number, setNumber] = useState(0);
  const handelChangeValue = (e) => {
    setValue(e.target.value);
    onChange(e.target.value)
  };
  useImperativeHandle(ref, () => ({
    handelClick: handelClick,
  }));
  const handelClick = () => {
    setNumber( number + 1)
  }
  return (
    <>
      当前number值为:{number}
      <Button onClick={handelClick}>点击加加</Button>
      <Input onChange={handelChangeValue} />
    </>
  );
});
export default Father;
