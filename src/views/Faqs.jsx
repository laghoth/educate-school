import React, { useEffect } from "react";

function Faqs() {
  useEffect(() => {
    var acc = document.querySelectorAll(".accordion");

    for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        if (!this.classList.contains("active")) {
          this.classList.add("active");
          this.nextElementSibling.classList.add("panel-active");
        } else {
          this.classList.remove("active");
          this.nextElementSibling.classList.remove("panel-active");
        }
      });
    }
  });
  return (
    <div className="page-faqs">
      <div className="title-single-page">
        <div className="section-bg-opacity"></div>
        <h1>Faq</h1>
      </div>

      <div className="faq-liste">
        <button className="accordion">
          Why do students prefer online learning?
        </button>
        <div className="panel">
          <div className="panel-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eligendi, rem? Ut provident ex error facilis alias veritatis ea
              omnis tenetur voluptas laboriosam! Inventore praesentium ad
              corporis magni laboriosam sunt reiciendis. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Eligendi, rem? Ut provident ex
              error facilis alias veritatis ea omnis tenetur voluptas
              laboriosam! Inventore praesentium ad corporis magni laboriosam
              sunt reiciendis.
            </p>
            <img src="/Images/class_children.jpg" />
          </div>
        </div>

        <button className="accordion">
          How can I contact a school directly?
        </button>
        <div className="panel">
          <div className="panel-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eligendi, rem? Ut provident ex error facilis alias veritatis ea
              omnis tenetur voluptas laboriosam! Inventore praesentium ad
              corporis magni laboriosam sunt reiciendis. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Eligendi, rem? Ut provident ex
              error facilis alias veritatis ea omnis tenetur voluptas
              laboriosam! Inventore praesentium ad corporis magni laboriosam
              sunt reiciendis.
            </p>
            <img src="/Images/class_children.jpg" />
          </div>
        </div>

        <button className="accordion">Where should I study abroad?</button>
        <div className="panel">
          <div className="panel-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eligendi, rem? Ut provident ex error facilis alias veritatis ea
              omnis tenetur voluptas laboriosam! Inventore praesentium ad
              corporis magni laboriosam sunt reiciendis. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Eligendi, rem? Ut provident ex
              error facilis alias veritatis ea omnis tenetur voluptas
              laboriosam! Inventore praesentium ad corporis magni laboriosam
              sunt reiciendis.
            </p>
            <img src="/Images/class_children.jpg" />
          </div>
        </div>

        <button className="accordion">
          How do I find a school where I want to study?
        </button>
        <div className="panel">
          <div className="panel-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eligendi, rem? Ut provident ex error facilis alias veritatis ea
              omnis tenetur voluptas laboriosam! Inventore praesentium ad
              corporis magni laboriosam sunt reiciendis. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Eligendi, rem? Ut provident ex
              error facilis alias veritatis ea omnis tenetur voluptas
              laboriosam! Inventore praesentium ad corporis magni laboriosam
              sunt reiciendis.
            </p>
            <img src="/Images/class_children.jpg" />
          </div>
        </div>

        <button className="accordion">How does it create content?</button>
        <div className="panel">
          <div className="panel-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eligendi, rem? Ut provident ex error facilis alias veritatis ea
              omnis tenetur voluptas laboriosam! Inventore praesentium ad
              corporis magni laboriosam sunt reiciendis. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Eligendi, rem? Ut provident ex
              error facilis alias veritatis ea omnis tenetur voluptas
              laboriosam! Inventore praesentium ad corporis magni laboriosam
              sunt reiciendis.
            </p>
            <img src="/Images/class_children.jpg" />
          </div>
        </div>
      </div>

      <div className="news-lettre">
        <div className="news-texte">
          <h3>Join Our Newsletter</h3>
          <p>Subscribe our newsletter to get our latest update & news.</p>
        </div>
        <div className="news-form">
          <form action="">
            <div className="news-email">
              <input type="text" placeholder="Enter your email:" />
            </div>
            <div className="btn-send">
              <button>Subscribe Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
