"use client";
import { FormEvent, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase";

const services = ["Remote IT Support", "Cybersecurity", "Network Management", "Microsoft 365", "Website Management", "AI & Workflow Automation", "VoIP / PBX", "Starlink Support"];

export default function LeadForm() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setBusy(true); setStatus("");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const supabase = getSupabaseBrowserClient();
    if (!supabase) { setStatus("Supabase is not configured yet. Add the environment variables first."); setBusy(false); return; }
    const { error } = await supabase.from("leads").insert(payload);
    if (error) setStatus(error.message);
    else { setStatus("Thank you. Your request has been received."); e.currentTarget.reset(); }
    setBusy(false);
  }

  return (
    <form onSubmit={submit} className="card grid gap-4 p-6 sm:grid-cols-2">
      <input required name="full_name" placeholder="Full name" className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3" />
      <input required type="email" name="email" placeholder="Work email" className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3" />
      <input name="company" placeholder="Company" className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3" />
      <input name="country" placeholder="Country" className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3" />
      <select required name="service" className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 sm:col-span-2"><option value="">Choose a service</option>{services.map(s => <option key={s}>{s}</option>)}</select>
      <textarea required name="message" rows={5} placeholder="Describe the problem you want us to solve" className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 sm:col-span-2" />
      <button disabled={busy} className="btn-primary sm:col-span-2">{busy ? "Sending..." : "Request a consultation"}</button>
      {status && <p className="text-sm text-cyan-300 sm:col-span-2">{status}</p>}
    </form>
  );
}
