import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';

export const InputNumbers: React.FC = () => {

  const [number, setNumber] = useState<number>();

  return (
        <IonList>
          <IonItem>
            <IonInput type="number" value={number} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>
          <IonLabel>
              {number}
          </IonLabel>
        </IonList>
  );
};
