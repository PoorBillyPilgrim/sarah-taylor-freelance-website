import Quote from "./Quote";

const quotes = [
  {
    id: 1,
    avatar: undefined,
    alt: "",
    bg: "white",
    quote: '"My website improved so much after Sarah worked her magic"',
    author: "Tyler Jones",
    title: "Software Engineer, Lyrarsis",
  },
  {
    id: 2,
    avatar: undefined,
    alt: "",
    bg: "green.9",
    quote: '"My website improved so much after Sarah worked her magic"',
    author: "Tyler Jones",
    title: "Software Engineer, Lyrarsis",
  },
  {
    id: 3,
    avatar: undefined,
    alt: "",
    bg: "white",
    quote: '"My website improved so much after Sarah worked her magic"',
    author: "Tyler Jones",
    title: "Software Engineer, Lyrarsis",
  },
];

const Quotes = () => {
  return quotes.map(quote => <Quote key={quote.id} {...quote} />);
};

export default Quotes;
