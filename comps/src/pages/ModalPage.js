import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <Button onClick={handleClose} primary >I Accept</Button>

    const modal = <Modal onClose={handleClose} actionBar={actionBar} >
        <p>Here is an important agreement for you to accept</p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis ultrices eros. Duis sem magna, imperdiet vel nisi ac, aliquet pretium justo. Suspendisse id sagittis nulla. Vivamus in congue elit. Donec et mattis magna. Maecenas iaculis commodo nulla, sed pretium turpis tincidunt vitae. Nam pretium mollis mauris, eget scelerisque neque sodales eu. Curabitur a quam tincidunt, convallis enim et, laoreet ex.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis ultrices eros. Duis sem magna, imperdiet vel nisi ac, aliquet pretium justo. Suspendisse id sagittis nulla. Vivamus in congue elit. Donec et mattis magna. Maecenas iaculis commodo nulla, sed pretium turpis tincidunt vitae. Nam pretium mollis mauris, eget scelerisque neque sodales eu. Curabitur a quam tincidunt, convallis enim et, laoreet ex.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis ultrices eros. Duis sem magna, imperdiet vel nisi ac, aliquet pretium justo. Suspendisse id sagittis nulla. Vivamus in congue elit. Donec et mattis magna. Maecenas iaculis commodo nulla, sed pretium turpis tincidunt vitae. Nam pretium mollis mauris, eget scelerisque neque sodales eu. Curabitur a quam tincidunt, convallis enim et, laoreet ex.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis ultrices eros. Duis sem magna, imperdiet vel nisi ac, aliquet pretium justo. Suspendisse id sagittis nulla. Vivamus in congue elit. Donec et mattis magna. Maecenas iaculis commodo nulla, sed pretium turpis tincidunt vitae. Nam pretium mollis mauris, eget scelerisque neque sodales eu. Curabitur a quam tincidunt, convallis enim et, laoreet ex.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis ultrices eros. Duis sem magna, imperdiet vel nisi ac, aliquet pretium justo. Suspendisse id sagittis nulla. Vivamus in congue elit. Donec et mattis magna. Maecenas iaculis commodo nulla, sed pretium turpis tincidunt vitae. Nam pretium mollis mauris, eget scelerisque neque sodales eu. Curabitur a quam tincidunt, convallis enim et, laoreet ex.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis ultrices eros. Duis sem magna, imperdiet vel nisi ac, aliquet pretium justo. Suspendisse id sagittis nulla. Vivamus in congue elit. Donec et mattis magna. Maecenas iaculis commodo nulla, sed pretium turpis tincidunt vitae. Nam pretium mollis mauris, eget scelerisque neque sodales eu. Curabitur a quam tincidunt, convallis enim et, laoreet ex.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis ultrices eros. Duis sem magna, imperdiet vel nisi ac, aliquet pretium justo. Suspendisse id sagittis nulla. Vivamus in congue elit. Donec et mattis magna. Maecenas iaculis commodo nulla, sed pretium turpis tincidunt vitae. Nam pretium mollis mauris, eget scelerisque neque sodales eu. Curabitur a quam tincidunt, convallis enim et, laoreet ex.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis ultrices eros. Duis sem magna, imperdiet vel nisi ac, aliquet pretium justo. Suspendisse id sagittis nulla. Vivamus in congue elit. Donec et mattis magna. Maecenas iaculis commodo nulla, sed pretium turpis tincidunt vitae. Nam pretium mollis mauris, eget scelerisque neque sodales eu. Curabitur a quam tincidunt, convallis enim et, laoreet ex.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis ultrices eros. Duis sem magna, imperdiet vel nisi ac, aliquet pretium justo. Suspendisse id sagittis nulla. Vivamus in congue elit. Donec et mattis magna. Maecenas iaculis commodo nulla, sed pretium turpis tincidunt vitae. Nam pretium mollis mauris, eget scelerisque neque sodales eu. Curabitur a quam tincidunt, convallis enim et, laoreet ex.
            </p>

        </div>
    );
}

export default ModalPage;