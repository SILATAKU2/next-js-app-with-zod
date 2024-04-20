"use client";
// import { useMutation } from "@tanstack/react-query";
import { TSignUpSchema, signUpSchema } from "@/library/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
    
  //React hook forms
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  

  const onSubmit = async (data: TSignUpSchema) => {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    if (!response.ok) {
      alert("Submitting form failed!");
      return;
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2" style={{ maxWidth: "600px", margin: "0 auto",  padding: "2rem" }}>
      <input
        {...register("firstName")}
        type="text"
        placeholder="First Name"
        className={`px-4 py-2 rounded ${errors.firstName && "border-red-500"}`}
      />
      {errors.firstName && (
        <p className="text-red-500">{errors.firstName.message}</p>
      )}
      <input
        {...register("email")}
        type="email"
        maxLength={50}
        placeholder="Email"
        className="px-4 py-2 rounded"
      />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}

      <select
        {...register("ageGroup")}
        className={`px-4 py-2 rounded ${errors.ageGroup && "border-red-500"}`}
      >
        <option value="">Select Age Group</option>
        <option value="adult">Adult</option>
        <option value="child">Child</option>
        <option value="infant">Infant</option>
      </select>
      {errors.ageGroup && (
        <p className="text-red-500">{errors.ageGroup.message}</p>
      )}

      <input
        {...register("address")}
        type="text"
        placeholder="Address"
        className="px-4 py-2 rounded"
      />

      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
