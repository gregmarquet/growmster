import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

// import './Chart.css';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        datasets: [{
          data: [
            this.props.values.love,
            this.props.values.finance,
            this.props.values.career,
            this.props.values.contribution,
            this.props.values.relationships,
            this.props.values.fun,
            this.props.values.fitness
          ],
          backgroundColor: [
            'rgba(103, 140, 224, .7)',
            'rgba(103, 140, 224, .7)',
            'rgba(103, 140, 224, .7)',
            'rgba(103, 140, 224, .7)',
            'rgba(103, 140, 224, .7)',
            'rgba(103, 140, 224, .7)',
            'rgba(103, 140, 224, .7)'
          ],
          borderWidth: 0
        }],
        labels: [
          "Love",
          "Finance",
          "Career",
          "Contribution",
          "Relationship",
          "Fun",
          "Fitness"
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        tooltips: {
          mode: 'label',
          callbacks: {
            label: function (tooltipItem, data) {
              return data['datasets'][0]['data'][tooltipItem['index']];
            }
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: 10
            }
          }],
          xAxes: [{
            ticks: {
              autoSkip: false
            }
          }]
        }
      }
    }
  }

  render() {
    return (
      <div className="chart">
        <div className="container doughnut">
          <Bar
            data={this.state.data}
            options={this.state.options}
          />
        </div>
      </div>
    )
  }
}

export default Chart;