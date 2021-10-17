import React, { useState, useEffect, useRef, useCallback, useMemo, Fragment } from 'react';

function CrudListItem( props ) {
  //{item, callbackDel, callbackUp, callbackDown, callbackSave } =  props ;
  const {item, callbackDel, callbackUp, callbackDown, callbackSave} = props;

  // 편집 모드를 나타내는 상태값
  const [isEditMode, setIsEditMode] = useState(false); // 상태값이 기본타입인 경우

  // ref 만들기. 예시) const refInput = useRef();
  const inputName = useRef();
  const inputPower = useRef();

  // 이벤트 핸들러 작성.
  const handlerDel = (event)=>{
      // 부모 메서드 호출
      props.callbackDel(item);
  };
  const handlerUp = (event)=>{
      // 이벤트 핸들러는 화살표 함
      // 부모 메서드 호출
      props.callbackUp(item);
  };
  const handlerDown = (event)=>{
      // 부모 메서드 호출
      props.callbackDown(item);
  };
  const handlerEdit = (event)=>{
      // isEditMode 값을 바꾸다.
      setIsEditMode( !isEditMode );
  };
  const handlerSave = (event)=>{
      // isEditMode 값을 바꾸다.
      setIsEditMode( !isEditMode );

      // 바뀐값을 객체로 만들기
      debugger
      const newItem = {
          id: item.id,
          name: inputName.current.value,
          power: Number( inputPower.current.value),
      }
      // 부모 메서드 호출.
      props.callbackSave(newItem);
  };

  // JSX로 화면 만들기
  const strong = item.power >= 300 ? "strong" : null;

  const formView = (
      <tr className={strong}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.power}</td>
          <td>
              <button onClick={handlerDel}>Del</button>
              <button onClick={handlerUp}>Power Up</button>
              <button onClick={handlerDown}>Power Down</button>
              <button onClick={handlerEdit}>Edit</button>
          </td>
      </tr>
  );

  const formEdit = (
      <tr className={strong}>
          <td>{item.id}</td>
          <td>
              <input
                  type="text"
                  name="name"
                  placeholder="이름을 입력하세요"
                  ref={inputName}
                  defaultValue={item.name}
              />
          </td>
          <td>
              <input
                  type="number"
                  name="power"
                  placeholder="숫자를 입력하세요"
                  ref={inputPower}
                  defaultValue={item.power}
              />
          </td>
          <td>
              <button onClick={handlerDel}>Del</button>
              <button onClick={handlerUp}>Power Up</button>
              <button onClick={handlerDown}>Power Down</button>
              <button onClick={handlerSave}>Save</button>
          </td>
      </tr>
  )

  if( isEditMode ){
      return formEdit;
  }
  else {
      return formView;
  }
}

export default CrudListItem;