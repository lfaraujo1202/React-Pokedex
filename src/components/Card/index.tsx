import { Container } from "./styles";
import type { CardProps } from "./Card";

export function Card({ id, name, image, image2, type, hp, attack, defense}: CardProps) {
    return (
        <Container name={name} id={id} image={image} type={type[0].type.name} hp={hp}>
            <div className="card">
                <h3>{name}</h3>
                <h2>{id}</h2>

                <img className="pokebg" src={image} alt="Icone de react"/>

                <div className="icon">
                    <img className="pokeball" src={image2} alt="Icone de react"/>
                </div>

                <div className="CenterBall">
                    <div className="CenterBall__button"></div>
                </div>

                <div className="CardColor">
                    <div className='Atributes'>
                        <h6 >HP: {hp}</h6>
                        <h6>Ataque: {attack}</h6>
                        <h6>Defesa: {defense}</h6>
                    </div>

                    <div className="Types">
                        {type.map((ptype : any, idx: any) => {
                            return <div key={idx} className="tag">{ptype.type.name}</div>;
                        })}
                    </div>

                    {/* <button>Detalhes</button> */}
                </div>
            </div>
        </Container>
    );
}

