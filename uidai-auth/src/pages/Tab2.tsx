import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
import { IonButton, IonItem, IonLabel, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import { useForm } from "react-hook-form";
import './Tab2.css';
const Tab2: React.FC = () => {
  const { register, handleSubmit} = useForm({
		mode: "onTouched",
		reValidateMode: "onChange"
	});
  const onSubmit = (data: any) => {
    const OTP = data.OTP;
    console.log(OTP)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><p style={{textAlign:"center"}}>UIDAI</p></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <form onSubmit={ handleSubmit(onSubmit) }>
          <IonItem className="otp-enter">
            <IonLabel position="floating">Enter OTP</IonLabel>
            <IonInput {...register("OTP")}/>
          </IonItem>
          <IonButton routerLink="./tab1" className="ion-margin-top" type="submit" expand="full">
            Enter OTP
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
