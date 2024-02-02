const Details = () => {
  return (
    <div className="row mb-5">
      <h2 className="">House Details</h2>
      <table className="table-with-headers">
        <tbody>
          <tr>
            <th scope="row">House Type</th>
            <td className="text-secondary">Viebrockhaus Maxime 300</td>
          </tr>
          <tr>
            <th scope="row">Roof Angle</th>
            <td className="text-secondary">35°</td>
          </tr>
          <tr>
            <th scope="row">Building Plot</th>
            <td className="text-secondary">410 m²</td>
          </tr>
          <tr>
            <th scope="row">House Dimensions</th>
            <td className="text-secondary">11.6m x 8.6m</td>
          </tr>
          <tr>
            <th scope="row">House Size</th>
            <td className="text-secondary">147 m²</td>
          </tr>
          <tr>
            <th scope="row">Cellar</th>
            <td className="text-secondary">100 m²</td>
          </tr>
          <tr>
            <th scope="row">Solar Array</th>
            <td className="text-secondary">3.3kWp</td>
          </tr>
          <tr>
            <th scope="row">Solar Panels</th>
            <td className="text-secondary">10x SunPower X21-335</td>
          </tr>
          <tr>
            <th scope="row">Solar Inverter</th>
            <td className="text-secondary">SolarEdge SE3000</td>
          </tr>
          <tr>
            <th scope="row">House Battery</th>
            <td className="text-secondary">Tesla Powerwall 1 6.4kWh</td>
          </tr>
          <tr>
            <th scope="row">Heating</th>
            <td className="text-secondary">
              Hybrid Air Compact / Nibe F 735 G
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Details;
