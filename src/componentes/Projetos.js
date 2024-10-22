import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './projetos.css';

function SampleNextArrow(props) {
  const { className, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
    />
  );
}

const Card = ({ imageSrc, title, description, href, href2 }) => (
    <div className='flex justify-start items-center flex-col hover:shadow-lg transition-shadow duration-300'>
        <div className='h-[10px] w-[250px] bg-[#ffffff] rounded-t-[50px]'></div>
        <div className="bg-[#0277bd] p-6 rounded-lg shadow-md h-[400px] mx-auto justify-center items-center flex flex-col">
            <div className="overflow-hidden flex justify-center items-center rounded-md">
                <a href={href}>
                    <img src={imageSrc} alt={title} className="rounded-md" />
                </a>
            </div>
            <div className="text-center mt-4 flex justify-center items-center flex-col">
                <h2 className="text-xl font-semibold text-white" style={{ fontFamily: 'archivo black' }}>{title}</h2>
                <p className="mt-2 text-[#CEC7BF]" style={{ fontFamily: 'archivo' }}>{description}</p>
                <a href={href} className='text-[#20ffa9]' style={{ fontFamily: 'archivo' }}>Veja!</a>
            </div>
            <div className='pt-10'>
            <a href={href2}>
                    <img src='/img/sobre/github.png' className='size-[30px] '/>
                </a>
            </div>
        </div>
    </div>
);

const ProjetosCard = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-2 w-[300px] md:w-[600px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.70)]">
      <Slider {...settings}>
        <Card 
          imageSrc="./img/Projetos/telabrazilian.png" 
          title="Brazilian Race"
          description="Jogo de Corrida em 3D feito na Unity com C#"
          href="https://www.youtube.com/watch?v=ZCl7Gs1VGeI"
          href2="https://github.com/neusmoura07/BrazilianRace"
        />
        <Card 
          imageSrc="./img/Projetos/telajogo01.png" 
          title="Jogo em 2D"
          description="Jogo utilizado para aprendizado no GameMaker em 2D"
          href="https://www.youtube.com/watch?v=j3NGFnQjSAo" 
          href2="https://github.com/neusmoura07/JOGO2D"
        />
        <Card 
          imageSrc="./img/Projetos/hb_print.PNG" 
          title="HB Baterias"
          description="Site Simples"
          href="https://hb-baterias.vercel.app"
        />
      </Slider>
    </div>
  );
};

export default ProjetosCard;
