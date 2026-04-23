import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



import {
  IonApp, 
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonRow,
  IonButton,
  IonLoading 
} from '@ionic/react';

const Tab1: React.FC  = () => {
  const [menssage, setMenssage] = useState('');
  const [error, setError] = useState(false);
  const [nresultNumber, setResultNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const calculator = (number:any) =>{
    setLoading(true);
    let url=`https://newton.vercel.app/api/v2/factor/${number}%5E2-1`
    
      axios.get(url)
      .then(res => {

        const response = res.data;
        setMenssage(response.operation)
        setResultNumber(response.result)
        setError(false);
      })
      .catch(err => {
        
        setError(true);
      }).finally(() => { 
        setLoading(false);
      });
      

  }

  const [data, setData] = useState({});
 {console.log(error)}

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
          <IonInput label="Ingresa un numero" onIonInput={({ detail }) => setData(detail.value!)}></IonInput>
        </IonItem>
        <IonButton onClick={({ detail }) => calculator(data)} >Calcular</IonButton>
        {loading == false&&
          <IonItem>cargando</IonItem>
    

        }
        
        {loading == false&&
         
          <IonRow>
            {error==false&&
              <IonList>
              <IonItem>
                <IonLabel>
                  El tipo de operacion es {menssage}
                </IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel class="ion-text-nowrap">
                  El resultado es: {nresultNumber}
                </IonLabel>
              </IonItem>
                
              </IonList>
            }
            {error==true&&
             
                
              <IonRow>Error en la operacion{error}</IonRow>
              
            }
          

          </IonRow>
        }
        
        
        <IonRow>

        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
