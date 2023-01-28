import styled from "styled-components";

export type PanelProps = {
  children: React.ReactNode;
  className?: string;
  header?: string;
  key?: string;
};

export const StyledPanel = styled.div`
    background-color: ${props => props.theme.colors.background}
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    width: 100%;
`;

const Panel = ({ children, className, ...rest }: PanelProps) => {
  return (
    <Panel className={className} {...rest}>
      {children}
    </Panel>
  );
};

export default Panel;
