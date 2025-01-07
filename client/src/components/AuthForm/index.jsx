import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./AuthForm.module.css";
import { useAuth } from "../../hooks/useAuth";

export default function AuthForm() {
  const { message, fetchAuth, toggleMode, isLoginMode } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
    },
  });


  const onSubmit = async (data) => {
    fetchAuth(data);
    reset();
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{isLoginMode ? "Login" : "Registration"}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.group_wrapper}>
          <label className={styles.group} htmlFor="name">
            <input
              className={styles.input}
              type="text"
              name="username"
              placeholder="Name"
              {...register("username", {
                required: "This field cannot be empty",
              })}
            />
            {errors.username && (
              <span className={styles.message}>{errors.username.message}</span>
            )}
          </label>

          <label className={styles.group} htmlFor="email">
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="password"
              {...register("password", {
                required: "This field cannot be empty",
              })}
            />
            {errors.password && (
              <span className={styles.message}>{errors.password.message}</span>
            )}
          </label>
        </div>
        <button type="submit" className={styles.button}>
          {isLoginMode ? "Login" : "Registration"}
        </button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
      <button onClick={toggleMode} className={styles.switch}>
        {isLoginMode ? "Go to registration" : "Go to the login"}
      </button>
    </section>
  );
}
