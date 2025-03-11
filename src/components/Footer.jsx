import React from "react";
import Phone from "../assets/icons/phone";
import WhatsappBlue from "../assets/icons/whatsapp-blue";
import Email from "../assets/icons/email";
import Clock from "../assets/icons/clock";
import LinkedIn from "../assets/icons/linkedin";
import Twitter from "../assets/icons/twitter";
import Facebook from "../assets/icons/facebook";
import { Link } from "react-router";

const Footer = () => {
  const footerLinks = {
    lift_media: [
      "Inicio",
      "Quiénes somos",
      "Contacto",
      "Política de Privacidad",
    ],

    legal: ["Condiciones generales", "Política de Cookies", "Prensa"],
    contact: [
      {
        icon: <Phone />,
        text: "CONTACT",
      },
      {
        icon: <WhatsappBlue />,
        text: "Whatsapp",
      },
      {
        icon: <Email />,
        text: "hola@Liftmedia.com",
      },
      {
        icon: <Clock />,
        text: "Lunes a Viernes 09:00 a 20:00 horas",
      },
    ],
  };

  return (
    <div className="bg-neutral-100 min-h-[585px] w-full flex justify-center">
      <div className="flex flex-col gap-y-10">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 pt-20 pb-24 border-b border-b-gray-300 xl:px-0 px-5">
          {Object.keys(footerLinks).map((key) => (
            <div key={key} className="flex flex-col gap-y-5">
              <h5 className="uppercase font-inter font-semibold lg:text-xl md:text-lg text-base">
                {key.split("_").join(" ")}
              </h5>
              <ul className="flex flex-col gap-y-5">
                {footerLinks[key].map((item, index) => (
                  <li
                    className="font-inter text-gray-500 lg:text-base text-sm"
                    key={index}
                  >
                    {typeof item !== "object" ? (
                      item
                    ) : (
                      <div className="flex items-center gap-x-3 font-inter text-gray-500">
                        {item.icon}{" "}
                        <span className="text-gray-500 font-inter lg:text-base text-sm">
                          {item.text}
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex justify-center gap-x-5 items-center">
            <Link to="#">
              <LinkedIn />
            </Link>
            <Link to="#">
              <Twitter />
            </Link>
            <Link to="#">
              <Facebook />
            </Link>
          </div>
          <div className="flex flex-col gap-y-3 text-[#6C6F77] font-inter text-center lg:text-base text-sm sm:px-0 px-5 sm:pb-0 pb-2">
            <p> © 2025 Lift media Online S.L.</p>
            <p> Ronda Sant Pere 52, 08010 Barcelona, </p>
            <p>
              {" "}
              Inscripción en el Registro Mercantil de Barcelona. Tomo 46606,
              Folio 37, Hoja 525271.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
