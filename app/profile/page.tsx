import { sessions } from "@/data/sessions";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Bookshelf from "@/components/book/Bookshelf";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileBio from "@/components/profile/ProfileBio";

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

        <div className="mt-10 flex justify-center gap-3">
          <Button href="/sessions/create?role=kp">KPとして残す</Button>
          <Button href="/sessions/create?role=pl">PLとして残す</Button>
        </div>

        <div className="mt-20">
          <Bookshelf sessions={sessions} />
        </div>

      </Container>
    </main>
  );
}