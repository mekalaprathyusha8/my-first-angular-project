import { afterNextRender,  Component, Input } from '@angular/core';
import { card } from '../card/card';

@Component(
  {
    selector: 'app-result1',
    standalone: true,
    imports: [card],
    templateUrl: './result1.html'
  })
export class Result1 {
  @Input() data = ''
  constructor()
  {
    console.log('constructor called');// The constructor is called when the component is instantiated. It is used to initialize the component and inject dependencies.
    afterNextRender(()=>
      {
        console.log('Dom Projected'); // afterNextRender is called after the component's view has been fully initialized and rendered. It is used to perform any additional initialization tasks that require access to the rendered view.
      })
    // afterRender(()=>{
    //   console.log('Dom Updated'); // afterRender is called after every change detection cycle when the component's view has been updated. It is used to perform any additional tasks that require access to the updated view.
    // })

  }
  ngOnChanges()
  {
    console.log('ngOnChanges called'); // ngOnChanges is called when the input properties of the component change. It is called before ngOnInit and whenever one or more data-bound input properties change.
  }
  ngOnInit()
  {
    console.log('ngOnInit called'); // ngOnInit is called once, after the first ngOnChanges. It is used to initialize the component after Angular first displays the data-bound properties and sets the component's input properties.
  }
  ngDoCheck()
  {
    console.log('ngDoCheck called'); // ngDoCheck is called during change detection. It is used to perform custom change detection logic.
  }
  ngAfterContentInit()
  {
    console.log('ngAfterContentInit called'); // ngAfterContentInit is called after Angular projects external content into the component's view. It is used to perform any additional initialization tasks that require access to the projected content.
  }
  ngAfterContentChecked()
  {
    console.log('ngAfterContentChecked called'); // ngAfterContentChecked is called after every check of the component's content. It is used to perform any additional tasks that require access to the projected content after it has been checked.
  }
  ngAfterViewInit()
  {
    console.log('ngAfterViewInit called'); // ngAfterViewInit is called after Angular initializes the component's views and child views. It is used to perform any additional initialization tasks that require access to the component's view or child views.
  }
  ngAfterViewChecked()
  {
    console.log('ngAfterViewChecked called'); // ngAfterViewChecked is called after every check of the component's views and child views. It is used to perform any additional tasks that require access to the component's view or child views after they have been checked.
  }
  ngOnDestroy()
  {
    console.log('ngOnDestroy called'); // ngOnDestroy is called just before Angular destroys the component. It is used to perform any cleanup tasks, such as unsubscribing from observables or detaching event handlers.
  }
}
