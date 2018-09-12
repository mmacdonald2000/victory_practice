import React, { Component } from 'react';
import * as V from 'victory';


class TutorialChart extends Component {
  render() {
    return (
      <div style={{ height:this.props.height, width:this.props.width }}>
        <V.VictoryChart
          domainPadding={20}
          theme={V.VictoryTheme}
        >
          <V.VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
          />
          <V.VictoryAxis
            dependentAxis
            tickFormat={x => (`$${x / 1000 }k`)}
          />
          <V.VictoryBar
            data={data}
            x='quarter'
            y='earnings'
          />
        </V.VictoryChart>
      </div>
    );
  }
}
export default TutorialChart;

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];
