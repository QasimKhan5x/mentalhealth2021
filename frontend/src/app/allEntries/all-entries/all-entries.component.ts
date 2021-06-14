import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/services/entry.service';

@Component({
  selector: 'app-all-entries',
  templateUrl: './all-entries.component.html',
  styleUrls: ['./all-entries.component.css']
})
export class AllEntriesComponent implements OnInit {

  authenticated = sessionStorage.getItem('userid');
 
  activity = <Array<string>>new Array();

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    console.log(this.authenticated);
    if(!this.authenticated) {
      this.authenticated = "RANDOM";
    }
  

    this.entryService.getEntries(this.authenticated).subscribe(
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
