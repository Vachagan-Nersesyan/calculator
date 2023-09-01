import './CalculatorItemsStl.css'


const CalculatorItemComp = ({itemheight,itemwidth,CalcItemSym}) => {
    

    let style = {
        height : itemheight + 'em',
        width : itemwidth + 'em',
        color : CalcItemSym.calculatorItemsColor
    }

    return (
        <div style={style} className='calculator_items_content'>
            <div className='calculator_items_content_in_itm'>
                {CalcItemSym.calculatorItemsSym}
            </div>
        </div>
    )
}


export default CalculatorItemComp