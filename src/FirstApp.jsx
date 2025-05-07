import PropTypes from "prop-types"


export const FirstApp = ({title,subtitle, name})=> {


    return(
    
        <>
            <h1 data-testid="test-title">{ title}</h1>
            <p>{subtitle}</p>
             <p>{subtitle}</p>
            <p>{name}</p>
        
        </>
    
    
    )


}

FirstApp.propTypes = {

    name : PropTypes.string.isRequired
}


