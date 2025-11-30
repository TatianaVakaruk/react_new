import React, { useState, useEffect } from 'react';
import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};
const Clock = ({ location, offset }) => {
  const [data] = useState(() => getTimeWithOffset(offset));
  useEffect(() => {
    const interval = setInterval(() => {
      getTimeWithOffset(offset);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{moment(data).format('h:mm:ss A')}</div>
    </div>
  );
};
/*class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: getTimeWithOffset(this.props.offset),
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: getTimeWithOffset(this.props.offset),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">
          {moment(this.state.date).format('h:mm:ss A')}
        </div>
      </div>
    );
  }
}*/
export default Clock;
