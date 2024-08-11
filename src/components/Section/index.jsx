import { NavLink } from 'react-router-dom'
import { StyledSection } from './styles'
import LinkArrow from '../../assets/link-arrow.svg'

export const Section = ({ title, link, titlePosition, children }) => {

    function positionSetter(){
        if(titlePosition == 'center') return {position: 'absolute', left: '50%', transform: 'translate(-50%, 0)'}
        return {}
    }
    return(
        <StyledSection>
            {title && <div id="container">
                <p style={positionSetter()}>{title}</p>
                {link ? <NavLink to={link.href} style={{position: 'absolute', right: '0'}} >{link.text}<img style={{visibility: link ? 'visible' : 'hidden'}} src={LinkArrow} /></NavLink> : ''}
            </div>}
            <div id="children">{children}</div>
        </StyledSection>
    )
}