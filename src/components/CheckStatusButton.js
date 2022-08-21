import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CheckStatusButton = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className="checkStatus">
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check status
      </button>
      <p>{categories}</p>
    </div>
  );
};

export default CheckStatusButton;
