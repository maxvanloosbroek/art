import { Directive, ElementRef, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

declare var Hammer:any;

@Directive({
    selector: '[zoom-pan]'
})
export class ZoomPanDirective {
    @Input() img: string;
    private element: any;
    public zoom$ = new BehaviorSubject<string>('');
    private zoomSub: Subscription;

    public isZoomed: boolean;

    constructor(el: ElementRef) {
        this.element = el.nativeElement;
        this.setZoomed(false);

        this.hammerIt(this.element);
        // console.log(this.element.naturalWidth);
    }

    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        if(this.zoomSub){
            this.zoomSub.unsubscribe();
        }
    }

    public zoomIn(){
        this.zoom$.next('in');
    }

    public zoomOut(){
        this.zoom$.next('out');
    }
    
    private setZoomed(zoomed:any) {
        this.isZoomed = zoomed;
        this.element.setAttribute('zoomed', this.isZoomed);
    }

    private hammerIt(elm:any) {
        let hammertime = new Hammer(elm, {});
        hammertime.get('pinch').set({
            enable: true
        });
        let posX = 0,
            posY = 0,
            scale = 1,
            last_scale = 1,
            last_posX = 0,
            last_posY = 0,
            max_pos_x = 0,
            max_pos_y = 0,
            transform = '',
            el = elm;

        this.zoomSub = this.zoom$.subscribe(event => {
            if(event === 'in'){
                if(last_scale === 2){
                    transform =
                    'translate3d(0, 0, 0) ' +
                    'scale3d(2, 2, 1) ';
                    scale = 3.8;
                    last_scale = scale;
                    el.style.webkitTransform = transform;
                    transform = '';
                } else if ( last_scale < 2) {
                    transform =
                    'translate3d(0, 0, 0) ' +
                    'scale3d(2, 2, 1) ';
                    scale = 2;
                    last_scale = 2;
                    el.style.webkitTransform = transform;
                    transform = '';
                }
            } else if (event === 'out'){
                try {
                    if (window.getComputedStyle(el, null).getPropertyValue('-webkit-transform').toString() !== 'matrix(1, 0, 0, 1, 0, 0)') {
                        transform =
                            'translate3d(0, 0, 0) ' +
                            'scale3d(1, 1, 1) ';
                        scale = 1;
                        last_scale = 1;
                    }
                } catch (err) { }
                el.style.webkitTransform = transform;
                transform = '';
            }

            if (scale !== 1) {
                transform =
                    'translate3d(' + posX + 'px,' + posY + 'px, 0) ' +
                    'scale3d(' + scale + ', ' + scale + ', 1)';
            }

            if (transform) {
                el.style.webkitTransform = transform;
            }

            if (scale <= 1) {
                this.setZoomed(false);
            } else {
                this.setZoomed(true);
            }
        })

        hammertime.on('doubletap pan pinch panend pinchend', (ev:any) => {
            if (ev.type === 'doubletap') {
                transform =
                    'translate3d(0, 0, 0) ' +
                    'scale3d(2, 2, 1) ';
                scale = 2;
                last_scale = 2;
                try {
                    if (window.getComputedStyle(el, null).getPropertyValue('-webkit-transform').toString() !== 'matrix(1, 0, 0, 1, 0, 0)') {
                        transform =
                            'translate3d(0, 0, 0) ' +
                            'scale3d(1, 1, 1) ';
                        scale = 1;
                        last_scale = 1;
                    }
                } catch (err) { }
                el.style.webkitTransform = transform;
                transform = '';
            }

            // pan
            if (scale !== 1) {
                posX = last_posX + ev.deltaX;
                posY = last_posY + ev.deltaY;
                max_pos_x = Math.ceil((scale - 1) * el.clientWidth / 2);
                max_pos_y = Math.ceil((scale - 1) * el.clientHeight / 2);
                if (posX > max_pos_x) {
                    posX = max_pos_x;
                }
                if (posX < -max_pos_x) {
                    posX = -max_pos_x;
                }
                if (posY > max_pos_y) {
                    posY = max_pos_y;
                }
                if (posY < -max_pos_y) {
                    posY = -max_pos_y;
                }
            }

            // pinch
            // if (ev.type === 'pinch') {
            //     scale = Math.max(.999, Math.min(last_scale * (ev.scale), 4));
            // }
            // if (ev.type === 'pinchend') { last_scale = scale; }

            // panend
            if (ev.type === 'panend') {
                last_posX = posX < max_pos_x ? posX : max_pos_x;
                last_posY = posY < max_pos_y ? posY : max_pos_y;
            }

            if (scale !== 1) {
                transform =
                    'translate3d(' + posX + 'px,' + posY + 'px, 0) ' +
                    'scale3d(' + scale + ', ' + scale + ', 1)';
            }

            if (transform) {
                el.style.webkitTransform = transform;
            }

            if (scale <= 1) {
                this.setZoomed(false);
            } else {
                this.setZoomed(true);
            }
        });
    }
}