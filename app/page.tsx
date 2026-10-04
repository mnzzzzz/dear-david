"use client";

import { useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="paper-texture min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 mix-blend-multiply">
        <div className="hand text-2xl font-semibold">
          m + d
        </div>

        <div className="hidden sm:flex gap-6 text-[10px] uppercase tracking-[0.2em]">
          <a href="#story" className="hover:opacity-50 transition">
            our story
          </a>

          <a href="#little-things" className="hover:opacity-50 transition">
            little things
          </a>

          <a href="#letter" className="hover:opacity-50 transition">
            letter
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">

        <div className="relative w-full max-w-5xl">

          <div className="absolute -top-5 left-4 sm:left-20 hand text-xl rotate-[-7deg]">
            for david ♡
          </div>

          <div className="paper relative mx-auto max-w-3xl px-7 py-20 sm:px-20 sm:py-28 rotate-[-1deg]">

            <div className="tape" />

            <p className="mono text-[10px] uppercase tracking-[0.35em] mb-8 opacity-60">
              october 2026
            </p>

            <h1 className="serif text-6xl sm:text-8xl leading-[0.9] mb-8">
              dear
              <br />
              <i>david,</i>
            </h1>

            <div className="max-w-xl">

              <p className="hand text-3xl sm:text-4xl leading-tight mb-8">
                I have something to tell you.
              </p>

              <p className="mono text-xs sm:text-sm leading-7 opacity-70">
                and yes, I made an entire website about it.
              </p>

            </div>

            <div className="absolute bottom-8 right-8 hand text-2xl rotate-[-6deg]">
              keep scrolling →
            </div>

          </div>

          <div className="absolute -right-2 sm:right-10 top-1/3 hidden sm:block stamp text-center">
            <div className="hand text-2xl">
              special
            </div>

            <div className="mono text-[8px] uppercase tracking-widest">
              delivery
            </div>
          </div>

        </div>

      </section>


      {/* STORY */}
      <section
        id="story"
        className="px-6 py-32 max-w-6xl mx-auto"
      >

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="mono text-[10px] uppercase tracking-[0.3em] opacity-50 mb-5">
              01 — how it started
            </p>

            <h2 className="serif text-5xl sm:text-6xl leading-tight mb-8">
              somehow,
              <br />
              <i>you happened.</i>
            </h2>

            <p className="text-sm leading-8 opacity-75 max-w-lg">
              We met on Instagram.
              <br />
              About two weeks ago.
              <br />
              <br />
              And the funny part?
              We went to the same school.
              Different divisions, apparently.
              Which means we probably passed each other
              a hundred times without ever noticing.
            </p>

          </div>


          <div className="relative">

            <div className="paper p-6 rotate-[3deg]">

              <div className="aspect-[4/5] bg-[#d9d1c7] flex items-center justify-center">

                <div className="text-center px-10">

                  <div className="hand text-5xl mb-3">
                    instagram
                  </div>

                  <p className="mono text-[9px] uppercase tracking-widest opacity-50">
                    where it all started
                  </p>

                </div>

              </div>

              <p className="hand text-2xl mt-5 rotate-[-2deg]">
                imagine if we had noticed each other earlier...
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* TIMELINE */}
      <section className="px-6 py-24 bg-[#ded5ca]">

        <div className="max-w-4xl mx-auto">

          <p className="mono text-[10px] uppercase tracking-[0.3em] opacity-50 mb-5">
            02 — recently
          </p>

          <h2 className="serif text-5xl sm:text-6xl mb-20">
            a very short
            <br />
            <i>timeline.</i>
          </h2>


          <div className="space-y-20">

            <TimelineItem
              number="01"
              title="we met"
              text="Instagram did something useful for once."
            />

            <TimelineItem
              number="02"
              title="you became my favourite notification"
              text="Which is honestly a little embarrassing."
            />

            <TimelineItem
              number="03"
              title="the nightly calls"
              text="Going to sleep later than we should because apparently talking to you is more important."
            />

            <TimelineItem
              number="04"
              title="and now this"
              text="A whole website. Because apparently I don't know how to do anything normally."
            />

          </div>

        </div>

      </section>


      {/* LITTLE THINGS */}
      <section
        id="little-things"
        className="px-6 py-32 max-w-6xl mx-auto"
      >

        <div className="text-center mb-20">

          <p className="mono text-[10px] uppercase tracking-[0.3em] opacity-50 mb-5">
            03 — the important part
          </p>

          <h2 className="serif text-5xl sm:text-7xl">
            I think it's the
            <br />
            <i>little things</i>
          </h2>

          <p className="hand text-3xl mt-4">
            that got me.
          </p>

        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

          <NoteCard
            color="pink"
            rotation="-2deg"
            title="you remember things"
            text="Even the tiny things I mention once and assume you'll forget."
          />

          <NoteCard
            color="yellow"
            rotation="2deg"
            title="you keep your promises"
            text="You actually go out of your way to do the things you said you would."
          />

          <NoteCard
            color="blue"
            rotation="-1deg"
            title="you stay"
            text="Even when we're both tired and tomorrow is going to hurt."
          />

          <NoteCard
            color="lavender"
            rotation="3deg"
            title="you understand me"
            text="Somehow, sometimes, without me having to explain everything."
          />

        </div>

      </section>


      {/* RECEIPT */}
      <section className="px-6 py-24">

        <div className="max-w-md mx-auto">

          <div className="paper px-8 py-10 rotate-[-2deg]">

            <div className="text-center border-b border-dashed border-[#4a3028]/30 pb-6">

              <div className="serif text-3xl">
                THINGS YOU'VE COST ME
              </div>

              <div className="mono text-[8px] tracking-widest mt-2 opacity-50">
                TOTALLY WORTH IT THOUGH
              </div>

            </div>


            <div className="py-7 space-y-4 text-xs">

              <ReceiptRow
                item="sleep"
                price="— 3 hours"
              />

              <ReceiptRow
                item="nightly conversations"
                price="∞"
              />

              <ReceiptRow
                item="phone battery"
                price="27%"
              />

              <ReceiptRow
                item="random smiling"
                price="way too much"
              />

              <ReceiptRow
                item="emotional stability"
                price="questionable"
              />

            </div>


            <div className="border-t border-dashed border-[#4a3028]/30 pt-6 flex justify-between">

              <span className="mono text-xs">
                TOTAL
              </span>

              <span className="hand text-3xl">
                worth it.
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* BEFORE WE MEET */}
      <section className="px-6 py-32 bg-[#7774a6] text-[#f5f0e8]">

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="mono text-[10px] uppercase tracking-[0.3em] opacity-60 mb-5">
              04 — before we meet
            </p>

            <h2 className="serif text-5xl sm:text-6xl leading-tight">
              one picture
              <br />
              <i>missing.</i>
            </h2>

            <p className="text-sm leading-8 mt-8 opacity-75 max-w-md">
              We haven't met in person yet.
              And honestly, I kind of love that this part of our story
              is still waiting to happen.
            </p>

          </div>


          <div className="relative">

            <div className="paper p-5 rotate-[3deg] text-[#29221f]">

              <div className="aspect-square border-2 border-dashed border-[#29221f]/30 flex flex-col items-center justify-center text-center">

                <div className="hand text-5xl">
                  our first picture
                </div>

                <div className="mono text-[8px] uppercase tracking-widest opacity-50 mt-3">
                  eventually
                </div>

              </div>

              <p className="hand text-xl mt-4 text-center">
                saving this spot for us ♡
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* LETTER */}
      <section
        id="letter"
        className="px-6 py-32"
      >

        <div className="max-w-3xl mx-auto">

          <p className="mono text-[10px] uppercase tracking-[0.3em] opacity-50 mb-8 text-center">
            05 — the actual confession
          </p>


          <div className="paper relative px-8 py-16 sm:px-20 sm:py-24 rotate-[1deg]">

            <div className="tape yellow" />

            <p className="hand text-4xl mb-10">
              David,
            </p>

            <div className="serif text-xl sm:text-2xl leading-[2]">

              <p className="mb-8">
                I know it's only been a couple of weeks.
              </p>

              <p className="mb-8">
                I know we haven't even met in person yet.
              </p>

              <p className="mb-8">
                But I don't think that makes what I feel any
                less real.
              </p>

              <p className="mb-8">
                I really, really like you.
              </p>

              <p className="mb-8">
                I like talking to you.
                I like hearing your voice.
                I like how you remember things.
                I like how you make an effort.
              </p>

              <p className="mb-8">
                I like you for being you.
              </p>

              {/* UPDATED CONFESSION */}
              <p className="mb-8">
                If you're ever thinking of moving things a bit
                further than "just friends"...
              </p>

              <p className="hand text-5xl mt-5">
                yes.
              </p>

              <p className="mt-12 mb-8">
                And if you don't feel the same way, well damn.
              </p>

              <p className="mb-8">
                I hope we can push this aside and forget this
                ever even happened.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL */}
      <section className="min-h-[90vh] flex items-center justify-center px-6">

        <div className="text-center max-w-3xl">

          <p className="mono text-[10px] uppercase tracking-[0.3em] opacity-50 mb-10">
            end of letter
          </p>

          <h2 className="serif text-7xl sm:text-9xl leading-none">
            I like you,
            <br />
            <i>davie.</i>
          </h2>

          <p className="hand text-4xl sm:text-5xl mt-10">
            ♡
          </p>

          <p className="text-xs leading-7 opacity-60 max-w-md mx-auto mt-10">
            I can't wait to finally meet you.
            <br />
            And I'm really glad I found you.
          </p>

          <button
            onClick={() => setOpened(!opened)}
            className="mt-12 border border-[#4a3028] px-7 py-4 text-[10px] uppercase tracking-[0.25em] hover:bg-[#4a3028] hover:text-[#f5f0e8] transition"
          >
            {opened
              ? "okay you found the secret ♡"
              : "one more thing"}
          </button>

          {opened && (
            <p className="hand text-4xl mt-8 fade-up">
              I love talking to you. Don't forget that.
            </p>
          )}

        </div>

      </section>


      {/* FOOTER */}
      <footer className="px-6 py-10 text-center border-t border-[#4a3028]/10">

        <p className="hand text-2xl">
          made with too much thought ♡
        </p>

        <p className="mono text-[8px] uppercase tracking-[0.3em] opacity-40 mt-3">
          m + d / 2026
        </p>

      </footer>

    </main>
  );
}


/* ---------------- COMPONENTS ---------------- */

function TimelineItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="grid grid-cols-[55px_1fr] gap-6">

      <div className="hand text-3xl opacity-50">
        {number}
      </div>

      <div>

        <h3 className="serif text-3xl sm:text-4xl">
          {title}
        </h3>

        <p className="mono text-xs leading-7 opacity-60 mt-4 max-w-xl">
          {text}
        </p>

      </div>

    </div>
  );
}


function NoteCard({
  color,
  rotation,
  title,
  text,
}: {
  color: "pink" | "yellow" | "blue" | "lavender";
  rotation: string;
  title: string;
  text: string;
}) {

  const backgrounds = {
    pink: "#d88991",
    yellow: "#d9b94c",
    blue: "#8c9ab5",
    lavender: "#7774a6",
  };

  return (
    <div
      className="p-7 min-h-[280px] shadow-md"
      style={{
        background: backgrounds[color],
        transform: `rotate(${rotation})`,
      }}
    >

      <div className="hand text-3xl mb-8">
        ✦
      </div>

      <h3 className="serif text-2xl leading-tight mb-5">
        {title}
      </h3>

      <p className="mono text-[11px] leading-6 opacity-75">
        {text}
      </p>

    </div>
  );
}


function ReceiptRow({
  item,
  price,
}: {
  item: string;
  price: string;
}) {
  return (
    <div className="flex justify-between gap-5">

      <span>
        {item}
      </span>

      <span className="text-right">
        {price}
      </span>

    </div>
  );
}