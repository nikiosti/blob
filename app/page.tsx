import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Шашки</h1>
      <Link href="/avatar/upload">Добавить аватар</Link>
    </div>
  );
}
