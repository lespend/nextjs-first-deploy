import NextLink from "next/link";
import styles from "./Link.module.scss";

const Link = ({ children, href }) => {
  return (
    <NextLink href={href} className={styles.link}>
      {children}
    </NextLink>
  );
}
 
export default Link;