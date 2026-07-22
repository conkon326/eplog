"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { saveSession } from "@/lib/session-storage";
import { useSessionDraft } from "@/hooks/useSessionDraft";
import type { Session, SessionPlayer } from "@/types/session";

type Props = {
  defaultRole?: "KP" | "PL";
};

/**
 * セッション作成フォーム
 *
 * eplogに新しい「一冊のページ」を追加するためのフォーム。
 *
 * シナリオの評価や結果ではなく、
 * その卓で過ごした時間、
 * 一緒に遊んだ人、
 * 忘れられない出来事を残すことを目的とする。
 */
export default function SessionCreateForm({
  defaultRole = "KP",
}: Props) {
  const router = useRouter();
  const [form, setForm, resetDraft] = useSessionDraft();
  const [recordedAs, setRecordedAs] = useState<"KP" | "PL">(
    defaultRole
  );
  const [participants, setParticipants] = useState<{
    name: string;
    handleName: string;
    role: "KP" | "PL";
  }[]>([
    { name: "", handleName: "", role: "KP" },
    { name: "", handleName: "", role: "PL" },
  ]);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const updateField = (
    key: keyof typeof form,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const updateParticipant = (
    index: number,
    value: string
  ) => {
    setParticipants((current) =>
      current.map((participant, participantIndex) =>
        participantIndex === index
          ? { ...participant, name: value }
          : participant
      )
    );
  };

  const updateParticipantHandleName = (
    index: number,
    value: string
  ) => {
    setParticipants((current) =>
      current.map((participant, participantIndex) =>
        participantIndex === index
          ? { ...participant, handleName: value }
          : participant
      )
    );
  };

  const updateParticipantRole = (
    index: number,
    role: "KP" | "PL"
  ) => {
    setParticipants((current) =>
      current.map((participant, participantIndex) => {
        if (participantIndex === index) {
          return { ...participant, role };
        }

        if (role === "KP") {
          return { ...participant, role: "PL" };
        }

        return participant;
      })
    );
  };

  const addParticipant = () => {
    setParticipants((current) => [
      ...current,
      { name: "", handleName: "", role: "PL" },
    ]);
  };

  const removeParticipant = (index: number) => {
    setParticipants((current) =>
      current.filter((_, participantIndex) => participantIndex !== index)
    );
  };

  const buildArray = (value: string) =>
    value
      .split(/\r?\n/)
      .map((item) => item.trim())
      .filter(Boolean);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    if (isSaving) {
      return;
    }

    const title = form.title.trim();
    const period = form.period.trim();
    const month = form.month.trim();
    const date = period || month;
    const kpName = participants.find(
      (participant) => participant.role === "KP"
    )?.name.trim();
    const players: SessionPlayer[] = participants
      .filter(
        (participant) =>
          participant.role === "PL" &&
          (participant.name.trim() || participant.handleName.trim())
      )
      .map((participant) => ({
        name: participant.name.trim(),
        handleName: participant.handleName.trim() || undefined,
      }));

    if (!title) {
      setFormError("シナリオ名を入力してください。");
      return;
    }

    if (!date) {
      setFormError("卓の期間か月を入力してください。");
      return;
    }

    if (!kpName) {
      setFormError("KPの名前を入力してください。");
      return;
    }

    if (recordedAs === "PL" && players.length === 0) {
      setFormError("PLとして記録する場合は、参加した人を1人以上入力してください。");
      return;
    }

    setFormError(null);
    setIsSaving(true);

    const session: Session = {
      id:
        typeof crypto !== "undefined" &&
        typeof crypto.randomUUID === "function"
          ? crypto.randomUUID()
          : String(Date.now()),
      recordedAs,
      title,
      system: form.system.trim() || "TRPGセッション",
      date,
      period: period || undefined,
      month: month || undefined,
      kp: kpName,
      players,
      characters: buildArray(form.characters),
      memory: form.memory.trim() || "",
    };

    saveSession(session);
    resetDraft();
    router.push(`/sessions/${session.id}`);
  };

  return (
    <form className="space-y-10" onSubmit={handleSubmit}>
      {formError && (
        <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          {formError}
        </div>
      )}

      <section>
        <h2 className="font-serif text-xl text-[var(--primary)]">
          この卓をどの立場で残すか
        </h2>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            className={
              recordedAs === "KP"
                ? "rounded-full border border-[var(--primary)] bg-[var(--primary)] px-5 py-2 text-sm text-white"
                : "rounded-full border border-[var(--primary)] px-5 py-2 text-sm text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
            }
            onClick={() => setRecordedAs("KP")}
          >
            KPとして残す
          </button>
          <button
            type="button"
            className={
              recordedAs === "PL"
                ? "rounded-full border border-[var(--primary)] bg-[var(--primary)] px-5 py-2 text-sm text-white"
                : "rounded-full border border-[var(--primary)] px-5 py-2 text-sm text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
            }
            onClick={() => setRecordedAs("PL")}
          >
            PLとして残す
          </button>
        </div>

        <p className="mt-3 text-xs text-[var(--text-light)]">
          入力途中の内容は、この端末で自動的に下書きとして保存されます。
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl text-[var(--primary)]">
          セッションについて
        </h2>
        <p className="mt-3 text-sm text-[var(--text-light)]">
          あの日のページの表紙になる情報を入力します。
        </p>

        <div className="mt-6 space-y-5">
          <Input
            placeholder="シナリオ名"
            value={form.title}
            onChange={(e) => updateField("title", e.target.value)}
          />

          <Input
            placeholder="システム名"
            value={form.system}
            onChange={(e) => updateField("system", e.target.value)}
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-[var(--text-light)]">
                期間
              </label>
              <Input
                type="text"
                placeholder="2026-07-21〜2026-07-24"
                value={form.period}
                onChange={(e) => updateField("period", e.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[var(--text-light)]">
                月
              </label>
              <Input
                type="text"
                placeholder="2026-07"
                value={form.month}
                onChange={(e) => updateField("month", e.target.value)}
              />
            </div>
          </div>

          <p className="mt-2 text-xs text-[var(--text-light)]">
            期間を入れるときは「2026-07-21〜2026-07-24」のように残せます。<br />
            月だけで残したいときは、月欄に「2026-07」と入力してください。
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-xl text-[var(--primary)]">
          一緒に遊んだ人
        </h2>
        <p className="mt-3 text-sm text-[var(--text-light)]">
          その卓で一緒に時間を過ごした仲間を、KP と PL に分けて記録します。
        </p>

        <div className="mt-6 space-y-4">
          {participants.map((participant, index) => (
            <div
              key={`${participant.role}-${index}`}
              className="flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4"
            >
              <div className="flex items-center justify-between gap-4">
                <label className="flex items-center gap-2 text-sm font-medium text-[var(--text-light)]">
                  役割
                  <select
                    className="rounded-lg border border-[var(--border)] bg-transparent px-3 py-2 text-sm text-[var(--text)] outline-none focus:border-[var(--primary)]"
                    value={participant.role}
                    onChange={(e) =>
                      updateParticipantRole(
                        index,
                        e.target.value as "KP" | "PL"
                      )
                    }
                  >
                    <option value="KP">KP</option>
                    <option value="PL">PL</option>
                  </select>
                </label>

                <button
                  type="button"
                  className="text-sm text-[var(--primary)] hover:underline"
                  onClick={() => removeParticipant(index)}
                >
                  削除
                </button>
              </div>

              <Input
                placeholder={
                  participant.role === "KP"
                    ? "KPの名前"
                    : "PLの名前"
                }
                value={participant.name}
                onChange={(e) => updateParticipant(index, e.target.value)}
              />

              <Input
                placeholder="ハンドルネーム（任意）"
                value={participant.handleName}
                onChange={(e) =>
                  updateParticipantHandleName(index, e.target.value)
                }
              />
            </div>
          ))}

          <button
            type="button"
            className="text-sm text-[var(--primary)] hover:underline"
            onClick={addParticipant}
          >
            + もう一人追加する
          </button>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-xl text-[var(--primary)]">
          登場したキャラクター
        </h2>
        <p className="mt-3 text-sm text-[var(--text-light)]">
          このページに登場したキャラクターを、名前やひと言とともに書き残しましょう。
        </p>

        <textarea
          className="
            mt-6
            w-full
            rounded-lg
            border
            border-[var(--border)]
            bg-transparent
            p-3
            outline-none
            transition
            focus:border-[var(--primary)]
          "
          placeholder="キャラクター名や思い出"
          rows={4}
          value={form.characters}
          onChange={(e) => updateField("characters", e.target.value)}
        />
      </section>

      <section>
        <h2 className="font-serif text-xl text-[var(--primary)]">
          思い出
        </h2>
        <p className="mt-3 text-sm text-[var(--text-light)]">
          印象に残ったことや、あとで読み返したい出来事を書き留めてください。
        </p>

        <textarea
          className="
            mt-6
            w-full
            rounded-lg
            border
            border-[var(--border)]
            bg-transparent
            p-3
            outline-none
            transition
            focus:border-[var(--primary)]
          "
          placeholder="印象的だった出来事"
          rows={5}
          value={form.memory}
          onChange={(e) => updateField("memory", e.target.value)}
        />
      </section>

      <div className="flex justify-center pt-5">
        <Button type="submit" disabled={isSaving}>
          {isSaving ? "保存中…" : "本棚に残す"}
        </Button>
      </div>
    </form>
  );
}