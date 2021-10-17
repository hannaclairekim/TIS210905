import React, {useState, useEffect, useRef, useCallback, useMemo, Fragment} from 'react';

function CrudInput(props) {
  // ref 만들기. 예시) const refInput = useRef();
  const inputName = useRef();
  const inputPower = useRef();

  // 이벤트 핸들러 작성.
  const handlerAdd = (event)=>{
      // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다
      console.log(event.target);

      // inputName.current.value 유효성 검사.
      if( inputName.current.value === '' ){
          alert("이름에 값을 입력하세요");
          event.stopPropagation();
          event.preventDefault();
          inputName.current.focus();
          return false;
      }
      // inputPower.current.value 유효성 검사.
      if( inputPower.current.value === '' ){
          alert("파워에 값을 입력하세요");
          event.stopPropagation();
          event.preventDefault();
          inputPower.current.focus();
          return false;
      }
      if( isNaN(Number(inputPower.current.value)) ) {
          alert("파워에 숫자만 입력하세요");
          event.stopPropagation();
          event.preventDefault();
          inputPower.current.focus();
          inputPower.current.value = 0;
          return false;
      }

      // 부모 메서드 호출
      var man = {
          name: inputName.current.value,
          power: Number(inputPower.current.value),
      }
      props.callbackAdd( man );

      // input 태그에 남아있는 입력값 지우기.
      inputName.current.value = null;
      inputPower.current.value = 0;
  };

  // JSX로 화면 만들기
  return (
      <div>
          <div>
              <label htmlFor="">Name : 2 </label>
              <input type="text" name="name" placeholder="이름을 입력하세요" ref={inputName} />
          </div>
          <div>
              <label htmlFor="">Power : 2</label>
              <input type="number" name="power" placeholder="숫자를 입력하세요" ref={inputPower}  />
          </div>
          <button onClick={handlerAdd}>Add</button>
      </div>
  )
}

export default CrudInput;