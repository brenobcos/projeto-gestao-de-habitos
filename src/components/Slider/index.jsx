import React from "react";
import Slider from "react-slick";

import glide1 from "../../assets/glider1.png";
import glide2 from "../../assets/glider2.png";
import glide3 from "../../assets/glider3.png";
import glide4 from "../../assets/glider4.png";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div style={{ maxWidth: "300px", margin: "0 auto 50px" }}>
      <Slider {...settings}>
        <div className="container">
          <img src={glide1} alt="glide1" />
          <h3>Crie atividades a serem cumpridas</h3>
          <p>
            Faça seu planejamento para correr ainda mais longe. Por meio de
            pequenas atividades diária, vá muito mais longe!
          </p>
        </div>
        <div>
          <img src={glide2} alt="glide2" />
          <h3>Desenvolva hábitos saudáveis</h3>
          <p>
            Comece o dia com uma boa atividade física, coma melhor, descanse,
            durma e seja mais saudável!
          </p>
        </div>
        <div>
          <img src={glide3} alt="glide3" />
          <h3>Participe de grupos de corrida</h3>
          <p>
            Para ajudar você a ir ainda mais longe, participe dos nossos grupos
            de corrida. Encontre pessoas com o seu perfil e participe!
          </p>
        </div>
        <div>
          <img src={glide4} alt="glide4" />
          <h3>Defina metas para o seu grupo</h3>
          <p>
            Além das atividades diárias, você também pode definir metas com o
            seu grupo de corrida. Nada como ganhar uma motivação extra, certo?
          </p>
        </div>
      </Slider>
    </div>
  );
}
