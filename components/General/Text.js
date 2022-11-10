import { Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import { Colors } from "constants/Colors";
import { FontFamily } from "constants/FontFamily";
import { useTranslation } from "next-i18next";

const Text = ({
    mBottom,
    style,
    className,
    variant = 'h5',
    dontWrap = false,
    onClickAction = () => { },
    children,
    fontFamily = FontFamily.regular,
    fontSize = 12,
    color = Colors.primary,
    isTranslated = true
}) => {
    const { t } = useTranslation(["common"]);

    return (
        <Typography
            color={color}
            fontSize={`'var(--fs-${fontSize})'`}
            fontFamily={fontFamily}
            onClick={onClickAction}
            gutterBottom={mBottom}
            noWrap={dontWrap}
            variant={variant}
            component="div"
            style={style}
            className={className}
        >
            {isTranslated ?
                t(String(children))
                :
                children
            }
        </Typography>
    );
}

export default Text

