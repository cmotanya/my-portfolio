import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmailSchema, TSendEmailSchema } from "@/app/utils/schema";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconSend,
  IconCheck,
  IconX,
} from "@tabler/icons-react";
import ContactInformation from "./contact-information";

function ContactPage({ accessKey }: { accessKey: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<TSendEmailSchema>({ resolver: zodResolver(sendEmailSchema) });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<TSendEmailSchema> = async (data) => {
    const formData = new FormData();
    formData.append("access_key", accessKey);

    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    /*  Try...await function that checks for response and errors from the server. */
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setIsSuccess(true);
        setMessage(res.message);
      } else {
        setIsSuccess(false);
        setMessage("Oops, something went wrong!");
      }
    } catch (err) {
      setIsSuccess(false);
      setMessage("Network error: Please check your internet connection.");
      console.error(err);
    }
  };

  type TInputField = {
    name: keyof TSendEmailSchema;
    type: string;
    placeholder: string;
    icon: React.ElementType;
  };

  const InputField = ({ name, type, placeholder, icon: Icon }: TInputField) => (
    <div className="mb-4">
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-800">
        {placeholder}
      </label>
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 top-1/2 -translate-y-1/2 pl-4">
          <Icon
            className="h-5 w-5 text-400 transition-colors group-focus-within:text-700"
            stroke={1.5}
          />
        </div>
        <input
          {...register(name)}
          type={type}
          id={name}
          placeholder={placeholder}
          className="block w-full rounded-md border border-accent py-3 pl-10 pr-4 text-sm leading-5 placeholder-500 transition-all focus:border-secondary focus:shadow-md focus:outline-none"
        />
      </div>
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">
          {errors[name].message}
        </p>
      )}
    </div>
  );

  return (
    <div className="mx-auto max-w-full">
      <h2 className="mb-4 pt-4 text-3xl font-medium md:text-center">
        Send Us A Message
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <div className="overflow-hidden">
          <div className="px-2 py-4 md:py-8">
            <h3 className="mb-6 text-xl font-medium text-gray-900">
              Send us a direct message
            </h3>
            {!isSubmitSuccessful && (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <InputField
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  icon={IconUser}
                />
                <InputField
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  icon={IconMail}
                />
                <InputField
                  name="mobile"
                  type="tel"
                  placeholder="Your Phone"
                  icon={IconPhone}
                />

                <div className="mb-4">
                  <label
                    htmlFor="textarea"
                    className="mb-1 block text-sm font-medium text-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    {...register("textarea")}
                    id="textarea"
                    rows={4}
                    className="block w-full rounded-md border border-accent px-3 py-2 text-sm leading-5 placeholder-gray-500 focus:outline-none focus:ring-secondary"
                    placeholder="Enter your message..."
                  />
                  {errors.textarea && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                      {errors.textarea.message}
                    </p>
                  )}
                </div>

                <div className="mt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ml-auto flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-blue-400 md:w-fit"
                  >
                    {isSubmitting ? (
                      <svg
                        className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <IconSend className="mr-2 h-5 w-5" stroke={1.5} />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}

            {isSubmitSuccessful && isSuccess && (
              <div className="text-center">
                <IconCheck
                  className="mx-auto h-12 w-12 text-green-400"
                  stroke={1.5}
                />
                <h3 className="mt-2 text-xl font-medium text-gray-900 dark:text-white">
                  {message}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  We&apos;ll get back to you soon.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => reset()}
                    className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            )}

            {isSubmitSuccessful && !isSuccess && (
              <div className="text-center">
                <IconX
                  className="mx-auto h-12 w-12 text-red-400"
                  stroke={1.5}
                />
                <h3 className="mt-2 text-xl font-medium text-gray-900">
                  Submission Failed
                </h3>
                <p className="mt-1 text-sm text-gray-500">{message}</p>
                <div className="mt-6">
                  <button
                    onClick={() => reset()}
                    className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Try again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <ContactInformation />
      </div>
    </div>
  );
}

export default ContactPage;
