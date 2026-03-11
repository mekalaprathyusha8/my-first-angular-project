// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'timepipe'
// })
// export class TimePipe implements PipeTransform {
//     transform(time: any, ...args: any[]): any {
        
//     let d1 = new Date(time);
//     let d2 = new Date();
//     let Diff =d2.getTime() - d1.getTime();
//     let yearDiff = Math.ceil(Diff  / (1000*60*60*24*30*12));
//     let monthDiff = Math.ceil(Diff / (1000*60*60*24*30));
//     let dayDiff = Math.ceil(Diff   / (1000*60*60*24));
//     let hourDiff = Math.ceil(Diff  / (1000*60*60));
//     let minDiff = Math.ceil(Diff   / (1000*60 ));
//     // return dayDiff;
//     //return minDiff;
//     return hourDiff;
//     // return monthDiff;
//     //return yearDiff;
//   }
// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timepipe'
})
export class TimePipe implements PipeTransform {

  transform(value: any): string {

    if (!value) return '';

    const past = new Date(value).getTime();
    const now = new Date().getTime();

    const diffSeconds = Math.floor((now - past) / 1000);

    const minute = 60;
    const hour = 3600;
    const day = 86400;
    const month = 2592000;
    const year = 31536000;

    if (diffSeconds < minute) {
      return "Just now";
    }

    if (diffSeconds < hour) {
      const mins = Math.floor(diffSeconds / minute);
      return mins + (mins === 1 ? " minute ago" : " minutes ago");
    }

    if (diffSeconds < day) {
      const hrs = Math.floor(diffSeconds / hour);
      return hrs + (hrs === 1 ? " hour ago" : " hours ago");
    }

    if (diffSeconds < month) {
      const days = Math.floor(diffSeconds / day);
      return days + (days === 1 ? " day ago" : " days ago");
    }

    if (diffSeconds < year) {
      const months = Math.floor(diffSeconds / month);
      return months + (months === 1 ? " month ago" : " months ago");
    }

    const years = Math.floor(diffSeconds / year);
    return years + (years === 1 ? " year ago" : " years ago");
  }
}