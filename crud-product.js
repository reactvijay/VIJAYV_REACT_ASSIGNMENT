const userInfo = [
	{ID: '20', Product: 'Sasquatch Ale', Price: '10.40', Quantity: '130', 'R.O.L.': '10'},
	{ID: '20', Product: 'Geitost', Price: '10.00', Quantity: '125', 'R.O.L.': '10'},
	{ID: '20', Product: 'Mascarpone Fabioli', Price: '9.60', Quantity: '120', 'R.O.L.': '10'},
	{ID: '20', Product: 'Gorgonzola Telino', Price: '9.20', Quantity: '115', 'R.O.L.': '10'},
	{ID: '20', Product: 'Nord-Ost Matjeshering', Price: '8.80', Quantity: '110', 'R.O.L.': '10'},
	{ID: '20', Product: 'Thuringer Rostbratwurst', Price: '8.40', Quantity: '105', 'R.O.L.': '10'},
	{ID: '20', Product: 'Rossle Sauerkraut', Price: '8', Quantity: '100', 'R.O.L.': '10'},
	{ID: '20', Product: 'Schoggi Schokolade', Price: '7.60', Quantity: '95', 'R.O.L.': '10'},
	{ID: '20', Product: 'Gumbar Gummibarchen', Price: '7.20', Quantity: '90', 'R.O.L.': '10'},
	{ID: '20', Product: 'NuNuCa Nu8-Nougat-Creme', Price: '6.80', Quantity: '85', 'R.O.L.': '10'}
];

const listItems = userInfo.map((user, i) =>
        <tr className="user-row" key={i}>
          <td>{user.ID}</td>
          <td>{user.Product}</td>
          <td>{user.Price}</td>
          <td>{user.Quantity}</td>
          <td>{user['R.O.L.']}</td>
        </tr>  
);

ReactDOM.render(
  <table>
    {listItems}
  </table>,
  document.getElementById('root')
);