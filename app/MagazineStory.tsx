// app/page.tsx
import Image from "next/image";
import hooverville from "../The story photos/seattle's Hooverville.png";
import freshmen from "../The story photos/freshmen on old Nero.png";
import montlake from "../The story photos/Rowing into the Montlake Cut.png";
import dawnRow from "../The story photos/dawn row on lake washington.png";
import varsity from "../The story photos/The 1936 varsity crew.png";
import waitingToGo from "../The story photos/waiting to go for gokl.png";
import boatToBerlin from "../The story photos/on the boat to berlin.png";
import germanTeam from "../The story photos/The German team.png";
import italianTeam from "../The story photos/The Italian team.png";
import goldFinish from "../The story photos/The gold medal finish, USA in the far lane.png";
import medalCeremony from "../The story photos/The medal ceremony.png";
import reunion from "../The story photos/The 1956 reunion row.png";

export default function MagazineStory() {
  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .magazine {
          max-width: 880px;
          margin: 2rem auto;
          background: white;
          border-radius: 24px;
          box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.1);
          padding: 2rem 1.8rem 3rem;
          font-family: "Georgia", "Times New Roman", Times, serif;
          color: #1e2a2e;
          line-height: 1.55;
        }
        h1 {
          font-size: clamp(2.2rem, 8vw, 3.6rem);
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1.2;
          margin-bottom: 0.5rem;
          color: #1e3c2c;
          border-left: 5px solid #b43b2c;
          padding-left: 1.2rem;
        }
        .dek {
          font-size: 1.2rem;
          color: #4a5b4f;
          border-bottom: 1px solid #e2ddd4;
          padding-bottom: 1rem;
          margin-bottom: 1.8rem;
          font-style: italic;
        }
        p {
          margin-bottom: 1.4rem;
          font-size: 1.05rem;
          text-align: justify;
        }
        .story-figure {
          margin: 2.2rem 0;
          text-align: center;
        }
        .story-figure img {
          width: 100%;
          height: auto;
          border-radius: 18px;
          box-shadow: 0 12px 24px -12px rgba(0, 0, 0, 0.2);
          background: #f0ede8;
        }
        .story-figure figcaption {
          font-size: 0.85rem;
          color: #5f6c64;
          margin-top: 0.7rem;
          border-left: 2px solid #c0b7a8;
          padding-left: 0.8rem;
          text-align: left;
          font-family:
            system-ui,
            -apple-system,
            "Segoe UI",
            sans-serif;
        }
        .double-figures {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin: 2rem 0;
          justify-content: center;
        }
        .double-figures .story-figure {
          flex: 1 1 260px;
          margin: 0;
        }
        .pull-quote {
          font-size: 1.4rem;
          line-height: 1.3;
          font-weight: 500;
          color: #2c553c;
          border-top: 2px solid #e2cfb3;
          border-bottom: 2px solid #e2cfb3;
          padding: 1rem 0;
          margin: 1.8rem 0;
          text-align: center;
          font-family:
            system-ui,
            -apple-system,
            sans-serif;
        }
        @media (max-width: 680px) {
          .magazine {
            padding: 1.5rem;
            margin: 1rem;
          }
          p {
            font-size: 1rem;
          }
          .pull-quote {
            font-size: 1.2rem;
          }
        }
        footer {
          margin-top: 2.8rem;
          padding-top: 1.2rem;
          border-top: 1px solid #e2ddd4;
          font-size: 0.8rem;
          text-align: center;
          color: #7e8c82;
          font-family: system-ui, sans-serif;
        }
      `}</style>

      <div className="magazine">
        <h1>The Boys in the Boat</h1>
        <div className="dek">
          Nine Americans, one impossible dream — and the boat that carried them
          beyond pain.
        </div>

        <p>
          <strong>October 9, 1933.</strong> A gray day in a gray time. Along
          Seattle’s waterfront, men in frayed coats sold apples for pennies;
          families shivered in shantytowns. It was the fourth year of the Great
          Depression. Among the thousands standing in soup‑kitchen lines, a
          tall, blond freshman named Joe Rantz walked toward an old airplane
          hangar on the Montlake Cut. He had never rowed before. Neither had
          nearly all of the 175 other boys who showed up that day: farm boys,
          fishermen, loggers — all hoping to earn a part‑time job and stay in
          college.
        </p>

        <figure className="story-figure">
          <Image src={hooverville} alt="Seattle's Hooverville shantytown" />
          <figcaption>
            Seattle’s Hooverville — a grim reminder of the era that shaped Joe
            Rantz and his crewmates.
          </figcaption>
        </figure>

        <p>
          Joe’s own story was one of abandonment. At fifteen, his father and
          stepmother drove away, leaving him alone in a half‑finished house in
          Sequim. “We can’t make it here,” his father said. From that night on,
          Joe swore he would never depend on anyone again. But rowing demanded
          the opposite: it required him to trust eight other boys with his whole
          body and soul.
        </p>

        <figure className="story-figure">
          <Image src={freshmen} alt="Novice rowers training on Old Nero" />
          <figcaption>
            Green freshmen learning the stroke on the training barge{" "}
            <em>Old Nero</em> — the brutal proving ground.
          </figcaption>
        </figure>

        <p>
          Under head coach Al Ulbrickson — known as the “Dour Dane” — and the
          gentle guidance of boatbuilder George Pocock, the 175 hopefuls
          dwindled to nine. Pocock, speaking with his crisp British accent,
          taught them that rowing wasn’t about brute strength alone. It was
          about something much harder: abandoning the self, rowing as one. “If
          you don’t like some fellow in the boat,” Pocock told Joe, “you have to
          learn to like him. It has to matter to you whether he wins the race,
          not just whether you do.”
        </p>

        <figure className="story-figure">
          <Image src={montlake} alt="Rowing into the Montlake Cut" />
          <figcaption>
            Rowing through the Montlake Cut – a daily passage toward greatness.
          </figcaption>
        </figure>

        <p>
          By their second year, Joe and his teammates — Roger Morris, Shorty
          Hunt, Don Hume, Stub McMillin, Johnny White, Chuck Day, Gordy Adam,
          and their indomitable coxswain Bobby Moch — became national champions.
          They trained in rain, sleet, and snow on Lake Washington, often rowing
          before dawn. They learned to swing together, a perfect rhythm where
          pain gave way to exultation.
        </p>

        <figure className="story-figure">
          <Image
            src={dawnRow}
            alt="Early morning practice on Lake Washington"
          />
          <figcaption>
            Dawn on Lake Washington – where the crew forged its legendary swing.
          </figcaption>
        </figure>

        <figure className="story-figure">
          <Image
            src={varsity}
            alt="1936 University of Washington varsity crew"
          />
          <figcaption>
            The 1936 varsity crew – nine boys who learned to move as one.
            Kneeling: Bobby Moch (coxswain).
          </figcaption>
        </figure>

        <div className="pull-quote">
          “When you really start trusting those other boys, you will feel a
          power far beyond anything you’ve ever imagined.”
          <br />— George Yeoman Pocock
        </div>

        <p>
          In the summer of 1936 they sailed for Europe on the SS{" "}
          <em>Manhattan</em>. Their sleek cedar shell, the{" "}
          <em>Husky Clipper</em>, was carefully stowed aboard. When they arrived
          in Berlin, the city was draped in swastikas, but the boys from
          Washington kept their focus on the water. The Germans were powerful.
          The Italians, veterans of the previous Olympics, were dangerous. But
          the Americans had something the others could not measure: trust.
        </p>

        <figure className="story-figure">
          <Image
            src={waitingToGo}
            alt="U.S. Olympic eight waiting at the start"
          />
          <figcaption>
            Waiting to go for gold – the American eight moments before the
            Olympic final.
          </figcaption>
        </figure>

        <figure className="story-figure">
          <Image
            src={boatToBerlin}
            alt="U.S. Olympic rowing team on the boat to Berlin"
          />
          <figcaption>
            Aboard the SS Manhattan – America’s rowing hopefuls en route to
            Berlin.
          </figcaption>
        </figure>

        <div className="double-figures">
          <figure className="story-figure">
            <Image src={germanTeam} alt="German Olympic rowing team" />
            <figcaption>
              The powerful German eight, favored to win on home water.
            </figcaption>
          </figure>
          <figure className="story-figure">
            <Image src={italianTeam} alt="Italian Olympic rowing team" />
            <figcaption>
              Italy’s crew – strong, experienced, and hungry for gold.
            </figcaption>
          </figure>
        </div>

        <p>
          <strong>August 14, 1936, Langer See, Grünau.</strong> Rain and a
          fierce crosswind. The Americans drew the worst lane — lane six, fully
          exposed. Worse, Don Hume, their stroke oar, was wracked with fever,
          having lost fourteen pounds. “If you put him in the boat,” Joe told
          Ulbrickson, “we will pull him across the line. Just strap him in.”
          Hume rowed.
        </p>

        <p>
          At the start, the Americans fell dead last. Germany and Italy surged
          ahead. Bobby Moch, the little coxswain with a Phi Beta Kappa mind,
          stayed calm. He held his crew at a steady, patient pace while the
          leaders burned themselves out. For most of the race they trailed, but
          Moch never panicked.
        </p>

        <figure className="story-figure">
          <Image
            src={goldFinish}
            alt="Gold medal finish, USA in the far lane"
          />
          <figcaption>
            The gold medal finish – USA in the far lane, crossing first by a
            fraction of a second.
          </figcaption>
        </figure>

        <p>
          Then, with 500 meters left, Moch turned them loose. The stroke rate
          shot to forty-four — a furious, almost impossible tempo. Joe Rantz,
          who as a child had learned to trust no one, now threw himself into
          each stroke with absolute faith in the other boys. Their oars bent
          like bows; the <em>Husky Clipper</em> ghosted forward, swing after
          swing. They passed Italy, then Germany. In the last desperate seconds,
          they crossed the line six‑tenths of a second ahead of Italy, a full
          second ahead of Germany. Hitler, watching from his balcony, turned and
          walked away without a word.
        </p>

        <figure className="story-figure">
          <Image
            src={medalCeremony}
            alt="Medal ceremony for the Olympic eight-oared crew"
          />
          <figcaption>
            Bobby Moch on the podium – the smallest coxswain, the biggest heart.
          </figcaption>
        </figure>

        <p>
          For Joe and the others, the gold medal was never the real prize. What
          mattered was what they had built together: a living thing made of
          wood, muscle, and trust — a boat that had carried them beyond pain and
          into a moment of beauty none of them would ever forget. “It touches
          the you of yours,” Pocock had said, “which is your soul.”
        </p>

        <figure className="story-figure">
          <Image src={reunion} alt="1956 reunion row on Lake Washington" />
          <figcaption>
            The 1956 reunion row – still swinging together, twenty years later.
          </figcaption>
        </figure>

        <p>
          After the war, the boys went their separate ways, but they remained
          close for life. Every ten years they reunited to row the{" "}
          <em>Husky Clipper</em> once more. In 1956, their bodies older, their
          hair gray, they slipped back into the boat and pulled on the oars —
          still crisp, still together. Until the last man, they carried the
          memory of that single, perfect thing: the boat.
        </p>

        <footer>
          Based on <em>The Boys in the Boat</em> by Daniel James Brown · Nine
          Americans and their epic quest for gold at the 1936 Berlin Olympics
        </footer>
      </div>
    </>
  );
}
