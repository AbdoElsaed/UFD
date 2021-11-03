import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import styles from "../styles/Header.module.css"

const Header = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  return (
    <div className={styles.imgContainer}>
      <Image
        src={mode === "dark" ? "/header-blue.png" : "/header-black.png"}
        alt="header logo"
        layout="fill"
      ></Image>
    </div>
  );
};

export default Header;
