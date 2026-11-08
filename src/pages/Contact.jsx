import { useState } from "react";
import { Button } from "@/components/base/buttons/button";
import PageHeader from "../components/PageHeader";

const inputClass =
  "w-full rounded-lg border border-primary bg-primary px-3.5 py-2.5 text-primary shadow-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (name.trim() === "") validationErrors.name = "Name is required";
    if (email.trim() === "") validationErrors.email = "Email is required";
    else if (!email.includes("@")) validationErrors.email = "Enter a valid email";
    if (subject.trim() === "") validationErrors.subject = "Subject is required";
    if (message.trim() === "") validationErrors.message = "Message is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      const formData = { name, email, subject, message };
      console.log(formData);
      setSuccess("Your message has been sent successfully!");
      setErrors({});
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <PageHeader
        label="Contact us"
        title="We'd love to hear from you"
        text="Want us to add a movie, or found something that doesn't work? Fill in the form and we'll get back to you."
      />

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-secondary">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={inputClass} />
          {errors.name && <p className="mt-1.5 text-sm text-error-primary">{errors.name}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-secondary">Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className={inputClass} />
          {errors.email && <p className="mt-1.5 text-sm text-error-primary">{errors.email}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-secondary">Subject</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="What is it about?" className={inputClass} />
          {errors.subject && <p className="mt-1.5 text-sm text-error-primary">{errors.subject}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-secondary">Message</label>
          <textarea rows="5" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message..." className={inputClass} />
          {errors.message && <p className="mt-1.5 text-sm text-error-primary">{errors.message}</p>}
        </div>

        <Button type="submit" size="lg">Send message</Button>

        {success && <p className="rounded-lg bg-success-primary p-3 text-sm font-medium text-success-primary">{success}</p>}
      </form>
    </div>
  );
}

export default Contact;
