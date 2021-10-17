import React, { useState, useEffect, useRef, useCallback, useMemo, Fragment } from 'react';
import CrudListItem from "../../components/crud/CrudListItem";

function CrudList(props) {

  // JSX로 화면 만들기
  const {items, callbackDel, callbackUp, callbackDown} = props;
  const arrs = items.map( (item)=>{
      return (
          <CrudListItem
              {...props}
              item={item}
              key={item.id}
              callbackDel={callbackDel}
              callbackUp={callbackUp}
              callbackDown={callbackDown}
          >
          </CrudListItem>
      )
  });

  return (
      <table>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>POWER</th>
                  <th>CRUD</th>
              </tr>
          </thead>
          <tbody>
              {arrs}
          </tbody>
      </table>
  )
}

export default CrudList;