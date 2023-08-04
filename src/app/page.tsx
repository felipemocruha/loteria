'use client';

import { useState } from "react";

import Image from 'next/image'
import styles from './page.module.css'

function getRandom(min, max) {
    let range = max - min;
    let bits_needed = Math.ceil(Math.log2(range + 1));
    let bytes_needed = Math.ceil(bits_needed / 8);
    let max_number = Math.pow(2, bits_needed);

    let array = new Uint8Array(bytes_needed);

    do {
        window.crypto.getRandomValues(array);
        var result = 0;
        for (let i = 0; i < bytes_needed; i++) {
            result = (result << 8) + array[i];
        }
    } while (result > max_number - max_number % (range + 1));

    return result % (range + 1) + min;
}

function generate() {
  let numbers = [];
  let len = 0;

  for (let i = 0; i < 6; i++) {
	numbers.push(getRandom(1, 60));
  }

  return numbers.sort((a,b) => a - b).join(" ");
}

export default function Home() {
  const [numbers, setNumbers] = useState("");

  return (
    <main className={styles.main}>
	  <div className={styles.container}>
		<button
		  className={styles.button}
		  onClick={() => setNumbers(generate())}
		>
		  Gerar
		</button>

		<br/>

		<h1> {numbers} </h1>
	  </div>
	</main>
  )
}
