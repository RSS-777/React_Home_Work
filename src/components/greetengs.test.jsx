import { Greetings } from "./Greetings";
import { render, screen } from "@testing-library/react";

test("greetings test", async () => {
    render(<Greetings name='Sergiy' />);
    screen.debug()
    const element = await screen.getByText('Hello Sergiy')
    expect(element).toBeInTheDocument()
})