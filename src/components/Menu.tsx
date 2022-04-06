import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,

} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {  people, home, business, newspaper, calendar} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Home',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Onze mensen',
    url: '/page/Mensen',
    iosIcon: people,
    mdIcon: people
  },
  {
    title: 'Events',
    url: '/page/Events',
    iosIcon: calendar,
    mdIcon: calendar
  },
  {
    title: 'Nieuws',
    url: '/page/Nieuws',
    iosIcon: newspaper,
    mdIcon: newspaper
  },
  {
    title: 'Werkplek',
    url: '/page/Werkplek',
    iosIcon: business,
    mdIcon: business
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Trivento</IonListHeader>
          
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
