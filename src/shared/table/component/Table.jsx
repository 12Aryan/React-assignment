import "../css/Table.css";

const Table = () => {
  return (
    <table>
      <tbody>
        <tr>
          <th className="me-5">Account</th>
          <th>This Month</th>
          <th>YTD</th>
        </tr>
        <tr>
          <td className="me-5">Sales</td>
          <td>1,194.54</td>
          <td>11,418.29</td>
        </tr>
        <tr>
          <td className="me-5">Advertising</td>
          <td>1,194.54</td>
          <td>11,418.29</td>
        </tr>
        <tr>
          <td className="me-5">Inventory</td>
          <td>1,194.54</td>
          <td>11,418.29</td>
        </tr>

        <tr>
          <td className="me-5">Entertainment</td>
          <td>1,194.54</td>
          <td>11,418.29</td>
        </tr>
        <tr>
          <td className="me-5">Product</td>
          <td>1,194.54</td>
          <td>11,418.29</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
