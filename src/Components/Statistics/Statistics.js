import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const Statistics = () => {
  const options = {
    series: [
      {
        name: 'Profit',
        data: [100, 200, 300, 500, 600],
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Statistics;
