import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Tab1 from '../pages/Tab1';
import React, { useState, useEffect } from 'react';

import {
  IonApp, 
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/react';

const ApiTab1: React.FC = () => {
  const [response, setResponse] = useState({});
  useEffect(() => {
    

    
  }, []);
  const calculator = (number:any) =>{

    console.log(number)
  }


  return (
    <IonPage>
      <Tab1 response={calculator}></Tab1>
    </IonPage>
  );
};

export default Tab1;
