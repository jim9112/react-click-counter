import { useState } from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
display: grid;
justify-content: center;
align-content: center;
align-items: center;
height: 100vh;
}
`;

const Counter = () => {
  const [clicks, setClicks] = useState(0);
  return (
    <StyledCounter>
      <h2>Number of clicks: {clicks} </h2>
      <button type="button" onClick={() => setClicks(clicks + 1)}>
        Click Me
      </button>
    </StyledCounter>
  );
};

export default Counter;
