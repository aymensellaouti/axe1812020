import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnInit {
  constructor(private Toastr: ToastrService) {}

  ngOnInit(): void {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.error();
        }
        observer.next(i--);
      }, 1000);
    });

    observable.subscribe((val) => {
      console.log(val);
    });
    const subscription = observable.subscribe(
      (data) => {
        this.Toastr.info('' + data);
      },

      (erreur) => this.Toastr.error('il y a une erreur quelque part'),
      () => {
        this.Toastr.info('Flux terminée au revoir');
        subscription.unsubscribe();
      }
    );
  }
}
