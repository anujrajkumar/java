import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TestingXperts';
  //displayedColumns: string[] = [ 'position', 'name', 'email', 'address', 'mobile', 'designation' ];
  displayedColumns: string[] = ['position', 'name', 'email', 'address', 'mobile'];
  restItems: any;
  restItemsUrl = 'http://3.15.240.130:32222/users';
  dataSource : any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          this.restItems = this.restItems._embedded.users;
          this.dataSource = this.restItems;
          console.log(this.restItems);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }
}
