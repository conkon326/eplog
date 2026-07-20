import SessionCard from "@/components/session/SessionCard";

type Session = {
  id: string;
  title: string;
  system: string;
  date: string;
  kp: string;
  memory?: string;
};

type BookshelfProps = {
  sessions: Session[];
};

/**
 * Bookshelf コンポーネント
 *
 * ユーザーが残したTRPGセッションを
 * 本棚のように並べて表示する。
 *
 * eplogではセッションは投稿ではなく、
 * 一冊ずつ増えていく思い出の本として扱う。
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

      {/* セッション一覧 */}
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
    </section>
  );
}