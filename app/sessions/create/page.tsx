import Container from "@/components/ui/Container";
import SessionCreateForm from "@/components/session/SessionCreateForm";

/**
 * 新しいセッションページ作成画面
 *
 * eplogでは新しい卓を、
 * 本棚に追加する一ページとして扱う。
 */
export default function SessionCreatePage() {
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

            <p
              className="
                mt-5
                text-[var(--text-light)]
              "
            >
              あの日、一緒に過ごした時間を
              本棚へ残します。
            </p>
          </header>


          {/* 入力フォーム */}
          <div className="mt-16">
            <SessionCreateForm />
          </div>


        </div>

      </Container>
    </main>
  );
}