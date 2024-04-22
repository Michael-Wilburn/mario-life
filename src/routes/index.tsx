import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Okie Dokie
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Mario Life",
  meta: [
    {
      name: "description",
      content: "A blog site about everything mario",
    },
  ],
  links: [
    {
      rel: 'stylesheet',
      href: 'somestylesheet.com/styles.css'
    },
  ]
};
