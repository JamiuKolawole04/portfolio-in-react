import { Container } from "reactstrap";


export const Footer = () => {
    return (
        <footer className="pb-4">
            <Container className="text-center">
                <p>Copyright {new Date().getFullYear()}, Developed by Jay. All rights reserved.</p>
            </Container>
        </footer>
    );
}