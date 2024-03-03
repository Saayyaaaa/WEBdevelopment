import {Component, ViewEncapsulation} from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-profile, [app-profile]',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    encapsulation: ViewEncapsulation.ShadowDom,
  }
)
export default class ProfileComponent{

}
