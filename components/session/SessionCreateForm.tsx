"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

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
export default function SessionCreateForm() {
  const [form, setForm] = useState({
    title: "",
    system: "",
    date: "",
    kp: "",
    players: "",
    characters: "",
    memory: "",
  });


  /**
   * 入力値を更新する
   */
  const updateField = (
    key: keyof typeof form,
    value: string
  ) => {
    setForm({
      ...form,
      [key]: value,
    });
  };


  /**
   * フォーム送信処理
   *
   * 現在は保存先がないため、
   * 入力内容を確認するだけ。
   *
   * 後ほどDB保存処理に置き換える。
   */
  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    console.log(form);
  };


  return (
    <form
      className="space-y-10"
      onSubmit={handleSubmit}
    >

      {/* 基本情報 */}
      <section>
        <h2 className="font-serif text-xl text-[var(--primary)]">
          セッションについて
        </h2>

        <div className="mt-6 space-y-5">

          <Input
            placeholder="シナリオ名"
            value={form.title}
            onChange={(e) =>
              updateField(
                "title",
                e.target.value
              )
            }
          />

          <Input
            placeholder="システム名"
            value={form.system}
            onChange={(e) =>
              updateField(
                "system",
                e.target.value
              )
            }
          />

          <Input
            type="date"
            value={form.date}
            onChange={(e) =>
              updateField(
                "date",
                e.target.value
              )
            }
          />

        </div>
      </section>


      {/* 一緒に遊んだ人 */}
      <section>
        <h2 className="font-serif text-xl text-[var(--primary)]">
          一緒に遊んだ人
        </h2>

        <div className="mt-6 space-y-5">

          <Input
            placeholder="KP"
            value={form.kp}
            onChange={(e) =>
              updateField(
                "kp",
                e.target.value
              )
            }
          />


          <textarea
            className="
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
            placeholder="PL（改行で入力）"
            rows={3}
            value={form.players}
            onChange={(e) =>
              updateField(
                "players",
                e.target.value
              )
            }
          />

        </div>
      </section>


      {/* キャラクター */}
      <section>
        <h2 className="font-serif text-xl text-[var(--primary)]">
          登場したキャラクター
        </h2>

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
          onChange={(e) =>
            updateField(
              "characters",
              e.target.value
            )
          }
        />

      </section>


      {/* 思い出 */}
      <section>
        <h2 className="font-serif text-xl text-[var(--primary)]">
          思い出
        </h2>

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
          onChange={(e) =>
            updateField(
              "memory",
              e.target.value
            )
          }
        />

      </section>


      {/* 保存 */}
      <div className="flex justify-center pt-5">
        <Button type="submit">
          本棚に残す
        </Button>
      </div>


    </form>
  );
}