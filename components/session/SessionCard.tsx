import Link from "next/link";

type SessionCardProps = {
  id: string;
  title: string;
  system: string;
  date: string;
  kp: string;
  memory?: string;
};

/**
 * セッションカード
 *
 * eplogの本棚に並ぶ「一冊の本」を表現するコンポーネント。
 *
 * SNSの投稿カードではなく、
 * その卓で生まれた物語へ戻るための入口。
 */
export default function SessionCard({
  id,
  title,
  system,
  date,
  kp,
  memory,
}: SessionCardProps) {
  return (
    <Link href={`/sessions/${id}`}>
      <article
        className="
          group
          rounded-xl
          border
          border-[var(--border)]
          bg-[var(--surface)]
          p-8
          transition-all
          duration-500
          hover:-translate-y-1
        "
      >
        {/* システム名 */}
        <p className="text-sm text-[var(--text-light)]">
          {system}
        </p>

        {/* 本のタイトル */}
        <h2
          className="
            mt-3
            font-serif
            text-2xl
            text-[var(--primary)]
            group-hover:underline
          "
        >
          {title}
        </h2>

        {/* 日付 */}
        <p className="mt-4 text-sm text-[var(--text-light)]">
          {date}
        </p>


        {/* 一緒に遊んだ人 */}
        <div className="mt-8 border-t border-[var(--border)] pt-5">
          <p className="text-sm text-[var(--text-light)]">
            KP
          </p>

          <p className="mt-1">
            {kp}
          </p>
        </div>


        {/* 思い出の一文 */}
        {memory && (
          <p
            className="
              mt-6
              line-clamp-3
              leading-7
              text-[var(--text-light)]
            "
          >
            {memory}
          </p>
        )}

      </article>
    </Link>
  );
}