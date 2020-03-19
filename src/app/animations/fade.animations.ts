import {trigger, animate, transition, style, query} from '@angular/animations';

export const fadeAnimation =

  trigger('animRoutes', [

    transition('* => *', [
      query(':enter, :leave', style({position: 'absolute', top: '0', left: '0', width: '100%', height: '100vh'})
        , {optional: true}),

      query(':enter',
        [
          style({opacity: 0})
        ],
        {optional: true}
      ),

      query(':leave',
        [
          style({opacity: 1}),
          animate('0.3s', style({opacity: 0}))
        ],
        {optional: true}
      ),

      query(':enter',
        [
          style({opacity: 0}),
          animate('0.3s', style({opacity: 1}))
        ],
        {optional: true}
      )

    ]),
    transition('home => *', [
      query(':enter, :leave', style({position: 'fixed', top: '0', width: '100vw', height: '100vh', left: '10px'})
        , {optional: true}),

      query(':enter',
        [
          style({opacity: 0})
        ],
        {optional: true}
      ),

      query(':leave',
        [
          style({opacity: 1}),
          animate('0.3s', style({opacity: 0}))
        ],
        {optional: true}
      ),

      query(':enter',
        [
          style({opacity: 0}),
          animate('0.3s', style({opacity: 1}))
        ],
        {optional: true}
      )

    ]),
    transition('* => home', [
      query(':enter, :leave', style({position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh'})
        , {optional: true}),

      query(':enter',
        [
          style({opacity: 0})
        ],
        {optional: true}
      ),

      query(':leave',
        [
          style({opacity: 1}),
          animate('0.3s', style({opacity: 0}))
        ],
        {optional: true}
      ),

      query(':enter',
        [
          style({opacity: 0}),
          animate('0.3s', style({opacity: 1}))
        ],
        {optional: true}
      )

    ]),


  ]);
