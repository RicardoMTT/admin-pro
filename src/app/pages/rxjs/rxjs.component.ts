import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsComponent implements OnInit, OnDestroy {
  intervalSubs: Subscription;
  constructor() {
    // this.retornaObservable()
    //   .pipe(retry(1))
    //   .subscribe(
    //     (val) => console.log(val),
    //     (err) => console.warn('erorr', err),
    //     () => console.log('FIN')
    //   );

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  ngOnInit(): void {}

  retornaIntervalo(): Observable<number> {
    return interval(500).pipe(
      map((valor) => valor + 1),
      filter((val) => val % 2 == 0),
      take(10)
    );
  }

  retornaObservable() {
    let i = 0;

    const obs$ = new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        console.log('xd');
        i++;
        observer.next(i);
        if (i == 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i == 2) {
          i = 0;
          observer.error('ERROR');
        }
      }, 1000);
    });

    return obs$;
  }
}
