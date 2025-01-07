import React from "react";
import { useForm } from "react-hook-form";
import styles from "./CartForm.module.css";

export default function CartForm({price}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.total}>
        <span>Total Price: </span>
        <span>{price ? price.toFixed(2) : "0.00"}$</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.group} htmlFor="name">
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Name"
            {...register("name", {
              required: "This field cannot be empty",
            })}
          />
          {errors.name && (
            <span className={styles.message}>{errors.name.message}</span>
          )}
        </label>

        <label className={styles.group} htmlFor="email">
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", {
              required: "This field cannot be empty",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className={styles.message}>{errors.email.message}</span>
          )}
        </label>

        <label className={styles.group} htmlFor="phone">
          <input
            className={styles.input}
            type="text"
            name="phone"
            placeholder="Phone"
            {...register("phone", {
              required: "This field cannot be empty",
              pattern: {
                value: /^\+380\d{9}$/,
                message: "Format +380 followed by 9 digits",
              },
            })}
          />
          {errors.phone && (
            <span className={styles.message}>{errors.phone.message}</span>
          )}
        </label>

        <label className={styles.group} htmlFor="address">
          <input
            className={styles.input}
            type="text"
            name="address"
            placeholder="Address"
            {...register("address", {
              required: "This field cannot be empty",
              minLength: {
                value: 5,
                message: "Address should be at least 5 characters long",
              },
            })}
          />
          {errors.address && (
            <span className={styles.message}>{errors.address.message}</span>
          )}
        </label>

        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
}
