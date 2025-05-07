import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

const name = "gesse";
const title = "Pruebas";
const subtitle = "No esta funcionando los proptypes";
describe("Pruebas en: firstApp ", () => {
  // test('Debe de hacer math en el snapshot', ()=>{

  // const {container} =  render( <FirstApp name={name} title={title} subtitle={subtitle} />)
  // expect(container).toMatchSnapshot()

  // })

  test("Debe de mostrar el titulo en h1", () => {
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    expect(getByTestId("test-title").innerHTML).toBe(title);
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("Debe de mostrar el subtitulo envidado por props", () => {
    const { getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(getAllByText(subtitle).length).toBe(2);
  });
});
