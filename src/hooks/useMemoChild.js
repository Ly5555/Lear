import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button } from "antd";
function UseMemoChild({ listLength }) {
  const renderRef = useRef(true);
  const a = useMemo(() => ({ abc: listLength?.length || 0 }), []);
  useEffect(() => {
    if (renderRef.current) {
      renderRef.current = false;
      return;
    }
    doSome();
  }, [a]);
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const doSome = () => {};
  const handelClick = () => {
    setNum(num + 1);
  };
  const handelClick1 = useCallback(() => {
    setNum1(num1 + 1);
  }, [num]);
  const handelClick2 = useMemo(() => {
    console.log('我执行了没有');
    setNum2(num2 + 1);
  }, []);
  return (
    <div>
      <>输入的长度为:{listLength?.length}</>
      <div>
        当前值为:{num}
        <Button onClick={handelClick}>正常点击</Button>
      </div>
      <div>
        当前值为:{num1}
        <Button onClick={handelClick1}>useCallback</Button>
      </div>
      <div>
        当前值为:{num2}
        <Button onClick={handelClick2}>useMemo</Button>
      </div>
    </div>
  );
}

export default UseMemoChild;
