import { useState } from "react"
import { StyledProductOptions } from "./styles"

export const ProductOptions = ({ options, radius, shape, type }) => {
    const [selected, setSelected] = useState('')

    const circleStyle = {
        borderRadius: '50%',
        width: '31px',
        height: '31px'
    }

    const squareStyle = {
        display: 'grid',
        fontWeight: '700',
        border: '1px solid #CCC',
        placeContent: 'center',
        borderRadius: radius,
        width: '48px',
        height: '48px'
    }

    function clearSelected(e){
        const arr = Array.from(e.nativeEvent.path[1].children)
        arr.map((e) => {
            e.classList.toString().includes('selected')
            e.classList.remove('selected')
        })
    }

    const circleArray = options.map((e, i) => {
        return <p onClick={(e) => {
            clearSelected(e)
            e.target.classList.add('selected')
        }} style={{backgroundColor: e, ...circleStyle}} key={i}></p>
    })

    const squareArray = options.map((e, i) => {
        return <p onClick={(e) => {
            clearSelected(e)
            e.target.classList.add('selected')
        }} id="box" style={squareStyle} key={i}>{e}</p>
    })

    return (
        <StyledProductOptions>
            {shape == 'circle' ? circleArray : squareArray}
        </StyledProductOptions>
    )
}