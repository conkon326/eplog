"use client";

import { useEffect, useState } from "react";

export type SessionDraft = {
  title: string;
  system: string;
  period: string;
  month: string;
  characters: string;
  memory: string;
};

const DEFAULT_DRAFT: SessionDraft = {
  title: "",
  system: "",
  period: "",
  month: "",
  characters: "",
  memory: "",
};

export function useSessionDraft(storageKey = "eplog.sessionDraft") {
  const [draft, setDraft] = useState<SessionDraft>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_DRAFT;
    }

    try {
      const raw = window.sessionStorage.getItem(storageKey);
      if (!raw) {
        return DEFAULT_DRAFT;
      }

      const parsed = JSON.parse(raw) as Partial<SessionDraft>;
      return {
        ...DEFAULT_DRAFT,
        ...parsed,
      };
    } catch {
      window.sessionStorage.removeItem(storageKey);
      return DEFAULT_DRAFT;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.sessionStorage.setItem(storageKey, JSON.stringify(draft));
  }, [draft, storageKey]);

  const resetDraft = () => {
    setDraft(DEFAULT_DRAFT);

    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(storageKey);
    }
  };

  return [draft, setDraft, resetDraft] as const;
}
