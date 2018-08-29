import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:5000/users')
      .subscribe((resp) => this.users = resp.value);
  }

  addUser() {
    const name = window.prompt(`What is the user's name?`);
    this.http.post('http://localhost:5000/users', {name})
      .subscribe(() => {
        this.ngOnInit(); // in practice, chain observables with `flatMap` instead of nested `subscribe`
      });
  }
}
