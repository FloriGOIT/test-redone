import PropTypes from 'prop-types';
import style from './transactions.module.scss';

function Transactions({ data }) {
  return (
    <section className={style.monthlyTransactions}>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, type, amount, currency, activity }) => {
            return (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                <td>{activity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default Transactions;

Transactions.propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
                id:PropTypes.string,
                 type:PropTypes.string,
                 amount:PropTypes.string,
                 currency:PropTypes.string,
                 activity:PropTypes.string
        }))}
