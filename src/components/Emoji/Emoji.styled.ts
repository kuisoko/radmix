import styled from 'styled-components';

export type StyledEmojiProps = {
    size?: string;
};

export const StyledEmoji = styled.span<StyledEmojiProps>`
  display: inline-block;
  width: ${({ size }) => size || "60px"};
  height: ${({ size }) => size || "60px"};
  vertical-align: -0.125em;
`;
