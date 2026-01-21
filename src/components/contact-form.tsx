"use client";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";

import { DATA } from "@/data/resume";

export const ContactForm = () => {
  const formId = process.env.NEXT_PUBLIC_FORM;
  const [state, handleSubmit] = useForm(formId || "yourkey");

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto p-6 border rounded-3xl shadow-sm"
    >
      <div className="space-y-2">
        <Label htmlFor="name">{DATA.other.contactForm.name.label}</Label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder={DATA.other.contactForm.name.placeholder}
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
        <Label htmlFor="email">{DATA.other.contactForm.email.label}</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder={DATA.other.contactForm.email.placeholder}
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
        <Label htmlFor="message">{DATA.other.contactForm.message.label}</Label>
        <Textarea
          id="message"
          name="message"
          placeholder={DATA.other.contactForm.message.placeholder}
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
          <h2 className="text-xl font-semibold">
            {DATA.other.contactForm.success.title}
          </h2>
          <p>{DATA.other.contactForm.success.description}</p>
        </div>
      ) : (
        <PulsatingButton
          type="submit"
          className="w-full"
          disabled={state.submitting}
        >
          {state.submitting
            ? DATA.other.contactForm.submit.sending
            : DATA.other.contactForm.submit.default}
        </PulsatingButton>
      )}
    </form>
  );
};
