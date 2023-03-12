import logo from "./assets/logo.png";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBFooter, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
// import { toast } from "react-toastify";

export default function Footer() {
  //i used mdbreact library for creating this footer.
  const handleClick = () => {
    // toast("هنوز شبکه اجتماعی نزدیم :)");
  };
  return (
    <MDBFooter
      className="bg-dark text-center text-white"
      style={{ marginTop: "30pt" ,   fontFamily: 'regular'}}
    >
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <img src={logo} width="110px" style={{ marginLeft: "25px" }} />
          <MDBIcon
            fab
            icon="twitter"
            className="socials"
            onClick={handleClick}
          />
          <MDBIcon
            fab
            icon="google"
            className="socials"
            onClick={handleClick}
          />
          <MDBIcon
            fab
            icon="instagram"
            className="socials"
            onClick={handleClick}
          />
          <MDBIcon
            fab
            icon="linkedin-in"
            className="socials"
            onClick={handleClick}
          />
          <MDBIcon
            fab
            icon="telegram"
            className="socials"
            onClick={handleClick}
          />
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        تمامی حقوق این وب‌سایت متعلق به ماشین‌تریدینگ می‌باشد.
      </div>
    </MDBFooter>
  );
}
