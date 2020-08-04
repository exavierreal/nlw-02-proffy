import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/17283121?s=460&u=25c70b9158df964c4c2631cd226b8bf8bd1145d4&v=4" alt="Ericson Xavier"/>
                <div>
                    <strong>Ericson Xavier</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Entusiasta dos melhores métodos de matemática avançada.
                <br /> <br />
                Apaixonado por números aleatórios e mudar da vida através das pessoas através de números. Mais de 100 pessoas já passaram por essas experiências.
            </p>

            <footer>
                <p>
                    Preço Por Hora
                    <strong>R$ 50,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;