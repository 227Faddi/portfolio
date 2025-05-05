"use client";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";

export const ContactForm = () => {
  const formId = process.env.NEXT_PUBLIC_FORM;
  const [state, handleSubmit] = useForm(formId || "yourkey");

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto p-6 border rounded-2xl shadow-sm"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          required
        />
        <ValidationError
          className="text-red-500"
          prefix="Name"
          field="name"
          errors={state.errors}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
        />
        <ValidationError
          className="text-red-500"
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          rows={4}
          required
        />
        <ValidationError
          className="text-red-500"
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      {state.succeeded ? (
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold">Thank you!</h2>
          <p>Your message has been successfully sent.</p>
        </div>
      ) : (
        <PulsatingButton
          type="submit"
          className="w-full"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </PulsatingButton>
      )}
    </form>
  );
};
