import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '@prisma/client';
import { Apollo, gql } from 'apollo-angular';

const FORCE_PASSWORD_RESET = gql`
  mutation forcePasswordReset(
    $where: UserWhereUniqueInput
    $data: UserUpdateInput
  ) {
    forcePasswordReset(where: $where, data: $data) {
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
  selector: 'pluma-online-force-password-reset',
  templateUrl: './force-password-reset.component.html',
  styleUrls: ['./force-password-reset.component.scss']
})
export class ForcePasswordResetComponent implements OnInit {
  @Input() user!: User;
  @Input() usersToDisplayFromParent!: User[];
  @Output() usersToDisplayFromParentChange = new EventEmitter();
  constructor(private readonly $apollo: Apollo) {}

  ngOnInit(): void {}

  forcePasswordReset() {
    if (
      confirm(
        'Are you sure you want to force password reset to user ' +
          this.user.displayName
      )
    ) {
      this.$apollo
        .mutate({
          mutation: FORCE_PASSWORD_RESET,
          variables: {
            where: {
              displayName: this.user.displayName
            },
            data: {
              enabled: {
                set: false
              }
            }
          }
        })
        .subscribe((result: any) => {
          console.log(this.usersToDisplayFromParent);
          this.updateDisplayedUsers(result.data.forcePasswordReset);
          console.log(this.usersToDisplayFromParent);
        });
    }
  }

  updateDisplayedUsers(forcePasswordResetUser: User) {
    for (let index = 0; index < this.usersToDisplayFromParent.length; index++) {
      if (
        this.usersToDisplayFromParent[index].displayName ==
        forcePasswordResetUser.displayName
      ) {
        this.usersToDisplayFromParent[index] = forcePasswordResetUser;
        this.usersToDisplayFromParentChange.emit(this.usersToDisplayFromParent);
        break;
      }
    }
  }
}
