import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

/**
 * eplogトップページのファーストビュー
 *
 * 初めて訪れた人に、
 * 「ここはTRPGの思い出を残す場所」
 * と感じてもらうための入口。
 */
export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

          {/* サービスロゴ */}
          <Logo size="lg" />

          {/* メインメッセージ */}
          <p className="mt-10 text-lg leading-8 text-[var(--text-light)]">
            あの日、一緒に過ごした時間を、
            未来の自分へ残す場所。
          </p>

          {/* eplogの思想説明 */}
          <p className="mt-5 max-w-2xl leading-8 text-[var(--text-light)]">
            TRPGのセッションは、一度きり。
            <br />
            同じシナリオでも、
            同じ物語は二度と生まれません。
          </p>

          {/* 本を開く入口 */}
       <div className="mt-14">
       <Button href="/profile">
       本を開く
       </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}