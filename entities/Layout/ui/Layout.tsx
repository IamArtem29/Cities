import { LayoutProps } from '../model/LayoutProps';
import styles from './Layout.module.css';

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return <div className={styles.layout}>{children}</div>;
};
