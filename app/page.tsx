import Image from "next/image";
import teamLogo from "../team logo/sportish logo.png";
import bookCover from "../The book cover/The book cover.png";
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

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Team", href: "#about-team" },
  { label: "Story", href: "#story" },
];

const storyMoments = [
  { image: hooverville, label: "Seattle's Hooverville" },
  { image: freshmen, label: "Freshmen on old Nero" },
  { image: montlake, label: "Rowing into the Montlake Cut" },
  { image: dawnRow, label: "Dawn row on Lake Washington" },
  { image: varsity, label: "The 1936 varsity crew" },
  { image: waitingToGo, label: "Waiting to go for gold" },
  { image: boatToBerlin, label: "On the boat to Berlin" },
  { image: germanTeam, label: "The German team" },
  { image: italianTeam, label: "The Italian team" },
  { image: goldFinish, label: "The gold medal finish" },
  { image: medalCeremony, label: "The medal ceremony" },
  { image: reunion, label: "The 1956 reunion row" },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a href="#home" className="headerMark" aria-label="Back to home">
          <Image src={teamLogo} alt="Sportish team logo" />
          <span>Sportish Presentation Team</span>
        </a>
        <nav aria-label="Page sections">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="homeHero" id="home">
        <Image
          src={goldFinish}
          alt="The United States crew crossing the finish line at the 1936 Berlin Olympics"
          fill
          priority
          className="fullBleedImage"
        />
        <div className="heroOverlay" />
        <div className="homeContent">
          <p className="eyebrow">Sport Presentation Closing Event</p>
          <h1>The Boys in the Boat</h1>
          <p className="heroCopy">
            A final stop for the audience: the story of rowing, pressure, and
            the kind of teamwork that becomes stronger than fear.
          </p>
          <div className="homeActions">
            <a href="#story">Read the story</a>
            <a href="#about-team">Meet the team</a>
          </div>
        </div>
        <div className="eventStrip" aria-label="Event highlights">
          <span>Olympic legacy</span>
          <span>Sport story</span>
          <span>Teamwork finale</span>
        </div>
      </section>

      <section className="aboutTeam sectionBand" id="about-team">
        <div className="teamCopy">
          <p className="sectionKicker">About Team</p>
          <h2>Sportish brings the finish line to the audience.</h2>
          <p>
            We chose the name Sportish because it reflects the qualities that
            sports inspire—teamwork, persistence, growth, and passion. Being
            Sportish isn't about being an athlete; it's about embracing the
            mindset of continuous improvement and giving your best effort.
          </p>
        </div>
        <div className="teamLogoPanel">
          <Image src={teamLogo} alt="Sportish team logo" priority />
          <span>Presentation Team</span>
        </div>
      </section>

      <section className="storyIntro sectionBand" id="story">
        <div className="storyIntroCopy">
          <p className="sectionKicker">Story</p>
          <h2>The full journey from the old hangar to Olympic gold.</h2>
          <p>
            The book cover and historical images below follow the same story
            from your brief description, turning the final page into a visual
            reading experience for phone screens and presentation guests.
          </p>
        </div>
        <div className="coverFrame">
          <Image src={bookCover} alt="The Boys in the Boat book cover" />
        </div>
      </section>

      <section className="storyBody sectionBand" aria-label="The story text">
        <article className="storyText">
          <p>
            In the fall of 1933, Joe Rantz—a tall, blond freshman whose family
            had left him behind at age fifteen to live alone in a half-built
            house, walked down to an old airplane hangar on Seattle's Montlake
            Cut and signed up for the University of Washington crew team. He had
            never rowed before. Neither had nearly all of the 175 other young
            men who showed up that day: farm boys, fishermen, and loggers from
            small towns across Washington, all of them hoping to earn a
            part-time job and stay in college during the hardest years of the
            Great Depression. Over the following months, under the watch of head
            coach Al Ulbrickson and the gentle guidance of boatbuilder George
            Pocock, the group shrank to just nine. Pocock, speaking with his
            smooth British voice, taught them that rowing wasn't about being the
            strongest. It was about something much harder: letting go of your
            own pride and working as one. By their second year, Joe and his
            teammates—Roger Morris, Shorty Hunt, Don Hume, Stub McMillin, Johnny
            White, Chuck Day, Gordy Adam, and their tiny but fearless coxswain
            Bobby Moch—had become national champions and set their sights on the
            1936 Berlin Olympics.
          </p>
          <figure className="wideStoryImage">
            <Image src={varsity} alt="The 1936 varsity crew" loading="eager" />
            <figcaption>The crew that learned to move as one.</figcaption>
          </figure>
          <p>
            In the final race on the Langer See in Berlin, with the German and
            Italian boats pulling ahead and Don Hume so sick he could barely
            hold himself upright, the American eight fell far behind. They were
            stuck in the worst lane, fighting a sharp wind from the side. But
            Bobby Moch, the clever young man steering the boat, kept his cool.
            He held his crew at a steady, easy pace while the leaders wore
            themselves out. Then, with just five hundred meters to go, he turned
            them loose. Rowing faster than they ever had before—forty-four
            strokes every minute—the eight boys found their rhythm at the very
            edge of what human bodies can bear. Joe Rantz, who had learned as a
            child to trust no one, now threw himself into every stroke with
            complete faith that the others would not let him down. The Husky
            Clipper shot past the German boat, then the Italian, and crossed the
            finish line less than a second ahead, winning gold. Hitler, watching
            from his seat, turned and walked away without a word. But for Joe
            and the others, the medal was never the real prize. What mattered
            was what they had built together: a single, living thing made of
            wood and muscle and trust—a boat that had carried them past pain and
            into a moment of beauty none of them would ever forget.
          </p>
        </article>
      </section>

      <div>
        <h2 className="galleryTitle">The story gallery</h2>
        <section className="storyGallery" aria-label="Images from the story">
          {storyMoments.map((moment) => (
            <figure key={moment.label}>
              <Image src={moment.image} alt={moment.label} loading="eager" />
              <figcaption>{moment.label}</figcaption>
            </figure>
          ))}
        </section>
      </div>

      <section className="closingPanel">
        <Image
          src={reunion}
          alt="The 1956 reunion row"
          fill
          className="fullBleedImage"
        />
        <div className="closingOverlay" />
        <div>
          <p className="sectionKicker">Closing Thought</p>
          <h2>One boat. One rhythm. One unforgettable finish.</h2>
          <p>
            Presented by the team, and carried by a story that proves sport is
            at its best when people stop moving alone.
          </p>
        </div>
      </section>
    </main>
  );
}
