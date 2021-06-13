import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { CalendarEvent } from 'calendar-utils';
import { startOfDay } from 'date-fns';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  viewDate: Date = new Date();
  today = new Date();
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  MonthNum = this.today.getMonth();
  Month = this.months[this.MonthNum];
  constructor() { }

  ngOnInit(): void {
  }

  setView(view: CalendarView) {
    this.view = view;
  }
  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'First event',
    },
    {
      start: startOfDay(new Date()),
      title: 'Second event',
    }
  ]

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(events);
    //this.openAppointmentList(date)
  }
}
