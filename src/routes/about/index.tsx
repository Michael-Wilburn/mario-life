import { component$, useStyles$ } from "@builder.io/qwik";
import AboutStyles from './about.css?inline'

export default component$(() => {
    useStyles$(AboutStyles)

    console.log("Hello server!")
    return (
        <article>
            <h2>About</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat quisquam quia similique dolore perspiciatis esse nulla? Qui, ipsum eligendi, fugiat ea consequuntur harum consectetur quam delectus cum, eveniet unde.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat quisquam quia similique dolore perspiciatis esse nulla? Qui, ipsum eligendi, fugiat ea consequuntur harum consectetur quam delectus cum, eveniet unde.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quaerat quisquam quia similique dolore perspiciatis esse nulla? Qui, ipsum eligendi, fugiat ea consequuntur harum consectetur quam delectus cum, eveniet unde.
            </p>
        </article>
    )
})