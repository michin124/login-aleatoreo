import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React, { useState, useEffect } from 'react';

import {
  IonApp, 
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/react';

const Tab1 = (response:any) => {
  const [data, setData] = useState({});
  useEffect(() => {
    response(data)
  });



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Prueba</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ingresa un numero</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonInput label="Ingresa un numero" onIonChange={({ detail }) => setData(detail.value!)}></IonInput>
        </IonItem>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
