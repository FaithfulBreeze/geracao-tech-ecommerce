import { StyledFilterGroup } from "./styles";


const FilterGroup = ({ title, inputType, options }) => {
    
    return ( 
        <StyledFilterGroup >
            <p>{title}</p>
            {options.map((item, index) =>{
                return <div key={index}>
                    <input  type={inputType} value={item.value} id={`${title}${index}`} name={title.toLowerCase()} />
                    <label htmlFor={`${title}${index}`}>{item.text}</label>
                </div>
            })}
        </StyledFilterGroup>
     );
}
 
export default FilterGroup;