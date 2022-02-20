import { IonInput, IonItem, IonIcon, IonButton, IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { chevronForwardOutline } from 'ionicons/icons';
import React, { useState } from 'react';

const Tab1: React.FC = () => {

 const [number, setNumber] = useState<number>();

 return (
   <IonPage>
     <IonHeader>
       <IonToolbar>
         <IonTitle slot='end'>BTA</IonTitle>
       </IonToolbar>
     </IonHeader>
     <IonContent fullscreen>
       <IonHeader collapse="condense">
         <IonToolbar>
           <IonTitle size="large">Tab 1</IonTitle>
         </IonToolbar>
       </IonHeader>
       <IonList>
           <p>Welcome to BTA</p>
           <p>To pair your devise with your computer, please enter the code shown on the BTA desktop application.</p>
       </IonList>
     </IonContent>
     <IonContent>
     <IonItem>
           <IonInput type="number" value={number} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
         </IonItem>
       <IonButton>
         <IonIcon slot="end" icon={chevronForwardOutline} />
           Continue
       </IonButton>
     </IonContent>
   </IonPage>
 );
};

export default Tab1;
