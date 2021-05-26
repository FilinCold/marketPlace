import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Card from "./Card/Card";

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Main = (props) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <main>
      <div className="container__sidebar-card">
        <div className="container__sidebar">
          <div className="sidebar__choice">
            <h2>status</h2>
            <div className='line'></div>
            <ul>
              <li><input type="checkbox" className="checkbox"/>
                <div>On Auction</div>
              </li>
              <li><input type="checkbox" className="checkbox"/>
                <div>Buy Now</div>
              </li>
              <li><input type="checkbox" className="checkbox"/>
                <div>Make Offer</div>
              </li>
            </ul>
          </div>
          <div className="sidebar__choice">
            <h2>type</h2>
            <div className='line'></div>
            <ul>
              <li><input type="checkbox" className="checkbox"/>
                <div>Images</div>
              </li>
              <li><input type="checkbox" className="checkbox"/>
                <div>GIF</div>
              </li>
              <li><input type="checkbox" className="checkbox"/>
                <div>Video</div>
              </li>
              <li><input type="checkbox" className="checkbox"/>
                <div>Audio</div>
              </li>
              <li><input type="checkbox" className="checkbox"/>
                <div>3D</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="container__card">
          <div className="container__results-search">
            <div className="results">
              <span>1,230,098 Results</span>
            </div>
            <div className="sort">

              <FormControl className={classes.formControl}>
                {/*<InputLabel id="demo-controlled-open-select-label">Age</InputLabel>*/}
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Recently Listed</MenuItem>
                  <MenuItem value={20}>Ending Soon</MenuItem>
                  <MenuItem value={30}>Lowest Price</MenuItem>
                  <MenuItem value={40}>Highest Price</MenuItem>
                  <MenuItem value={40}>Oldest</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <Card/>
        </div>

      </div>
    </main>
  );

};

export default Main;
