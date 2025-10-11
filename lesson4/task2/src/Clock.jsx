import React, { Component } from 'react';
import './clock.scss';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
      offset: this.props.offset,
      strHours: '',
      strMinutes: '',
      strSeconds: '',
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
    this.props.strHours = hours.toString();
    this.props.strMinutes = minutes.toString().padStart(2, '0');
    this.props.strSeconds = seconds.toString().padStart(2, '0');

    // Собираем финальную строку
    return setInterval(() => {
      if (this.props.strSeconds === 60) {
        this.props.strSeconds = 0;
        this.props.strMinutes += 1;
      }
      if (this.props.strMinutes === 60) {
        this.props.strMinutes = 0;
        this.props.strHours += 1;
      }

      this.setState({
        time: `${this.props.strHours}:${
          this.props.strMinutes
        }:${(this.props.strSeconds += 1)} ${ampm}`,
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
