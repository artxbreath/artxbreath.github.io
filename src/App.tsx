import "./App.css";
import SubscribeForm from "./SubscribeForm";

export const App = () => {
  return (
    <div className="app">
      <div className="title">art x breath</div>
      <div>
        <em>
          “Between stimulus and response, there is space. In this space lies our
          freedom”
        </em>
        <span> — Viktor Frankl</span>
      </div>
      <div className="description">
        <p>
          art x breath is a 3-hour immersive journey into the space between
          stimulus and response - the place where creativity lives.
        </p>
        <ul>
          <li>
            We begin with a 60-minute guided active breathwork session to expand
            awareness and drop into the body, outside of the mind's constructs.
          </li>
          <li>
            After the breathwork journey, sip herbal tea, enjoy grounding
            snacks, and let whatever wants to emerge take form.
          </li>
          <li>
            From that stillness, step into a custom-curated creative space with
            art materials, atmospheric lighting, and the pulse of a live DJ set.
          </li>
        </ul>
        <p>
          The event will use a minimal amount of words. You can expect to be in
          your own space, while sharing the experience with others exploring
          their own inner landscape.
        </p>
      </div>
      <div className="hosts">
        <h2>Your hosts</h2>
        <h3>
          Jaakko Iso-Järvenpää (
          <a href="https://www.instagram.com/jaakko_ij">Instagram</a>)
        </h3>
        <p>
          Jaakko is a breathwork guide, coach, and a leader based in San
          Francisco. After decades of living in high-speed, high-performance
          environments, he discovered how life reveals itself effortlessly when
          we learn to slow down. Through active breathwork, he helps others
          reconnect with their bodies, release stored tension, and access the
          deeper intelligence within.
        </p>
        <h3>
          Brian Madden (<a href="https://www.brianbmadden.com/">website</a>)
        </h3>
        <p>
          Brian is a multi-disciplinary artist and designer living in San
          Francisco. His artwork explores a lifelong instinct to celebrate
          moments and memories through sculpture, mark making, and artifact
          collection. Brian is known for his gestural illustration style and his
          exploration of material and texture to create sculpture, furniture,
          and paintings. Bringing a relational approach to his creative
          practice, he often collaborates with clients, material experts, and
          fabricators to explore new techniques and bring imaginative concepts
          to life.
        </p>
        <h3>
          Mike Hays (<a href="https://soundcloud.com/haysmike">SoundCloud</a>)
        </h3>
        <p>
          Mike is a DJ, producer, and breathwork enthusiast based in Oakland,
          CA. He has DJed clubs, campouts, house parties, and events on Twitch
          for many years, spanning genres from techno to ambient. Mike looks
          forward to bringing his love of music together with healing work that
          has made such a difference in his life.
        </p>
      </div>
      <SubscribeForm />
    </div>
  );
};
