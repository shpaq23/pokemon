import {Component, OnInit, Renderer2} from '@angular/core';
import {MatRadioChange} from '@angular/material';
import {select, Store} from '@ngrx/store';


export enum Theme {
    DarkTheme = 'dark',
    BrightTheme = 'bright'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme: string;
  title = 'pokemon';

  constructor(private renderer: Renderer2,
              private store: Store<any>) {}

  ngOnInit(): void {
    this.store.pipe(select('theme'))
      .subscribe(theme => {
        this.theme = theme;
        console.log(this.theme);
      });
    this.renderer.addClass(document.body, this.theme);
  }
  changeTheme(event: MatRadioChange) {
    this.store.dispatch({
      type: 'THEME',
      payload: event.value === Theme.DarkTheme ? Theme.DarkTheme : Theme.BrightTheme
    });
  }
}
