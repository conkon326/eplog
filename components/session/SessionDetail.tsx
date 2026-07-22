"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getSessions, setLastOpenedSessionId } from "@/lib/session-storage";
import type { Session, SessionPlayer } from "@/types/session";

type Props = {
  id: string;
};

function formatPlayerLabel(player: SessionPlayer | string) {
  if (typeof player === "string") {
    return player;
  }

  if (!player.name && !player.handleName) {
    return "";
  }

  if (!player.name) {
    return player.handleName ?? "";
  }

  if (!player.handleName) {
    return player.name;
  }

  return `${player.name}（${player.handleName}）`;
}

export default function SessionDetail({ id }: Props) {
  const [session, setSession] = useState<Session | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const allSessions = getSessions();
    const found = allSessions.find((item) => item.id === id) ?? null;
    /* eslint-disable react-hooks/set-state-in-effect */
    setSession(found);
    setLoaded(true);
    if (found) {
      setLastOpenedSessionId(found.id);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [id]);

  if (!loaded) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-12">
        <p className="text-sm text-[var(--text-light)]">読み込み中...</p>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-12">
        <p className="text-sm text-[var(--text-light)]">
          そのページはまだ見つかりませんでした。
        </p>

        <div className="mt-6">
          <Link
            href="/profile"
            className="text-sm text-[var(--text-light)] hover:underline"
          >
            ← 本棚へ戻る
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/profile"
        className="text-sm text-[var(--text-light)] hover:underline"
      >
        ← 本棚へ戻る
      </Link>

      <section className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-10">
        <p className="text-sm text-[var(--text-light)]">{session.system}</p>

        <h1 className="mt-4 font-serif text-4xl text-[var(--primary)]">
          {session.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="flex flex-col gap-2">
            {session.period ? (
              <div>
                <p className="text-xs text-[var(--text-light)]">期間</p>
                <p className="text-sm text-[var(--primary)]">{session.period}</p>
              </div>
            ) : null}
            {session.month ? (
              <div>
                <p className="text-xs text-[var(--text-light)]">月</p>
                <p className="text-sm text-[var(--primary)]">{session.month}</p>
              </div>
            ) : null}
            {!session.period && !session.month ? (
              <p className="text-sm text-[var(--text-light)]">{session.date}</p>
            ) : null}
          </div>
          {session.recordedAs ? (
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--primary)]">
              {session.recordedAs}として記録
            </span>
          ) : null}
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-6">
          <p className="text-sm text-[var(--text-light)]">KP</p>
          <p>{session.kp}</p>
        </div>

        {session.players && session.players.length > 0 && (
          <div className="mt-8 border-t border-[var(--border)] pt-6">
            <p className="text-sm text-[var(--text-light)]">PL / 同卓者</p>
            <ul className="mt-2 space-y-1">
              {session.players.map((player, index) => (
                <li key={`${formatPlayerLabel(player)}-${index}`}>
                  {formatPlayerLabel(player)}
                </li>
              ))}
            </ul>
          </div>
        )}

        {session.characters && session.characters.length > 0 && (
          <div className="mt-8 border-t border-[var(--border)] pt-6">
            <p className="text-sm text-[var(--text-light)]">登場したキャラクター</p>
            <ul className="mt-2 space-y-1">
              {session.characters.map((character) => (
                <li key={character}>{character}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 border-t border-[var(--border)] pt-8">
          <h2 className="font-serif text-xl text-[var(--primary)]">セッションの記録</h2>
          <blockquote className="mt-6 border-l-4 border-[var(--primary)] pl-6 italic leading-8 text-[var(--text-light)]">
            {session.memory?.trim() || "まだ記録されていません。"}
          </blockquote>
        </div>
      </section>
    </main>
  );
}
