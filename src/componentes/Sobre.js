import React from 'react';

const Sobre = () => {
  return (
    <main className='flex mx-auto max-w-5xl px-2 justify-center items-center mt-[70px]'>
        <div className=' bg-[#0277bd] flex justify-start items-center flex-col p-7 drop-shadow-[0_10px_10px_rgba(0,0,0,0.70)] rounded-tl-[100px] rounded-br-[100px] rounded-tr-lg rounded-bl-lg md:flex-row md:justify-evenly gap-7 md:gap-0'>
            <div class="flex justify-center items-center flex-col gap-2">
                <img src="/img/sobre/foto.jpg" alt="Minha foto" title='Charles Souza' className='img1 size-44 border-[3px] border-[#ffffff] rounded-full'/>
                <h1 style={{ fontFamily: 'archivo'}} className='text-4xl text-white'>Neusvaldo Moura</h1>
                <div className='flex gap-2'>
                    <a href="https://www.instagram.com/vianamjr_/">
                        <img src="/img/sobre/instagram.png" alt="Instagram" title='Instagram' className='size-8'/>
                    </a>
                    <a href="https://github.com/neusmoura07">
                        <img src="/img/sobre/github.png" alt="Github" title='Github' className='size-8'/>
                    </a>
                    <a href="https://www.linkedin.com/in/neusvaldo-moura-20608b312/">
                        <img src="/img/sobre/linkedin.png" alt="Github" title='Github' className='size-8'/>
                    </a>
                </div>                
            </div>
            <div class="text-box flex justify-center items-center flex-col text-center md:w-[60%]">
                <h1 style={{fontFamily: 'archivo black'}} className='text-2xl text-white'>Conheça um pouco sobre mim</h1>
                <br></br>
                <span style={{ fontFamily: 'archivo'}} className='text-[#CEC7BF]'>Sou Neusvaldo Moura, estudante de Ciência da Computação no 6º período da Uninassau, com uma paixão crescente pelo desenvolvimento de games. Utilizo a Game Engine GameMaker mas já utilizei em um projeto Unity. Minha trajetória no desenvolvimento de jogos inclui a participação na 1ª edição da competição de games da Uninassau, onde tive a oportunidade de desafiar minhas habilidades e aprender com outros criadores.</span>
                <br></br>
                <span style={{ fontFamily: 'archivo'}} className='text-[#CEC7BF]'>Atualmente, tenho dois projetos de jogos em meu portfólio e estou sempre em busca de novos desafios e oportunidades para crescer na área. Estou comprometido em explorar novas ideias e técnicas para oferecer experiências únicas e inovadoras. Se você está interessado em saber mais sobre meu trabalho ou em colaborar, não hesite em entrar em contato!</span>
            </div>
        </div>
    </main>
  )
}

export default Sobre;