import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonRouterOutlet, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import 'C:/Users/HP/Desktop/UIDAI/uidai-auth/src/pages/Tab1.css';
// import { IonReactRouter } from '@ionic/react-router';
import Tab3 from './Tab3';
// import Details from './Details';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
          {/* <Route path="/tab1" component={Tab1} exact={true} /> */}
          <Route path="/tab3" component={Tab3} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
      <IonHeader>
        <IonToolbar>
          <IonTitle><p style={{textAlign:"center"}}>UIDAI</p></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <div className="Cards">
        <div>
          <IonCard href="/tab3">
            <IonCardHeader>
              <IonCardTitle><p style={{textAlign:"center",paddingTop:"15px"}}>QR Code</p></IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Create a QR Code for easy Access of Aadhaar Verification.
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle><p style={{textAlign:"center",paddingTop:"15px"}}>Aadhaar Reprint</p></IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Request for a reprint of your Aadhar Card sent to your Address.
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle><p style={{textAlign:"center",paddingTop:"15px"}}>Check Aadhaar Status</p></IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Check update status of your Aadhaar card.
            </IonCardContent>
          </IonCard>
        </div>
        <div>
        <IonCard>
            <IonCardHeader>
              <IonCardTitle><p style={{textAlign:"center",paddingTop:"15px"}}>VID Generator</p></IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Generate a 16 digit number mapped to your Aadhaar Number.
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle><p style={{textAlign:"center",paddingTop:"15px"}}>Verify Phone</p></IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Verify the Number that is linked to your Aadhar Card.
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle><p style={{textAlign:"center",paddingTop:"15px"}}>Verify Aadhar</p></IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Verify your Aadhaar using Security number sent to your number.
            </IonCardContent>
          </IonCard>
        </div>
      </div>
        </IonContent>
    </IonPage>
  );
};

export default Tab1;
