import { BehaviorSubject, Observable } from 'rxjs';
import { Injector } from '../../../lib/@core/index';
import { CountService } from './count.service';
import { DelayService } from './delay.service';

@Injector({
    target: ApplicationSerrvice,
    services: [CountService, DelayService]
})
export class ApplicationSerrvice {
    private currentTime: number = 0;
    private time: BehaviorSubject<number> = new BehaviorSubject(this.currentTime);
    private multiplier: number;
    private delayTime: number;
    private interval: number;
    constructor (
        private countService: CountService,
        private delayService: DelayService
    ) {
        console.log(arguments);
        this.countService.currentCount.subscribe(m => this.multiplier = m);
        this.delayService.delayTime.subscribe(d => {
            this.delayTime = d;
            this.clearInterval();
            this.startTimer();
        });
    }

    get workTime(): Observable<number> {
        return this.time.asObservable();
    }

    public startTimer(): void {
        this.interval = setInterval(() => { 
            this.currentTime = this.currentTime + (1 * this.multiplier)
            this.time.next(this.currentTime);
        }, this.delayTime);
    }

    public clearInterval() {
        clearInterval(this.interval);
    }
}
