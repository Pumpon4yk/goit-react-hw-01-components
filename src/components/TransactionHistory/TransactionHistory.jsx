import {
    TransactionHistory,
    Thead,
    TrHed,
    ThHed,
    Tbody,
    TrBody,
    TdBody,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionTable = ({ transactions }) => {
    return (
        <TransactionHistory>
            <Thead>
                <TrHed>
                    <ThHed>Type</ThHed>
                    <ThHed>Amount</ThHed>
                    <ThHed>Currency</ThHed>
                </TrHed>
            </Thead>

            <Tbody>
                {transactions.map(({ id, type, amount, currency }, ind) => (
                    <TrBody key={id} id={ind}>
                        <TdBody>{type}</TdBody>
                        <TdBody>{amount}</TdBody>
                        <TdBody>{currency}</TdBody>
                    </TrBody>
                ))}
            </Tbody>
        </TransactionHistory>
    );
};

TransactionTable.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};
