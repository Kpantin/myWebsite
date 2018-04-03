import { trigger, transition, state, animate, style } from '@angular/animations';

export let fade = trigger('fade', [ //Can now be used by multiple components

    state('void', style({ opacity:0 })), //Can be used to keep code clean.

    transition(':enter, :leave', [ // 'void <=> *' This is known as a bi-direction state-change expression ':enter, :leave' is the alias and does the same thing 
      style({ backgroundColor: 'yellow' }),
      animate(1200)
    ])    
  ]);

  export let fadeGreen = trigger('fadeGreen', [ //Can now be used by multiple components

    state('void', style({ opacity:0 })), //Can be used to keep code clean.

    transition(':enter, :leave', [ // 'void <=> *' This is known as a bi-direction state-change expression ':enter, :leave' is the alias and does the same thing 
      style({ backgroundColor: 'green' }),
      animate(1200)
    ])    
  ]);

  export let fadeBlue = trigger('fadeBlue', [ //Can now be used by multiple components

    state('void', style({ opacity:0 })), //Can be used to keep code clean.

    transition(':enter, :leave', [ // 'void <=> *' This is known as a bi-direction state-change expression ':enter, :leave' is the alias and does the same thing 
      style({ backgroundColor: 'blue' }),
      animate(1200)
    ])    
  ]);

  export let fadeOrange = trigger('fadeOrange', [ //Can now be used by multiple components

    state('void', style({ opacity:0 })), //Can be used to keep code clean.

    transition(':enter, :leave', [ // 'void <=> *' This is known as a bi-direction state-change expression ':enter, :leave' is the alias and does the same thing 
      style({ backgroundColor: 'orange' }),
      animate(1200)
    ])    
  ]);