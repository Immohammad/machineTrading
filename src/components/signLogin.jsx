import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignLogin = () => {
  const { register, handleSubmit, reset } = useForm();

  const createTask = (data) => {
    
  };
  return (
    <div id="containForm">
      <form onSubmit={handleSubmit(createTask)}>
        <div>
          <label className="form__label">عنوان</label>
          <input
            type="text"
            placeholder="اجباری"
            className="form__input"
            {...register("task")}
            required
            maxLength={120}
          />
        </div>
        <div>
          <label className="form__label">توضیحات</label>
          <textarea
            placeholder="اجباری"
            className="form__input"
            {...register("description")}
            required
            maxLength={250}
          ></textarea>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="submit"
            value="افزودن"
            className="submitButtons"
            style={{ justifyContent: "center" }}
          />
        </div>
      </form>
    </div>
  );
};
export default SignLogin;
