import './figureCompStl.css'
import {FigureItemComp} from './FigureItemComp/figureItemScp'

const FigureComponent = ({figureStylesArr}) =>{

    let figureData = figureStylesArr.map((val) => {
        
        return <FigureItemComp key={val.id} figureStlName={val.figureStlName}  />
    })
    
    return (
        <div className='App_figures'>
            {figureData}
        </div>
    )
} 

export default FigureComponent