import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from "axios"
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import './inputnumber';
import { InputNumbers } from './inputnumber';

type Automation = {
    id: number;
    color: string;
    name: string;
};
var user_automations: Automation[]
axios
    .get('https://api-bta.tk/actions/automations_m',
        {
            params: {
                code: "190688"
            }
        })
    .then(response => response.data)
    .then((data) => {
        user_automations = data
    })

export const LoadBoxes: React.FC<{ automations: Automation[] }> = (props) => (
    <IonContent fullscreen>
        <div id="my-automations">
            {props.automations.map((auto, i) => (
                <div className="automation-card" auto-id={auto.id} style={{ "backgroundColor": auto.color }}>
                    <p>{auto.name}</p>
                </div>
            ))}
        </div>
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
                        <IonTitle size="large">My automations</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Tab 2 page" />
                <LoadBoxes automations={user_automations} />
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
