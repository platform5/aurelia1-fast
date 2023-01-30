
import { Scene } from './scene';
import { customElement, inject } from 'aurelia-framework';
import { EventAggregator, Subscription } from 'aurelia-event-aggregator';

@customElement('aurelia-three')
@inject(EventAggregator)
export class Three {

  public canvas: HTMLCanvasElement;
  public scene: Scene;

  constructor(private eventAggregator: EventAggregator) {}

  public attached(): void {
    this.scene = new Scene(this.canvas);
     this.setActivityListener();
  }

  public detached() {
    this.activityListenerSubscription.dispose();
  }

  private activityListenerSubscription: Subscription;
  private setActivityListener(): void {
    this.activityListenerSubscription = this.eventAggregator.subscribe('three:activity', (data: {id: string, label: string, percentage?: number}) => {
      const foundActivity = this.activities.find(a => a.id === data.id);
      if (foundActivity) {
        foundActivity.label = data.label;
        foundActivity.percentage = data.percentage;
      }
      if (foundActivity && data.percentage >= 100) {
        const index = this.activities.indexOf(foundActivity);
        this.activities.splice(index, 1);
      }
      if (!foundActivity && (data.percentage === undefined || data.percentage >= 0 && data.percentage < 100)) {
        const newActivity = {
          id: data.id,
          label: data.label,
          percentage: data.percentage
        };
        this.activities.push(newActivity)
      }
    });
  }

  private activities: {id: string, label: string, percentage?: number}[] = [];
  
  public canvasOnmousemove(event) {  //canvas.onmousemove = function(event)
    this.scene.normalized.set(event.clientX / this.scene.canvas.width * 2 - 1, -(event.clientY / this.scene.canvas.height) * 2 + 1);
    this.scene.raycaster.setFromCamera(this.scene.normalized, this.scene.camera);
};
  

}
