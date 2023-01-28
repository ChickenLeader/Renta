import { Typography } from "@mui/material";
import { Colors } from "constants/Colors";
import { FontFamily } from "constants/FontFamily";
import { useTranslation } from "next-i18next";

const Text = ({
  mBottom,
  style,
  className,
  variant = "h5",
  dontWrap = false,
  onClickAction = () => {},
  children,
  fontFamily = FontFamily.regular,
  fontSize,
  color = "black",
  isTranslated = true,
}) => {
  const { t } = useTranslation(["common"]);

  return (
    <Typography
      color={color}
      fontSize={`var(--fs-${fontSize})` ?? "var(--fs-16)"}
      fontFamily={fontFamily}
      onClick={onClickAction}
      gutterBottom={mBottom}
      noWrap={dontWrap}
      variant={variant}
      component="div"
      style={style}
      className={className}
    >
      {isTranslated ? t(String(children)) : children ? "" : ""}
    </Typography>
  );
};

export default Text;
