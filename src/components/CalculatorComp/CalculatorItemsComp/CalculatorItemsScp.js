import { Component } from 'react'
import './CalculatorItemsStl.css'



class CalculatorItemComp extends Component {



    render() {

        const { itemheight, itemwidth, CalcItemSym ,getUniqItemFunc} = this.props

        let style = {
            height: itemheight + 'em',
            width: itemwidth + 'em',
            color: CalcItemSym.calculatorItemsColor
        }
    
        return (
            <div style={style} onClick={() => getUniqItemFunc(CalcItemSym.calculatorItemsUniqName)} className='calculator_items_content'>
                <div className='calculator_items_content_in_itm' >
                    {CalcItemSym.calculatorItemsSym}
                </div>
            </div>
        )
    }
}


export default CalculatorItemComp