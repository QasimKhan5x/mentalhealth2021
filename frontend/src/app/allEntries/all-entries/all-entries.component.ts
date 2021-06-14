import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntryService } from 'src/app/services/entry.service';

@Component({
  selector: 'app-all-entries',
  templateUrl: './all-entries.component.html',
  styleUrls: ['./all-entries.component.css']
})
export class AllEntriesComponent implements OnInit {


  userid: string | any = sessionStorage.getItem('userid');

  activity: any;

  constructor(private entryService: EntryService, private route: Router) { }

  ngOnInit(): void {
    console.log(this.userid);
    if (!this.userid) {
      this.route.navigate(['./login']);
    }

    this.entryService.getEntries(this.userid).subscribe(
      (myEnteries) => {
        myEnteries.forEach(function (value) {
          console.log(value);
        })

      },
      (error) => {
        console.log('cant get user data from server', error);
      }
    );
  }

}
