import SessionCard from "@/components/session/SessionCard";
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
  return (
    <section>
      {/* 本棚タイトル */}
      <h2
        className="
          font-serif
          text-2xl
          text-[var(--primary)]
        "
      >
        本棚
      </h2>

      {/* セッションが存在しない場合 */}
      {sessions.length === 0 ? (
        <p
          className="
            mt-8
            leading-7
            text-[var(--text-light)]
          "
        >
          まだ物語はありません。
          <br />
          最初の一冊がここに並びます。
        </p>
      ) : (
        /* セッション一覧 */
        <div
          className="
            mt-8
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {sessions.map((session) => (
            <SessionCard
              key={session.id}
              {...session}
            />
          ))}
        </div>
      )}
    </section>
  );
}