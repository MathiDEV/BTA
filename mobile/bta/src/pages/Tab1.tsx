import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonList, IonThumbnail } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { wifi, checkmarkDoneOutline, image } from 'ionicons/icons';

type Item = {
 src: string;
 text: string;
};
const items: Item[] = [{ src: './images/icon.png', text: 'a picture of a cat' }];

export const ImgExample: React.FC = () => (
 <IonContent>
   <IonList>
     {items.map((image, i) => (
       <IonItem key={i}>
         <IonThumbnail slot="">
           <IonImg src={image.src} />
         </IonThumbnail>
         <IonLabel>{image.text}</IonLabel>
       </IonItem>
     ))}
   </IonList>
 </IonContent>
);


const Tab1: React.FC = () => {
 return (
   <IonPage>
     <IonHeader>
       <IonToolbar>
         <IonTitle>Home page</IonTitle>
       </IonToolbar>
     </IonHeader>
     <IonContent fullscreen>
       <IonHeader collapse="condense">
         <IonToolbar>
           <IonTitle size="large">Tab 1</IonTitle>
         </IonToolbar>
       </IonHeader>
       <ExploreContainer name="Action page" />

       <IonCard>
         <IonItem href="/tab3" className="ion-activated">
           <IonIcon icon={checkmarkDoneOutline} slot="start" />
           <ImgExample />
           <IonLabel>Go to page 3</IonLabel>
         </IonItem>
       </IonCard>

     </IonContent>
   <ImgExample />
   </IonPage>
 );
};

export default Tab1;
