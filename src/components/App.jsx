import {Card} from './Profile/Profile'
import { Section } from './Statistics/Statistics';
import user from '../user.json'
import data from '../data.json'

export const App = () => {
  return (
    <>
<Card userData={user}/>
<Section statis={data}/>
    </>
  );
};
