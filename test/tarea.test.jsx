import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe(" Tarea en el counter app", () => {
  test(" Match con el snapch", () => {
    expect(render(<CounterApp value={10} />).container).toMatchSnapshot();
  });

  test(" Debe iniciar con un 100 el counter", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
  });

  test('debe de incrementar con el boton +1' , ()=>{
  
    render( <CounterApp />)
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText('21')).toBeTruthy()
  
  })
  test('debe de decrementar con el boton -1' , ()=>{
  
    render( <CounterApp />)
    fireEvent.click(screen.getByText('-1'))
    expect(screen.getByText('19')).toBeTruthy()
  
  })
   test('debe de funcionar el boton de reset con el boton' , ()=>{
  
    render( <CounterApp value={28909} />)
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByRole ('button', {name: 'btn-reset'}))
    expect(screen.getByText (28909)).toBeTruthy()
  
  })
});
