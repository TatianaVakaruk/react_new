import React, { Component } from 'react';
import './clock.scss';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
      offset: this.props.offset,
      time: '',
    };
  }

  getTimeWithOffsetFormatted() {
    let currentTime = new Date();

    // Создаем новый объект Date и корректируем по сдвигу
    let adjustedTime = new Date(currentTime);
    adjustedTime.setHours(currentTime.getHours() + this.props.offset);

    // Получаем часы, минуты, секунды
    let hours = adjustedTime.getHours();
    let minutes = adjustedTime.getMinutes();
    let seconds = adjustedTime.getSeconds();

    // Определяем AM или PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Приводим часы к 12-часовому формату
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 превращается в 12

    // Форматируем с добавлением ведущих нулей
    let strHours = hours.toString();
    let strMinutes = minutes.toString().padStart(2, '0');
    let strSeconds = seconds.toString().padStart(2, '0');

    // Собираем финальную строку
    return setInterval(() => {
      if (strSeconds === 60) {
        strSeconds = 0;
        strMinutes += 1;
      }
      if (strMinutes === 60) {
        strMinutes = 0;
        strHours += 1;
      }

      this.setState({
        time: `${strHours}:${strMinutes}:${strSeconds + 1} ${ampm}`,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">
          {this.getTimeWithOffsetFormatted().toLocaleString()}
        </div>
      </div>
    );
  }
}

export default Clock;
