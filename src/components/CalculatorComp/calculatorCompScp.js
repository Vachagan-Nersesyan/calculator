import { Component, createRef } from 'react'
import './calculatorCompStl.css'
import CalculatorItemComp from './CalculatorItemsComp/CalculatorItemsScp'

class CalculatorComp extends Component {

    constructor(props) {
        super(props)
        this.oprtrIndxArr = []
        this.exclOprtIndxArr = []
        this.str = ''

        this.equalityTextRef = createRef()

    }


    summinSecFunc(sumSecText) {

        this.str = Function('return ' + sumSecText)()

        this.equalityTextRef.current.innerHTML = this.str

    }

    summinElements(sumText) {



        for (let i in sumText) {
            if (isNaN(sumText[i])) {
                this.oprtrIndxArr.push(i)
                if (sumText[i] === '*' || sumText[i] === '/') {
                    this.exclOprtIndxArr.push(i)
                }
            }
        }

        let firstUnvValue = this.oprtrIndxArr.indexOf(this.exclOprtIndxArr[0])
        let secondUnvValue = this.exclOprtIndxArr[0]
        let thirdUnvValue = this.oprtrIndxArr[firstUnvValue + 1]
        let forthUnvValue = this.oprtrIndxArr[firstUnvValue - 1]

        if (sumText[secondUnvValue] === '*' || sumText[secondUnvValue] === '/') {


            let firstNum = sumText.slice(+forthUnvValue + 1, secondUnvValue)
            let secondNum = sumText.slice(+secondUnvValue + 1, (thirdUnvValue === undefined) ? sumText.length : +thirdUnvValue)

            var sum = (sumText[secondUnvValue] === '*') ? firstNum * secondNum : firstNum / secondNum
            var str = sumText.slice(+forthUnvValue + 1, (thirdUnvValue === undefined) ? sumText.length : +thirdUnvValue)


            this.str = sumText.replace(str, sum)

            this.exclOprtIndxArr.splice(0, 1)

        }



        if (this.exclOprtIndxArr.length !== 0) {

            this.exclOprtIndxArr = []
            this.oprtrIndxArr = []

            return this.summinElements(this.str)
        } else {

            this.oprtrIndxArr = []

            this.summinSecFunc(this.str)



            return

        }

    }

    deletLastElement() {


        this.str = this.str.toString().split('')

        this.str.pop()
        this.str = this.str.join('')

        this.equalityTextRef.current.innerHTML = this.str
    }

    clearValueFunc() {
        this.str = ''
        this.equalityTextRef.current.innerHTML = this.str
    }

    getUniqItemFunc(valueStr) {


        switch (valueStr) {
            case '=': {
                if (isNaN(this.str.toString()[this.str.toString().length - 1])) {
                    return
                }
                return this.summinElements(this.str)
            }

            case '<': return this.deletLastElement()
            case 'C': return this.clearValueFunc()


            default: {
                if (isNaN(valueStr) && isNaN(this.str.toString()[this.str.toString().length - 1])) {
                    return
                }

                if (typeof this.str === 'number' && typeof valueStr === 'number') {
                    return
                }


                this.str += valueStr
            }
        }

        this.equalityTextRef.current.innerHTML = this.str

    }

    render() {
        const { calculatorItemsArr } = this.props



        let calculatorItemsData = calculatorItemsArr.calculatorItemsIndArr.map((val, ind) => {

            switch (val) {

                case 16: return <CalculatorItemComp key={val} getUniqItemFunc={this.getUniqItemFunc.bind(this)} itemwidth={4.9} itemheight={8.3} CalcItemSym={calculatorItemsArr.calculatorItemsSymbols[ind]} />

                case 17: return <CalculatorItemComp key={val} getUniqItemFunc={this.getUniqItemFunc.bind(this)} itemwidth={9.9} itemheight={4.1} CalcItemSym={calculatorItemsArr.calculatorItemsSymbols[ind]} />

                default: return <CalculatorItemComp key={val} getUniqItemFunc={this.getUniqItemFunc.bind(this)} itemwidth={4.9} itemheight={4.1} CalcItemSym={calculatorItemsArr.calculatorItemsSymbols[ind]} />
            }
        })


        return (
            <div className='calculator_comp_content'>
                <div className='calculator_comp_content_number_section'>
                    <div ref={this.equalityTextRef} className='calculator_comp_content_number_section_itm'>
                        {this.str}
                    </div>
                </div>
                <div className='calculator_item_content_section'>
                    {calculatorItemsData}
                </div>
            </div>
        )
    }
}


export default CalculatorComp