import React, { useState } from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from 'bpk-component-calendar';
import format from 'date-fns/format';
import './App.scss';

const formatDateFull = date => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = date => format(date, 'MMMM yyyy');
const daysOfWeek = [
  { name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend: true },
  { name: 'Monday', nameAbbr: 'Mon', index: 1, isWeekend: false },
  { name: 'Tuesday', nameAbbr: 'Tues', index: 2, isWeekend: false },
  { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
  { name: 'Thursday', nameAbbr: 'Thur', index: 4, isWeekend: false },
  { name: 'Friday', nameAbbr: 'Fri', index: 5, isWeekend: false },
  { name: 'Saturday', nameAbbr: 'Sat', index: 6, isWeekend: true },
];

const App = () => {
  const [selectionConfiguration, setSelectionConfiguration] = useState({
    type: CALENDAR_SELECTION_TYPE.single,
    date: null,
  });

  const handleDateSelect = date => {
    setSelectionConfiguration({
      type: CALENDAR_SELECTION_TYPE.single,
      date: date,
    });
  };

  return (
    <div className="App">
      <header className="App__header">
        <div className="App__header-inner">
          <BpkText tagName="h1" textStyle="xxl" className="App__heading">
            Flight Schedule
          </BpkText>
        </div>
      </header>
      <main className="App__main">
        <div className="App__calendar-container">
          <BpkCalendar
            id='calendar'
            onDateSelect={handleDateSelect}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            daysOfWeek={daysOfWeek}
            weekStartsOn={0}
            changeMonthLabel="Change month"
            nextMonthLabel="Next month"
            previousMonthLabel="Previous month"
            selectionConfiguration={selectionConfiguration}
          />
          {selectionConfiguration.date && (
            <BpkText tagName="p" textStyle="base" className="App__selected-date">
              Selected Date: {formatDateFull(selectionConfiguration.date)}
            </BpkText>
          )}
        </div>
        <BpkButton onClick={() => alert('It works!')} className="App__button">
          Continue
        </BpkButton>
      </main>
    </div>
  );
};

export default App;
