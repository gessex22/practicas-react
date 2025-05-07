import { render, screen} from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en firstApp organizado' , ()=>{

    const title = 'Pruebas'
    const subtitle = 'soy un subtitle'



    test('Match con snapshot', ()=>{
    
        const {container } = render( <FirstApp  title={title}/>)
        expect(container).toMatchSnapshot()
    
    })

    test('DEbe mostrar el msg quien soy', ()=>{
    
      render( <FirstApp  title={title}/>)
      expect(screen.getByText(title)).toBeTruthy()
     
    })

    test('Debe de mostrsar el title en un H1' , ()=>{
    
        render( <FirstApp  title={title}/>)
        expect(screen.getByRole('heading', {level:1}).innerHTML ).toContain(title)
    
    })

    test('Debe mostrarse el subtitle enviado por props', ()=>{
    
        render(<FirstApp 
            title={ title}
            subtitle={ subtitle }
        
        />) 
        expect( screen.getAllByText(subtitle).length ).toBe(2)
    })



})