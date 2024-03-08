import { Component } from '@angular/core';
import { LocalNotifications,ScheduleOptions, CancelOptions,Channel} from '@capacitor/local-notifications'; 
import { IonDatetime } from '@ionic/angular';
import { group } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor() {}

  async ngOnInit()
  {
    await LocalNotifications.requestPermissions()
  }

  async scheduleNotification()
  {
      let options:ScheduleOptions={
        notifications:[
          {
            id:111,
            title:"Reminder Notification",
            body:"Explore new variety and offers",
            largeBody:"Get 30% discounts on new products",
            summaryText:"Exciting offers !!!",
            largeIcon: 'res://drawable/icon_msg48',
            smallIcon: 'res://drawable/icon_msg48',
            channelId:"channel2",
            schedule:{every:'second'}
          },
          {
            id:222,
            title:"Upgrade Notification",
            body:"Upgrade user subscription",
            largeBody:"Get discounts on upgrading your subscription",
            summaryText:"Required action !!!",
            largeIcon: 'res://drawable/icon_bel48',
            smallIcon: 'res://drawable/icon_noti64',
            channelId:"channel1",
            schedule:{every:'second'}
          }
        ]        
      }

      try{
        await LocalNotifications.schedule(options)
      }
      catch(ex)
      {
        alert(JSON.stringify(ex));
      }
  }
  async cancelNotification()
  {
      let op:CancelOptions={
        notifications:[{id:222}]
      }
      await LocalNotifications.cancel(op)
  }
  async removeAllDeliveredNotifications()
  {
      await LocalNotifications.removeAllDeliveredNotifications();
  }

  async getDeliveredNotifications()
  {
      LocalNotifications.getDeliveredNotifications().then((res)=>{
        alert(JSON.stringify(res))
      })
  }
  async createChannel()
  {
      let channel1:Channel={
        id:"channel1",
        description:"first channel",
        name:"Channel 1",
        visibility:1
      }
      let channel2:Channel={
        id:"channel2",
        description:"first channel",
        name:"Channel 2",
        visibility:1
      }

      try{
        await LocalNotifications.createChannel(channel1); 
        await LocalNotifications.createChannel(channel2);        
      }
      catch(exp) { alert(exp)}  
  }
  async listChannel()
  {     
      await LocalNotifications.listChannels().then((res)=>{
          alert(JSON.stringify(res))
      })
  }


}


