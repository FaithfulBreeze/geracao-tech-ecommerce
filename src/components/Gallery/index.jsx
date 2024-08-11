import { StyledGallery } from "./styles"
import leftArrow from "../../assets/arrow-left.svg"
import rightArrow from "../../assets/arrow-right.svg"
import { useEffect, useState } from "react"
import styled from "styled-components"

let displayedImage = 0
let lastClick = 'right'
let timeout

export const Gallery = ({width, height, images, radius, children, showThumbs}) => {
    const [currentImage, setCurrentImage] = useState(0)
    const gallerySizeSettings = { marginBottom: showThumbs ? '' : '38px', width, height, borderRadius: radius}
    const mappedImages = images.map(
        (image, index) => <img src={image.src} style={{marginLeft: index == 0 ? `${currentImage}%` : null}} className="slide-image" id={`image-${index}`} key={index}/>
    )

    function moveSlide(direction){
        if(direction == 'left' && (currentImage / -100) > 0){
            setCurrentImage(prev => prev += 100)
            lastClick = 'left'
        }else if(direction == 'right' && (currentImage / -100) < images.length - 1 ){
            setCurrentImage(prev => prev -= 100)
            lastClick = 'right'
        }
    }
    useEffect(() => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            const direction = lastClick
            moveSlide(direction)
        }, 5000)
    },[currentImage])
    return(
        <div>
            <StyledGallery style={gallerySizeSettings}>
                <div id="controlls" >
                    <img src={leftArrow} alt="Left arrow" onClick={() => moveSlide('left')} />
                    <img src={rightArrow} alt="Right arrow" onClick={() => moveSlide('right')} />
                </div>
                <div>
                    {mappedImages}
                </div>
                <div id="radio-icons">
                    {images.map((image, index) => {
                        return <p key={index} className={index == (currentImage / -100) ? 'marked' : ''}></p>
                    })}
                </div>
                {children}
            </StyledGallery>
            {showThumbs && <StyledThumbs style={{maxWidth: width}} id="thumbs">
                {images.map((image, index) => {
                    return <img key={index} className={index == (currentImage / -100) ? 'border' : ''} style={{borderRadius: radius}} src={image.src} />
                })}
            </StyledThumbs>}
        </div>
    )
}

const StyledThumbs = styled.div`
    margin-top: 18px;
    padding: 2px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-y: hidden;
    align-items: flex-start;
    & img{
        width: 118px;
        height: 100%;
    }
    .border{
        outline: 2px solid #C92071;
    }

`