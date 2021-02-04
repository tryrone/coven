import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from 'react-awesome-modal';
import CustomDropdown from '../CustomDropdown';
import { connect, useDispatch } from 'react-redux';
import {
  clearArrivalData,
  clearDepartureData,
} from '../../../state/airlineSlice';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CustomModal = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Modal
      visible={props.visible}
      effect="fadeInUp"
      onClickAway={() => {
        props.setVisible(false);
        dispatch(clearArrivalData());
        dispatch(clearDepartureData());
      }}
    >
      <div className="Modal-wrapper">
        <h2>{props.title}</h2>
        <div style={{ marginTop: '2rem' }} className="dropWrap">
          <p style={{ marginRight: 10 }}>Arrival time within the last</p>
          <CustomDropdown
            code={props.code}
            placeholder="Arrival time"
            place={1}
          />
          <p style={{ marginLeft: 10 }}>Mins</p>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Call Sign</TableCell>
                  <TableCell align="right">Arrival Airport</TableCell>
                  <TableCell align="right">First Seen</TableCell>
                  <TableCell align="right">Last Seen</TableCell>
                  <TableCell align="right">ICAO Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.arrivalDataLoading && props.arrivalData.length < 1 ? (
                  <h1>Loading...</h1>
                ) : (
                  props.arrivalData.slice(0, 10).map((row) => (
                    <TableRow key={row.icao24}>
                      <TableCell component="th" scope="row">
                        {row.callsign}
                      </TableCell>
                      <TableCell align="right">
                        {row.estArrivalAirport}
                      </TableCell>
                      <TableCell align="right">{row.firstSeen}</TableCell>
                      <TableCell align="right">{row.lastSeen}</TableCell>
                      <TableCell align="right">{row.icao24}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
              {props.arrivalData.length < 1 ? (
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      -
                    </TableCell>
                    <TableCell align="right">-</TableCell>
                    <TableCell align="right">-</TableCell>
                    <TableCell align="right">-</TableCell>
                    <TableCell align="right">-</TableCell>
                  </TableRow>
                </TableBody>
              ) : null}
            </Table>
          </TableContainer>
        </div>

        {/* departure time */}
        <div style={{ marginTop: '2rem' }} className="dropWrap">
          <p style={{ marginRight: 10 }}>Departure time within the last</p>
          <CustomDropdown
            code={props.code}
            placeholder="Departure time"
            place={2}
          />{' '}
          <p style={{ marginLeft: 10 }}>Mins</p>
        </div>
        <div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Call Sign</TableCell>
                  <TableCell align="right">Arrival Airport</TableCell>
                  <TableCell align="right">First Seen</TableCell>
                  <TableCell align="right">Last Seen</TableCell>
                  <TableCell align="right">ICAO Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.departureDataLoading &&
                props.departureData.length < 1 ? (
                  <h1>Loading...</h1>
                ) : (
                  props.departureData.slice(0, 10).map((row) => (
                    <TableRow key={row.icao24}>
                      <TableCell component="th" scope="row">
                        {row.callsign}
                      </TableCell>
                      <TableCell align="right">
                        {row.estArrivalAirport}
                      </TableCell>
                      <TableCell align="right">{row.firstSeen}</TableCell>
                      <TableCell align="right">{row.lastSeen}</TableCell>
                      <TableCell align="right">{row.icao24}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
              {props.departureData.length < 1 ? (
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      -
                    </TableCell>
                    <TableCell align="right">-</TableCell>
                    <TableCell align="right">-</TableCell>
                    <TableCell align="right">-</TableCell>
                    <TableCell align="right">-</TableCell>
                  </TableRow>
                </TableBody>
              ) : null}
            </Table>
          </TableContainer>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  arrivalDataLoading: state.airlineData.arrivalDataLoading,
  arrivalData: state.airlineData.arrivalData,
  arrivalDataError: state.airlineData.arrivalDataError,
  //   departure
  departureData: state.airlineData.departureData,
  departureDataLoading: state.airlineData.departureDataLoading,
  departureDataError: state.airlineData.departureDataError,
});

export default connect(mapStateToProps)(CustomModal);
