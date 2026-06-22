// app/chapter-one.tsx
import Image from "next/image";
import hooverville from "../The story photos/seattle's Hooverville.png";
import alUlbrickson from "../The story photos/Al Ulbrickson.png";

export default function ChapterOne() {
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
        @media (max-width: 680px) {
          .magazine {
            padding: 1.5rem;
            margin: 1rem;
          }
          p {
            font-size: 1rem;
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
          The Depression, the freshman tryouts, and the Dour Dane who would
          shape a dynasty.
        </div>

        <p>
          Monday, October 9, 1933, began as a gray day in Seattle. A gray day in
          a gray time. On the streets, men in fraying suit coats and battered
          fedoras sold apples for a few pennies. Around Yesler Way, more men
          stood in long lines waiting for soup kitchens to open. In a shantytown
          along Elliott Bay, children awoke in damp cardboard boxes. It was the
          fourth year of the Great Depression. One in four working Americans had
          no job, and at least one million were homeless. A new president,
          Franklin Roosevelt, was in the White House. In Germany, Adolf Hitler
          was hell-bent on rearming.
        </p>

        <figure className="story-figure">
          <Image src={hooverville} alt="Seattle's Hooverville shantytown" />
          <figcaption>
            Seattle’s Hooverville — where families survived in cardboard and
            scrap-metal shacks during the bleakest years of the Depression.
          </figcaption>
        </figure>

        <p>
          But the overcast didn't last. On the University of Washington campus,
          two tall freshmen, Roger Morris and Joe Rantz, loped across the grassy
          quad. Joe, six foot two and a half, had broad shoulders, powerful
          legs, and blond hair in a crew cut. They headed to an old airplane
          hangar that served as the shell house for the rowing team. One hundred
          seventy-five boys milled about nervously. Joe signed the registration
          book. "Aren't you nervous?" he whispered. Roger replied, "I'm
          panicked. I just look like this to demoralize the competition."
        </p>

        <p>
          For Joe Rantz, something hung in the balance. His clothes were not
          like the others—his trousers not neatly creased, his sweater old and
          rumpled. He might not belong here at all. To fail would mean returning
          to a bleak town or joining a line outside a soup kitchen. A spot on
          the freshman crew would guarantee a part-time job and maybe get him
          through college. But only nine seats were available.
        </p>

        <p>
          Directing the proceedings was freshman coach Tom Bolles, called "the
          professor." Almost none of the boys had ever rowed. Watching from the
          doorway was head coach Al Ulbrickson, a tall, good-looking man of
          thirty, known as the "Dour Dane" for his reticence. As sports editor
          Royal Brougham peppered him with questions, Ulbrickson finally
          replied: "Pleasing." Brougham translated: "very good indeed." Brougham
          was a master promoter who wanted to shift the center of American
          collegiate rowing from the East to Seattle.
        </p>

        <figure className="story-figure">
          <Image src={alUlbrickson} alt="Coach Al Ulbrickson, the Dour Dane" />
          <figcaption>
            Al Ulbrickson — the silent, driven head coach who saw Olympic
            potential in a boatload of untested freshmen.
          </figcaption>
        </figure>

        <p>
          Five thousand miles away, architect Werner March worked late in
          Berlin. Days earlier, he and Hitler had inspected the old stadium.
          Hitler ordered a vastly larger one built, a testament to German
          superiority, driven by propaganda minister Joseph Goebbels. The 1936
          Olympics would portray Germany as civilized and powerful.
        </p>

        <p>
          Back in Seattle, Ulbrickson watched the boys wander off. He remained
          haunted by the disastrous 1932 season but had seen a comeback in 1933.
          No Washington coach had ever gone to the Olympics. Ulbrickson wanted
          gold in 1936. It all had to start here, with these green boys. The
          trick was to find which few had raw power, stamina, willpower—and the
          ability to pull for the other boys in the boat.
        </p>

        <footer>
          Based on <em>The Boys in the Boat</em> by Daniel James Brown · The
          road to Berlin begins with a single, desperate stroke on Lake
          Washington.
        </footer>
      </div>
    </>
  );
}
