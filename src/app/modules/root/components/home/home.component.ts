import { Component, OnInit, OnDestroy } from '@angular/core';
// My imports
import { DeviceService } from './../../services/device.service';
import { Subscription } from 'rxjs';
import { devicesType } from '../../models/types';

@Component({
  selector: 'fg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  // PROPERTIES
  private _watchers: Array<Subscription>;
  public deviceType: devicesType;
  public slides: Array<string>;
  public content: Array<{
    title: string;
    paragraph: string;
    icon: string;
  }>;

  // CONSTRUCTOR
  constructor(private _device: DeviceService) {
    this._watchers = [];
    this.slides = [
      'assets/img/img1.jpg',
      'assets/img/img2.jpg',
      'assets/img/img3.jpg',
    ]
    this.content = [
      {
        title: 'quick',
        // tslint:disable-next-line:max-line-length
        paragraph: 'Amet corporis excepturi nostrum, aperiam aliquid libero blanditiis molestiae vitae deserunt quam dolorem saepe nemo assumenda aspernatur quos dolores praesentium ut repudiandae cum officia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, neque nemo animi deserunt ullam sed aliquam ut accusantium culpa! Amet explicabo sint asperiores dolore fugit cupiditate iure, possimus sapiente sed? Debitis, quos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus rem quaerat cum a aliquid veritatis alias laborum, suscipit dolore? Maiores deleniti repudiandae sed vel?' ,
        icon: 'directions_run'
      },
      {
        title: 'online',
        // tslint:disable-next-line:max-line-length
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore soluta ad dolorum dignissimos aliquam, fuga ex, nobis a corrupti dolore dolorem iste temporibus. Obcaecati nihil ratione, veritatis dolores aspernatur eum. Mollitia ex doloribus impedit eos ipsum aperiam, incidunt eligendi totam, corrupti fuga commodi porro, sequi repudiandae officiis ea! Rem natus, optio quam nulla vero reiciendis in at recusandae labore nemo illo sed vitae consectetur delectus dicta iusto autem deleniti repellat! Mollitia consequuntur, minima eum labore ad tempore similique odit dolore voluptatem accusantium, nesciunt eius dolorum fugiat beatae, harum a voluptate ratione magni? Sapiente iure quibusdam officiis, vitae unde aspernatur iste saepe assumenda beatae, culpa, nobis ad corporis? Commodi assumenda in, perspiciatis vel harum, ullam tempora perferendis ipsam quia voluptatum atque sit unde debitis.',
        icon: 'router'
      },
      {
        title: 'free',
        // tslint:disable-next-line:max-line-length
        paragraph: 'Dignissimos, quae nostrum autem alias laboriosam repellat expedita voluptatibus dolore! Ab itaque amet laboriosam inventore, molestias dolor, ut veniam corporis fugit distinctio quis necessitatibus repudiandae rerum sequi sapiente soluta, numquam quidem. Atque cum placeat molestiae cumque veniam obcaecati. Deserunt quibusdam quaerat optio sequi voluptatem, sint explicabo veniam asperiores. Adipisci accusamus ut optio! Dolores quisquam aspernatur temporibus soluta quam magnam, perspiciatis voluptate excepturi quod nam modi eveniet voluptatem odio cum, sed numquam iusto? Ea labore nulla voluptas exercitationem, assumenda rerum libero nostrum porro? Non, animi vero? Soluta illum assumenda qui impedit, neque optio veritatis vel rem id consequatur sed sit non asperiores debitis esse fugit harum exercitationem deleniti praesentium explicabo voluptates.',
        icon: 'sentiment_satisfied_alt'
      }
    ];
  }

  // LIFE CYCLE HOOKS
  public ngOnInit(): void {
    this._watchers.push(this._device.type
      .subscribe((deviceType: devicesType) => this.deviceType = deviceType));
  }

  public ngOnDestroy(): void {
    this._watchers.forEach((watcher: Subscription) => watcher.unsubscribe());
  }

}
