import Link from "next/link";
import { notFound } from "next/navigation";
import { sessions } from "@/data/sessions";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

/**
 * セッション詳細ページ
 *
 * 本棚から開いた一冊の中身。
 *
 * eplogではセッションを
 * 投稿ではなく、人生の記録として残す。
 */
export async function generateMetadata({ params }: Props) {
  const { id } = await params;

  const session = sessions.find(
    (session) => session.id === id
  );

  return {
    title: session
      ? `${session.title} | eplog`
      : "Session | eplog",
  };
}

export default async function SessionPage({
  params,
}: Props) {
  const { id } = await params;

  const session = sessions.find(
    (session) => session.id === id
  );

  if (!session) {
    notFound();
  }

  return (
    <main
      className="
        mx-auto
        max-w-3xl
        px-6
        py-12
      "
    >
      {/* 本棚へ戻る */}
      <Link
        href="/profile"
        className="
          text-sm
          text-[var(--text-light)]
          hover:underline
        "
      >
        ← 本棚へ戻る
      </Link>

      {/* 表紙 */}
      <section
        className="
          mt-8
          rounded-xl
          border
          border-[var(--border)]
          bg-[var(--surface)]
          p-10
        "
      >
        {/* システム */}
        <p
          className="
            text-sm
            text-[var(--text-light)]
          "
        >
          {session.system}
        </p>

        {/* タイトル */}
        <h1
          className="
            mt-4
            font-serif
            text-4xl
            text-[var(--primary)]
          "
        >
          {session.title}
        </h1>

        {/* 日付 */}
        <p
          className="
            mt-4
            text-sm
            text-[var(--text-light)]
          "
        >
          {session.date}
        </p>


        {/* KP */}
        <div
          className="
            mt-8
            border-t
            border-[var(--border)]
            pt-6
          "
        >
          <p className="text-sm text-[var(--text-light)]">
            KP
          </p>

          <p>
            {session.kp}
          </p>
        </div>


        {/* PL */}
        {session.players && (
          <div
            className="
              mt-8
              border-t
              border-[var(--border)]
              pt-6
            "
          >
            <p className="text-sm text-[var(--text-light)]">
              PL / 同卓者
            </p>

            <ul
              className="
                mt-2
                space-y-1
              "
            >
              {session.players.map((player) => (
                <li key={player}>
                  {player}
                </li>
              ))}
            </ul>
          </div>
        )}


        {/* 記録 */}
        <div
          className="
            mt-10
            border-t
            border-[var(--border)]
            pt-8
          "
        >
          <h2
            className="
              font-serif
              text-xl
              text-[var(--primary)]
            "
          >
            セッションの記録
          </h2>


          <blockquote
            className="
              mt-6
              border-l-4
              border-[var(--primary)]
              pl-6
              italic
              leading-8
              text-[var(--text-light)]
            "
          >
            {session.memory ?? "まだ記録されていません。"}
          </blockquote>
        </div>

      </section>
    </main>
  );
}