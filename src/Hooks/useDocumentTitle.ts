import { useRef, useEffect } from "react";

const titlePrefix = "DriveForce";

function useDocumentTitle(title: string, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    if (title) {
      document.title = titlePrefix + " | " + title;
    }
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    [prevailOnUnmount]
  );
}

export default useDocumentTitle;
