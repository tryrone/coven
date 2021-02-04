import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../Login';
import Dashboard from '../Dashboard';

export default function Main() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  // const valurs = { minutes: 5, airport: 'EDDF' };
  // dispatch(allDepartureData(valurs));
  // }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
