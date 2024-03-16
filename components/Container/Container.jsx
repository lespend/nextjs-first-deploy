import Head from "next/head";
import Link from "../Link/Link";

const Container = ({ children }) => {
  return (
    <>
      <Head>
        <meta keywords="lespend blog, nextjs"/>
        <title>Lespend Next.js</title>
      </Head>
      <div>
        <Link href="/">Главная</Link>
        <Link href="/users">Пользователи</Link>
      </div>
      {children}
    </>
  );
};

export default Container;
