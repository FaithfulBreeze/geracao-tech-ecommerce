import { StyledFilterGroup } from "./styles";


const FilterGroup = ({ title, inputType, options }) => {
    
    return ( 
        <StyledFilterGroup >
            <p>{title}</p>
            {options.map((item, index) =>{
                return <div key={index}>
                    <input  type={inputType} value={item.value} id={`input${index}`} name={title.toLowerCase()} />
                    <label htmlFor={`input${index}`}>{item.text}</label>
                </div>
            })}
        </StyledFilterGroup>
     );
}
 
export default FilterGroup;