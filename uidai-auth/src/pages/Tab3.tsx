import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonItem, IonLabel, IonInput,IonButton} from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import { useForm } from "react-hook-form";
import './Tab3.css';
import Tab2 from './Tab2';
const Tab3: React.FC = () => {
  
  const { register, handleSubmit} = useForm({
		mode: "onTouched",
		reValidateMode: "onChange"
	});
  const onSubmit = (data: any) => {
    const aadhar = data.Aadhar;
	  const Staging = data.Staging;
    const Captcha = data.Captcha;
    console.log(aadhar)
    console.log(Staging)
    console.log(Captcha)
  }
  return (
    <IonPage>
      <IonRouterOutlet>
          <Route path="/tab2" component={Tab2} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
      </IonRouterOutlet>
      <IonHeader>
        <IonToolbar>
          <IonTitle><p style={{textAlign:"center"}}>UIDAI</p></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1 style={{textAlign:"center"}}>Enter Details</h1>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <IonItem>
            <IonLabel position="floating">Aadhar Number</IonLabel>
            <IonInput {...register("Aadhar")}/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Staging UID</IonLabel>
            {/* <IonInput type="password" /> */}
            <IonInput {...register("Staging")}/>
          </IonItem>
          <img src="../../offline-ekyc-wrapper-flow-simulation/target/captcha.png" alt="" height="50px" />
          <IonItem>
            <IonLabel position="floating">Enter Captcha</IonLabel>
            {/* <IonInput type="password" /> */}
            <IonInput {...register("Captcha")}/>
          </IonItem>
          <IonButton routerLink="./tab2" className="ion-margin-top" type="submit" expand="full">
            Enter OTP
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
