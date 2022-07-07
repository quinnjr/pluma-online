import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '@prisma/client';
import { Apollo, gql } from 'apollo-angular';

const DELETE_USER = gql`
  mutation deleteUser($where: UserWhereUniqueInput) {
    deleteUser(where: $where) {
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
  selector: 'pluma-online-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})
export class DeleteAccountComponent implements OnInit {
  @Input() user!: User;
  @Input() usersToDisplayFromParent!: User[];
  @Output() usersToDisplayFromParentChange = new EventEmitter();
  @Input() skipFromParent!: number;
  @Output() skipFromParentChange = new EventEmitter();

  constructor(private readonly $apollo: Apollo) {}

  ngOnInit(): void {}

  deleteAccount() {
    if (
      confirm(
        'Are you sure you want to delete account with username ' +
          this.user.displayName
      )
    ) {
      this.$apollo
        .mutate({
          mutation: DELETE_USER,
          variables: {
            where: {
              displayName: this.user.displayName
            }
          }
        })
        .subscribe(
          (result: any) => {
            console.log(result.data.deleteUser);
            this.updateDisplayedUsers(result.data.deleteUser);
            console.log(this.usersToDisplayFromParent);
          },
          (error: any) => {
            alert(error);
          }
        );
    }
  }

  updateDisplayedUsers(deleteUser: User) {
    for (let index = 0; index < this.usersToDisplayFromParent.length; index++) {
      if (
        this.usersToDisplayFromParent[index].displayName ==
        deleteUser.displayName
      ) {
        this.usersToDisplayFromParent.splice(index, 1);
        this.usersToDisplayFromParentChange.emit(this.usersToDisplayFromParent);
        this.skipFromParentChange.emit(
          this.skipFromParent - 1 >= 0 ? this.skipFromParent - 1 : 0
        );
        break;
      }
    }
  }
}
