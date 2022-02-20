import { IonInput, IonItem, IonIcon, IonButton, IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { chevronForwardOutline, wifiOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import axios from 'axios';

const CheckConnect = (givenCode: String) => {
    var isAuthed
    return axios({
        url: 'https://api-bta.tk/auth/connect',
        method: 'post',
        data: {
            code: givenCode,
        },
    }).then(response => {
        if (response.data) {
            isAuthed = true;
        } else {
            isAuthed = false;
        }
        return isAuthed
    })
}

const CheckCode = () => {
    var code = (document.getElementById("userCode") as HTMLInputElement).value;
    CheckConnect(code).then(data => {
        localStorage.setItem("code", code)
        document.location.href = "tab2"
    })
}

const CheckLocal = () => {
    var code = String(localStorage.getItem("code"));
    CheckConnect(code).then(data => {
        if (data) {
            document.location.href = "tab2"
        }
    })
}

const Tab1: React.FC = () => {

    const [number, setNumber] = useState<number>();
    CheckLocal()
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle slot='end'>Connexion</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent id="mainContent" fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Welcome to BTA</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonIcon id="wifiIcon" icon={wifiOutline}></IonIcon>
                <p>To pair your devise with your computer, please enter the code shown on the BTA desktop application.</p>
                <IonItem>
                    <IonInput id="userCode" type="number" value={number} placeholder="Enter Number"></IonInput>
                </IonItem>
                <IonButton id="continueButton" onClick={CheckCode}>
                    <IonIcon slot="end" icon={chevronForwardOutline} />
                    Continue
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
