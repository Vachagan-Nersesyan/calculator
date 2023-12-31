import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FigureComponent from './components/FigureComponent'
import CalculatorComp from './components/CalculatorComp'

import {FaPlus,FaEquals,FaMinus,FaLessThan,FaXmark,FaC,FaSlash,Fa0,Fa1,Fa2,Fa3,Fa4,Fa5,Fa6,Fa7,Fa8,Fa9,FaWindowMinimize} from 'react-icons/fa6'

function App() {

  let figureStylesArr = [{
    figureStlInd: 1,
    figureStlName: 'App_figures_first'
  },
  {
    figureStlInd: 2,
    figureStlName: 'App_figures_second'
  }, {
    figureStlInd: 3,
    figureStlName: 'App_figures_third'
  }]

  let calculatorItemsArr = {
    get calculatorItemsIndArr() {
      let arr = []
      for (let i = 1; i <= 18; i++) {
        arr.push(i)
      }
      return arr
    },
    calculatorItemsSymbols : [
      {
        calculatorItemsId:1,
        calculatorItemsSym:<FaC />,
        calculatorItemsColor : '#e63946',
        calculatorItemsUniqName : 'C'
      },
      {
        calculatorItemsId:2,
        calculatorItemsSym:<FaLessThan />,
        calculatorItemsColor : '#e63946',
        calculatorItemsUniqName : '<'
      },
      {
        calculatorItemsId:3,
        calculatorItemsSym:<FaSlash />,
        calculatorItemsColor : '#606c38',
        calculatorItemsUniqName : '/'
      },
      {
        calculatorItemsId:4,
        calculatorItemsSym:<FaXmark />,
        calculatorItemsColor : '#606c38',
        calculatorItemsUniqName : '*'

      },
      {
        calculatorItemsId:5,
        calculatorItemsSym:<Fa7 />,
        calculatorItemsColor : '#1d3557',
        calculatorItemsUniqName : 7

      },
      {
        calculatorItemsId:6,
        calculatorItemsSym:<Fa8 />,
        calculatorItemsColor :'#1d3557',
        calculatorItemsUniqName : 8

      },
      {
        calculatorItemsId:7,
        calculatorItemsSym:<Fa9 />,
        calculatorItemsColor : '#1d3557',
        calculatorItemsUniqName : 9

      },
      {
        calculatorItemsId:8,
        calculatorItemsSym:<FaMinus />,
        calculatorItemsColor : '#606c38',
        calculatorItemsUniqName: '-'
      },
      {
        calculatorItemsId:9,
        calculatorItemsSym:<Fa4 />,
        calculatorItemsColor : '#1d3557',
        calculatorItemsUniqName : 4

      },
      {
        calculatorItemsId:10,
        calculatorItemsSym:<Fa5 />,
        calculatorItemsColor : '#1d3557',
        calculatorItemsUniqName : 5

      },
      {
        calculatorItemsId:11,
        calculatorItemsSym:<Fa6 />,
        calculatorItemsColor : '#1d3557',
        calculatorItemsUniqName : 6
        
      },
      {
        calculatorItemsId:12,
        calculatorItemsSym:<FaPlus />,
        calculatorItemsColor : '#606c38',
        calculatorItemsUniqName : '+'

      },
      {
        calculatorItemsId:13,
        calculatorItemsSym:<Fa1 />,
        calculatorItemsColor : '#1d3557',
        calculatorItemsUniqName : 1

      },
      {
        calculatorItemsId:14,
        calculatorItemsSym:<Fa2 />,
        calculatorItemsColor : '#1d3557',
        calculatorItemsUniqName : 2

      },
      {
        calculatorItemsId:15,
        calculatorItemsSym:<Fa3 />,
        calculatorItemsColor : '#1d3557',
        calculatorItemsUniqName : 3

      },
      {
        calculatorItemsId:16,
        calculatorItemsSym:<FaEquals />,
        calculatorItemsColor : '#606c38',
        calculatorItemsUniqName : '=',

      },
      {
        calculatorItemsId:17,
        calculatorItemsSym:<Fa0 />,
        calculatorItemsColor : '#1d3557',
        calculatorItemsUniqName : 0,

      },
      {
        calculatorItemsId:18,
        calculatorItemsSym:<FaWindowMinimize />,
        calculatorItemsColor : '#606c38',
        calculatorItemsUniqName : '.',

      }
    ]

  }

  return (
    <div className="App">

      <CalculatorComp calculatorItemsArr={calculatorItemsArr} />
      <FigureComponent figureStylesArr={figureStylesArr} />
    </div>
  );
}

export default App


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

