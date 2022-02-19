import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import './inputnumber';
import { InputNumbers } from './inputnumber';

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

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PAGE FONCTIONEL</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <LoadBoxes automations={[{id: 1, name:"Bonjour", color: "#ff0000"}, {id: 2, name: "Rickroll", color: "#ffff00"}]} />
      </IonContent>
      <IonContent>
        <InputNumbers></InputNumbers>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
