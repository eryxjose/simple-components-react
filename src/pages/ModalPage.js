import { useState } from 'react';
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (
        <Button primary onClick={handleClose}>Confirmar</Button>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Teste
            </p>
        </Modal>
    );

    return (
        <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis viverra egestas. Cras eleifend laoreet metus, consectetur luctus dui egestas eu. Fusce porta sem est, mollis condimentum felis hendrerit id. Morbi placerat porttitor ultrices. Proin in enim in nunc eleifend dignissim. Praesent sit amet consectetur leo, non euismod risus. Donec hendrerit elit odio, sollicitudin congue sem ullamcorper sed. Pellentesque congue posuere leo, nec pulvinar urna cursus sit amet. Vivamus consectetur quam nisi, sed gravida nisl scelerisque nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis viverra egestas. Cras eleifend laoreet metus, consectetur luctus dui egestas eu. Fusce porta sem est, mollis condimentum felis hendrerit id. Morbi placerat porttitor ultrices. Proin in enim in nunc eleifend dignissim. Praesent sit amet consectetur leo, non euismod risus. Donec hendrerit elit odio, sollicitudin congue sem ullamcorper sed. Pellentesque congue posuere leo, nec pulvinar urna cursus sit amet. Vivamus consectetur quam nisi, sed gravida nisl scelerisque nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis viverra egestas. Cras eleifend laoreet metus, consectetur luctus dui egestas eu. Fusce porta sem est, mollis condimentum felis hendrerit id. Morbi placerat porttitor ultrices. Proin in enim in nunc eleifend dignissim. Praesent sit amet consectetur leo, non euismod risus. Donec hendrerit elit odio, sollicitudin congue sem ullamcorper sed. Pellentesque congue posuere leo, nec pulvinar urna cursus sit amet. Vivamus consectetur quam nisi, sed gravida nisl scelerisque nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis viverra egestas. Cras eleifend laoreet metus, consectetur luctus dui egestas eu. Fusce porta sem est, mollis condimentum felis hendrerit id. Morbi placerat porttitor ultrices. Proin in enim in nunc eleifend dignissim. Praesent sit amet consectetur leo, non euismod risus. Donec hendrerit elit odio, sollicitudin congue sem ullamcorper sed. Pellentesque congue posuere leo, nec pulvinar urna cursus sit amet. Vivamus consectetur quam nisi, sed gravida nisl scelerisque nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis viverra egestas. Cras eleifend laoreet metus, consectetur luctus dui egestas eu. Fusce porta sem est, mollis condimentum felis hendrerit id. Morbi placerat porttitor ultrices. Proin in enim in nunc eleifend dignissim. Praesent sit amet consectetur leo, non euismod risus. Donec hendrerit elit odio, sollicitudin congue sem ullamcorper sed. Pellentesque congue posuere leo, nec pulvinar urna cursus sit amet. Vivamus consectetur quam nisi, sed gravida nisl scelerisque nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis viverra egestas. Cras eleifend laoreet metus, consectetur luctus dui egestas eu. Fusce porta sem est, mollis condimentum felis hendrerit id. Morbi placerat porttitor ultrices. Proin in enim in nunc eleifend dignissim. Praesent sit amet consectetur leo, non euismod risus. Donec hendrerit elit odio, sollicitudin congue sem ullamcorper sed. Pellentesque congue posuere leo, nec pulvinar urna cursus sit amet. Vivamus consectetur quam nisi, sed gravida nisl scelerisque nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis viverra egestas. Cras eleifend laoreet metus, consectetur luctus dui egestas eu. Fusce porta sem est, mollis condimentum felis hendrerit id. Morbi placerat porttitor ultrices. Proin in enim in nunc eleifend dignissim. Praesent sit amet consectetur leo, non euismod risus. Donec hendrerit elit odio, sollicitudin congue sem ullamcorper sed. Pellentesque congue posuere leo, nec pulvinar urna cursus sit amet. Vivamus consectetur quam nisi, sed gravida nisl scelerisque nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis viverra egestas. Cras eleifend laoreet metus, consectetur luctus dui egestas eu. Fusce porta sem est, mollis condimentum felis hendrerit id. Morbi placerat porttitor ultrices. Proin in enim in nunc eleifend dignissim. Praesent sit amet consectetur leo, non euismod risus. Donec hendrerit elit odio, sollicitudin congue sem ullamcorper sed. Pellentesque congue posuere leo, nec pulvinar urna cursus sit amet. Vivamus consectetur quam nisi, sed gravida nisl scelerisque nec.
            </p>
            

            <Button onClick={handleClick} primary>Exibir Modal</Button>
            {showModal && modal}

        </div>
    );
}

export default ModalPage;

