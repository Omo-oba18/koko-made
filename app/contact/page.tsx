"use client";

import { useRef, useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { useApp } from "@/context/AppContext";
import Reveal from "@/components/ui/Reveal";

// Define form data interface
interface FormData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

// Define errors interface
interface FormErrors {
  from_name: string;
  from_email: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
};

const INITIAL_ERRORS: FormErrors = {
  from_name: "",
  from_email: "",
  message: "",
};

// Type the validate function
function validate(form: FormData): Partial<FormErrors> {
  const errors: Partial<FormErrors> = {};

  if (!form.from_name.trim()) {
    errors.from_name = "Votre nom est requis";
  }

  if (!form.from_email.trim()) {
    errors.from_email = "Votre email est requis";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email)) {
    errors.from_email = "Adresse email invalide";
  }

  if (!form.message.trim() || form.message.trim().length < 15) {
    errors.message = "Votre message doit contenir au moins 15 caractères";
  }

  return errors;
}

export default function ContactPage() {
  const { stylist } = useApp();
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>(INITIAL_ERRORS);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...validationErrors }));
      return;
    }

    setStatus("loading");

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          stylist.emailjs.serviceId,
          stylist.emailjs.templateId,
          formRef.current,
          stylist.emailjs.publicKey,
        );
        setStatus("success");
        setForm(INITIAL_FORM);
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const whatsappUrl = `https://wa.me/${stylist.contact.whatsapp}?text=${encodeURIComponent(
    stylist.contact.whatsappMessage,
  )}`;

  return (
    <>
      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section
        className="bg-cream relative"
        style={{ paddingTop: "var(--nav-height)" }}
      >
        <div className="container-luxury pt-16 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <Reveal>
                <span className="label-tag block mb-6">Contact</span>
              </Reveal>
              <Reveal delay={1}>
                <h1
                  className="font-display font-light text-onyx"
                  style={{
                    fontSize: "clamp(3rem, 9vw, 7.5rem)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.025em",
                  }}
                >
                  Travaillons
                  <br />
                  <em className="font-light">ensemble</em>
                </h1>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={2}>
                <p className="font-body font-light text-muted text-sm leading-relaxed max-w-sm">
                  Un projet éditorial, une campagne, un défilé à organiser ?
                  Parlez-moi de votre vision — je vous répondrai dans les 48h.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ────────────────────────────────────── */}
      <section className="section-padding bg-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* ── LEFT — Form ─────────────────────────────────────── */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="label-tag block mb-10">
                  Envoyer un message
                </span>
              </Reveal>

              {/* Success state */}
              {status === "success" ? (
                <Reveal>
                  <div className="py-16 text-center border border-warm">
                    <div className="w-10 h-10 border border-gold rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-gold)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3
                      className="font-display font-light text-2xl text-onyx mb-3"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      Message envoyé
                    </h3>
                    <p className="font-body font-light text-muted text-sm">
                      Merci ! Je vous répondrai dans les 48 heures.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="btn-luxury mt-8"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                </Reveal>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Nom */}
                    <Reveal delay={1}>
                      <div className="form-field">
                        <label
                          className="label-tag block mb-3"
                          htmlFor="from_name"
                        >
                          Nom complet *
                        </label>
                        <input
                          id="from_name"
                          name="from_name"
                          type="text"
                          value={form.from_name}
                          onChange={handleChange}
                          placeholder="Madeleine KOKO"
                          className={`form-input ${errors.from_name ? "form-input-error" : ""}`}
                          autoComplete="name"
                        />
                        {errors.from_name && (
                          <p className="form-error-msg">{errors.from_name}</p>
                        )}
                      </div>
                    </Reveal>

                    {/* Email */}
                    <Reveal delay={2}>
                      <div className="form-field">
                        <label
                          className="label-tag block mb-3"
                          htmlFor="from_email"
                        >
                          Adresse email *
                        </label>
                        <input
                          id="from_email"
                          name="from_email"
                          type="email"
                          value={form.from_email}
                          onChange={handleChange}
                          placeholder="nom@email.com"
                          className={`form-input ${errors.from_email ? "form-input-error" : ""}`}
                          autoComplete="email"
                        />
                        {errors.from_email && (
                          <p className="form-error-msg">{errors.from_email}</p>
                        )}
                      </div>
                    </Reveal>
                  </div>

                  {/* Sujet */}
                  <Reveal delay={2}>
                    <div className="form-field mb-8">
                      <label className="label-tag block mb-3" htmlFor="subject">
                        Sujet
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Direction artistique, défilé, collaboration…"
                        className="form-input"
                      />
                    </div>
                  </Reveal>

                  {/* Message */}
                  <Reveal delay={3}>
                    <div className="form-field mb-12">
                      <label className="label-tag block mb-3" htmlFor="message">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet, vos besoins, les dates envisagées…"
                        className={`form-input resize-none ${errors.message ? "form-input-error" : ""}`}
                      />
                      {errors.message && (
                        <p className="form-error-msg">{errors.message}</p>
                      )}
                    </div>
                  </Reveal>

                  {/* Error message */}
                  {status === "error" && (
                    <p className="font-body font-light text-red-600 text-xs mb-6">
                      Une erreur est survenue. Veuillez réessayer ou me
                      contacter directement par email.
                    </p>
                  )}

                  {/* Submit */}
                  <Reveal delay={4}>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-luxury-fill w-full md:w-auto px-16 py-5 disabled:opacity-50 disabled:cursor-wait"
                    >
                      {status === "loading"
                        ? "Envoi en cours…"
                        : "Envoyer le message"}
                    </button>
                  </Reveal>
                </form>
              )}
            </div>

            {/* ── RIGHT — Info + WhatsApp ──────────────────────────── */}
            <div className="lg:col-span-5 flex flex-col gap-12">
              <Reveal delay={1}>
                {/* Info blocks */}
                <div className="flex flex-col gap-8">
                  {[
                    {
                      label: "Studio Paris",
                      value: stylist.contact.studio,
                    },
                    {
                      label: "Localisation",
                      value: stylist.contact.location,
                    },
                    {
                      label: "Email",
                      value: stylist.contact.email,
                      href: `mailto:${stylist.contact.email}`,
                    },
                    {
                      label: "Téléphone",
                      value: stylist.contact.phone,
                      href: `tel:${stylist.contact.phone}`,
                    },
                  ].map((item) => (
                    <div key={item.label} className="pb-8 border-b border-warm">
                      <p className="label-tag mb-2">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-body font-light text-onyx text-sm hover:text-gold transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body font-light text-onyx text-sm">
                          {item.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* WhatsApp */}
              <Reveal delay={2}>
                <div className="bg-cream p-8">
                  <p className="label-tag mb-4">Contact instantané</p>
                  <p className="font-body font-light text-muted text-sm leading-relaxed mb-8">
                    Pour une réponse rapide, contactez-moi directement sur
                    WhatsApp. Disponible du lundi au vendredi, 9h–18h.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp inline-flex"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Écrire sur WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
