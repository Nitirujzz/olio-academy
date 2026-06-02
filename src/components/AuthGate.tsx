// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
import { supabase, loadProgress, saveProgress } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
// @ts-ignore
import OlioAcademy from "./OlioAcademy";

export default function AuthGate() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [progress, setProgress] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    loadProgress(user.id).then((data) => setProgress(data));
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (err: any) {
      setError(err.message);
    }
    setSubmitting(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setProgress(null);
  };

  const handleSaveProgress = async (name: string, completed: object, scores: object) => {
    if (!user) return;
    await saveProgress(user.id, name, completed, scores);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <div className="text-5xl mb-4">🫒</div>
          <div className="text-stone-400 text-sm tracking-widest uppercase">Loading...</div>
        </div>
      </div>
    );
  }

  if (user) {
    return (
      <OlioAcademy
        initialName={progress?.student_name ?? ""}
        initialCompleted={progress?.completed_modules ?? {}}
        initialScores={progress?.module_scores ?? {}}
        onSaveProgress={handleSaveProgress}
        onSignOut={handleSignOut}
        userEmail={user.email ?? ""}
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-[#eef2e0] px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3D4E2E] mb-4">
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
              <path d="M 68 18 C 50 12, 28 22, 18 42 C 8 62, 18 84, 38 90 C 60 96, 84 84, 88 62 C 90 48, 86 36, 78 28" stroke="white" strokeWidth="5" strokeLinecap="round" />
              <circle cx="80" cy="22" r="4.5" fill="#C9A961" />
            </svg>
          </div>
          <h1 className="text-3xl font-light italic text-[#2A2A24] tracking-tight">Olio</h1>
          <p className="text-xs tracking-[0.3em] uppercase text-[#3D4E2E] font-medium mt-1">Academy</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-100">
          <h2 className="text-xl font-semibold text-[#2A2A24] mb-1">
            {mode === "login" ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
          </h2>
          <p className="text-stone-400 text-sm mb-6">
            {mode === "login"
              ? "Progress ของคุณถูกบันทึกไว้แล้ว"
              : "เริ่มต้น Sommelier Path ของคุณ"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-600 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3D4E2E]/30 focus:border-[#3D4E2E]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-600 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                minLength={6}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3D4E2E]/30 focus:border-[#3D4E2E]"
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs bg-red-50 px-3 py-2 rounded-lg">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-colors disabled:opacity-50"
              style={{ background: "#3D4E2E" }}
            >
              {submitting ? "กำลังโหลด..." : mode === "login" ? "เข้าสู่ระบบ →" : "สมัครสมาชิก →"}
            </button>
          </form>

          <div className="mt-5 text-center">
            <button
              onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError(""); }}
              className="text-sm text-stone-400 hover:text-[#3D4E2E] transition-colors"
            >
              {mode === "login" ? "ยังไม่มีบัญชี? สมัครเลย" : "มีบัญชีแล้ว? เข้าสู่ระบบ"}
            </button>
          </div>
        </div>

        <p className="text-center text-stone-400 text-xs mt-6">
          🔒 Progress ถูกบันทึกใน Supabase · ใช้ได้ทุกเครื่อง
        </p>
      </div>
    </div>
  );
}
