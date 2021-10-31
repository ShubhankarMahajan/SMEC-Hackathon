import React, { useState } from 'react';
import { IonImg, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab2: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large"><p style={{textAlign:"center"}}>Flight Booking</p></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1 style={{textAlign:"center"}}>Ticket Booked!</h1>
        <h2 style={{paddingLeft:"30px"}}>Please save the QR Code given down below to authenticate yourself at the Airport</h2>
        <IonImg src="./assets/icon/QR_Code.png" className="QR_Code"/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
