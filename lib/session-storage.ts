import type { Session } from "@/types/session";
import { sessions as initialSessions } from "@/data/sessions";

const STORAGE_KEY = "eplog.sessions";
const LAST_OPENED_KEY = "eplog.lastOpenedSession";

export function getStoredSessions(): Session[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as Session[];
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;
  } catch {
    return [];
  }
}

export function getSessions(): Session[] {
  const stored = getStoredSessions();

  if (stored.length === 0) {
    return sortSessionsByDate(initialSessions);
  }

  const sessionById = new Map<string, Session>();

  for (const session of initialSessions) {
    sessionById.set(session.id, session);
  }

  for (const session of stored) {
    sessionById.set(session.id, session);
  }

  return sortSessionsByDate(Array.from(sessionById.values()));
}

function getSessionSortValue(dateText: string): number {
  const normalized = dateText.trim();
  if (!normalized) {
    return Number.NaN;
  }

  const monthMatch = normalized.match(/^(\d{4}-\d{2})$/);
  if (monthMatch) {
    return Date.parse(`${monthMatch[1]}-01T23:59:59.999Z`);
  }

  const rangeMatch = normalized.match(
    /^(\d{4}-\d{2}(?:-\d{2})?)\s*[〜~]\s*(\d{4}-\d{2}(?:-\d{2})?)$/
  );
  if (rangeMatch) {
    return getSessionSortValue(rangeMatch[2]);
  }

  return Date.parse(`${normalized}T23:59:59.999Z`);
}

function sortSessionsByDate(sessions: Session[]) {
  return [...sessions].sort((a, b) => {
    const aTime = getSessionSortValue(a.date);
    const bTime = getSessionSortValue(b.date);

    if (Number.isNaN(aTime) && Number.isNaN(bTime)) {
      return 0;
    }
    if (Number.isNaN(aTime)) {
      return 1;
    }
    if (Number.isNaN(bTime)) {
      return -1;
    }

    return bTime - aTime;
  });
}

export function saveSession(session: Session) {
  if (typeof window === "undefined") {
    return;
  }

  const stored = getStoredSessions();
  const nextStored = [...stored.filter((item) => item.id !== session.id), session];
  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(nextStored)
  );
}

export function getLastOpenedSessionId(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(LAST_OPENED_KEY);
}

export function setLastOpenedSessionId(id: string) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(LAST_OPENED_KEY, id);
}
