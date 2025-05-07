import PropTypes from "prop-types"


export const Practice = ({sentence})=> {

    const sumaDom = (event) =>{

    console.log( event)
    sentence = 1000
    
    }


    return(
    
        <>
            <h1>Practice </h1>
            <h2> {sentence }</h2>
            <button onClick={ sumaDom} > sumn </button>
        
        </>
    
    
    )


}

Practice.propTypes = {

    sentence : PropTypes.string
}


