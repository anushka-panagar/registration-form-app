import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UserProfile } from '../components/user-profile-details/user-profile-details.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser$ = new BehaviorSubject<{ name: string } | null | undefined>(
    undefined
  );
  constructor(private apiService: ApiService) {}

  setCurrentUser() {
    if (localStorage.getItem('token')) {
      // get user and set the current user
      this.currentUser$.next(null);
    } else {
      this.currentUser$.next({ name: 'King Julien' });
    }
  }

  public async registerUserForm() {
    const path = 'https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d';
    const type = 'GET';
    return await this.apiService.fetchApi(path, type);
  }

  public async getUserProfileResponse(): Promise<UserProfile> {
    const path = 'https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2';
    const type = 'GET';
    return await this.apiService.fetchApi(path, type);
  }
}
