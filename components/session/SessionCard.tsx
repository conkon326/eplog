import Link from "next/link";

type SessionCardProps = {
  id: string;
  title: string;
  system: string;
  date: string;
  kp: string;
  players?: string[];
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
  kp,
  players,
}: SessionCardProps) {
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
        <p
          className="
            mt-4
            text-sm
            text-[var(--text-light)]
          "
        >
          {date}
        </p>


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