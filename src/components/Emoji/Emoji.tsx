import { memo } from "react";
import twemoji from "twemoji";
import { StyledEmoji } from "./Emoji.styled";

export interface IEmoji {
  symbol: string;
  size?: string;
}

export const useEmoji = (symbol: string, size: string) => (
  <StyledEmoji
    size={size}
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(symbol, {
        folder: "svg",
        ext: ".svg",
      }),
    }}
  />
);

const Emoji = ({ symbol, size }: IEmoji) => {
  return useEmoji(symbol, size);
};

export default memo(Emoji);
