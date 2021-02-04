import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch } from 'react-redux';
import { allArrivalData, allDepartureData } from '../../../state/airlineSlice';

export default function CustomDropdown(props) {
  const dispatch = useDispatch();
  const _onSelect = (val) => {
    arrivalApi(val);
  };
  const arrivalApi = (arrivalTime) => {
    const valurs = { minutes: arrivalTime.value, airport: props.code };
    if (props.place === 1) {
      dispatch(allArrivalData(valurs));
    } else {
      dispatch(allDepartureData(valurs));
    }
  };
  const options = [5, 10, 20, 30];

  return (
    <Dropdown
      className="myDropName"
      options={options}
      onChange={_onSelect}
      value={options[0]}
      placeholder={props.placeholder}
    />
  );
}
