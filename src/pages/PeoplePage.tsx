import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';

const Page: React.FC = () => {

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Onze mensen</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Onze mensen</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className='content'>

        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Page;
