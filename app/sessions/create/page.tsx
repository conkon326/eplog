import Link from "next/link";
import Container from "@/components/ui/Container";
import SessionCreateForm from "@/components/session/SessionCreateForm";

type Props = {
  searchParams?: Promise<{
    role?: string;
  }>;
};

/**
 * 新しいセッションページ作成画面
 *
 * eplogでは新しい卓を、
 * 本棚に追加する一ページとして扱う。
 */
export default async function SessionCreatePage({
  searchParams,
}: Props) {
  const params = (await searchParams) ?? {};
  const defaultRole =
    params.role === "pl" ? "PL" : "KP";

  return (
    <main className="py-20">
      <Container>

        <div className="mx-auto max-w-3xl">

          {/* ページタイトル */}
          <header className="text-center">
            <h1
              className="
                font-serif
                text-4xl
                text-[var(--primary)]
              "
            >
              新しいページを残す
            </h1>

            <p className="mt-5 text-[var(--text-light)]">
              あの日、一緒に過ごした時間を
              本棚へ残します。
              <br />
              後で開いたときに、もう一度同じ空気を感じられるように。
            </p>
          </header>

          <div className="mt-6 text-sm text-[var(--text-light)]">
            <Link href="/profile" className="hover:underline">
              ← 本棚へ戻る
            </Link>
          </div>

          {/* 入力フォーム */}
          <div className="mt-16">
            <SessionCreateForm defaultRole={defaultRole} />
          </div>


        </div>

      </Container>
    </main>
  );
}