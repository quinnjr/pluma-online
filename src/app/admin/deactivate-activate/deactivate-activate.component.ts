import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { User } from '../user';

const USER_MUTATION = gql`
  mutation userMutation($where: UserWhereUniqueInput, $data: UserUpdateInput) {
    userMutation(where: $where, data: $data) {
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
  selector: 'pluma-online-deactivate-activate',
  templateUrl: './deactivate-activate.component.html',
  styleUrls: ['./deactivate-activate.component.scss']
})
export class DeactivateActivateComponent implements OnInit {
  @Input() user!: User;
  @Input() usersToDisplayFromParent!: User[];
  @Output() usersToDisplayFromParentChange = new EventEmitter();

  constructor(private readonly $apollo: Apollo) {}

  ngOnInit(): void {}

  deactivateActivateAccount() {
    if (
      confirm(
        'Are you sure you want to ' +
          (this.user.enabled ? 'deactivate' : 'activate') +
          ' account ' +
          this.user.displayName
      )
    ) {
      this.$apollo
        .mutate({
          mutation: USER_MUTATION,
          variables: {
            where: {
              displayName: this.user.displayName
            },
            data: {
              enabled: {
                set: !this.user.enabled
              }
            }
          }
        })
        .subscribe((result: any) => {
          console.log(this.usersToDisplayFromParent);
          this.updateDisplayedUsers(result.data.userMutation);
          console.log(this.usersToDisplayFromParent);
        });
    }
  }

  updateDisplayedUsers(userMutation: User) {
    for (let index = 0; index < this.usersToDisplayFromParent.length; index++) {
      if (
        this.usersToDisplayFromParent[index].displayName ==
        userMutation.displayName
      ) {
        this.usersToDisplayFromParent[index] = userMutation;
        this.usersToDisplayFromParentChange.emit(this.usersToDisplayFromParent);
        break;
      }
    }
  }
}
