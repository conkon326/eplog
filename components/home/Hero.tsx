import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

          <Logo size="lg" />

          <p className="mt-10 text-lg leading-8 text-[var(--text-light)]">
            あの日、一緒に遊んだことを忘れないための場所。
          </p>

          <p className="mt-5 max-w-2xl leading-8 text-[var(--text-light)]">
            TRPGのセッションは、一度きり。
            <br />
            同じシナリオでも、同じ物語は二度と生まれません。
          </p>

          <div className="mt-14">
            <Button>本を開く</Button>
          </div>

        </div>
      </Container>
    </section>
  );
}