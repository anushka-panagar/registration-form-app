import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Title } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';

export interface UserProfile {
  name: string;
  email: string;
  bio: string;
  img: string;
}

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule],
})
export class UserProfileDetailsComponent {
  public userProfileData!: UserProfile;

  constructor(private userService: UserService, private titleService: Title) {}

  async ngOnInit() {
    this.loadUserProfile();
    this.titleService.setTitle('User Profile');
  }

  private async loadUserProfile() {
    this.userProfileData = await this.userService.getUserProfileResponse();
  }
}
