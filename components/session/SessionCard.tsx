import Link from "next/link";

import type { SessionPlayer } from "@/types/session";

type SessionCardProps = {
  id: string;
  title: string;
  system: string;
  date: string;
  period?: string;
  month?: string;
  kp: string;
  players?: SessionPlayer[];
};

/**
 * セッションカード
 *
 * eplogの本棚に並ぶ一冊の本。
 */
export default function SessionCard({
  id,
  title,
  system,
  date,
  period,
  month,
  kp,
  players,
}: SessionCardProps) {
  const displayDate = period || month || date;
  const secondaryDate = period && month ? month : null;

  return (
    <Link href={`/sessions/${id}`}>
      <article
        className="
          group
          relative
          min-h-[260px]
          overflow-hidden
          rounded-lg
          border
          border-[var(--border)]
          bg-[var(--surface)]
          px-8
          py-10
          pl-12
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-xl
        "
      >

        {/* 本の背 */}
        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-1
            bg-[var(--primary)]
            opacity-60
          "
        />


        {/* システム */}
        <p
          className="
            text-xs
            tracking-[0.25em]
            text-[var(--text-light)]
          "
        >
          {system}
        </p>


        {/* タイトル */}
        <h2
  className="
   mt-6
    max-w-[280px]
    font-serif
    text-2xl
    leading-relaxed
    tracking-wide
    text-[var(--primary)]
    group-hover:underline
  "
>
  {title}
</h2>

        {/* 日付 */}
        <div className="mt-4 flex flex-col gap-1">
          <p className="text-sm text-[var(--text-light)]">{displayDate}</p>
          {secondaryDate ? (
            <p className="text-xs text-[var(--text-light)]">{secondaryDate}</p>
          ) : null}
        </div>


     {/* 下部情報 */}
<div
  className="
    mt-6
    border-t
    border-[var(--border)]
    pt-5
  "
>
  <p
    className="
      text-xs
      text-[var(--text-light)]
    "
  >
    KP
  </p>

  <p className="mt-1">
    {kp}
  </p>

  {players && (
    <p
      className="
        mt-3
        text-sm
        text-[var(--text-light)]
      "
    >
      同卓者 {players.length}人
    </p>
  )}
</div>

      </article>
    </Link>
  );
}