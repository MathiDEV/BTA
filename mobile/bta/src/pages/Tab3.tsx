import { IonList, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

type Automation = {
  id: number;
  color: string;
  name: string;
};

export const LoadBoxes: React.FC<{automations: Automation[]}> = (props) => (
  <IonContent fullscreen>
   <IonList>
     {props.automations.map((auto, i) => (
       <div auto-id={auto.id} style={{"backgroundColor": auto.color}}>
         <p>{auto.name}</p>
       </div>
     ))}
   </IonList>
 </IonContent>
)

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PAGE DE TEST</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
        <LoadBoxes automations={[{id: 1, name:"Bonjour", color: "#ff0000"}, {id: 2, name: "Rickroll", color: "#ffff00"}]} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
