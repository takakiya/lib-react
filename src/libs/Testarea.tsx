import { VFC } from 'react';
import styled from 'styled-components';

type Props = {
  widrh?: number;
  maxLength?: number;
};

export const Textarea: VFC<Props> = () => {
  return <Wrapper />;
};

const Wrapper = styled.textarea``;
