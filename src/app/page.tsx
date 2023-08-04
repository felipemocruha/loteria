'use client';

import { useState } from "react";

import Image from 'next/image'
import styles from './page.module.css'


function generate() {
  let numbers = [];
  let len = 0;

  for (let i = 0; i < 6; i++) {
	numbers.push(Math.floor(Math.random() * 60) + 1);
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
