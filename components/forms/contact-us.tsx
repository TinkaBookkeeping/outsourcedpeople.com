import { useForm } from "@mantine/form";
import { useRouter } from "next/router";

type formData = {
  [key: string]: string;
};

const ContactForm = () => {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      email: "",
      phone: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const encode = (data: formData) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");

  const onSubmit = (data: formData) => {
    const body = encode({
      "form-name": "contact-us",
      ...data,
    });
    // eslint-disable-next-line no-console
    console.log("onSubmit", data, body);

    // https://docs.netlify.com/forms/setup/
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    })
      .then(() => {
        router.push("/thank-you/");
      })
      .catch((_) => alert("Error"));
  };
  return (
    <form
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact-us"
      onSubmit={form.onSubmit((values) => onSubmit(values))}
    >
      <input
        required
        type="email"
        name="email"
        className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mr-2 placeholder-gray-500"
        placeholder="Your email…"
        aria-label="Your email…"
        {...form.getInputProps("email")}
      />
      <input
        type="phone"
        name="phone"
        className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mr-2 placeholder-gray-500"
        placeholder="Your phone number..."
        aria-label="Your phone number"
        {...form.getInputProps("phone")}
      />
      <textarea
        required
        name="message"
        className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mr-2 placeholder-gray-500 h-32"
        placeholder="Your inquiry"
        aria-label="Your inquiry..."
        {...form.getInputProps("message")}
      />

      <button
        className="btn bg-primary-600 text-white hover:bg-primary-700 mb-4"
        type="submit"
      >
        Get in touch
      </button>
    </form>
  );
};

export default ContactForm;
