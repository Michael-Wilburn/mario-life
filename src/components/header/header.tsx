import { component$, useStyles$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import styles from './header.css?inline';
import ImgMarioBlock from '../../../public/mario_block.jpeg?jsx'

export default component$(() => {
    useStyles$(styles);

    return (
        <header>
            <nav>
                <ImgMarioBlock alt='logo' />
                <h1>Mario Life</h1>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
});