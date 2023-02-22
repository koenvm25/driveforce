export const Twitter = () => {
  return (
    <>
      <a
        className="twitter-timeline"
        href="https://twitter.com/F1?ref_src=twsrc%5Etfw"
      >
        Tweets by F1
      </a>{" "}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </>
  );
};
