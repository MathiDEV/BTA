import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from "axios"
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import './inputnumber';
import React from 'react';

type Automation = {
    id: number;
    color: string;
    name: string;
};

const getAutomations = () => {
    let data = {
        code: "190688"
    }
    return axios({
        url: 'https://api-bta.tk/actions/automations_m',
        method: 'post',
        data: data,
    }).then(response => {
        return response.data;
    })
};


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
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
        getAutomations().then(data => setItems(data));
    }, []);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">My automations</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Tab 2 page" />
                <LoadBoxes automations={items} />
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
