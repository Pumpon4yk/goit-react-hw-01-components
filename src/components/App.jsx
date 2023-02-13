import { Card } from './Profile/Profile';
import { Section } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionTable } from './TransactionHistory/TransactionHistory';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
    return (
        <>
            <Card userData={user} />
            <Section statis={data} title="Upload stats" />
            <FriendList friends={friends} />
            <TransactionTable transactions={transactions} />
        </>
    );
};
