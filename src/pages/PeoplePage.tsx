import {
  IonAvatar,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Page.css";

const Page: React.FC = () => {
  interface Person {
    name: string;
    email: string;
    phone: string;
    work: string;
  }

  const people: Person[] = [
    {
      name: "Andre Meeuwesen",
      email: "andre.meeuwesen",
      phone: "06-12345678",
      work: "Trivento",
    },
    {
      name: "Henk Jurriens",
      email: "henk.jurriens@gmail.com",
      phone: "06-12345678",
      work: "Trivento",
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Our People</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">People</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="content">
          <IonList>
            {people.map((person, index) => {
              return (
                <IonItem key={index}>
                  <IonLabel>
                    {person.name}
                    <br />
                    {person.email}
                    <br />
                    {person.phone}
                    <br />
                    {person.work}
                    <br />
                  </IonLabel>
                  <IonAvatar>
                    <img
                      src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                      alt="avatar"
                    ></img>
                  </IonAvatar>
                </IonItem>
              );
            })}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
