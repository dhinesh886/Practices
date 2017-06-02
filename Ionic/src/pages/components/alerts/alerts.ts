import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'alerts.html'
})

export class AlertComponent {
    constructor(private _alertController: AlertController) {
    }

    showBasicAlert() {
        let basicAlert = this._alertController.create(
            {
                title: "Basic Alert!",
                message: "This is a basic alert!",
                buttons: ["OK"]
            }
        );
        basicAlert.present();
    }
    showPromptAlert() {
        let promptAlert = this._alertController.create(
            {
                title: "Prompt for Input!",
                message: "Enter the below informaton.",
                inputs: [{
                    label: "Name",
                    name: "name",
                    placeholder: "Name"
                }],
                buttons: [
                    {
                        text: "Save",
                        handler: data => {
                            console.log(data);
                        }
                    },
                    {
                        text: "Cancel",
                        handler: data => {
                            console.log(data);
                        }
                    }]
            }
        );
        promptAlert.present();
    }
}