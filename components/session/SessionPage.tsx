import Container from "@/components/ui/Container";

type Session = {
  id: string;
  title: string;
  system: string;
  date: string;
  kp: string;
  players: string[];
  characters: string[];
  playTime: string;
  memory: string;
  impression: string;
};


type Props = {
  session: Session;
};


/**
 * セッションページ表示コンポーネント
 *
 * eplogでは1つの卓が、本の中の1ページ。
 *
 * 評価や順位ではなく、
 * その日に生まれた会話、
 * 選んだ道、
 * 一緒に過ごした時間を残す。
 */
export default function SessionPage({
  session,
}: Props) {

  return (
    <main className="py-20">

      <Container>

        <article>


          {/* ページタイトル */}
          <header>

            <h1
              className="
                font-serif
                text-4xl
                text-[var(--primary)]
              "
            >
              {session.title}
            </h1>


            <div
              className="
                mt-6
                space-y-2
                text-gray-600
              "
            >

              <p>
                システム：
                {session.system}
              </p>


              <p>
                日付：
                {session.date}
              </p>


              <p>
                KP：
                {session.kp}
              </p>


              <p>
                プレイ時間：
                {session.playTime}
              </p>

            </div>

          </header>




          {/* 一緒に遊んだ仲間 */}
          <section className="mt-12">

            <h2
              className="
                font-serif
                text-2xl
                text-[var(--primary)]
              "
            >
              一緒に囲んだ仲間
            </h2>


            <ul
              className="
                mt-4
                space-y-2
              "
            >

              {session.players.map((player) => (
                <li key={player}>
                  {player}
                </li>
              ))}

            </ul>

          </section>




          {/* キャラクター */}
          <section className="mt-12">

            <h2
              className="
                font-serif
                text-2xl
                text-[var(--primary)]
              "
            >
              物語を歩いた登場人物
            </h2>


            <ul
              className="
                mt-4
                space-y-2
              "
            >

              {session.characters.map((character) => (
                <li key={character}>
                  {character}
                </li>
              ))}

            </ul>

          </section>




          {/* 思い出 */}
          <section className="mt-16">

            <h2
              className="
                font-serif
                text-2xl
                text-[var(--primary)]
              "
            >
              思い出のページ
            </h2>


            <p
              className="
                mt-6
                leading-loose
                text-gray-700
              "
            >
              {session.memory}
            </p>


          </section>




          {/* 印象的な出来事 */}
          <section className="mt-12">


            <h2
              className="
                font-serif
                text-2xl
                text-[var(--primary)]
              "
            >
              印象に残った出来事
            </h2>


            <p
              className="
                mt-6
                leading-loose
                text-gray-700
              "
            >
              {session.impression}
            </p>


          </section>



        </article>


      </Container>


    </main>
  );
}