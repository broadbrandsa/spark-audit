"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const CORRECT_CODE = "1003";
const STORAGE_KEY = "bb_spark_audit_2026_unlocked";

export function LockScreen({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [digits, setDigits] = useState<string[]>(["", "", "", ""]);
  const [error, setError] = useState(false);
  const [exiting, setExiting] = useState(false);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      setUnlocked(saved === "true");
    } catch {
      setUnlocked(false);
    }
  }, []);

  const handleDelete = useCallback(() => {
    setDigits((prev) => {
      const next = [...prev];
      for (let i = 3; i >= 0; i--) {
        if (next[i] !== "") {
          next[i] = "";
          break;
        }
      }
      return next;
    });
  }, []);

  const handleDigit = useCallback(
    (d: string) => {
      if (error) return;
      setDigits((prev) => {
        const next = [...prev];
        const idx = next.findIndex((v) => v === "");
        if (idx === -1) return prev;
        next[idx] = d;

        if (idx === 3) {
          const code = next.join("");
          if (code === CORRECT_CODE) {
            setTimeout(() => {
              setExiting(true);
              setTimeout(() => {
                try {
                  localStorage.setItem(STORAGE_KEY, "true");
                } catch {}
                setUnlocked(true);
              }, 900);
            }, 200);
          } else {
            setTimeout(() => {
              setError(true);
              setTimeout(() => {
                setError(false);
                setDigits(["", "", "", ""]);
              }, 700);
            }, 100);
          }
        }
        return next;
      });
    },
    [error]
  );

  useEffect(() => {
    if (unlocked) return;
    const onKey = (e: KeyboardEvent) => {
      if (document.activeElement === hiddenInputRef.current) return;
      if (e.key >= "0" && e.key <= "9") handleDigit(e.key);
      if (e.key === "Backspace") handleDelete();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [unlocked, handleDigit, handleDelete]);

  const handleHiddenInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (!val) return;
      const char = val[val.length - 1];
      if (char >= "0" && char <= "9") handleDigit(char);
      e.target.value = "";
    },
    [handleDigit]
  );

  if (unlocked === null) return null;
  if (unlocked) return <>{children}</>;

  return (
    <>
      <div
        className={`lock-overlay grain justify-start md:justify-between ${exiting ? "lock-exiting" : ""} ${error ? "lock-shake" : ""}`}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#2B0430",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 0 }}>
          <Image
            src="/images/IMG_2597_EDITED.JPG"
            alt=""
            fill
            className="object-cover object-center"
            style={{ opacity: 0.35 }}
            priority
          />
          {/* Radial vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 10%, #2B0430 100%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "55%",
              background: "linear-gradient(to top, #2B0430 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Orange glow top */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: "45vh",
            background:
              "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(255,72,0,0.08) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        {/* ── Top: badge + logos ── */}
        <div
          className="relative flex flex-col items-center gap-4 mt-8 md:mt-10"
          style={{ zIndex: 1 }}
        >
          {/* Confidential badge */}
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{
              background: "rgba(31,73,201,0.12)",
              border: "1px solid rgba(31,73,201,0.3)",
              color: "#ffffff",
              fontFamily: "var(--font-body)",
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "#ff4800" }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ background: "#ff4800" }}
              />
            </span>
            Confidential · March 2026
          </span>

          {/* Logos row */}
          <div className="flex items-center gap-5">
            <div className="relative w-44 h-12">
              <Image
                src="/Logos/SPARK.webp"
                alt="SPARK Schools"
                fill
                className="object-contain object-center"
              />
            </div>
            <div
              className="w-px self-stretch"
              style={{ background: "rgba(255,255,255,0.15)" }}
            />
            <div className="relative w-32 h-7">
              <Image
                src="/Logos/Broadbrand.png"
                alt="Broadbrand"
                fill
                className="object-contain object-center"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.8 }}
              />
            </div>
          </div>
        </div>

        {/* ── Centre: headline ── */}
        <div
          className="relative md:flex-1 flex flex-col items-center justify-center px-6 text-center mt-8 md:mt-0"
          style={{ zIndex: 1 }}
        >
          <h1
            className="font-bold leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 7vw, 6.5rem)",
              color: "#ffffff",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              maxWidth: "14ch",
            }}
          >
            ENTER CODE
            <br />
            TO ACCESS
            <br />
            <span style={{ color: "rgba(255,255,255,0.2)" }}>THE AUDIT</span>
          </h1>
        </div>

        {/* ── Bottom: digit boxes ── */}
        <div
          className="relative w-full flex flex-col items-center pb-10 md:pb-16 px-6 gap-5 mt-6 md:mt-0"
          style={{ zIndex: 1 }}
        >
          {/* Hidden input for mobile keyboard */}
          <input
            ref={hiddenInputRef}
            type="tel"
            inputMode="numeric"
            onChange={handleHiddenInput}
            style={{
              position: "absolute",
              opacity: 0,
              width: "1px",
              height: "1px",
              pointerEvents: "none",
            }}
            autoComplete="off"
          />

          {/* 4 digit display boxes */}
          <div
            className="flex items-center gap-3 md:gap-5 cursor-pointer"
            onClick={() => hiddenInputRef.current?.focus()}
          >
            {digits.map((d, i) => {
              const isCurrent = d === "" && digits.slice(0, i).every((v) => v !== "");
              return (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-2xl transition-all duration-200"
                  style={{
                    width: "clamp(3.8rem, 15vw, 7.5rem)",
                    height: "clamp(4.8rem, 19vw, 9.5rem)",
                    background: error
                      ? "rgba(239,68,68,0.15)"
                      : d
                      ? "rgba(31,73,201,0.14)"
                      : isCurrent
                      ? "rgba(31,73,201,0.07)"
                      : "rgba(255,255,255,0.04)",
                    border: error
                      ? "2px solid rgba(239,68,68,0.5)"
                      : d
                      ? "2px solid rgba(31,73,201,0.5)"
                      : isCurrent
                      ? "2px solid rgba(31,73,201,0.25)"
                      : "2px solid rgba(255,255,255,0.08)",
                    boxShadow:
                      d && !error ? "0 0 30px rgba(31,73,201,0.2)" : "none",
                  }}
                >
                  <span
                    className="font-bold leading-none"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(2rem, 9vw, 5rem)",
                      letterSpacing: "-0.04em",
                      color: error
                        ? "rgba(239,68,68,0.9)"
                        : d
                        ? "#ffffff"
                        : "rgba(255,255,255,0.15)",
                    }}
                  >
                    {d || (isCurrent ? "_" : "·")}
                  </span>
                </div>
              );
            })}
          </div>

          {error ? (
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "rgba(239,68,68,0.8)", fontFamily: "var(--font-body)" }}
            >
              Incorrect code - try again
            </p>
          ) : (
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-body)" }}
            >
              Enter your access code
            </p>
          )}
        </div>
      </div>

      {/* Site rendered but hidden behind lock */}
      <div style={{ visibility: "hidden", pointerEvents: "none" }}>
        {children}
      </div>
    </>
  );
}
