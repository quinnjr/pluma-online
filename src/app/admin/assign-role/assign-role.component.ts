import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'prisma';
import { Apollo, gql } from 'apollo-angular';
import { Role } from 'prisma';

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
  selector: 'pluma-online-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.scss']
})
export class AssignRoleComponent implements OnInit {
  @Input() user!: User;
  @Input() usersToDisplayFromParent!: User[];
  @Output() usersToDisplayFromParentChange = new EventEmitter();

  roles = Role;

  constructor(private readonly $apollo: Apollo) {}

  ngOnInit(): void {}

  changeRole(typeOfUser: Role) {
    if (
      confirm(
        'Are you sure you want to give ' +
          typeOfUser +
          ' to user ' +
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
              role: {
                set: typeOfUser
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
