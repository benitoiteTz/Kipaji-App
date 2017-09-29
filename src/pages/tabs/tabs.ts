import { Component } from '@angular/core';

import { ImagePage } from '../image/image';
import { ProfilePage } from '../profile/profile';
import { VideoPage } from '../video/video';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VideoPage;
  tab2Root = ImagePage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
