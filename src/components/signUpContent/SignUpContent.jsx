import React from "react";
import { useForm } from "@mantine/form";
import { TextInput, NativeSelect, PasswordInput, Text } from "@mantine/core";
import { Link } from "react-router-dom";

function SignUpContent() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      role: "",
      password: "",
    },

    validate: {
      name: (value) => !value.trim() && "Password is required!",
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email address"),
      role: (value) => value === "" && "Select Your Role" || value === "Select Your Role" && "Please select your role",
      password: (value) => !value.trim() && "Password is required!",
    },
  });

  const handleSubmit = () => {
    const {hasErrors} = form.validate()

    if(!hasErrors) {
        console.log(form.values)
    }
  }

  return (
    <div className="w-full md:w-2/4 xl:w-1/3 p-6 sm:p-8 rounded-lg flex flex-col shadow-[0px_0px_6px_rgb(0,0,0,0.1)]">
      <h2 className="text-3xl font-medium text-center">Sign Up</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}>
        <TextInput
          withAsterisk
          label="Name"
          mt="md"
          size="md"
          placeholder="Enter your name"
          {...form.getInputProps("name")}
        />
        <TextInput
          withAsterisk
          mt="md"
          size="md"
          label="Email"
          placeholder="Enter your email"
          {...form.getInputProps("email")}
        />

        <NativeSelect
          data={["Select Your Role", "owner", "renter"]}
          withAsterisk
          label="Role"
          mt="md"
          size="md"
          {...form.getInputProps("role")}
        />

        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          {...form.getInputProps("password")}
        />
        <button className="mt-6 w-full bg-primaryColor bg-opacity-90 hover:bg-opacity-100 px-4 py-3 text-sm flex items-center justify-center rounded-xl text-white duration-100 ">
          Sign Up
        </button>
      </form>
      <Text ta="center" mt="md">
          I have an account?{' '}
          <Link to="/Login" className="text-primaryColor">
            login
          </Link>
        </Text>
    </div>
  );
}

export default SignUpContent;
