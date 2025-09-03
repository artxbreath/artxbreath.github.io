import "./App.css";
import SubscribeForm from "./SubscribeForm";

export const App = () => {
  return (
    <div>
      <div className="title">art x breath</div>
      <div>
        <em>
          “Between stimulus and response, there is space. In this space lies our
          freedom”
        </em>{" "}
        — Viktor Frankl
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
      <SubscribeForm />
    </div>
  );
};
