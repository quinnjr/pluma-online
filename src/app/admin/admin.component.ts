import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { User } from '@prisma/client';

const USERS = gql`
  query users(
    $userstoDiplay: Int!
    $skip: Int! = 0
    $where: UserWhereInput = {}
  ) {
    users(take: $userstoDiplay, skip: $skip, where: $where) {
      displayName
      email
      website
      institution
      enabled
      role
    }
  }
`;

@Component({
  selector: 'pluma-online-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  readonly numberOfDisplayedUsers: number = 20;

  skip: number = 0;
  usersToDisplay: User[] = [];
  newUsers: User[] = [];
  loading: boolean = false;
  canItPrevious: boolean = this.skip > this.numberOfDisplayedUsers;
  searchString: string = '';

  constructor(private readonly apollo: Apollo) {}

  ngOnInit(): void {
    this.fetchUsers(true);
  }

  searchBarActivate(searchString: string) {
    this.skip = 0;
    this.searchString = searchString;
    this.fetchUsers(true);
  }

  fetchUsers(next: boolean) {
    if (!next) {
      this.skip =
        this.skip - this.numberOfDisplayedUsers >= 0
          ? this.skip - this.numberOfDisplayedUsers * 2
          : 0;
    }

    this.apollo
      .watchQuery({
        query: USERS,
        variables: {
          where: {
            OR: [
              { email: { contains: this.searchString } },
              { displayName: { contains: this.searchString } }
            ]
          },
          userstoDiplay: this.numberOfDisplayedUsers,
          skip: this.skip
        }
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
        console.log(result.data.users);
        this.loading = result.loading;
        this.newUsers = [...result.data.users];
        console.log('1users: ' + this.newUsers);

        if (this.newUsers.length > 0) {
          console.log('increase the skip');
          this.skip += this.numberOfDisplayedUsers;
          this.usersToDisplay = this.newUsers;
          console.log(this.usersToDisplay.length);
        }
        this.canItPrevious = this.skip > this.numberOfDisplayedUsers;
      });
  }
}
