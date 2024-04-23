import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from './contact.css?inline'

export default component$(() => {
    useStylesScoped$(ContactStyles)
    return (
        <article>
            <h2>Contact</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat quisquam quia similique dolore perspiciatis esse nulla? Qui, ipsum eligendi, fugiat ea consequuntur harum consectetur quam delectus cum, eveniet unde.
            </p>
        </article>
    )
})