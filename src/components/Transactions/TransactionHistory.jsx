import PropTypes, { object } from 'prop-types';
import css from './TransactionHistory.module.css';
import clsx from 'clsx';

function capitalizeFirstLetter(string) {
  return string.replace(string[0], string[0].toUpperCase());
}

export function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.tableHeader}>Type</th>
          <th className={clsx(css.tableHeader, css.tableHeaderCenter)}>
            Amount
          </th>
          <th className={css.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ item: id, type, amount, currency }) => {
          return (
            <tr className={css.tableRow} key={id}>
              <td className={css.tableData}>{capitalizeFirstLetter(type)}</td>
              <td className={clsx(css.tableData, css.tableDataCenter)}>
                {amount}
              </td>
              <td className={css.tableData}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(object),
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
