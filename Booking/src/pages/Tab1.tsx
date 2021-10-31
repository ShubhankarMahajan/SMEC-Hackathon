import React, {useRef} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { airplane } from 'ionicons/icons';
import { IonDatetime, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonItem, IonLabel, IonInput,IonButton} from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import { useForm } from "react-hook-form";
import './Tab1.css'
const Tab1: React.FC = () => {
  const { register, handleSubmit} = useForm({
		mode: "onTouched",
		reValidateMode: "onChange"
	});
  const fileInput = useRef(null);
  const onSubmit = (data: any) => {
    const Name = data.Name;
    const Start = data.Start;
	  const End = data.End;
	  const Address = data.Address;
    console.log(Name)
    console.log(Start)
    console.log(End)
    console.log(Address)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonIcon name={airplane}/>
          <IonTitle size="large"><p style={{textAlign:"center"}}>Flight Booking</p></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1 style={{textAlign:"center"}}>Enter Details</h1>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput {...register("Name")}/>
          </IonItem>
          <IonItem>
            <IonLabel>Enter Start Date</IonLabel>
            <IonDatetime></IonDatetime>
            <IonInput {...register("Start")}/>
          </IonItem>
          <IonItem>
            <IonLabel>Enter End Date</IonLabel>
            <IonDatetime></IonDatetime>
            <IonInput {...register("End")}/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Address</IonLabel>
            <IonInput {...register("Address")}/>
          </IonItem>
          {/* <IonButton className="spac"> Upload</IonButton> */}
          <input
            ref={fileInput}
            hidden
            type="file"
            accept="image/*"
            // onChange={onSelectFile}
            onClick={() => {
              console.log('onClick');
            }}
          />
          <IonButton
            className="spac"
            color="primary"
            onClick={() => {
              // @ts-ignore
              fileInput?.current?.click();
              // setBackgroundOption(BackgroundOptionType.Gradient);
            }}>
            Upload
          </IonButton>
          <IonButton routerLink="./tab2" className="spac-1" type="submit" expand="full">
          Book!
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
