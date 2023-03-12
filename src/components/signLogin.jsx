// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

// const SignLogin = () => {
//   const { register, handleSubmit, reset } = useForm();

//   const createTask = (data) => {};
//   return (
//     <div id="containForm">
//       <form onSubmit={handleSubmit(createTask)}>
//         <div>
//           <label className="form__label">عنوان</label>
//           <input
//             type="text"
//             placeholder="اجباری"
//             className="form__input"
//             {...register("task")}
//             required
//             maxLength={120}
//           />
//         </div>
//         <div>
//           <label className="form__label">توضیحات</label>
//           <textarea
//             placeholder="اجباری"
//             className="form__input"
//             {...register("description")}
//             required
//             maxLength={250}
//           ></textarea>
//         </div>
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <input
//             type="submit"
//             value="افزودن"
//             className="submitButtons"
//             style={{ justifyContent: "center" }}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };
// export default SignLogin;
import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import photo from "./assets/signup.jpg";

function App() {
  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                ثبت نام
              </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  placeholder="نام و نام خانوادگی"
                  id="form1"
                  type="text"
                  className="w-100"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput placeholder="ایمیل" id="form2" type="email" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput placeholder="رمز عبور" id="form3" type="password" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  placeholder="تکرار رمز عبور"
                  id="form4"
                  type="password"
                />
              </div>

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="شرایط عضویت در سایت را می‌پذیرم."
                />
              </div>

              <MDBBtn className="mb-4" size="lg">
                ثبت نام
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src={photo}
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
