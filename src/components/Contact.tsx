import { useState, type FormEvent } from "react"
import { Phone, Mail, MapPin, Clock, Check, Loader2 } from "lucide-react"
import { Reveal } from "./Reveal"
import { cn } from "@/lib/utils"

const INFO = [
  { icon: Phone, label: "Phone", value: "+91 93427 21163", href: "tel:+919342721163" },
  { icon: Mail, label: "Email", value: "hr@phoenixxedu.com", href: "mailto:hr@phoenixxedu.com" },
  { icon: MapPin, label: "Office", value: "Trichy · Peelamedu · Coimbatore · Anthiyur" },
  { icon: Clock, label: "Hours", value: "Sun – Fri, 8:00 AM – 5:00 PM" },
]

const INTERESTS = [
  "NLP Workshops — Basic",
  "NLP Workshops — Practitioner",
  "NLP Workshops — Master Practitioner",
  "Life Skills Training",
  "Hospitality Training",
  "Retail & Sales Training",
  "Corporate Training",
  "Institution Programs",
  "Career Counselling",
  "I'm not sure — help me choose",
]

const inputCls =
  "mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"

// Formspree endpoint — create a form at https://formspree.io with its destination
// set to phoenixxittech@gmail.com, then replace "your-form-id" with the ID it gives you.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id"

export function Contact() {
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)
  const [failed, setFailed] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const firstName = String(fd.get("firstName") ?? "").trim()
    const lastName = String(fd.get("lastName") ?? "").trim()
    const email = String(fd.get("email") ?? "").trim()
    const message = String(fd.get("message") ?? "").trim()
    const next: Record<string, boolean> = {
      firstName: !firstName,
      lastName: !lastName,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      message: !message,
    }
    setErrors(next)
    if (Object.values(next).some(Boolean)) return

    setFailed(false)
    setSending(true)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setDone(true)
      form.reset()
      window.setTimeout(() => setDone(false), 6000)
    } catch {
      setFailed(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* info */}
          <div>
            <Reveal>
              <p className="eyebrow-line text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact Us</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Not sure which program is right for you?{" "}
                <span className="text-primary">Let's figure it out.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Just tell us where you are — we'll point you in the right direction.
              </p>
            </Reveal>

            <ul className="mt-10 space-y-5">
              {INFO.map((item, i) => (
                <Reveal as="li" key={item.label} delay={0.04 * i} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-card text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-card-foreground">Send us a message</h3>
              <p className="mt-1 text-sm text-muted-foreground">We'll get back to you within one business day.</p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-card-foreground">First name</label>
                  <input id="firstName" name="firstName" type="text" autoComplete="given-name" placeholder="First name"
                    className={cn(inputCls, errors.firstName && "border-destructive focus:border-destructive focus:ring-destructive/25")} />
                  {errors.firstName && <p className="mt-1 text-xs font-medium text-destructive">Please enter your first name.</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-card-foreground">Last name</label>
                  <input id="lastName" name="lastName" type="text" autoComplete="family-name" placeholder="Last name"
                    className={cn(inputCls, errors.lastName && "border-destructive focus:border-destructive focus:ring-destructive/25")} />
                  {errors.lastName && <p className="mt-1 text-xs font-medium text-destructive">Please enter your last name.</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-card-foreground">Phone</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 ..." className={inputCls} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com"
                    className={cn(inputCls, errors.email && "border-destructive focus:border-destructive focus:ring-destructive/25")} />
                  {errors.email && <p className="mt-1 text-xs font-medium text-destructive">Please enter a valid email address.</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="interest" className="block text-sm font-medium text-card-foreground">I'm interested in</label>
                  <select id="interest" name="interest" className={cn(inputCls, "cursor-pointer")}>
                    {INTERESTS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground">Message</label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us how we can help..."
                    className={cn(inputCls, "resize-none", errors.message && "border-destructive focus:border-destructive focus:ring-destructive/25")} />
                  {errors.message && <p className="mt-1 text-xs font-medium text-destructive">Please enter a message.</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sending ? (<><Loader2 className="h-5 w-5 animate-spin" /> Sending...</>) : "Submit Now"}
              </button>

              {done && (
                <p role="status" className="mt-4 flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
                  <Check className="h-5 w-5" /> Thank you! Your message has been received.
                </p>
              )}

              {failed && (
                <p role="alert" className="mt-4 rounded-lg bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
                  Something went wrong. Please try again, or email us directly at hr@phoenixxedu.com.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
