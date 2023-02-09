import { GoBell, GoAlert, GoBookmark } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
    const handlerClick = () => {
        console.log('click');
    };

    return <div>
        <div>
            <Button primary rounded onClick={handlerClick}>
                <GoBell />
                click me
            </Button>
        </div>
        <div>
            <Button secondary outline onMouseEnter={handlerClick}>
                <GoBookmark />click me2
            </Button>
            <Button success rounded outline>click me2</Button>
            <Button warning>
                <GoAlert />click me2
            </Button>
            <Button danger>click me2</Button>
        </div>
    </div>
}
export default ButtonPage;