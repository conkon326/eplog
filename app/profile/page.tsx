import Container from "@/components/ui/Container";
import Bookshelf from "@/components/book/Bookshelf";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileBio from "@/components/profile/ProfileBio";
const sessions = [
  {
    id: "001",
    title: "忘れられた館",
    system: "Call of Cthulhu",
    date: "2026.07.20",
    kp: "こん ぽた",
    memory:
      "最後の選択を前に、みんなで長い時間話し合った。",
  },
];

export default function ProfilePage() {
  return (
    <main className="py-20">
      <Container>

        <ProfileHeader
          name="こんぽた"
          trpgHistory="10年"
        />

        <ProfileBio>
          これまで、たくさんの卓を囲んできました。
          <br />
          笑った時間も、悩んだ選択も、
          その時一緒にいた仲間のことも、
          少しずつ記憶の中に埋もれていきました。
          <br />
          <br />
          eplogは、そんな一度きりの物語を
          いつでも帰れる場所として残しておくための本棚です。
        </ProfileBio>


        <div className="mt-20">
          <Bookshelf sessions={sessions} />
        </div>

      </Container>
    </main>
  );
}