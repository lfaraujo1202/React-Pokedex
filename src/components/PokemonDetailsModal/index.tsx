import { Container } from "./styles";
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface DetailsProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function PokemonDetailsModal({ isOpen, onRequestClose}: DetailsProps) {

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className = "react-modal-content"
        >

        <Container>
            <button onClick={onRequestClose}>Close Modal</button>
            <h1>teste</h1> 
        </Container>

        </Modal>
        );
}