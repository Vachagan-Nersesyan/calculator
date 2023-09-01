import './calculatorCompStl.css'
import CalculatorItemComp from './CalculatorItemsComp/CalculatorItemsScp'

const CalculatorComp = ({ calculatorItemsArr }) => {
    

    let calculatorItemsData = calculatorItemsArr.calculatorItemsIndArr.map((val,ind) => {

        switch(val){

            case 16:return <CalculatorItemComp key={val} itemwidth={4.9} itemheight={8.3} CalcItemSym={calculatorItemsArr.calculatorItemsSymbols[ind]} />

            case 17:return <CalculatorItemComp key={val} itemwidth={9.9} itemheight={4.1} CalcItemSym={calculatorItemsArr.calculatorItemsSymbols[ind]} />

            default : return <CalculatorItemComp key={val} itemwidth={4.9} itemheight={4.1} CalcItemSym={calculatorItemsArr.calculatorItemsSymbols[ind]} />
        }
    })


    return (
        <div className='calculator_comp_content'>
            <div className='calculator_comp_content_number_section'>
                <div className='calculator_comp_content_number_section_itm'>
                    0
                </div>
            </div>
            <div className='calculator_item_content_section'>
                {calculatorItemsData}
            </div>
        </div>
    )
}


export default CalculatorComp