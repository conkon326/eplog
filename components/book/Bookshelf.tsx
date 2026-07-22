"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import SessionCard from "@/components/session/SessionCard";
import { getLastOpenedSessionId, getSessions } from "@/lib/session-storage";
import type { Session } from "@/types/session";

type BookshelfProps = {
  sessions: Session[];
};

/**
 * Bookshelf コンポーネント
 *
 * ユーザーが歩んできたTRPGセッションを
 * 本棚のように並べて表示する。
 *
 * eplogではセッションは投稿ではなく、
 * 一冊ずつ増えていく「物語の記録」として扱う。
 */
export default function Bookshelf({
  sessions,
}: BookshelfProps) {
  const [books, setBooks] = useState<Session[]>(sessions);
  const [lastOpened, setLastOpened] = useState<Session | null>(null);

  useEffect(() => {
    const sessions = getSessions();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBooks(sessions);

    const lastOpenedId = getLastOpenedSessionId();
    if (lastOpenedId) {
      const found = sessions.find(
        (session) => session.id === lastOpenedId
      );
      if (found) {
        setLastOpened(found);
      }
    }
  }, []);

  return (
    <section>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-serif text-2xl text-[var(--primary)]">
            本棚
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--text-light)]">
            過去に残した卓のページを、ゆっくりめくっていきましょう。
          </p>
        </div>

      </div>

      {lastOpened ? (
        <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-sm font-medium text-[var(--primary)]">
            最後に開いたページ
          </p>
          <p className="mt-2 text-sm leading-7 text-[var(--text-light)]">
            以前に開いたページをもう一度開いて、記憶の続きをたどれます。
          </p>
          <Link
            href={`/sessions/${lastOpened.id}`}
            className="mt-5 inline-block rounded-full border border-[var(--primary)] bg-[var(--surface)] px-6 py-2 text-sm text-[var(--primary)] transition-all duration-500 hover:-translate-y-1 hover:bg-[var(--primary)] hover:text-white"
          >
            {lastOpened.title} を開く
          </Link>
        </div>
      ) : null}

        {books.length === 0 ? (
        <p className="mt-8 leading-7 text-[var(--text-light)]">
          まだ物語はありません。
          <br />
          最初の一冊がここに並びます。
        </p>
      ) : (
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {books.map((session) => (
            <SessionCard key={session.id} {...session} />
          ))}
        </div>
      )}
    </section>
  );
}